(ns table-editor.download-file
  (:require
   [clojure.string :refer [join replace]]
   [table-editor.state :refer [state]]))

(defn map-content [rows]
  (join "\n" (map #(join "," %) rows)))

(defn download-csv [data file-name]
  (let [blob (js/Blob. #js ["\uFEFF" (map-content data)] #js {:type "text/csv;charset=utf-8"})
        link (.createElement js/document "a")]
    (println data file-name)
    (set! (.-href link) (.createObjectURL js/URL blob))
    (.setAttribute link "download" (replace file-name #".csv" "(edited).csv"))
    (.appendChild (.-body js/document) link)
    (.click link)
    (.removeChild (.-body js/document) link)))

(defn download-button []
  (let [{:keys [data file-name]} @state
        load-file (fn [e] (download-csv data file-name))]
    (when data [:button {:on-click load-file} "Download file"])))
