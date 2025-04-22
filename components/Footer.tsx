export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 px-6 py-16 border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">📬 Contact & Collaboration</h2>
          <p className="mb-2">We welcome devs, researchers, and builders who believe in quantum-secure systems.</p>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><strong>Email:</strong> <a href="mailto:contact@alyncoin.com" className="hover:underline">contact@alyncoin.com</a></li>
            <li><strong>Twitter:</strong> <a href="https://twitter.com/alyncoin" target="_blank" className="hover:underline">@alyncoin</a></li>
            <li><strong>Instagram:</strong> <a href="https://instagram.com/alyncoin_official" target="_blank" className="hover:underline">@alyncoin_official</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/ab1567/alyncoin-site" target="_blank" className="hover:underline">ab1567/alyncoin-site</a></li>
          </ul>
        </div>

        {/* Contributor Form */}
        <div>
          <h2 className="text-xl font-bold mb-4">🤝 Become a Contributor</h2>
          <form action="https://formspree.io/f/mwkgrygq" method="POST" className="space-y-4 text-sm">
            <input type="text" name="name" placeholder="Full Name" required className="w-full px-3 py-2 bg-gray-800 text-white rounded-md" />
            <input type="email" name="email" placeholder="Email" required className="w-full px-3 py-2 bg-gray-800 text-white rounded-md" />
            <select name="interest" required className="w-full px-3 py-2 bg-gray-800 text-white rounded-md">
              <option value="">I'm interested in...</option>
              <option value="investment">💸 Investing / Funding</option>
              <option value="development">💻 Technical Contribution</option>
              <option value="design">🎨 Design / UI / Branding</option>
              <option value="marketing">📢 Community / Marketing</option>
              <option value="other">🌍 Something else</option>
            </select>
            <textarea name="message" rows={4} placeholder="Tell us more..." required className="w-full px-3 py-2 bg-gray-800 text-white rounded-md"></textarea>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Submit</button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-gray-500">
        © 2025 AlynCoin. Built with quantum resistance in mind.
      </div>
    </footer>
  );
}