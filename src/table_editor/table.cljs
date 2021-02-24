(ns table-editor.table
  (:require
   [cljs.core.async :refer [put!]]
   [table-editor.state :refer [state]]
   [table-editor.channels :refer [table-updated]]
   [table-editor.utils :refer [non-number]]))

(defn table-row [row on-change header?]
  (let [fst (row 0) snd (row 1)
        get-value #(-> % .-target .-value)]
    [:div.table-row
     [:input.table-cell {:class (when header? "table-cell-header") :value fst :on-change #(on-change 0 (get-value %))}]
     [:input.table-cell {:class (when header? "table-cell-header") :value snd :on-change #(on-change 1 (get-value %))}]]))

(defn on-change [content row column value]
  (when (and (non-number value) (== column 0))
    (put! table-updated (assoc-in content [row column] value)))
  (when (== column 1)
    (let [numb (js/parseFloat value)]
      (put! table-updated (assoc-in content [row column] (if (js/isNaN numb) "0" (str numb)))))))

(defn table []
  (let [{:keys [data sum average]} @state]
    (when data
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
              ^{:key (str index)} [table-row row #(on-change data index %1 %2) (== index 0)]))])])))
