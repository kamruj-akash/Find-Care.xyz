"use client";
export default function Loading() {
  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white flex items-center justify-center">
      <div className="text-center">
        {/* Logo and Heart Animation */}
        <div className="mb-8 relative">
          <div className="inline-flex items-center justify-center">
            {/* Animated Heart */}
            <div className="relative">
              <svg
                className="w-16 h-16 text-blue-500 animate-pulse"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>

              {/* Pulsing Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 border-4 border-blue-300 rounded-full animate-ping opacity-75"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-24 h-24 border-4 border-blue-200 rounded-full animate-ping opacity-50"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-800">Care.xyz</h2>
          <p className="text-gray-600 animate-pulse">
            Loading trusted care services...
          </p>

          {/* Loading Dots */}
          <div className="flex justify-center gap-2 pt-2">
            <div
              className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-linear-to-r from-blue-400 to-blue-600 rounded-full animate-[loading_1.5s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% {
            width: 0%;
            margin-left: 0%;
          }
          50% {
            width: 75%;
            margin-left: 12.5%;
          }
          100% {
            width: 0%;
            margin-left: 100%;
          }
        }
      `}</style>
    </div>
  );
}
