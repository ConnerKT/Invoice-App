import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { useState } from "react";

function Settings() {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  const [state, setState] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="drawer lg:drawer-open flex flex-col ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>
                <button
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  Theme
                </button>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Select a theme!</h3>
                    <p className="py-4">
                      <div>
                        {themes.map((theme) => (
                          <div key={theme} className="form-control">
                            <label className="label cursor-pointer gap-4">
                              <span className="label-text">{`${theme
                                .charAt(0)
                                .toUpperCase()}${theme.slice(1)}`}</span>
                              <input
                                type="radio"
                                name="theme-radios"
                                className="radio theme-controller"
                                value={theme}
                                data-set-theme={theme}
                              />
                            </label>
                          </div>
                        ))}
                      </div>
                    </p>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>Close</button>
                  </form>
                </dialog>
              </a>
            </li>
            <li>
              <a>Delete Profile</a>
            </li>
            <button
              onClick={handleButtonClick}
              className="self-center btn btn-outline mt-auto"
            >
              Go back
            </button>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col p-20">
        <div className="chat chat-start pt"></div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
        <div className="mockup-browser border border-base-300 p-5">
          <div className="mockup-browser-toolbar">
            <div className="input border border-base-300">
              https://github.com/ConnerKT
            </div>
          </div>
          <div className="flex justify-center px-4 py-16 border-t border-base-300">
            Theme Test
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Downloads</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
