'use client';

export default function CommunityPage() {
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
      {/* Community intro using new image16 */}
      <FramedSection bg="/assets/image16.png" position="center" height="pt-44 pb-56">
        <h2 className="text-4xl font-bold mb-6 text-cyan-300">👥 Our Community</h2>
        <p className="mb-4 text-gray-100">
          AlynCoin is fueled by a growing community of developers, miners and researchers.
          Join our forums and social channels to help shape the network from the ground up.
        </p>
      </FramedSection>

      {/* Call to action with previously unused image11 */}
      <FramedSection bg="/assets/image11.png" position="center">
        <h2 className="text-4xl font-bold mb-6 text-cyan-300">🤝 Get Involved</h2>
        <p className="mb-4 text-gray-100">
          Participate in discussions, contribute code or help test upcoming releases.
          Early supporters get exclusive resources and testnet invitations.
        </p>
        <a
          href="mailto:team@alyncoin.com"
          className="inline-block mt-4 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full"
        >
          Contact Us
        </a>
      </FramedSection>
    </div>
  );
}
