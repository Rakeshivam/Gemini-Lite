import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 40 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
    setResultData("");
  };

  const onSent = async (prompt) => {
    if (loading) return;

    setResultData("");
    setLoading(true);
    setShowResult(true);

    let userPrompt = prompt !== undefined ? prompt : input;

    try {
      if (!userPrompt.trim()) {
        setLoading(false);
        return;
      }

      if (prompt === undefined) {
        setPrevPrompt((prev) => [...prev, input]);
      }

      setRecentPrompt(userPrompt);

      const response = await run(userPrompt);

      if (!response) {
        throw new Error("Empty response");
      }

      let responseArray = response.split("**");
      let newResponse = "";

      for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += responseArray[i];
        } else {
          newResponse += "<b>" + responseArray[i] + "</b>";
        }
      }

      let newResponse2 = newResponse.split("*").join("</br>");
      let newResponseArray = newResponse2.split(" ");

      for (let i = 0; i < newResponseArray.length; i++) {
        delayPara(i, newResponseArray[i] + " ");
      }
    } catch (error) {
      console.error("Gemini Error:", error);

      if (error?.status === 429 || error?.message?.includes("quota")) {
        setResultData(
          "Opps! You’ve reached the free usage limit for Gemini Lite.\nPlease wait a bit or try again later.",
        );
      } else {
        setResultData(
          "Something went wrong while generating the response.\nPlease try again.",
        );
      }
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResult,
    loading,
    resultData,
    onSent,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
