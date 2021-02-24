(ns table-editor.utils)

(defn non-number [value]
  (js/isNaN (js/parseFloat value)))
