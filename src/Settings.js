import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { useState } from "react";


function Settings() {

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  const [state, setState] = useState('')
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };
  

  return (
    <div className="flex flex-col h-screen">
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
                      <div className="form-control">
                        <label className="label cursor-pointer gap-4">
                          <span className="label-text">Default</span>
                          <input
                            type="radio"
                            name="theme-radios"
                            className="radio theme-controller"
                            value="default"
                            data-set-theme="default"
                          />
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer gap-4">
                          <span className="label-text">Retro</span>
                          <input
                            type="radio"
                            name="theme-radios"
                            className="radio theme-controller"
                            value="retro"
                            data-set-theme="retro"
                          />
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer gap-4">
                          <span className="label-text">Cyberpunk</span>
                          <input
                            type="radio"
                            name="theme-radios"
                            className="radio theme-controller"
                            value="cyberpunk"
                            data-set-theme="cyberpunk"
                          />
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer gap-4">
                          <span className="label-text">Valentine</span>
                          <input
                            type="radio"
                            name="theme-radios"
                            className="radio theme-controller"
                            value="valentine"
                            data-set-theme="valentine"
                          />
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer gap-4">
                          <span className="label-text">Aqua</span>
                          <input
                            type="radio"
                            name="theme-radios"
                            className="radio theme-controller"
                            value="aqua"
                            data-set-theme="aqua"
                          />
                        </label>
                      </div>
                    </p>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </a>
            </li>
            <li>
              <a>Item</a>
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
    </div>
  );
}

export default Settings;
