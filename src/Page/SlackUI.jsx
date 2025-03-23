const SlackUI = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">slack</h1>
        <div className="space-x-4">
          <button className="text-gray-600">Product</button>
          <button className="text-gray-600">Enterprise</button>
          <button className="text-gray-600">Resources</button>
          <button className="text-gray-600">Pricing</button>
        </div>
        <div className="space-x-4">
          <button className="text-gray-600">Sign in</button>
          <button className="bg-purple-600 text-white py-2 px-4 rounded">
            Try for Free
          </button>
        </div>
      </nav>

      {/* Banner */}
      <div className="bg-blue-500 text-white p-4 text-center">
        Slack is your digital HQ. Meet the new features keeping teams connected
        in a work-from-anywhere world.{" "}
        <a href="#" className="underline">
          Let's go →
        </a>
      </div>

      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold">Slack is where the future works</h1>
        <p className="text-gray-600 my-4">
          Transform the way you work with one place for everything you need to
          get stuff done.
        </p>
        <div className="space-x-4">
          <button className="bg-purple-600 text-white py-2 px-4 rounded">
            Try for Free
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Sign Up with Google
          </button>
        </div>
      </div>

      {/* Logos */}
      <div className="flex justify-center space-x-8 my-8">
        <span className="text-gray-400">FOX</span>
        <span className="text-gray-400">Lonely Planet</span>
        <span className="text-gray-400">Intuit</span>
        <span className="text-gray-400">Carvana</span>
        <span className="text-gray-400">Kiva</span>
        <span className="text-gray-400">Deva</span>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500">
        © 2025 Slack Clone. All rights reserved.
      </footer>
    </div>
  );
};

export default SlackUI;
