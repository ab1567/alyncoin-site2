"use client";

import ProgressItem from '@/components/ProgressItem';

export default function ProgressPage() {
  const milestones = [
    {
      title: 'Blockchain Core',
      status: 'Complete',
      description: 'Hybrid PoW engine built with BLAKE3 and Keccak, plus post‑quantum signature integration.',
    },
    {
      title: 'Wallet & zk Infrastructure',
      status: 'Complete',
      description: 'GUI and CLI wallets support L1/L2 transactions and mining; zk‑STARK proofs & recursive rollups operational.',
    },
    {
      title: 'NFT Support',
      status: 'Complete',
      description: 'NFT minting and management tools are live.',
    },
    {
      title: 'Atomic Swaps',
      status: 'In Progress',
      description: 'Trustless cross‑chain trading is under active development.',
    },
    {
      title: 'Public Testnet & Mobile Wallet',
      status: 'In Progress',
      description: 'Testnet launch and mobile client are underway; expected later this year.',
    },
    {
      title: 'Miner Launch',
      status: 'Planned',
      date: 'September 2025',
      description: 'Official miner release coming September 2025—join our community to get involved early.',
    },
  ];
  return (
    <div className="section max-w-5xl mx-auto">
      <h1 className="section-title">Project Progress</h1>
      <p className="max-w-3xl mx-auto text-gray-300 text-center mb-8">
        Since inception, AlynCoin has achieved significant technical milestones. Below is a snapshot of what’s done,
        what’s underway and what’s next on the roadmap.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {milestones.map((item, idx) => (
          <ProgressItem key={idx} {...item} />
        ))}
      </div>
    </div>
  );
}