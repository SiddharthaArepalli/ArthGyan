# ArthGyan 🎓💰

## Introduction

ArthGyan aims to improve financial literacy among adults in India. According to a survey by the OECD, only 38% of adults in India are financially literate. ArthGyan addresses this issue by providing a comprehensive platform for financial literacy education, including various tools, blogs, trends, and a chatbot for resolving queries easily. Additionally, we are building a community to share financial knowledge.

## Features ✨

- **Educational Tools** 🛠️: Interactive tools to help users understand various financial concepts.
- **Blogs** 📝: Regularly updated blogs covering a wide range of financial topics.
- **Trends** 📈: Latest trends in the financial world to keep users informed.
- **Chatbot** 🤖: An integrated chatbot for real-time query resolution.
- **Community** 🌐: A platform for users to share knowledge and experiences.

## Tech Stack 🖥️

- **Frontend**: React ⚛️
- **Backend**: Node.js (or other back-end technology, specify if applicable) 🟢
- **Build Tool**: Vite ⚡
- **Package Management**: npm 📦

## Installation 🚀

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/ArthGyan.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd ArthGyan
    ```
3. **Install the dependencies:**
    ```bash
    npm install
    ```
4. **Start the development server:**
    ```bash
    npm run dev
    ```

## Configuration ⚙️

### Vite Configuration

The project uses Vite for the build tool. The configuration can be found in `vite.config.js`.

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
