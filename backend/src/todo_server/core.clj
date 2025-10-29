(ns todo-server.core
  (:require
    [ring.adapter.jetty :refer [run-jetty]]
    [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
    [ring.middleware.cors :refer [wrap-cors]]
    [compojure.core :refer [defroutes GET POST PUT DELETE]]
    [compojure.route :as route]
    [datahike.api :as d]
    [clojure.walk :refer [keywordize-keys]]))


(def cfg {:store {:backend :file :path "./data/todo-db"}
          :schema-flexibility :read
          :keep-history? true})

(when-not (d/database-exists? cfg)
  (d/create-database cfg))

(def conn (d/connect cfg))

(defn new-uuid-str [] (str (random-uuid)))

;; 🔧 Corrige tarefas antigas sem :task/id
(defn ensure-ids! []
  (let [db (d/db conn)
        eids (d/q '[:find [?e ...]
                    :where [?e :task/title]
                           (not [?e :task/id _])]
                  db)]
    (doseq [e eids]
      (d/transact conn {:tx-data [[:db/add e :task/id (new-uuid-str)]]})))
  (println "✅ IDs verificados e corrigidos, se necessário."))

(ensure-ids!)


(defn add-task! [title]
  (d/transact conn [{:task/id (new-uuid-str)
                     :task/title title
                     :task/done false}]))

(defn all-tasks []
  (map #(d/pull (d/db conn) '[:task/id :task/title :task/done] %)
       (d/q '[:find [?e ...] :where [?e :task/title]] (d/db conn))))

(defn toggle-task! [id]
  (when-let [e (ffirst (d/q '[:find ?e :in $ ?id :where [?e :task/id ?id]]
                            (d/db conn) id))]
    (let [task (d/pull (d/db conn) '[:task/done] e)
          new-done (not (:task/done task))]
      (d/transact conn [[:db/add e :task/done new-done]]))))

(defn edit-task-title! [id new-title]
  (when-let [e (ffirst (d/q '[:find ?e :in $ ?id :where [?e :task/id ?id]]
                            (d/db conn) id))]
    (d/transact conn [[:db/add e :task/title new-title]])))

(defn delete-task! [id]
  (when-let [e (ffirst (d/q '[:find ?e :in $ ?id :where [?e :task/id ?id]]
                            (d/db conn) id))]
    (d/transact conn [[:db/retractEntity e]])))



(defroutes routes
  (GET "/tasks" []
    {:status 200
     :body (all-tasks)})

  (POST "/tasks" req
    (let [title (get-in req [:body "title"])]
      (add-task! title)
      {:status 201 :body {:message "Task added"}}))

  (PUT "/tasks/:id" [id :as req]
    (let [body (:body req)
          title (get body "title")]
      (if title
        (do (edit-task-title! id title)
            {:status 200 :body {:message "Task title updated"}})
        (do (toggle-task! id)
            {:status 200 :body {:message "Task toggled"}}))))

  (DELETE "/tasks/:id" [id]
    (delete-task! id)
    {:status 200 :body {:message "Task deleted"}})

  (route/not-found {:status 404 :body {:error "Not found"}}))



(def handler
  (-> routes
      (wrap-json-body {:keywords? false})
      (wrap-json-response)
      (wrap-cors
        :access-control-allow-origin [#"http://localhost:8080"]
        :access-control-allow-methods [:get :post :put :delete])))

(defn -main []
  (println "✅ IDs verificados e corrigidos, se necessário.")
  (println "🚀 Servidor iniciado em http://localhost:3000")
  (run-jetty handler {:port 3000 :join? false}))
