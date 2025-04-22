import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/assets/futuristic_banner_lightcore.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">AlynCoin</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Quantum-Resistant. zk-STARK Powered. A Custom L1 Chain Built for the Future.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="/downloads/pitch_deck.pdf"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              📄 View Pitch Deck
            </a>
            <span className="px-6 py-3 bg-gray-700 text-white rounded-lg opacity-60 cursor-not-allowed">
              💼 Wallet Coming Soon
            </span>
          </div>
          <p className="mt-12 text-sm text-gray-400">Scroll to explore ↓</p>
        </div>
      </section>

      {/* WHY */}
      <section
        className="bg-gray-950 text-white py-20 px-6"
        style={{
          backgroundImage: "url('/assets/bg_deepspace_stars.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto text-center drop-shadow-md">
          <h2 className="text-3xl font-bold mb-6">🔒 Why AlynCoin?</h2>
          <p className="mb-4">
            AlynCoin is a next-generation quantum-secure blockchain built from the ground up for speed, privacy,
            decentralization, and post-quantum resistance. Originally started as <strong>AbzCoin</strong>, it evolved into AlynCoin after years of research and engineering.
          </p>
          <p className="text-gray-400">
            We’re not another Ethereum fork. AlynCoin is an entirely custom layer-1 chain, optimized for scalability and built for the future of quantum computing, privacy-first finance, and decentralized governance.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative text-white py-20 px-6"
        style={{
          backgroundImage: "url('/assets/bg-swirl-stars.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-6xl mx-auto drop-shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-10">🔐 Quantum-Ready Features</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white/90">
            <li>• <strong>Post-Quantum Signatures</strong> – Falcon + Dilithium security</li>
            <li>• <strong>zk-STARK Proofs</strong> – Privacy and scalability built-in</li>
            <li>• <strong>Hybrid PoW</strong> – BLAKE3 + Keccak for resilient mining</li>
            <li>• <strong>Atomic Swaps</strong> – Cross-chain interoperability</li>
            <li>• <strong>Self-Healing Nodes</strong> – Autonomous sync & recovery</li>
            <li>• <strong>Quantum-Secure NFTs</strong> – Verifiable and tamper-proof</li>
            <li>• <strong>DAO Governance</strong> – Fully decentralized control</li>
            <li>• <strong>Recursive zk-Rollups</strong> – Efficient L2 aggregation</li>
            <li>• <strong>CLI & GUI Wallet</strong> – Complete with L1, L2, and more</li>
          </ul>
        </div>
      </section>

      {/* BUILDING */}
      <section
        className="relative text-white py-20 px-6"
        style={{
          backgroundImage: "url('/assets/futuristic-grid-background.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-4xl mx-auto drop-shadow">
          <h2 className="text-3xl font-bold mb-6">🧱 What We're Building</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>💡 A custom non-EVM Layer-1 with no legacy baggage</li>
            <li>🔐 Zero-knowledge proofs using <strong>Winterfell zk-STARKs</strong></li>
            <li>🧠 Fully quantum-safe key systems (Falcon, Dilithium)</li>
            <li>🪙 Native token with elastic difficulty + modular emission</li>
            <li>🧩 zk-based identity, zk-NFTs, DAO governance, rollups</li>
            <li>🔄 Recursive proof support for scalability & compression</li>
          </ul>
        </div>
      </section>

      {/* PROGRESS */}
      <section
        className="relative text-white py-20 px-6"
        style={{
          backgroundImage: "url('/assets/background_quantum_security.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center drop-shadow">🚀 Current Progress</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2 drop-shadow-sm">
            <li>✅ Blockchain Core with hybrid PoW engine is complete</li>
            <li>✅ Falcon & Dilithium signature support integrated</li>
            <li>✅ GUI + CLI Wallet with L1/L2 transactions and mining</li>
            <li>✅ zk-STARK Proofs and Recursive Rollups functional</li>
            <li>✅ NFT and Atomic Swap protocols implemented</li>
            <li>✅ Live node sync + Self-healing sync logic verified</li>
            <li>🚧 Public Testnet and Mobile Wallet in progress</li>
            <li>🚧 DAO voting improvements and GUI polish ongoing</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <ContactSection />
    </>
  );
}
