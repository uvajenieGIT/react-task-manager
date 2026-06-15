# 🚀 Advanced Task Manager (React)

A modern, high-performance To-Do application built with React. The project features clean architecture by separating business logic from the UI using custom React hooks.

[🔗 Live Demo on Vercel](ВСТАВЬ_СЮДА_ССЫЛКУ_ПОСЛЕ_ДЕПЛОЯ)

## ✨ Key Features

- **Full CRUD Support:** Create, Read, Update, and Delete tasks seamlessly.
- **Custom React Hook (`useTasks`):** Architectural separation of concerns. All state management and core business logic are encapsulated inside a custom hook, keeping components clean and maintainable.
- **State Persistence (LocalStorage):** Your tasks and current theme are automatically saved and synced with the browser's local storage.
- **Smart Input Validation:** Built-in client-side validation using `.trim()` to prevent users from adding blank tasks or strings containing only spaces.
- **Dynamic Task Filtering:** Instantly filter tasks by status (All, Active, Completed) with real-time category counters.
- **Dark & Light Mode:** Sleek UI theme toggle powered by CSS variables and native DOM class manipulation (`document.body.className`).

## 🛠️ Tech Stack

- **Frontend:** React (Functional Components, Hooks: `useState`, `useEffect`)
- **Language:** JavaScript (ES6+)
- **Styling:** CSS3 (CSS Variables, Flexbox, BEM-like naming)
- **Build Tool:** Vite

## 📦 Installation & Setup

1. **Clone the repository:**
```bash
   git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)