import Navbar from "../components/Navbar";

function Home() {
  const features = [
    {
      icon: "📄",
      title: "PDF Upload",
      desc: "Upload documents instantly and process PDFs securely.",
    },

    {
      icon: "🤖",
      title: "AI Script Generation",
      desc: "AI converts PDF text into podcast style conversation.",
    },

    {
      icon: "🎙️",
      title: "Podcast Audio",
      desc: "Generate realistic podcast audio automatically.",
    },

    {
      icon: "⚡",
      title: "Fast Processing",
      desc: "Generate AI audio in seconds.",
    },
  ];

  const history = [
    "AI Research Paper.pdf",
    "Machine Learning Notes.pdf",
    "Data Structures Guide.pdf",
  ];

  return (
    <div
      className="
min-h-screen
bg-black
text-white
"
    >
      <Navbar />

      {/* HERO */}

      <section
        id="home"
        className="
max-w-7xl
mx-auto
px-6
pt-24
pb-28
"
      >
        <div
          className="
grid
lg:grid-cols-2
gap-20
items-center
"
        >
          <div>
            <div
              className="
inline-flex
px-5
py-2
rounded-full
bg-blue-600/10
border
border-blue-500/20
text-blue-400
mb-8
"
            >
             AI Powered PDF → Podcast Platform
            </div>

            <h1
              className="
text-5xl
md:text-7xl
font-bold
leading-tight
"
            >
              Transform PDFs
              <span
                className="
bg-gradient-to-r
from-blue-400
to-purple-500
bg-clip-text
text-transparent
"
              >
                Into Audio Podcasts
              </span>
            </h1>

            <p
              className="
text-gray-400
mt-8
text-lg
leading-8
"
            >
              PDFs To Podcast transforms learning experience. Upload PDF files
              and AI automatically extracts text, creates podcast scripts and
              generates realistic audio. Listen anywhere anytime.
            </p>

            <div
              className="
grid
grid-cols-3
gap-5
mt-10
"
            >
              <div>
                <h2
                  className="
text-blue-400
font-bold
text-4xl
"
                >
                  10K+
                </h2>

                <p
                  className="
text-gray-500
"
                >
                  PDF Processed
                </p>
              </div>

              <div>
                <h2
                  className="
text-purple-400
font-bold
text-4xl
"
                >
                  5K+
                </h2>

                <p
                  className="
text-gray-500
"
                >
                  Audio Generated
                </p>
              </div>

              <div>
                <h2
                  className="
text-green-400
font-bold
text-4xl
"
                >
                  AI
                </h2>

                <p
                  className="
text-gray-500
"
                >
                  Powered
                </p>
              </div>
            </div>
          </div>

          {/* Dashboard */}

          <div
            className="
bg-gradient-to-br
from-gray-900
to-black
border
border-gray-800
rounded-3xl
p-8
shadow-2xl
"
          >
            <h2
              className="
text-3xl
font-bold
mb-8
"
            >
              AI Dashboard
            </h2>

            <div
              className="
space-y-5
"
            >
              <div
                className="
bg-black
border
border-gray-800
p-5
rounded-2xl
"
              >
                📄 PDF Uploaded
              </div>

              <div
                className="
bg-black
border
border-gray-800
p-5
rounded-2xl
"
              >
                🤖 AI Processing Running
              </div>

              <div
                className="
bg-black
border
border-gray-800
p-5
rounded-2xl
"
              >
                🎙️ Podcast Generated
              </div>

              <div
                className="
bg-black
border
border-gray-800
p-5
rounded-2xl
"
              >
                ⬇ Download MP3
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section
        id="features"
        className="
max-w-7xl
mx-auto
px-6
pb-28
"
      >
        <h2
          className="
text-5xl
font-bold
text-center
mb-16
"
        >
          Features
        </h2>

        <div
          className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-8
"
        >
          {features.map((item, index) => (
            <div
              key={index}
              className="
bg-gray-900
border
border-gray-800
rounded-3xl
p-8
hover:border-blue-500
duration-300
hover:-translate-y-2
"
            >
              <div
                className="
text-5xl
mb-5
"
              >
                {item.icon}
              </div>

              <h3
                className="
text-xl
font-bold
mb-3
"
              >
                {item.title}
              </h3>

              <p
                className="
text-gray-400
"
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}

      <section
        id="how"
        className="
max-w-7xl
mx-auto
px-6
pb-28
"
      >
        <h2
          className="
text-5xl
font-bold
text-center
mb-14
"
        >
          How It Works
        </h2>

        <div
          className="
grid
md:grid-cols-4
gap-8
"
        >
          {["Upload PDF", "Extract Text", "AI Script", "Podcast Audio"].map(
            (step, index) => (
              <div
                key={index}
                className="
bg-gray-900
rounded-3xl
border
border-gray-800
p-8
text-center
"
              >
                <div
                  className="
text-blue-400
font-bold
text-4xl
mb-5
"
                >
                  0{index + 1}
                </div>

                <h3
                  className="
font-semibold
"
                >
                  {step}
                </h3>
              </div>
            ),
          )}
        </div>
      </section>

      {/* HISTORY */}

      <section
        id="history"
        className="
max-w-6xl
mx-auto
px-6
pb-24
"
      >
        <h2
          className="
text-5xl
font-bold
mb-12
text-center
"
        >
          History
        </h2>

        <div
          className="
space-y-5
"
        >
          {history.map((item, index) => (
            <div
              key={index}
              className="
bg-gray-900
border
border-gray-800
rounded-2xl
p-6
flex
justify-between
items-center
"
            >
              <div>📄 {item}</div>

              <button
                className="
bg-blue-600
px-5
py-2
rounded-lg
"
              >
                Open
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
