export default function AboutPage() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/assets/bg-neural-network.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-10 px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">📢 Our Story</h2>
        <p className="mb-4">
          AlynCoin has been in development for over <strong>4 years</strong>, initially started as <strong>AbzCoin</strong>. 
          After years of dedicated research and engineering, the project evolved into AlynCoin, a robust, quantum-resistant blockchain 
          with a mission to set new standards in security and decentralization.
        </p>
        <p className="mb-4">
          We’re proud to announce to the world that AlynCoin is now <strong>95% complete</strong>, with core features such as:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>✅ Fully operational Layer-1 blockchain</li>
          <li>✅ Recursive zk-STARK rollup support</li>
          <li>✅ Falcon + Dilithium signature integration</li>
          <li>✅ Atomic Swaps, zk-based Identity, Quantum NFTs</li>
          <li>✅ GUI & CLI Wallets</li>
          <li>✅ DAO governance and on-chain voting</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">🚀 What Makes AlynCoin Unique</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li><strong>Quantum-Resistant by Design</strong> – Post-quantum cryptography built from the ground up</li>
          <li><strong>Zero-Knowledge First</strong> – Recursive zk-STARKs ensure provable scalability and privacy</li>
          <li><strong>Hybrid PoW</strong> – BLAKE3 + Keccak mining algorithm provides resilience and fairness</li>
          <li><strong>Self-Healing Nodes</strong> – Our nodes detect and fix desynchronization automatically</li>
          <li><strong>Developer Tools</strong> – SDKs, Protobuf APIs, and wallet scripting tools</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">🔭 Vision Ahead</h2>
        <p className="mb-2">
          We are entering the final stages of development, with a public testnet and mobile wallet launch planned soon. 
          As we approach mainnet readiness, AlynCoin is opening up to developers, researchers, miners, and security pioneers 
          to help shape a truly decentralized future.
        </p>
        <p className="mt-4 text-gray-400">Thank you for being part of the quantum-secure revolution.</p>
      </div>
    </section>
  );
}