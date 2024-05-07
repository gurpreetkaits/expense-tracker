import React from "react";
import { Link, NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="container flex flex-col z-0">
        <aside
          className="group/sidebar flex flex-col shrink-0 lg:w-[300px] w-[250px] transition-all duration-300 ease-in-out m-0 z-40 inset-y-0 left-0 sidenav fixed-start loopple-fixed-start ms-4"
          id="sidenav-main"
        >
          <div className="relative pl-2 ms-3">
            <div className="flex flex-col w-48">
              <div>
                <span className="select-none flex items-center cursor-pointer  my-1 ">
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      `${
                        isActive ? "bg-gray-100 " : ""
                      } flex items-center flex-grow text-sm hover:bg-gray-100 px-1 py-1 transition-all ease-in-out duration-600 rounded-md`
                    }
                  >
                    <span className="sidebarIcons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                    </span>
                    Dashboard
                  </NavLink>
                </span>
              </div>
              <div>
                <span className="select-none flex items-center cursor-pointer  my-1 ">
                  <NavLink
                    to="/expenses"
                     className={({ isActive }) =>
                      `${
                        isActive ? "bg-gray-100 " : ""
                      } flex items-center flex-grow text-sm hover:bg-gray-100 px-1 py-1 transition-all ease-in-out duration-600 rounded-md`
                    }
                  >
                    <span className="sidebarIcons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </span>
                    Expeses
                  </NavLink>
                </span>
              </div>
              <div>
                <span className="select-none flex items-center cursor-pointer  my-1 ">
                  <NavLink
                    to="/tags"
                     className={({ isActive }) =>
                      `${
                        isActive ? "bg-gray-100 " : ""
                      } flex items-center flex-grow text-sm hover:bg-gray-100 px-1 py-1 transition-all ease-in-out duration-600 rounded-md`
                    }
                  >
                    <span className="sidebarIcons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 6h.008v.008H6V6Z"
                        />
                      </svg>
                    </span>
                    Tags
                  </NavLink>
                </span>
              </div>
              <div>
                <span className="select-none flex items-center cursor-pointer  my-1 ">
                  <NavLink
                    to="/reports"
                     className={({ isActive }) =>
                      `${
                        isActive ? "bg-gray-100 " : ""
                      } flex items-center flex-grow text-sm hover:bg-gray-100 px-1 py-1 transition-all ease-in-out duration-600 rounded-md`
                    }
                  >
                    <span className="sidebarIcons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                        />
                      </svg>
                    </span>
                    Reports
                  </NavLink>
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
