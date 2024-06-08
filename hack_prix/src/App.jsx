import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomeRoute from "./routes/HomeRoute";
import BlogsRoute from "./routes/BlogsRoute";
import TrendsRoute from "./routes/TrendsRoute";
import ChatbotRoute from "./routes/ChatbotRoute";
import ToolsRoute from "./routes/ToolsRoute";
import ToolDetail from "./components/ToolsComponents/ToolDetail";
import BlogDetail from "./components/BlogComponents/BlogDetail";
// import 'remixicon/fonts/remixicon.css';

function App() {
  return (
    <div className="hi">
      <Routes>
        <Route path="/" element={<HomeRoute />}></Route>
        <Route path="/home" element={<HomeRoute />}></Route>
        <Route path="/blogs" element={<BlogsRoute />}></Route>
        <Route path="/chatbot" element={<ChatbotRoute />}></Route>
        <Route path="/trends" element={<TrendsRoute />}></Route>
        <Route path="/tools" element={<ToolsRoute />}></Route>
        <Route path="/tools/:toolId" element={<ToolDetail />} />
        <Route path="/blogs/:blogId" element={<BlogDetail />} />
      </Routes>
    </div>
  );
}

export default App;
