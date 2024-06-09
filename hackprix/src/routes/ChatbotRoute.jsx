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

  const apiKey = "AIzaSyDLb71e8h_QkDf1L92AovSxWKxP5NJTDi4";
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
      {text: "What is compound interest and how does it work?"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "Compound interest is the interest calculated on the initial principal and also on the accumulated interest from previous periods. It allows the investment to grow exponentially over time. Would you like an example to understand it better?"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "Why is it important to have a budget?"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "Having a budget is important because it helps you track your income and expenses, set financial goals, and prioritize your spending. Would you like tips on creating a budget?"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "What are the differences between a checking account and a savings account?"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "A checking account is for everyday transactions, like paying bills and making purchases. A savings account is for storing money and earning interest. Want to know which might be better for you?"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "How does credit card interest accrue?"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "Credit card interest accrues daily on your outstanding balance. It's important to pay off your balance each month to avoid high interest charges. Need tips on managing credit card debt?"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "What are the advantages and disadvantages of using credit cards?"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "Advantages include convenience, building credit, and rewards. Disadvantages include the potential for debt and high-interest rates. Interested in how to use credit cards wisely?"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "What is the difference between a debit card and a credit card?"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "A debit card withdraws money directly from your bank account, while a credit card borrows money that you must pay back later. Want to learn more about the benefits and risks of each?"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "How can you improve your credit score?"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "You can improve your credit score by paying bills on time, reducing debt, and checking your credit report for errors. Would you like detailed steps on improving your score?"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "What are the risks and benefits of investing in stocks?"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "Benefits include potential high returns and dividends. Risks involve market volatility and the potential for losing money. Need tips on getting started with stock investing?"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "What is diversification and why is it important in investing?"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "Diversification means spreading your investments across various assets to reduce risk. It's important because it helps protect your portfolio from market volatility. Want to know how to diversify your investments?"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "How do mutual funds work?"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "Mutual funds pool money from many investors to buy a diversified portfolio of stocks, bonds, or other securities. Professional managers oversee the fund. Interested in the benefits of mutual funds?"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "What is the difference between a traditional IRA and a Roth IRA?"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "A traditional IRA offers tax-deductible contributions and taxes withdrawals in retirement. A Roth IRA uses after-tax contributions, and withdrawals are tax-free. Need help deciding which is better for you?"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "How does inflation affect purchasing power?"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "Inflation reduces purchasing power by increasing prices over time, meaning your money buys less. Want tips on protecting your investments from inflation?"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "What are the advantages and disadvantages of leasing a car versus buying a car?"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "Leasing a car often has lower monthly payments but you don't own the car. Buying a car costs more upfront but you own it and can sell it later. Need help deciding which option is right for you?"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "What is the difference between a fixed-rate mortgage and an adjustable-rate mortgage?"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "A fixed-rate mortgage has the same interest rate for the entire loan term, while an adjustable-rate mortgage has a variable rate that can change. Want to explore which might be better for you?"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "How does refinancing a mortgage work?"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "Refinancing involves replacing your current mortgage with a new one, usually to get a lower interest rate or change the loan term. Interested in knowing when it's a good idea to refinance?"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "What are the steps involved in buying a house?"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "Steps include saving for a down payment, getting pre-approved for a mortgage, finding a home, making an offer, getting a home inspection, and closing the deal. Need detailed guidance on any of these steps?"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "How does student loan interest accrue?"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "Student loan interest accrues daily based on the loan's interest rate and current balance. It's added to your loan balance if unpaid. Want strategies to manage student loan debt?"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "What is the difference between subsidized and unsubsidized student loans?"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "Subsidized loans do not accrue interest while you're in school, while unsubsidized loans do. Would you like advice on which type of loan to choose?"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "How can you avoid falling into debt?"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "To avoid debt, create a budget, live within your means, save for emergencies, and avoid unnecessary expenses. Want more tips on managing your finances?"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "What are the potential consequences of defaulting on a loan?"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "Defaulting on a loan can damage your credit score, lead to legal action, and result in wage garnishment. Need help managing your loans to avoid default?"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "What is the importance of an emergency fund?"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "An emergency fund provides financial security by covering unexpected expenses like medical bills or car repairs. It helps you avoid debt. Need tips on how to build an emergency fund?"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "How much should you aim to save for retirement?"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "A common goal is to save enough to replace 70-80% of your pre-retirement income. This varies based on lifestyle and expenses. Want help calculating your specific retirement needs?"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "What are some common retirement savings vehicles?"},
    ],
  },
],
})

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
          <h1>Ask Your Queries!</h1>
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
                placeholder="Ask your financial Query..."
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
