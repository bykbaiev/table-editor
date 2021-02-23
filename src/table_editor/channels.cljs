(ns table-editor.channels
  (:require
   [cljs.core.async :refer [chan put! <!]]
   [table-editor.state :refer [state]]
   [goog.labs.format.csv :as csv])
  (:require-macros
   [cljs.core.async.macros :refer [go-loop]]))

(def large-file-size 10000) ;; 10KB

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

;; -------------------------
;; Loops

(go-loop [file (<! file-uploaded)]
  (let [file-reader (js/FileReader.)
        size (.-size file)]
    (if (> size large-file-size)
      (reset! state {:err-msg (concat "File is too large! Max possible size is " (str large-file-size))})
      (do
        (reset! state {:file-name (.-name file) :err-msg nil})
        (set! (.-onload file-reader) #(put! file-read %))
        (.readAsText file-reader file)))
    (recur (<! file-uploaded))))

(go-loop []
  (swap! state assoc :data (<! file-read))
  (recur))
