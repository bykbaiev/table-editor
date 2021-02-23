(ns table-editor.file-loader
  (:require
   [goog.labs.format.csv :as csv]))

(defn file-loader [state]
  [:div
   [:input {:type "file" :on-change (fn [e]
                                      (let [file (first (array-seq (.. e -target -files)))
                                            file-reader (js/FileReader.)]
                                        (set! (.-onload file-reader)
                                              (fn [e]
                                                (let [res (-> e .-target .-result csv/parse js->clj)]
                                                  (println res)
                                                  (swap! state update :data #((constantly res) %)))))
                                        (.readAsText file-reader file)))}]
   [:div "asdf"]])

