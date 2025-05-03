'use client';
import ContactSection from '../components/ContactSection';

export default function Home() {
  const FramedSection = ({
    children,
    bg,
  }: {
    children: React.ReactNode;
    bg: string;
  }) => (
    <section
      className="relative py-24 px-6 text-gray-200"
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Solid dark side fill */}
      <div className="absolute inset-0 bg-black/60"></div>
      {/* Optional side edges with more fade */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
      {/* Container */}
      <div className="relative z-10 w-full flex justify-center">
        <div className="w-full max-w-[1200px]">{children}</div>
      </div>
    </section>
  );

  return (
    <>
      {/* HERO */}
      <section
        className="relative text-white min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/image3.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
        <div className="relative z-10 text-center max-w-2xl px-6 py-32">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow text-cyan-300">AlynCoin</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Quantum-Resistant. zk-STARK Powered. A Custom L1 Chain Built for the Future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/downloads/AlynCoin_Whitepaper.pdf"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-md"
            >
              📄 View Pitch Deck
            </a>
            <span className="px-6 py-3 bg-gray-600 text-white rounded-xl opacity-60 cursor-not-allowed shadow-inner">
              🍬 Wallet Coming Soon
            </span>
          </div>
          <p className="mt-10 text-sm text-gray-400">Scroll to explore ↓</p>
        </div>
      </section>

      {/* WHY */}
      <FramedSection bg="/assets/image1.png">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-cyan-300">🔐 Why AlynCoin?</h2>
          <p className="mb-4 text-gray-100">
            AlynCoin is a next-generation quantum-secure blockchain built from the ground up for speed, privacy,
            decentralization, and post-quantum resistance. Originally started as <strong>AbzCoin</strong>, it evolved into
            AlynCoin after years of research and engineering.
          </p>
          <p className="text-gray-300">
            We’re not another Ethereum fork. AlynCoin is a fully custom layer-1 chain, optimized for scalability and
            built for the future of quantum computing, privacy-first finance, and decentralized governance.
          </p>
        </div>
      </FramedSection>

      {/* FEATURES */}
      <FramedSection bg="/assets/image6.png">
        <div>
          <h2 className="text-3xl font-bold text-center mb-10 text-cyan-300">🔐 Quantum-Ready Features</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300">
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
      </FramedSection>

      {/* PROGRESS */}
      <FramedSection bg="/assets/image13.png">
        <div>
          <h2 className="text-3xl font-bold mb-6 drop-shadow text-cyan-300">🚀 Current Progress</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-3">
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
      </FramedSection>

      {/* BUILDING */}
      <FramedSection bg="/assets/image5.png">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-cyan-300">🧱 What We're Building</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-3">
            <li>💡 A custom non-EVM Layer-1 with no legacy baggage</li>
            <li>🔐 Zero-knowledge proofs using <strong>Winterfell zk-STARKs</strong></li>
            <li>🧠 Fully quantum-safe key systems (Falcon, Dilithium)</li>
            <li>🪙 Native token with elastic difficulty + modular emission</li>
            <li>🧹 zk-based identity, zk-NFTs, DAO governance, rollups</li>
            <li>🔄 Recursive proof support for scalability & compression</li>
          </ul>
        </div>
      </FramedSection>

      {/* CONTACT */}
      <ContactSection />
    </>
  );
}
