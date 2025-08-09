"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Cpu, Layers, RefreshCcw, Users, FileBarChart, Globe, Rocket } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import ProgressItem from '@/components/ProgressItem';

/**
 * Home page for the AlynCoin website.
 *
 * Presents an overview of the project: high‑level mission, core features,
 * current progress and a call to get involved. Each section uses
 * dark backgrounds and custom artwork to evoke a futuristic feel.
 */
export default function HomePage() {
  // Sample progress data for the roadmap section
  const progress = [
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

/**
 * Home page for the AlynCoin site.
 *
 * Presents an overview of the project: high-level mission, core features,
 * current progress, and ways to get involved. The design leverages Tailwind
 * for responsive layout and lucide-react icons for visual cues.
 */
export default function HomePage() {
  return (
    <div className="flex flex-col space-y-32">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/hero-bg.png"
          alt="Cosmic network background"
          fill
          className="object-cover object-center pointer-events-none"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-tight">
            Quantum‑Ready Blockchain for the Next Era
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            AlynCoin is a pioneering Layer‑1 chain combining post‑quantum signatures,
            zk‑STARK proofs and a hybrid PoW consensus to deliver unmatched security,
            scalability and privacy. Built from the ground up for tomorrow’s world, it’s not
            another Ethereum fork—it’s a community‑driven vision for the future of
            decentralized finance and identity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/tokenomics" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-medium">
              Learn About Tokenomics
            </Link>
            <Link href="/downloads" className="bg-transparent border border-teal-600 hover:bg-teal-700 hover:text-white text-teal-400 px-6 py-3 rounded-full font-medium">
              Read Whitepaper
            </Link>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="section max-w-5xl mx-auto text-center">
        <h2 className="section-title">Why AlynCoin?</h2>
        <p className="max-w-3xl mx-auto text-gray-300 mb-12">
          Born from years of research and engineering, AlynCoin is a fully custom blockchain
          built for speed, privacy and resilience. Its modular cryptographic stack and
          zero‑knowledge architecture ensure that your digital future remains secure—long after
          quantum computers arrive.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<ShieldCheck className="h-8 w-8" />}
            title="Quantum‑Secure Signatures"
            description="Falcon and Dilithium signature schemes protect your assets against quantum attacks."
          />
          <FeatureCard
            icon={<Cpu className="h-8 w-8" />}
            title="zk‑STARK & Recursive Proofs"
            description="Zero‑knowledge proofs power privacy and scalability without trusted setups."
          />
          <FeatureCard
            icon={<Layers className="h-8 w-8" />}
            title="Layer‑1 & Layer‑2 Rollups"
            description="High throughput via rollup chains while retaining core Layer‑1 security guarantees."
          />
          <FeatureCard
            icon={<RefreshCcw className="h-8 w-8" />}
            title="Self‑Healing Nodes"
            description="Nodes automatically recover from sync issues for resilient, always‑on uptime."
          />
          <FeatureCard
            icon={<Users className="h-8 w-8" />}
            title="Zero‑Knowledge DAO"
            description="On‑chain governance with zero‑knowledge proofs ensures privacy and fairness in voting."
          />
          <FeatureCard
            icon={<Globe className="h-8 w-8" />}
            title="NFT & Interoperability"
            description="Native NFT support is live and atomic swaps are planned to enable cross‑chain trading."
          />
        </div>
      </section>

      {/* Progress Section */}
      <section className="section bg-[url('/images/network-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="bg-black bg-opacity-70 p-8 rounded-xl">
          <h2 className="section-title">Project Progress</h2>
          <p className="max-w-3xl mx-auto text-gray-300 mb-8">
            Since inception, AlynCoin has achieved significant technical milestones. Below is a
            snapshot of what’s done, what’s underway and what’s next on the roadmap.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {progress.map((item, idx) => (
              <ProgressItem key={idx} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section text-center">
        <h2 className="section-title">Get Involved</h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          AlynCoin is a private, community‑driven initiative. We selectively onboard
          developers, researchers, investors and early supporters who share our
          mission. If you’d like to contribute to the quantum‑secure future of
          blockchain, we’d love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="mailto:team@alyncoin.com"
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-medium"
          >
            Email Us
          </a>
          <a
            href="https://github.com/ab1567/alyncoin-site2"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border border-teal-600 hover:bg-teal-700 hover:text-white text-teal-400 px-6 py-3 rounded-full font-medium"
          >
            View on GitHub
          </a>
        </div>
      </section>
    </div>
  );
}