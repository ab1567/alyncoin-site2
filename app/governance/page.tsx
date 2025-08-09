"use client";

import FeatureCard from '@/components/FeatureCard';
import { Lock, Vote, Wallet2, Users } from 'lucide-react';

export default function GovernancePage() {
  return (
    <div className="section max-w-5xl mx-auto space-y-12">
      <h1 className="section-title">Governance & DAO</h1>
      <p className="max-w-4xl mx-auto text-gray-300 text-center mb-8">
        AlynCoin’s governance is entirely on‑chain. Smart contracts handle proposal submission, voting and execution
        with complete transparency and immutability. A decentralized autonomous organization (DAO) stewards the treasury,
        prioritizes features and allocates funds for grants and network upgrades. Zero‑knowledge proofs within the
        voting process protect voter privacy while maintaining verifiable outcomes.
      </p>
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
    </div>
  );
}