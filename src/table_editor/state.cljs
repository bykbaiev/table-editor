(ns table-editor.state
  (:require
   [reagent.core :as r]))

;; -------------------------
;; Model

(defonce state (r/atom {:file-name nil :data nil :err-msg nil :sum nil :average nil}))
