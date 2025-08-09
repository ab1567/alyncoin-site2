"use client";

export default function DownloadsPage() {
  return (
    <div className="section max-w-4xl mx-auto space-y-12">
      <h1 className="section-title">Downloads</h1>
      <p className="max-w-3xl mx-auto text-gray-300 text-center mb-8">
        Access the latest resources to learn more about AlynCoin or get started with mining once
        the official miner is released. All downloads are provided free of charge for community members.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="bg-black bg-opacity-50 border border-gray-700 rounded-xl p-6 flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-white mb-4">Whitepaper</h3>
          <p className="text-sm text-gray-300 mb-4">
            Dive deep into AlynCoin’s architecture, consensus and monetary policy. The whitepaper details the
            technical decisions underpinning the network.
          </p>
          <a
            href="/alyncoin-whitepaper.pdf"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full font-medium"
            download
          >
            Download Whitepaper
          </a>
        </div>
        <div className="bg-black bg-opacity-50 border border-gray-700 rounded-xl p-6 flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-white mb-4">Pitch Deck</h3>
          <p className="text-sm text-gray-300 mb-4">
            A concise overview of AlynCoin’s vision, roadmap and investment opportunities. Perfect for investors
            and partners.
          </p>
          <a
            href="/alyncoin-pitch-deck.pdf"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full font-medium"
            download
          >
            Download Pitch Deck
          </a>
        </div>
      </div>
      <div className="bg-black bg-opacity-50 border border-gray-700 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Miner (Coming September&nbsp;2025)</h3>
        <p className="text-sm text-gray-300">
          Our official miner will be released in September 2025. Join our newsletter to be notified as soon as it’s available.
        </p>
      </div>
    </div>
  );
}