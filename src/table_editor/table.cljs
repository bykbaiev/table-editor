(ns table-editor.table
  (:require
   [table-editor.state :refer [state]]))

(defn table-row [row key header?]
  (let [fst (row 0) snd (row 1)]
    [:div.table-row {:key key :class (when header? "table-header")}
     [:div.table-cell fst]
     [:div.table-cell snd]]))

(defn row-hash [[category value]]
  (+ category value))

(defn table []
  [:div.table
   (let [rows (:data @state)]
     (when rows
       (for [index (range (count rows))]
         (let [row (rows index)]
           [table-row row (row-hash row) (== index 0)]))))])
