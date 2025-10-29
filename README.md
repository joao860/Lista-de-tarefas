#  Lista de Tarefas — Clojure + ClojureScript + Datahike

Uma aplicação simples e colaborativa de lista de tarefas (Todo List), desenvolvida em **Clojure** (backend), **ClojureScript + Reagent** (frontend) e **Datahike** como banco de dados.  
O objetivo do projeto é demonstrar uma integração completa entre **frontend reativo** e **banco de dados orientado a entidades**.

---

##  Funcionalidades

✅ Adicionar novas tarefas  
✅ Marcar tarefas como concluídas  
✅ Editar o nome da tarefa  
✅ Excluir tarefas  
✅ Sincronização automática com o banco de dados local  
✅ Interface moderna e responsiva  

---

##  Tecnologias utilizadas

| Camada | Tecnologia | Descrição |
|:--|:--|:--|
| **Frontend** | [ClojureScript](https://clojurescript.org/) + [Reagent](https://reagent-project.github.io/) | Interface reativa e declarativa |
| **Backend** | [Clojure](https://clojure.org/) + [Ring](https://github.com/ring-clojure/ring) + [Compojure](https://github.com/weavejester/compojure) | Servidor HTTP leve e funcional |
| **Banco de Dados** | [Datahike](https://github.com/replikativ/datahike) | Banco de dados orientado a grafos, inspirado no Datomic |
| **Build Tool** | [shadow-cljs](https://shadow-cljs.github.io/docs/UsersGuide.html) | Compilador ClojureScript moderno para integração com o Node/React |

---

##  Como rodar o projeto

###  Pré-requisitos

Certifique-se de ter instalados:

- [Java 11+](https://adoptium.net/)
- [Clojure CLI tools](https://clojure.org/guides/install_clojure)
- [Node.js + npm](https://nodejs.org/)
- [shadow-cljs](https://github.com/thheller/shadow-cljs)

---

###  Backend (Clojure + Datahike)

```bash
cd backend
clj -M:run
```
O servidor iniciará em:

 http://localhost:3000

 ### Frontend (ClojureScript + Reagent)
 ```bash
cd frontend
npx shadow-cljs watch app
```
A aplicação ficará disponível em:

 http://localhost:8080
 
 ### Estrutura do projeto
 
```bash
clojure-todo/
│
├── backend/
│   ├── src/todo_server/core.clj
│   └── deps.edn
│
├── frontend/
│   ├── src/todo_frontend/core.cljs
│   ├── shadow-cljs.edn
│   └── package.json
│
└── README.md
```
 ### Arquitetura

O projeto segue uma arquitetura simples de cliente-servidor:

```bash
Frontend (Reagent)  ⇄  API REST (Ring + Compojure)  ⇄  Datahike (banco local)
```

---

### Autor

Desenvolvido por @joao860

Projeto criado com o objetivo de aprendizado e demonstração prática de Clojure Full Stack.

