export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-700 mt-16 py-8 px-4 md:px-8 dark:bg-black dark:bg-opacity-80 backdrop-blur-md">
      <div className="mx-auto max-w-screen-xl text-center text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} AlynCoin. All rights reserved.
        </p>
        <p className="mt-2">
          Built with ❤ by the AlynCoin community.{' '}
          <a
            href="https://github.com/ab1567/alyncoin-site2"
            className="text-teal-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contribute on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}