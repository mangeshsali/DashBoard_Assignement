import React from "react";

function SecondarySection() {
  return (
    <section className="flex items-center justify-between p-8 bg-gray-100">
      <div className="w-1/2">
        <img src="future-image.png" alt="Future" className="w-full" />
      </div>
      <div className="w-1/2">
        <h2 className="text-2xl font-bold text-black">
          Now is your moment to build a better tomorrow.
        </h2>
        <p className="mt-4 text-gray-700">
          We’ve seen what the future can be. Now it’s time to decide what it
          will be.
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded mt-4 flex items-center">
          <svg
            className="h-5 w-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.75 8.25a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm0 4a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm0 4a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
          WATCH VIDEO
        </button>
      </div>
    </section>
  );
}

export default SecondarySection;
