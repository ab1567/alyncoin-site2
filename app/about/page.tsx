'use client';

export default function AboutPage() {
  const FramedSection = ({
    children,
    bg,
    position = 'center',
    height = 'py-32',
  }: {
    children: React.ReactNode;
    bg: string;
    position?: string;
    height?: string;
  }) => (
    <section
      className={`relative ${height} px-6 text-white`}
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: 'cover',
        backgroundPosition: position,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">{children}</div>
    </section>
  );

  return (
    <div className="relative bg-black text-white">

      {/* OUR STORY — image10 (brain) */}
      <FramedSection bg="/assets/image10.png" position="top center" height="pt-44 pb-56">
        <h2 className="text-4xl font-bold mb-6 text-cyan-300">📢 Our Story</h2>
        <p className="mb-4 text-gray-100">
          AlynCoin has been in development for over <strong>4 years</strong>, initially started as <strong>AbzCoin</strong>.
          After years of dedicated research and engineering, the project evolved into <strong>AlynCoin</strong>, a robust,
          quantum-resistant blockchain with a mission to set new standards in security and decentralization.
        </p>
        <p className="text-gray-300">
          Today, we’re proud to announce that AlynCoin is <strong>95% complete</strong> with most of the core features functional and battle-tested.
        </p>
      </FramedSection>

      {/* WHAT MAKES UNIQUE — directly on image9 (lock) */}
      <FramedSection bg="/assets/image9.png" position="center" height="pt-36 pb-40">
        <h2 className="text-4xl font-bold mb-6 text-cyan-300">🚀 What Makes AlynCoin Unique</h2>
        <ul className="list-disc list-inside text-left text-gray-300 space-y-3 max-w-xl mx-auto">
          <li><strong>Quantum-Resistant by Design</strong> – Built from scratch with Falcon and Dilithium</li>
          <li><strong>Zero-Knowledge First</strong> – Recursive zk-STARKs enable private, scalable rollups</li>
          <li><strong>Hybrid PoW</strong> – BLAKE3 + Keccak makes mining both secure and efficient</li>
          <li><strong>Self-Healing Nodes</strong> – Automatic sync repair and resilience across peers</li>
          <li><strong>Developer Ready</strong> – Full CLI/GUI, APIs, wallet scripting, and SDKs</li>
        </ul>
      </FramedSection>

      {/* VISION AHEAD — image4 */}
      <FramedSection bg="/assets/image4.png" position="bottom center">
        <h2 className="text-4xl font-bold mb-6 text-cyan-300">🔭 Vision Ahead</h2>
        <p className="mb-4 text-gray-100">
          We’re entering final development with testnet and mobile wallet launch near. AlynCoin is welcoming developers,
          researchers, and pioneers to help shape the future of decentralized cryptography.
        </p>
        <p className="text-gray-300">
          Thank you for being part of the quantum-secure revolution.
        </p>
        <div className="mt-10">
          <a
            href="/"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            ← Back to Home
          </a>
        </div>
      </FramedSection>
    </div>
  );
}
