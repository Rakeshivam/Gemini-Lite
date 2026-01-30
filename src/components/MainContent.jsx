// import { useContext } from "react"
// import {
//   FaCode,
//   FaCompass,
//   FaLightbulb,
//   FaMicrophone,
//   FaUserCircle,
// } from "react-icons/fa"
// import { FaMessage } from "react-icons/fa6"
// import { MdAddPhotoAlternate } from "react-icons/md"
// import { IoMdSend } from "react-icons/io"
// import { Context } from "../context/Context"
// import geminiLogo from "../assets/geminiLogo.png"

// const MainContent = () => {
//   const {
//     input,
//     setInput,
//     recentPrompt,
//     showResult,
//     loading,
//     resultData,
//     onSent,
//   } = useContext(Context)

//   return (
//     <div className="flex-1 min-h-screen pb-[15vh] relative">
//       <div className="flex items-center justify-between text-xl p-5 text-slate-700">
//         <p>Gemini Lite</p>
//         <FaUserCircle />
//       </div>

//       <div className="max-w-[900px] mx-auto">
//         {!showResult ? (
//           <>
//             <div className="my-12 text-[56px] text-slate-500 font-semibold p-5">
//               <p>
//                 <span className="bg-gradient-to-r from-[#368ddd] to-[#ff5546] bg-clip-text text-transparent">
//                   Hello, Arya.
//                 </span>
//               </p>

//               <p className="text-slate-400">How can I help you today?</p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
//               <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
//                 <p className="text-slate-700 text-lg">
//                   Suggeset top 10 webseries.
//                 </p>

//                 <FaCompass className="text-4xl p-1 absolute bottom-2 right-2" />
//               </div>

//               <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
//                 <p className="text-slate-700 text-lg">
//                   What is loop in Javascript?
//                 </p>

//                 <FaLightbulb className="text-4xl p-1 absolute bottom-2 right-2" />
//               </div>

//               <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
//                 <p className="text-slate-700 text-lg">
//                   Who is known as the Mother of Dragons?
//                 </p>

//                 <FaMessage className="text-4xl p-1 absolute bottom-2 right-2" />
//               </div>

//               <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
//                 <p className="text-slate-700 text-lg">
//                   Who sits on the Iron Throne at the end of the series?
//                 </p>

//                 <FaCode className="text-4xl p-1 absolute bottom-2 right-2" />
//               </div>
//             </div>
//           </>
//         ) : (
//           <div className="py-0 px-[5%] max-h-[70vh] overflow-y-scroll scrollbar-hidden">
//             <div className="my-10 mx-0 flex items-center gap-5">
//               <FaUserCircle className="text-3xl" />

//               <p className="text-lg font-[400] leading-[1.8]">{recentPrompt}</p>
//             </div>

//             <div className="flex items-start gap-5">
//               <img src={geminiLogo} alt="" className="w-8 rounded-[50%]" />

//               {loading ? (
//                 <div className="w-full flex flex-col gap-2">
//                   <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffffff] to-[#81cafe] p-4 animate-scroll-bg" />

//                   <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffffff] to-[#81cafe] p-4 animate-scroll-bg" />

//                   <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffffff] to-[#81cafe] p-4 animate-scroll-bg" />
//                 </div>
//               ) : (
//                 <p
//                   dangerouslySetInnerHTML={{ __html: resultData }}
//                   className="text-lg font-[400] leading-[1.8]"
//                 ></p>
//               )}
//             </div>
//           </div>
//         )}

//         <div className="absolute bottom-0 w-full max-w-[900px] px-5 mx-auto mt-5">
//           <div className="flex items-center justify-between gap-20 bg-gray-200 py-2 px-5 rounded-full">
//             <input
//               type="text"
//               placeholder="Enter a prompt here..."
//               className="flex-1 bg-transparent border-none outline-none p-2 text-lg"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//             />

//             <div className="flex gap-4 items-center">
//               <MdAddPhotoAlternate className="text-2xl cursor-pointer" />
//               <FaMicrophone className="text-2xl cursor-pointer" />
//               {input && (
//                 <IoMdSend
//                   onClick={() => onSent()}
//                   className="text-2xl cursor-pointer"
//                 />
//               )}
//             </div>
//           </div>

//           <p className="text-sm my-4 mx-auto text-center font-[500] text-slate-600">
//             Gemini may display inaccurate info, including about people, so
//             double-check its responses.
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default MainContent

import { useContext } from "react"
import {
  FaCode,
  FaCompass,
  FaLightbulb,
  FaMicrophone,
  FaUserCircle,
} from "react-icons/fa"
import { FaMessage } from "react-icons/fa6"
import { MdAddPhotoAlternate } from "react-icons/md"
import { IoMdSend } from "react-icons/io"
import { Context } from "../context/Context"
import geminiLogo from "../assets/geminiLogo.png"

const MainContent = () => {
  const {
    input,
    setInput,
    recentPrompt,
    showResult,
    loading,
    resultData,
    onSent,
  } = useContext(Context)

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
      <div className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-[#f7f9fc] to-transparent pt-6">
        <div className="max-w-[900px] mx-auto px-5">
          <div className="flex items-center gap-4 bg-white py-3 px-6 rounded-full shadow-lg border">
            <input
              type="text"
              placeholder="Enter a prompt here..."
              className="flex-1 bg-transparent outline-none text-lg text-slate-700 placeholder:text-slate-400"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <MdAddPhotoAlternate className="text-xl cursor-pointer text-slate-500 hover:text-slate-700 transition" />
            <FaMicrophone className="text-xl cursor-pointer text-slate-500 hover:text-slate-700 transition" />

            {input && (
              <IoMdSend
                onClick={() => onSent()}
                className="text-xl cursor-pointer text-blue-600 hover:text-blue-700 transition"
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
  )
}

export default MainContent
