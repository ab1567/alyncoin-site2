export default function VideosPage() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/assets/bg_deepspace_stars.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-10 px-6 py-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">🎥 Videos Coming Soon</h2>
        <p className="mb-4 text-gray-300">
          We will soon showcase CLI demos, zk-STARK rollups, mining workflows, and full ecosystem walkthroughs.
          These videos will highlight the power, speed, and privacy of the AlynCoin platform — both CLI and GUI.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>💻 CLI Transactions and Wallet Walkthrough</li>
          <li>🔐 zk-STARK Proof Generation and Verification</li>
          <li>⚙️ Mining with Hybrid PoW (BLAKE3 + Keccak)</li>
          <li>🧠 Recursive Rollups in Action</li>
          <li>🌐 Atomic Swaps and zkNFT Transfers</li>
        </ul>
        <p className="mt-6 text-gray-400">
          Stay tuned and follow us on <a href="https://twitter.com/alyncoin" className="underline">Twitter</a> and <a href="https://instagram.com/alyncoin_official" className="underline">Instagram</a> to get notified!
        </p>
      </div>
    </section>
  );
}