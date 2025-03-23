import React from "react";

function Hero() {
  return (
    <section className="flex items-center justify-between p-8 bg-gray-100">
      <div className="w-1/2">
        <h1 className="text-4xl font-bold text-black">
          Slack is where the future works.
        </h1>
        <p className="text-xl mt-4 text-gray-700">
          Transform the way you work with one place for everyone and everything
          you need to get stuff done.
        </p>
        <div className="mt-8">
          <button className="bg-purple-600 text-white px-6 py-3 rounded mr-4">
            TRY FOR FREE
          </button>
          <button className="bg-blue-500 text-white px-6 py-3 rounded flex items-center">
            <img src="google-logo.png" alt="Google" className="h-5 mr-2" />
            SIGN UP WITH GOOGLE
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src="slack-interface.png"
          alt="Slack Interface"
          className="w-full"
        />
      </div>
    </section>
  );
}

export default Hero;
