import { FiMail, FiLock } from "react-icons/fi";
import Navbar from "../components/Navbar";
export default function Login() {
  return (
    <>
      <Navbar />
      <div className="bg-[#f4eadc] py-30 px-5 sm:px-8 md:px-10 lg:px-16">
        <div className="w-full max-w-[450px] mx-auto bg-white rounded-[35px] border border-[#E7D7BE] shadow-xl shadow-[#B68B3A]/10 p-8 md:p-10">
          <h1 className="text-center text-xl font-serif tracking-[10px] text-[#A77724]">
            AUREMET
          </h1>

          <div className="mt-5 text-center">
            <h2 className="text-4xl font-[Cormorant_Garamond] text-[#A77724]">Welcome back</h2>

            <p className="mt-3 text-gray-400 ">
              Sign in to your account
            </p>
          </div>

          <form className="mt-10 space-y-5">
            <div>
              <label className="block mb-3 uppercase tracking-[3px] text-sm font-medium text-[#A77724]">
                Email
              </label>

              <div className="bg-[#F8F4EE] flex items-center gap-3 border border-[#E7D7BE] rounded-full px-5 h-12">
                <FiMail className="text-[#A77724] text-xl" />

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="block mb-3 uppercase tracking-[3px] text-sm font-medium text-[#A77724]">
                Password
              </label>

              <div className="bg-[#F8F4EE] flex items-center gap-3 border border-[#E7D7BE] rounded-full px-5 h-12">
                <FiLock className="text-[#A77724] text-xl" />

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="flex justify-between items-center text-[12px] mb-10">
              <label className="flex items-center gap-2 text-gray-500">
                <input type="checkbox" className="accent-[#B68B3A] w-3 h-3" />
                Remember me
              </label>

              <button type="button" className="cursor-pointer text-[#A77724] hover:underline">
                Forgot password?
              </button>
            </div>

            <button className="w-full h-12 rounded-full bg-[#B68B3A] text-white uppercase text-sm tracking-[2px] font-semibold shadow-xl shadow-[#B68B3A]/30 hover:bg-[#A77724] transition">
              Sign In
            </button>

            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-[#E7D7BE]" />

              <span className="text-gray-400 tracking-[3px] text-sm">OR</span>

              <div className="flex-1 h-px bg-[#E7D7BE]" />
            </div>

            <button
              type="button"
              className="w-full h-12 rounded-full border border-[#E7D7BE] uppercase text-sm tracking-[2px] font-semibold text-[#A77724] hover:bg-[#B68B3A] hover:text-white transition"
            >
              Continue with Google
            </button>

            <p className="text-center text-gray-500 pt-2">
              New to Auremet?{" "}
              <a
                href="#"
                className="text-[#A77724] font-semibold hover:underline"
              >
                Create an account
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
