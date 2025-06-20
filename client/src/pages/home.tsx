function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center font-inter bg-[#faf5ff]">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-16">
        {/* Left: Content */}
        <div className="flex flex-col items-center md:items-start w-full max-w-xs md:max-w-xl flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-center md:text-left">
            Discover Your Musical
            <br />Potential
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xs md:max-w-lg text-center md:text-left">
            Expert instruction in keyboard, guitar, electronic pads, and vocals.
            Join our vibrant community of musicians today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition w-full sm:w-auto">
              Explore Our Programs
            </button>
            <button className="border border-gray-300 bg-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition w-full sm:w-auto">
              Contact Us
            </button>
          </div>
        </div>
        {/* Picture: Same width as CTAs */}
        <div className="flex items-center justify-center w-full max-w-xs md:max-w-md flex-1">
          <div className="w-full aspect-square bg-gray-200 rounded-xl shadow-inner flex items-center justify-center">
            {/* Place your image here later */}
            <span className="text-gray-400">[Your Image Here]</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home