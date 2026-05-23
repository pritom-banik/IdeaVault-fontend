import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-amber-400 border-t border-black mt-10 dark:bg-[#737373]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <h1 className="text-4xl font-extrabold text-white dark:text-amber-400 [text-shadow:1px_1px_0px_#999,2px_2px_0px_#777]">
              IdeaVault
            </h1>
            <p className="text-black dark:text-white mt-2 text-sm font-medium">
              Share ideas. Build innovation. Validate together.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-xl font-bold text-black dark:text-white mb-3">Links</h2>
            <ul className="space-y-2 font-medium">
              <li>
                <Link href="/ideas" className="hover:underline text-black dark:text-white">
                  Ideas
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:underline text-black dark:text-white">
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-xl font-bold text-black dark:text-white mb-3">Contact</h2>
            <ul className="space-y-2 text-black dark:text-white font-medium">
              <li>Email: support@ideavault.com</li>
              <li>Phone: +880 123 456 789</li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col justify-start items-start">
            <h2 className="text-xl font-bold text-black dark:text-white mb-3">Stay Connected</h2>

            <div className="flex justify-center cursor-pointer text-black dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10.75 13.04c0-.57-.47-1.04-1.04-1.04s-1.04.47-1.04 1.04a1.04 1.04 0 1 0 2.08 0m3.34 2.37c-.45.45-1.41.61-2.09.61s-1.64-.16-2.09-.61a.26.26 0 0 0-.38 0a.26.26 0 0 0 0 .38c.71.71 2.07.77 2.47.77s1.76-.06 2.47-.77a.26.26 0 0 0 0-.38c-.1-.1-.27-.1-.38 0m.2-3.41c-.57 0-1.04.47-1.04 1.04s.47 1.04 1.04 1.04s1.04-.47 1.04-1.04S14.87 12 14.29 12"
                />
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m5.8 11.33c.02.14.03.29.03.44c0 2.24-2.61 4.06-5.83 4.06s-5.83-1.82-5.83-4.06c0-.15.01-.3.03-.44c-.51-.23-.86-.74-.86-1.33a1.455 1.455 0 0 1 2.47-1.05c1.01-.73 2.41-1.19 3.96-1.24l.74-3.49c.01-.07.05-.13.11-.16c.06-.04.13-.05.2-.04l2.42.52a1.04 1.04 0 1 1 .93 1.5c-.56 0-1.01-.44-1.04-.99l-2.17-.46l-.66 3.12c1.53.05 2.9.52 3.9 1.24a1.455 1.455 0 1 1 1.6 2.38"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-black mt-8 pt-4 text-center">
          <p className="text-black font-medium">
            © 2026 IdeaVault. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
