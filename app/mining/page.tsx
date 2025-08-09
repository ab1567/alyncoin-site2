"use client";

import { Cpu, Activity, Flame, DollarSign } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import DualLineChart from '@/components/DualLineChart';

export default function MiningPage() {
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
    <div className="relative bg-black text-white">
      {/* Hero */}
      <FramedSection bg="/assets/image13.png" position="center" height="pt-44 pb-56">
        <h1 className="text-4xl font-bold mb-6 text-cyan-300">Mining & Emission</h1>
        <p className="text-gray-100 max-w-3xl mx-auto">
          AlynCoin uses a hybrid proof‑of‑work consensus combining <span className="text-white font-medium">BLAKE3</span> and
          <span className="text-white font-medium">Keccak</span> hashing. This approach blends energy‑efficient hashing
          with robust security.
        </p>
      </FramedSection>

      {/* Content */}
      <section className="section max-w-5xl mx-auto space-y-16 py-16">
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-8">
          Difficulty adjusts dynamically via a linearly weighted moving average (LWMA) algorithm, maintaining consistent
          block times even as network hash power fluctuates.
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
      </section>
    </div>
  );
}
