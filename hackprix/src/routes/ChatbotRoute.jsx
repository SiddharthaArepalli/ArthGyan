import { useRef, useState } from "react";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import "../styling/ChatBot.css";
import Navbar from "../components/Navbar";

function ChatbotRoute() {
  const [history, setHistory] = useState([]);

  const apiKey = "AIzaSyCkDMO8fxkhbzVdS_mExD22bc02iOuOKak";
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  const inputRef = useRef(null);

  async function run(event) {
    event.preventDefault();
    const msg = inputRef.current.value;
    inputRef.current.value = "";

    setHistory((prevHistory) => [...prevHistory, { role: "user", text: msg }]);

    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {
              text: "for what ever i ask give answer only in financial context",
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: "Understood. Please ask your financial questions. I'll provide answers in a financial context. \n",
            },
          ],
        },
        {
          role: "user",
          parts: [{ text: "what is sip\n" }],
        },
        {
          role: "model",
          parts: [
            {
              text: "SIP stands for **Systematic Investment Plan**.  It's a method of investing in mutual funds where you invest a fixed amount of money at regular intervals, typically monthly.  \n\nHere's a breakdown of its key financial aspects:\n\n* **Regularity:** You invest a predetermined sum on a set schedule, ensuring consistent investment regardless of market fluctuations.\n* **Discipline:** SIPs promote financial discipline by forcing you to save and invest regularly.\n* **Averaging Cost:** SIPs implement the concept of rupee-cost averaging. You buy more units when prices are low and fewer units when prices are high, ultimately lowering your average cost per unit.\n* **Long-Term Growth:** SIPs are designed for long-term wealth creation, allowing you to benefit from compounding returns over time.\n\nSIPs are a popular investment strategy for individuals seeking to build a diversified portfolio and achieve long-term financial goals. \n",
            },
          ],
        },
        {
          role: "user",
          parts: [
            {
              text: "use more emojies and add humour to the output .. user should be impressed by you\n",
            },
          ],
        },
        {
          role: "model",
          parts: [{ text: "Alright" }],
        },
      ],
    });

    const result = await chatSession.sendMessage(msg);
    const answer = await result.response.text();

    setHistory((prevHistory) => [
      ...prevHistory,
      { role: "model", text: answer },
    ]);
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="chat-bot">

        <div className="chat-bot-inner">
          <div className="chat-section">
            {history.map((item, index) => (
              <div
                key={index}
                className={`chat-item ${
                  item.role === "user" ? "right-msg" : "left-msg"
                }`}
                >
                {item.text}
              </div>
            ))}
          </div>
          <div className="send-section">
            <form action="" onSubmit={run} className="">
              <input
                className="chat-inp"
                type="text"
                ref={inputRef}
                placeholder="Enter query"
                />
              <button className="send-btn" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      
                </div>
    </>
  );
}

export default ChatbotRoute;
