(ns table-editor.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as d]
   [table-editor.table :as table]
   [table-editor.file-loader :as loader]))

;; -------------------------\
;; Model

(defonce state (r/atom {:file-name nil :content nil :data nil}))

;; -------------------------
;; Views

(defn home-page []
  [:div
   [:h2 "Welcome to Reagent"]
   [loader/file-loader state]
   [table/table state]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
