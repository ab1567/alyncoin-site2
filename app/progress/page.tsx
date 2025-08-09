"use client";

/**
 * Progress page
 *
 * Summarizes the development milestones achieved by the AlynCoin project and ongoing
 * initiatives. Highlights what’s complete, what’s in progress and what’s coming next.
 */
export default function ProgressPage() {
  const milestones = [
    {
      title: 'Blockchain Core',
      status: '✅ Complete',
      description:
        'Hybrid PoW engine built with BLAKE3 and Keccak, plus post‑quantum signature integration.',
    },
    {
      title: 'Wallet & zk Infrastructure',
      status: '✅ Complete',
      description:
        'GUI and CLI wallets support L1/L2 transactions and mining; zk‑STARK proofs & recursive rollups operational.',
    },
    {
      title: 'NFT Support',
      status: '✅ Complete',
      description: 'NFT minting and management tools are live.',
    },
    {
      title: 'Atomic Swaps',
      status: '🚧 In Progress',
      description: 'Trustless cross‑chain trading is under active development.',
    },
    {
      title: 'Public Testnet & Mobile Wallet',
      status: '🚧 In Progress',
      description: 'Testnet launch and mobile client are underway; expected later this year.',
    },
    {
      title: 'Miner Launch',
      status: '🚀 September 2025',
      description: 'Official miner release coming September 2025—join our community to get early access.',
    },
  ];
  return (
    <section
      className="relative py-10"
      style={{
        backgroundImage: "url('/assets/image5.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 space-y-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-white">Project Progress</h1>
        <p className="max-w-4xl mx-auto text-center text-gray-200">
          Since inception, AlynCoin has achieved significant technical milestones. Below is a
          snapshot of what’s done, what’s underway and what’s next on the roadmap.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {milestones.map(({ title, status, description }) => (
            <div
              key={title}
              className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 shadow-sm space-y-2"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{title}</h3>
                <span className="text-sm font-medium text-primary">{status}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}