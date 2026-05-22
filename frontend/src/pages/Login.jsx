import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="
min-h-screen
bg-black
text-white
overflow-hidden
relative
flex
items-center
justify-center
px-6
"
    >
      {/* Background */}

      <div
        className="
absolute
top-0
left-0
w-96
h-96
bg-blue-600
opacity-20
blur-[150px]
"
      />

      <div
        className="
absolute
bottom-0
right-0
w-96
h-96
bg-purple-600
opacity-20
blur-[150px]
"
      />

      <div
        className="
relative
z-10
max-w-7xl
w-full
grid
lg:grid-cols-2
gap-16
items-center
"
      >
        {/* LEFT SIDE */}

        <div
          className="
hidden
lg:block
"
        >
          <div
            className="
inline-flex
px-4
py-2
rounded-full
bg-blue-500/10
border
border-blue-500/30
text-blue-400
mb-8
"
          >
          AI Powered Platform
          </div>

          <h1
            className="
text-6xl
font-bold
leading-tight
"
          >
            Convert PDFs
            <span
              className="
bg-gradient-to-r
from-blue-500
to-purple-500
bg-clip-text
text-transparent
"
            >
              Into Podcasts
            </span>
          </h1>

          <p
            className="
text-gray-400
mt-8
text-lg
leading-8
max-w-xl
"
          >
            Transform documents into AI-powered podcast audio. Upload PDFs,
            generate scripts, and listen anytime with intelligent voice
            generation.
          </p>

          <div
            className="
grid
grid-cols-2
gap-5
mt-10
"
          >
            <div
              className="
bg-white/5
border
border-gray-800
rounded-2xl
p-5
"
            >
              <h2
                className="
text-3xl
font-bold
text-blue-400
"
              >
                1000+
              </h2>

              <p
                className="
text-gray-400
mt-2
"
              >
                PDF Generated
              </p>
            </div>

            <div
              className="
bg-white/5
border
border-gray-800
rounded-2xl
p-5
"
            >
              <h2
                className="
text-3xl
font-bold
text-purple-400
"
              >
                AI
              </h2>

              <p
                className="
text-gray-400
mt-2
"
              >
                Voice Powered
              </p>
            </div>
          </div>

          <div
            className="
mt-10
space-y-5
"
          >
            <div
              className="
flex
items-center
gap-4
"
            >
              <div
                className="
h-10
w-10
rounded-full
bg-blue-600
flex
justify-center
items-center
"
              >
                ✓
              </div>

              <p>Smart PDF Extraction</p>
            </div>

            <div
              className="
flex
items-center
gap-4
"
            >
              <div
                className="
h-10
w-10
rounded-full
bg-purple-600
flex
justify-center
items-center
"
              >
                ✓
              </div>

              <p>AI Podcast Generation</p>
            </div>

            <div
              className="
flex
items-center
gap-4
"
            >
              <div
                className="
h-10
w-10
rounded-full
bg-pink-600
flex
justify-center
items-center
"
              >
                ✓
              </div>

              <p>Natural Audio Output</p>
            </div>
          </div>
        </div>

        {/* RIGHT LOGIN */}

        <div
          className="
w-full
max-w-md
mx-auto
bg-white/5
backdrop-blur-xl
border
border-gray-800
rounded-[32px]
p-8
shadow-2xl
"
        >
          <div
            className="
text-center
"
          >
            <div
              className="
w-20
h-20
mx-auto
mb-5
rounded-3xl
bg-gradient-to-r
from-blue-600
to-purple-600
flex
justify-center
items-center
text-4xl
"
            >
              🎙️
            </div>

            <h1
              className="
text-4xl
font-bold
"
            >
              Welcome Back
            </h1>

            <p
              className="
text-gray-400
mt-3
"
            >
              Login to continue
            </p>
          </div>

          <form
            className="
mt-8
space-y-5
"
          >
            <input
              type="email"
              placeholder="Email Address"
              className="
w-full
bg-black/30
border
border-gray-700
rounded-xl
px-5
py-4
outline-none
focus:border-blue-500
"
            />

            <div
              className="
relative
"
            >
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="
w-full
bg-black/30
border
border-gray-700
rounded-xl
px-5
py-4
outline-none
focus:border-purple-500
"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
absolute
right-5
top-4
"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            <button
              onClick={() => navigate("/dashboard")}
              className="
w-full
bg-gradient-to-r
from-blue-600
to-purple-600
py-4
rounded-xl
font-bold
hover:scale-[1.02]
duration-300
"
            >
              Login 
            </button>
          </form>

          <p
            className="
text-center
text-gray-400
mt-8
"
          >
            Don't have account?
            <Link
              to="/signup"
              className="
text-blue-400
ml-2
"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
