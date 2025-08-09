import { ReactElement } from 'react';

interface FeatureCardProps {
  icon: ReactElement;
  title: string;
  description: string;
}

/**
 * A simple card used to showcase an individual feature. It displays
 * an icon, a title and a description. Cards use a semi‑transparent
 * background on dark mode to stand out from the page backdrop.
 */
export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-start bg-black bg-opacity-50 border border-gray-700 rounded-xl p-6">
      <div className="text-teal-400 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}