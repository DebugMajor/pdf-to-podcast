import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Features",
      path: "#features",
    },

    {
      name: "How It Works",
      path: "#how",
    },

    {
      name: "History",
      path: "#history",
    },
  ];

  return (
    <header
      className="
sticky
top-0
z-50
bg-black/40
backdrop-blur-xl
border-b
border-gray-800
"
    >
      <nav
        className="
max-w-7xl
mx-auto
px-6
py-5
flex
justify-between
items-center
"
      >
        {/* Logo */}

        <a
          href="#home"
          className="
flex
items-center
gap-3
cursor-pointer
"
        >
          <div
            className="
h-12
w-12
rounded-2xl
bg-gradient-to-r
from-blue-600
via-purple-600
to-pink-600
flex
justify-center
items-center
text-2xl
shadow-lg
"
          >
            🎙️
          </div>

          <div>
            <h1
              className="
text-2xl
font-bold
text-white
"
            >
              PDFs
              <span
                className="
bg-gradient-to-r
from-blue-400
to-purple-500
bg-clip-text
text-transparent
"
              >
                ToPodcast
              </span>
            </h1>

            <p
              className="
text-gray-500
text-xs
"
            >
              AI Audio Platform
            </p>
          </div>
        </a>

        {/* Desktop */}

        <div
          className="
hidden
lg:flex
items-center
gap-10
"
        >
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="
text-gray-300
hover:text-white
duration-300
relative
group
"
            >
              {item.name}

              <span
                className="
absolute
left-0
-bottom-1
w-0
h-[2px]
bg-blue-500
duration-300
group-hover:w-full
"
              />
            </a>
          ))}
        </div>

        {/* Right */}

        <div
          className="
hidden
lg:flex
items-center
gap-4
"
        >
          <Link to="/login">
            <button
              className="
group
relative
overflow-hidden
px-6
py-3
rounded-xl
border
border-gray-700
bg-white/5
text-white
font-medium
duration-300
hover:border-blue-500
hover:-translate-y-1
"
            >
              🔐 Login
            </button>
          </Link>

          <Link to="/dashboard">
            <button
              className="
bg-gradient-to-r
from-blue-600
to-purple-600
px-6
py-3
rounded-xl
font-semibold
hover:scale-105
duration-300
"
            >
              Start Free
            </button>
          </Link>
        </div>

        {/* Mobile */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
lg:hidden
text-white
text-3xl
"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div
          className="
lg:hidden
bg-black/95
backdrop-blur-xl
border-t
border-gray-800
px-6
py-8
"
        >
          <div
            className="
flex
flex-col
gap-6
"
          >
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="
text-gray-300
hover:text-blue-400
"
              >
                {item.name}
              </a>
            ))}

            <Link to="/dashboard">
              <button
                className="
bg-gradient-to-r
from-blue-600
to-purple-600
px-6
py-3
rounded-xl
font-semibold
hover:scale-105
duration-300
shadow-lg
shadow-blue-500/20
"
              >
                Start Free
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
