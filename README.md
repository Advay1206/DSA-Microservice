# DSA Microservice API ⚡

![Node.js CI](https://github.com/Advay1206/DSA-Microservice/actions/workflows/ci.yml/badge.svg)

## 📌 Overview

A lightweight Express API that exposes classic Data Structure & Algorithm solutions as endpoints.  
Built for showcasing software engineering skills.

## 🚀 Endpoints

- **POST /valid-parentheses**

  - Input: `{ "s": "([{}])" }`
  - Output: `{ "valid": true }`

- **POST /lru-cache**
  - Input: `{ "capacity": 2, "operations": [["put",1,1],["put",2,2],["get",1]] }`
  - Output: `{ "results": [null, null, 1] }`

## 🛠️ Tech Stack

- Node.js + Express
- Jest + Supertest (for testing)

## ▶️ Run Locally

```bash
npm install
node server.js
```

For development:

npx nodemon server.js

Run tests:

npm test

🌍 Deployment

Planned deployment: Render / Replit

---

## 🏃 Next Steps for You Tonight

1. Clone the repo ✅ (you already did).
2. Copy these files into place.
3. Run:
   ```bash
   npm init -y
   npm install express
   npm install --save-dev jest supertest nodemon
   ```

Test locally:

node server.js

Visit http://localhost:3000
