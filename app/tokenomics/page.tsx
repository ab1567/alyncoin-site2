"use client";

import DualLineChart from '@/components/DualLineChart';

/**
 * Tokenomics page describes the monetary policy of AlynCoin, displays the
 * premine allocation table and visualises the emission schedule. The
 * emission schedule is approximated with a simple exponential decay for
 * illustrative purposes.
 */
export default function TokenomicsPage() {
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

  // Define the premine distribution
  const premine = [
    { allocation: 'Airdrops', amount: 1_000_000 },
    { allocation: 'Liquidity', amount: 1_000_000 },
    { allocation: 'Investors', amount: 3_000_000 },
    { allocation: 'Development', amount: 2_000_000 },
    { allocation: 'Exchange Listings', amount: 1_000_000 },
    { allocation: 'Team / Founder', amount: 2_000_000 },
  ];
  // Generate an emission schedule: block heights vs reward per block and cumulative supply
  const emissionData: any[] = [];
  let supply = 10_000_000; // initial premine
  let reward = 25;
  const tailReward = 0.25;
  for (let i = 0; i <= 100; i += 2) {
    // compute supply and reward at this checkpoint (every 2 blocks for brevity)
    if (supply < 100_000_000) {
      supply += reward * 2;
      reward = reward * Math.pow(0.9991, 2); // 0.09% decay per block approximated
      if (reward < tailReward) reward = tailReward;
    }
    emissionData.push({
      block: i,
      reward: parseFloat(reward.toFixed(2)),
      supply: Math.min(supply, 100_000_000),
    });
  }

  return (
    <div className="relative bg-black text-white">
      {/* Hero */}
      <FramedSection bg="/assets/image17.png" position="center" height="pt-44 pb-56">
        <h1 className="text-4xl font-bold mb-6 text-cyan-300">Tokenomics</h1>
        <p className="max-w-3xl mx-auto text-gray-100">
          AlynCoin’s monetary policy balances scarcity, fairness and sustainability. The total
          supply is capped at <span className="text-white font-semibold">100 million ALYN</span>.
          At genesis, 10 million ALYN were pre‑mined and distributed to strategic stakeholders
          as detailed below. Block rewards decline exponentially as circulating supply approaches
          the cap, with a permanent tail emission to incentivise miners in perpetuity.
        </p>
      </FramedSection>

      {/* Content */}
      <section className="section max-w-6xl mx-auto space-y-20 py-16">
        <p className="text-gray-300 text-center max-w-3xl mx-auto">
          Additionally, a portion of every transaction fee is burned and another portion funds ongoing development via the
          DAO treasury.
        </p>
        {/* Distribution Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-teal-400 uppercase tracking-wider">Allocation</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-teal-400 uppercase tracking-wider">Amount (ALYN)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {premine.map((row) => (
                <tr key={row.allocation} className="bg-black bg-opacity-40 hover:bg-black hover:bg-opacity-60">
                  <td className="px-4 py-3 text-sm text-white">{row.allocation}</td>
                  <td className="px-4 py-3 text-sm text-right text-gray-300">{row.amount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Emission Schedule Chart */}
        <DualLineChart
          data={emissionData}
          xDataKey="block"
          lines={[{ dataKey: 'reward', label: 'Block Reward (ALYN)', color: '#14b8a6' }, { dataKey: 'supply', label: 'Total Supply', color: '#6366f1' }]}
          yLabel="ALYN"
          title="Emission Schedule & Total Supply"
        />
      </section>
    </div>
  );
}
