import { useContext, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaMessage, FaPlus, FaQuestion } from "react-icons/fa6";
import { MdHistory } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { Context } from "../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <>
      {extended && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setExtended(false)}
        />
      )}

      <div
        className={`
        fixed md:relative z-40
        h-screen
        flex flex-col justify-between
        bg-white border-r border-gray-200
        shadow-lg md:shadow-none
        transition-all duration-300
        ${extended ? "w-64" : "w-16"}
        ${extended ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        <div className="p-3 space-y-4">
          <IoMenu
            onClick={() => setExtended(!extended)}
            className="text-2xl cursor-pointer text-gray-700 hover:text-black"
          />

          <div
            onClick={() => newChat()}
            className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-gray-100 transition"
          >
            <FaPlus className="text-lg" />
            {extended && <p className="text-sm font-medium">New Chat</p>}
          </div>

          {extended && (
            <div className="space-y-2 mt-4 animate-fadeIn">
              <p className="text-xs text-gray-400 uppercase tracking-wide px-2">
                Recent
              </p>

              <div className="flex flex-col gap-1 max-h-[55vh] overflow-y-auto">
                {prevPrompt?.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => loadPrompt(item)}
                    className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100 text-sm text-gray-700 transition"
                  >
                    <FaMessage className="text-sm shrink-0" />
                    <p className="truncate">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="p-3 border-t border-gray-200 space-y-2">
          <SidebarItem icon={<FaQuestion />} text="Help" extended={extended} />
          <SidebarItem
            icon={<MdHistory />}
            text="Activity"
            extended={extended}
          />
          <SidebarItem
            icon={<IoSettings />}
            text="Settings"
            extended={extended}
          />
        </div>
      </div>
    </>
  );
};

const SidebarItem = ({ icon, text, extended }) => (
  <div className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-gray-100 transition text-gray-700">
    <span className="text-lg">{icon}</span>
    {extended && <p className="text-sm">{text}</p>}
  </div>
);

export default Sidebar;
