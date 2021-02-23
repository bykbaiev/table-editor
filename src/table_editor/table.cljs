(ns table-editor.table
  (:require
   [table-editor.state :refer [state]]))

(defn table-row [row header?]
  (let [fst (row 0) snd (row 1)]
    [:div.table-row {:class (when header? "table-header")}
     [:div.table-cell fst]
     [:div.table-cell snd]]))

(defn row-hash [[category value]]
  (+ category value))

(defn table []
  (let [{:keys [data sum average]} @state]
    [:div.content
     [:div.aggregations
      (when data
        [:div.aggregation (concat "Sum: " (str sum))])
      (when data
        [:div.aggregation (concat "Average: " (str average))])]
     (when data
       [:div.table
        (for [index (range (count data))]
          (let [row (data index)]
            ^{:key (row-hash row)} [table-row row (== index 0)]))])]))
