# 🤖 BrainyBot - Smart Academic Research Assistant (MERN Stack + Gemini API) 📚

## 🚀 Project Description

BrainyBot is a full-stack web app that helps students and researchers ✨ easily search, summarize, and organize academic papers. Powered by Google’s Gemini API and built with the MERN stack (MongoDB, Express, React, Node.js), BrainyBot automates research tasks, gives reliable citations, and delivers structured, user-friendly answers to make academic research simple and fast.

---

## 📝 How BrainyBot Covers Key Topics

### 1️⃣ System Prompt & User Prompt  
- The backend uses a thoughtful **system prompt** to set BrainyBot’s academic expertise, ethics, and style.
- User searches from the frontend are treated as **user prompts** for tailored, helpful answers.

### 2️⃣ Tuning Parameters  
- In the React UI, users can tweak:
  - 🌡️ Creativity level (Gemini temperature)
  - 🔢 Number of sources
  - 📏 Summary length & detail

### 3️⃣ Structured Output  
- BrainyBot displays results as:
  - 🗂️ Tables (with citations) in React
  - 📄 Downloadable JSON and PDF reports
  - ✂️ Copyable, organized text summaries

### 4️⃣ Function Calling  
- Node.js backend handles:
  - 📑 Fetching academic papers (arXiv, Semantic Scholar…)
  - ✍️ Summarization & citation with Gemini
  - 📤 Export (downloads, emails, etc.)

### 5️⃣ Retrieval-Augmented Generation (RAG)  
- Backend retrieves freshest papers, stores context in MongoDB, and combines Gemini’s power with real data for 🎯 accurate, well-cited responses.

---

## ✨ Features

- 🔎 Search scholarly articles and get real-time answers
- 🎛️ Instantly tweak summary detail and creativity
- 🗃️ Structured outputs: tables, JSON, PDF
- 🏷️ Always-cited, trustworthy info
- 🧠 Powered by Google Gemini API
- 🌐 Friendly React interface

---

## 🚦 Getting Started

### Prerequisites 🛠️

- Node.js and NPM
- MongoDB instance
- Gemini API Key ([Google AI Studio](https://aistudio.google.com))
- Academic API keys (optional: arXiv, Semantic Scholar)

---

### Installation 🧩

#### 1. Backend

cd backend
npm install

Add API keys/config to .env
npm start


#### 2. Frontend

cd frontend
npm install
npm start


Default ports: frontend (`localhost:3000`) and backend (`localhost:5000`).

---


## 💡 How Each Topic is Covered

| Topic                        | Implementation                             |
|------------------------------|--------------------------------------------|
| **System & User Prompts**    | Backend manages both for clarity           |
| **Tuning Parameters**        | User controls in React UI                  |
| **Structured Output**        | Tables, JSON, PDF export in frontend       |
| **Function Calling**         | Node.js backend triggers research & export |
| **RAG**                      | Combines fresh data + Gemini LLM           |

---

## 🤝 Contributing

Contributions welcome! Please open an issue or PR with your ideas 🛠️.

---

## 📜 License

MIT License — see `LICENSE`.

---

## 📧Thank You

