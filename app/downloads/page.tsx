'use client';

export default function DownloadsPage() {
  return (
    <section
      className="relative text-white py-32 px-6 min-h-screen"
      style={{
        backgroundImage: "url('/assets/image11.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Framing (no blur) */}
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>

      <div className="relative z-10 w-full flex justify-center">
        <div className="w-full max-w-[1200px] text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-cyan-300">⬇️ Downloads Coming Soon</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            CLI binaries, mobile wallets, and GUI releases will be published once we launch the public testnet.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="/downloads/AlynCoin_Whitepaper.pdf"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md transition"
            >
              📄 View Whitepaper
            </a>
            <a
              href="/downloads/pitch_deck.pdf"
              target="_blank"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md transition"
            >
              📘 View Pitch Deck
            </a>
            <a
              href="/"
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl shadow-md transition"
            >
              🔙 Back to Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
