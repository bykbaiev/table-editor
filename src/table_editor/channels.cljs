(ns table-editor.channels
  (:require
   [cljs.core.async :refer [chan put! <!]]
   [goog.labs.format.csv :as csv]
   [table-editor.state :refer [state]]
   [table-editor.utils :refer [non-number]])
  (:require-macros
   [cljs.core.async.macros :refer [go-loop]]))

(def large-file-size 10000) ;; 10KB

(defn first-correct [row]
  (and (== (count row) 2) (every? #(non-number %) row)))

(defn rest-correct [rows]
  (every? #(and (== (count %) 2) (non-number (get % 0)) (not (non-number (get % 1)))) rows))

(defn is-valid [content]
  (if (or (nil? content) (== (count content) 0))
    true
    (let [fst (first content)
          rst (rest content)]
      (and (first-correct fst) (rest-correct rst)))))

;; -------------------------
;; Transducers

(defn get-first [e]
  (-> e .-target .-files (aget 0)))

(defn extract-result [content]
  (-> content .-target .-result csv/parse js->clj))

;; -------------------------
;; Channels

(def file-uploaded (chan 1 (map get-first)))

(def file-read (chan 1 (map extract-result)))

(def table-updated (chan 1))

;; -------------------------
;; Loops

(go-loop [file (<! file-uploaded)]
  (let [file-reader (js/FileReader.)
        size (.-size file)]
    (if (> size large-file-size)
      (reset! state {:err-msg (concat "File is too large! Max possible size is " (str large-file-size) " (" (str (/ large-file-size 1000)) " KB)")})
      (do
        (reset! state {:file-name (.-name file) :err-msg nil})
        (set! (.-onload file-reader) #(put! file-read %))
        (.readAsText file-reader file)))
    (recur (<! file-uploaded))))

(go-loop [content (<! file-read)]
  (do
    (if (is-valid content)
      (put! table-updated content)
      (reset! state {:err-msg "Invalid format: there should be 2 columns, first with names and second one with numbers"}))
    (recur (<! file-read))))

(go-loop [content (<! table-updated)]
  (let [nums (map #(js/parseFloat (% 1)) (rest content))
        sum (reduce + 0 nums)
        average (/ sum (count nums))]
    (swap! state assoc :data content)
    (swap! state assoc :average average)
    (swap! state assoc :sum sum)
    (recur (<! table-updated))))
