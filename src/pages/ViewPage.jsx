import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewPage = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/files");
        setFiles(response.data);
      } catch (error) {
        alert("Error fetching files.");
      }
    };
    fetchFiles();
  }, []);

  return (

    <div className="p-8 bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen flex flex-col items-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Uploaded Documents</h2>

    {files.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {files.map((file, index) => (
            <li key={index}>
            <a
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-purple-50 transition-transform transform hover:-translate-y-1 hover:scale-105"
            >
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16V4h10v12m-5 4h.01M12 16v4m0 0H9m3 0h3"
                    />
                </svg>
                </div>
                <span className="text-gray-800 font-medium truncate">{file.name}</span>
            </a>
            </li>
        ))}
        </ul>
    ) : (
        <p className="text-gray-500 mt-4">No documents uploaded yet.</p>
    )}
    </div>

  );
};

export default ViewPage;
