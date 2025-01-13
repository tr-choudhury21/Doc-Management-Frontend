import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Document Management System</h1>
      <div className="space-y-4">
        <Link to='/upload'>
            <button
            className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
            >
                Upload Documents
            </button>
        </Link>
        <Link to='/view'>
            <button
            className="px-6 py-3 bg-green-600 text-white rounded shadow hover:bg-green-700"
            >
                View Uploaded Documents
            </button>
        </Link>
        <Link to='/search'>
        <button
          className="px-6 py-3 bg-purple-600 text-white rounded shadow hover:bg-purple-700"
        >
          Search Documents
        </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
