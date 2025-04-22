export default function DownloadsPage() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/assets/bg-vortex-highlight.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-10 px-6 py-24 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">⬇️ Downloads Coming Soon</h2>
        <p className="text-gray-300 mb-4">
          CLI binaries, mobile wallets, and GUI releases will be published once we launch the public testnet.
        </p>
        <a
          href="/downloads/pitch_deck.pdf"
          target="_blank"
          className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          📄 View Pitch Deck
        </a>
      </div>
    </section>
  );
}