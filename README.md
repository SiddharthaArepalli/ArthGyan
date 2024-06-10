# ArthGyan 🎓💰

## Introduction

Right now, 79% of Indians are navigating their financial lives without adequate knowledge. That's like sailing through treacherous waters without a map. But what if we could change that?
We are proud to present 'ArthGyan,' a dynamic platform designed to bridge the vast financial literacy gap in India. Our mission? To transform complex financial concepts into accessible, engaging, and actionable knowledge for everyone

[![Watch the video](https://img.youtube.com/vi/J9a4KjAEESg/maxresdefault.jpg)](https://www.youtube.com/watch?v=J9a4KjAEESg)

## Features ✨

- **Educational Tools** 🛠️: Interactive tools to help users understand various financial concepts.
- **Blogs** 📝: Regularly updated blogs covering a wide range of financial topics.
- **Trends** 📈: Latest trends in the financial world to keep users informed.
- **Chatbot** 🤖: An integrated chatbot for real-time query resolution.
- **Community** 🌐: A platform for users to share knowledge and experiences.

## Tech Stack 🖥️

- **Frontend**: React ⚛️
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
