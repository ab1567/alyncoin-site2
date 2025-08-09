"use client";

import FeatureCard from '@/components/FeatureCard';
import { Lock, Vote, Wallet2, Users } from 'lucide-react';

export default function GovernancePage() {
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
      {/* Hero */}
      <FramedSection bg="/assets/image12.png" position="center" height="pt-44 pb-56">
        <h1 className="text-4xl font-bold mb-6 text-cyan-300">Governance & DAO</h1>
        <p className="max-w-4xl mx-auto text-gray-100">
          AlynCoin’s governance is entirely on‑chain. Smart contracts handle proposal submission, voting and execution
          with complete transparency and immutability. A decentralized autonomous organization (DAO) stewards the treasury,
          prioritizes features and allocates funds for grants and network upgrades.
        </p>
      </FramedSection>

      {/* Features */}
      <section className="section max-w-5xl mx-auto space-y-12 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          <FeatureCard
            icon={<Lock className="h-8 w-8" />}
            title="On‑Chain Proposals"
            description="All governance actions—from feature requests to budget approvals—are proposed and executed via immutable smart contracts."
          />
          <FeatureCard
            icon={<Vote className="h-8 w-8" />}
            title="Private Voting"
            description="Zero‑knowledge voting protects each participant’s choices while ensuring that tallies remain auditable by anyone."
          />
          <FeatureCard
            icon={<Wallet2 className="h-8 w-8" />}
            title="Treasury Management"
            description="The DAO oversees spending of the developer fund, awarding grants and financing maintenance without centralized control."
          />
          <FeatureCard
            icon={<Users className="h-8 w-8" />}
            title="Community Driven"
            description="Anyone holding ALYN tokens can participate in governance, ensuring that the network evolves according to its stakeholders."
          />
        </div>
      </section>
    </div>
  );
}
