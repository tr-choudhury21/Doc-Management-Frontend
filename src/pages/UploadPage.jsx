import React, { useState } from "react";
import axios from "axios";

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file.");
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:5000/api/upload/uploaddocument", formData);
      alert("File uploaded successfully!");
      setFile(null); // Clear file after upload
    } catch (error) {
      alert("Error uploading file.");
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="p-8 bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Upload Documents</h2>

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`w-full max-w-md bg-white p-6 rounded-lg shadow-lg border-2 ${
          dragActive ? "border-blue-500 bg-blue-50" : "border-dashed border-gray-300"
        } transition`}
      >
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center p-6 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-gray-400 mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 15a4 4 0 018 0m0 0a4 4 0 118 0m-8 0v4m0 4h.01M12 3v4m0 0l-2-2m2 2l2-2"
            />
          </svg>
          <span className="text-gray-600">
            {dragActive ? "Drop the file here..." : "Click or drag a file to upload"}
          </span>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {file && (
          <p className="mt-4 text-sm text-green-600 text-center">
            Selected File: {file.name}
          </p>
        )}

        <button
          onClick={handleUpload}
          className="mt-6 w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default UploadPage;
