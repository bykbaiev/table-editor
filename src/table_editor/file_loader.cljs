(ns table-editor.file-loader
  (:require
   [cljs.core.async :refer [put!]]
   [table-editor.channels :refer [file-uploaded]]))


(defn file-loader []
  [:div
   [:input {:type "file" :accept ".csv" :on-change #(put! file-uploaded %)}]])
