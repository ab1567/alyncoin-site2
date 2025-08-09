"use client";

import { Cpu, Activity, Flame, DollarSign } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import DualLineChart from '@/components/DualLineChart';

export default function MiningPage() {
  // Generate emission schedule for demonstration (reuse simpler data)
  const data: any[] = [];
  let reward = 25;
  const tail = 0.25;
  for (let i = 0; i <= 100; i += 5) {
    reward = reward * Math.pow(0.9991, 5);
    if (reward < tail) reward = tail;
    data.push({ block: i, reward: parseFloat(reward.toFixed(2)) });
  }
  return (
    <div className="section max-w-5xl mx-auto space-y-16">
      <h1 className="section-title">Mining & Emission</h1>
      <p className="text-gray-300 text-center max-w-3xl mx-auto mb-8">
        AlynCoin uses a hybrid proof‑of‑work consensus combining <span className="text-white font-medium">BLAKE3</span> and
        <span className="text-white font-medium">Keccak</span> hashing. This approach blends energy‑efficient hashing
        with robust security. Difficulty adjusts dynamically via a linearly weighted moving average (LWMA) algorithm,
        maintaining consistent block times even as network hash power fluctuates.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        <FeatureCard
          icon={<Cpu className="h-8 w-8" />}
          title="Hybrid PoW"
          description="Combines BLAKE3 and Keccak hashing for both efficiency and resilience."
        />
        <FeatureCard
          icon={<Activity className="h-8 w-8" />}
          title="Dynamic Difficulty"
          description="Linearly weighted moving average algorithm keeps block times stable and fair."
        />
        <FeatureCard
          icon={<Flame className="h-8 w-8" />}
          title="Emission Schedule"
          description="Rewards start at 25 ALYN and decay ~0.09% per block with a 0.25 ALYN tail emission."
        />
        <FeatureCard
          icon={<DollarSign className="h-8 w-8" />}
          title="Burn & Developer Fund"
          description="Transaction fees are partially burned and partially allocated to the DAO treasury."
        />
      </div>
      <DualLineChart
        data={data}
        xDataKey="block"
        lines={[{ dataKey: 'reward', label: 'Block Reward (ALYN)', color: '#14b8a6' }]}
        yLabel="Reward"
        title="Block Reward Decay"
      />
    </div>
  );
}