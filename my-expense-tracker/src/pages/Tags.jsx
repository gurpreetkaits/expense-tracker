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
      <h1 className="text-2xl font-bold mb-4">Tags</h1>
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
  );
};

export default Tags;
