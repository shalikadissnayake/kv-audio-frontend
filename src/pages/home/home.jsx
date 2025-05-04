import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="bg-blue-200 text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-br from-blue-500 to-black">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Elevate Your Audio Experience
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-6 max-w-2xl">
          Premium speakers and sound systems built for true audiophiles.
        </p>
        <Link to="/items">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-xl font-semibold shadow-lg transition-all">
            Shop Now
          </button>
        </Link>
      </section>

      {/* Featured Products */}
      <section className="px-6 py-10">
        <h2 className="text-3xl text-black font-bold text-center mb-12">Top Picks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
  {
    name: "Buffle",
    img: "/bluetooth speaker.jpeg",  // ✅ remove /public
    desc: "Feel the beat with deep, rich bass.",
  },
  {
    name: "MIC",
    img: "/speaker2.jpg",
    desc: "360° immersive sound, anywhere.",
  },
  {
    name: "Head Set",
    img: "/headphone.jpeg",
    desc: "Precision sound for true clarity.",
  },
]
.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Call to Action */}
      <section className="text-center py-20 bg-gradient-to-br from-black to-blue-500 to black">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Still not sure what to choose?
        </h2>
        <p className="text-gray-400 mb-6">Let our experts help you pick the perfect setup.</p>
        <Link to="/contact">
          <button className="bg-white  text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition">
            Contact Us
          </button>
        </Link>
      </section>
      <footer className="text-center py-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} KV Audio. All rights reserved.
      </footer>
    </div>
  );
}
