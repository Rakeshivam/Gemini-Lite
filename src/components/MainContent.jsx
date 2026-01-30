import { useContext } from "react";
import {
  FaCode,
  FaCompass,
  FaLightbulb,
  FaMicrophone,
  FaUserCircle,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdAddPhotoAlternate } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { Context } from "../context/Context";
import geminiLogo from "../assets/geminiLogo.png";

const MainContent = () => {
  const {
    input,
    setInput,
    recentPrompt,
    showResult,
    loading,
    resultData,
    onSent,
  } = useContext(Context);

  return (
    <div className="flex-1 min-h-screen pb-[140px] relative bg-[#f7f9fc]">
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur border-b text-slate-700">
        <p className="font-semibold text-lg">
          Gemini <span className="text-slate-400 font-medium">Lite</span>
        </p>
        <FaUserCircle className="text-2xl cursor-pointer hover:text-slate-900 transition" />
      </div>

      <div className="max-w-[900px] mx-auto">
        {!showResult ? (
          <>
            {/* Hero */}
            <div className="my-14 px-5 text-center sm:text-left">
              <p className="text-[42px] sm:text-[56px] font-semibold leading-tight">
                <span className="bg-gradient-to-r from-[#368ddd] to-[#ff5546] bg-clip-text text-transparent">
                  Hello, Rakesh.
                </span>
              </p>
              <p className="mt-2 text-lg sm:text-2xl text-slate-400">
                How can I help you today?
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-5">
              <div className="h-[180px] p-5 bg-white rounded-xl border shadow-sm relative cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
                <p className="text-slate-700 text-lg">
                  Suggeset top 10 webseries.
                </p>
                <FaCompass className="text-3xl absolute bottom-4 right-4 text-slate-400" />
              </div>

              <div className="h-[180px] p-5 bg-white rounded-xl border shadow-sm relative cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
                <p className="text-slate-700 text-lg">
                  What is loop in Javascript?
                </p>
                <FaLightbulb className="text-3xl absolute bottom-4 right-4 text-slate-400" />
              </div>

              <div className="h-[180px] p-5 bg-white rounded-xl border shadow-sm relative cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
                <p className="text-slate-700 text-lg">
                  Who is known as the Mother of Dragons?
                </p>
                <FaMessage className="text-3xl absolute bottom-4 right-4 text-slate-400" />
              </div>

              <div className="h-[180px] p-5 bg-white rounded-xl border shadow-sm relative cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
                <p className="text-slate-700 text-lg">
                  Who sits on the Iron Throne at the end of the series?
                </p>
                <FaCode className="text-3xl absolute bottom-4 right-4 text-slate-400" />
              </div>
            </div>
          </>
        ) : (
          /* Result Section */
          <div className="py-6 px-[5%] max-h-[65vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300">
            <div className="my-8 flex items-center gap-4">
              <FaUserCircle className="text-3xl text-slate-600" />
              <p className="text-lg text-slate-700">{recentPrompt}</p>
            </div>

            <div className="flex items-start gap-4">
              <img
                src={geminiLogo}
                alt="gemini"
                className="w-8 h-8 rounded-full"
              />

              {loading ? (
                <div className="w-full flex flex-col gap-3">
                  <hr className="h-4 rounded bg-gradient-to-r from-[#81cafe] via-white to-[#81cafe] animate-pulse" />
                  <hr className="h-4 rounded bg-gradient-to-r from-[#81cafe] via-white to-[#81cafe] animate-pulse" />
                  <hr className="h-4 rounded bg-gradient-to-r from-[#81cafe] via-white to-[#81cafe] animate-pulse" />
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{ __html: resultData }}
                  className="text-[16px] sm:text-lg leading-relaxed text-slate-700"
                />
              )}
            </div>
          </div>
        )}
      </div>

      {/* Input Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-[#f7f9fc] to-transparent pt-4">
        <div className="max-w-[900px] mx-auto px-3 sm:px-5">
          <div
            className="
      flex items-center
      gap-2 sm:gap-4
      bg-white
      py-2 sm:py-3
      px-3 sm:px-6
      rounded-full
      shadow-lg border
    "
          >
            {/* Input */}
            <input
              type="text"
              placeholder="Enter a prompt here..."
              className="
          flex-1
          min-w-0
          bg-transparent
          outline-none
          text-sm sm:text-lg
          text-slate-700
          placeholder:text-slate-400
        "
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            {/* Icons */}
            <MdAddPhotoAlternate className="text-lg sm:text-xl shrink-0 cursor-pointer text-slate-500 hover:text-slate-700" />

            <FaMicrophone className="text-lg sm:text-xl shrink-0 cursor-pointer text-slate-500 hover:text-slate-700" />

            {/* Send (always visible properly) */}
            {input && (
              <IoMdSend
                onClick={() => onSent()}
                className="
            text-lg sm:text-xl
            shrink-0
            cursor-pointer
            text-blue-600
            hover:text-blue-700
          "
              />
            )}
          </div>

          <p className="text-xs my-3 text-center text-slate-400">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
