(ns table-editor.core
  (:require
   [reagent.dom :as d]
   [table-editor.table :refer [table]]
   [table-editor.file-loader :refer [file-loader]]
   [table-editor.state :refer [state]]))

;; -------------------------
;; Views

(defn message []
  (let [{:keys [file-name err-msg]} @state]
    [:div.status-msg
     (when err-msg
       [:div.status-error err-msg])
     (when (and (nil? err-msg) file-name)
       [:div.status-success (concat "File " file-name " is successfully loaded")])]))

(defn home-page []
  [:div
   [:h2 "Table editor"]
   [file-loader]
   [message]
   [table]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
