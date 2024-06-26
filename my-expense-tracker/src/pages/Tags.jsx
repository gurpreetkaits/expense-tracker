import React, { useState } from "react";

const Tags = () => {
  const [tags, setTags] = useState([
    { id: 1, name: "Tag 1" },
    { id: 2, name: "Tag 2" },
    { id: 3, name: "Tag 3" },
  ]);

  const handleDelete = (id) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  const handleEdit = (id) => {
    // Implement your edit functionality here
  };

  return (
    <div className="container main-content border border-gray-300 px-4 py-4 rounded-md">
      <div className="pageTitle flex items-center justify-between">
        <div className="title">
          <h1 className="text-2xl font-bold">Tags</h1>
        </div>
        <div className="createButton flex align-middle text-light">
          <button className="text-sm bg-gray-800 hover:bg-gray-900 font-bold text-white flex px-2 py-1 rounded-md">
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
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span className="ms-1 ">Add New</span>
          </button>
        </div>
      </div>
      <div className="filterAndTableSection mt-8">
        <div id="filters" className=" my-3">
          <h2 className="font-medium">Filters</h2>
          <div className="grid grid-cols-6 gap-4">
            <div className="grid-span-3">
              <input
                type="text"
                placeholder="search"
                className="mt-1 block w-full rounded-md
              pt-1 pb-1 pl-2  focus:outline-none
            transition ease-in-out duration-700 bg-gray-100 focus:outline-gray-100
        "
              />
            </div>
            <div>
              <input
                type="date"
                placeholder="search"
                className="mt-1 block w-full rounded-md
              pt-1 pb-1 pl-2  focus:outline-none
            transition ease-in-out duration-700 bg-gray-100 focus:outline-gray-100
        "
              />
            </div>
            <div></div>
          </div>
        </div>
        <div className="border-l-0 border-t-0 border-b-0 rounded-md">
          <table className="w-full rounded-md">
            <thead>
              <tr className="text-left bg-gray-100 p-2 text-sm mb-4">
                <th className="px-2 py-1">Name</th>
                <th className="px-2 py-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tags.map((tag) => (
                <tr className="text-left border-b">
                  <td className="px-2 py-1">{tag.name}</td>
                  <td className="px-2 py-">
                    <button className="bg-gray-800 text-sm hover:bg-gray-900 transition-all ease-in-out py-0 px-2 text-white rounded-md ">
                      Edit
                    </button>
                    <button className="sm:ms-1 text-sm hover:bg-red-700 transition-all ease-out bg-red-600 py-0 px-2 text-white rounded-md ">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tags;
