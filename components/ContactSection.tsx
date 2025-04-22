'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="bg-gray-900 text-white px-6 py-20 border-t border-gray-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">📬 Contact & Collaboration</h2>
        <p className="mb-3 text-gray-300">
          AlynCoin is a private, community-driven initiative built by passionate contributors across the world.
          While our core GitHub repositories remain private for now, we are selectively onboarding developers,
          cryptographers, and early supporters aligned with our mission.
        </p>
        <p className="mb-6 text-gray-300">
          If you're an investor, researcher, or builder interested in shaping the future of quantum-secure decentralized systems,
          we welcome your collaboration.
        </p>

        <div className="mb-6 text-sm text-gray-400 space-y-1">
          <p><strong>Email:</strong> <a href="mailto:contact@alyncoin.com" className="text-blue-400 hover:underline">contact@alyncoin.com</a></p>
          <p><strong>Twitter:</strong> <a href="https://twitter.com/alyncoin" target="_blank" className="text-blue-400 hover:underline">@alyncoin</a></p>
          <p><strong>Instagram:</strong> <a href="https://instagram.com/alyncoin_official" target="_blank" className="text-blue-400 hover:underline">@alyncoin_official</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/ab1567/alyncoin-site" target="_blank" className="text-blue-400 hover:underline">github.com/ab1567/alyncoin-site</a></p>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 transition rounded"
            onClick={() => setShowForm(!showForm)}
          >
            🤝 Become a Contributor
          </button>
          <a
            href="/downloads/pitch_deck.pdf"
            target="_blank"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition rounded text-white"
          >
            📄 View Pitch Deck
          </a>
        </div>

        {showForm && (
          <form
            action="https://formspree.io/f/mwkgrygq"
            method="POST"
            className="grid gap-4 mt-10 bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Join the AlynCoin Mission</h3>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="px-4 py-2 rounded bg-gray-900 border border-gray-700"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="px-4 py-2 rounded bg-gray-900 border border-gray-700"
            />
            <select
              name="interest"
              required
              className="px-4 py-2 rounded bg-gray-900 border border-gray-700"
            >
              <option value="" disabled selected>Select one</option>
              <option value="investment">💸 Investing / Funding</option>
              <option value="development">💻 Technical Contribution</option>
              <option value="design">🎨 Design / UI / Branding</option>
              <option value="marketing">📢 Community / Marketing</option>
              <option value="other">🌍 Something else</option>
            </select>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us more..."
              required
              className="px-4 py-2 rounded bg-gray-900 border border-gray-700"
            />
            <button type="submit" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition rounded text-white">
              Submit Application
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
