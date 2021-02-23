(ns table-editor.core
  (:require
   [reagent.dom :as d]
   [table-editor.table :refer [table]]
   [table-editor.file-loader :refer [file-loader]]
   [table-editor.state :refer [state]]))

;; -------------------------
;; Views

(defn home-page []
  (let [file-name (:file-name @state)
        content (:data @state)
        error-message (:err-msg @state)]
    [:div
     [:h2 "Table editor"]
     [file-loader]
     (when error-message [:div.status-msg.status-error error-message])
     (when (and content file-name) [:div.status-msg.status-success (concat "File " file-name " is successfully loaded")])
     (when content [table])]))

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
