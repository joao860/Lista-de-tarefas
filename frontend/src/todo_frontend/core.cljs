(ns todo-frontend.core
  (:require
    [reagent.core :as r]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]
    ["react-dom/client" :as ReactDOM])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(js/console.log "✅ Frontend ClojureScript iniciado!")


(defonce tasks (r/atom []))
(def api-url "http://localhost:3000/tasks")


(defn fetch-tasks []
  (go
    (let [resp (<! (http/get api-url {:with-credentials? false}))
          data (:body resp)]
      (reset! tasks data)
      (js/console.log "Tarefas carregadas:" (clj->js data)))))

(defn add-task [title]
  (when (seq title)
    (go
      (<! (http/post api-url {:json-params {:title title}
                              :with-credentials? false}))
      (fetch-tasks))))

(defn toggle-task [id]
  (go
    (<! (http/put (str api-url "/" id)
                  {:with-credentials? false}))
    (fetch-tasks)))

(defn delete-task [id]
  (go
    (<! (http/delete (str api-url "/" id)
                     {:with-credentials? false}))
    (fetch-tasks)))


(defn task-item [{:keys [task/id task/title task/done]}]
  [:li {:style {:display "flex"
                :justify-content "space-between"
                :align-items "center"
                :padding "8px 0"
                :border-bottom "1px solid #eee"}}
   [:div {:style {:display "flex" :align-items "center" :gap "8px"}}
    [:input {:type "checkbox"
             :checked done
             :on-change #(toggle-task id)}]
    [:span {:style {:text-decoration (when done "line-through")
                    :color (if done "#888" "#222")
                    :font-size "16px"}}
     title]]
   [:button {:on-click #(delete-task id)
             :style {:border "none"
                     :background "none"
                     :cursor "pointer"
                     :font-size "16px"
                     :color "#e74c3c"}}
    "🗑️"]])

(defn task-list []
  (let [new-task (r/atom "")]
    (fn []
      [:div {:style {:font-family "Inter, sans-serif"
                     :max-width "420px"
                     :margin "60px auto"
                     :padding "24px"
                     :border-radius "12px"
                     :box-shadow "0 2px 12px rgba(0,0,0,0.1)"
                     :background "#fff"}}
       [:h2 {:style {:text-align "center"
                     :margin-bottom "16px"
                     :color "#333"}}
        "📝 Lista de Tarefas"]
       (if (empty? @tasks)
         [:p {:style {:text-align "center" :color "#777"}} "Nenhuma tarefa ainda."]
         [:ul {:style {:list-style "none" :padding 0}}
          (for [t @tasks] ^{:key (:task/id t)} [task-item t])])
       [:div {:style {:display "flex" :gap "10px" :margin-top "20px"}}
        [:input {:type "text"
                 :placeholder "Nova tarefa..."
                 :value @new-task
                 :on-change #(reset! new-task (-> % .-target .-value))
                 :style {:flex 1
                         :padding "10px"
                         :border "1px solid #ccc"
                         :border-radius "8px"}}]
        [:button {:on-click #(do (add-task @new-task)
                                 (reset! new-task ""))
                  :style {:background "#3498db"
                          :color "white"
                          :border "none"
                          :border-radius "8px"
                          :padding "10px 18px"
                          :cursor "pointer"}}
         "Adicionar"]]])))


(defn init []
  (fetch-tasks)
  (let [root (.createRoot ReactDOM (js/document.getElementById "app"))]
    (.render root (r/as-element [task-list]))))
