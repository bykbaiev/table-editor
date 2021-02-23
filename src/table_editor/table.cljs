(ns table-editor.table)

(defn table [state]
  [:div.table
   (let [rows (:data @state)]
     (when rows
       (for [row rows]
         [:div {:key (first row)}
          (first row)])))])
