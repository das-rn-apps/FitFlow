import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    fitness: [
      { name: "Workouts", href: "/categories/workouts" },
      { name: "Nutrition", href: "/categories/nutrition" },
      { name: "Equipment", href: "/categories/equipment" },
      { name: "Motivation", href: "/categories/motivation" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
    community: [
      { name: "Newsletter", href: "/newsletter" },
      { name: "Social Media", href: "/social" },
      { name: "Forums", href: "/forums" },
      { name: "Support", href: "/support" },
    ],
  };

  const socialLinks = [
    { name: "YouTube", href: "https://youtube.com/fitflow", icon: "📺" },
    { name: "Instagram", href: "https://instagram.com/fitflow", icon: "📷" },
    { name: "Twitter", href: "https://twitter.com/fitflow", icon: "🐦" },
    { name: "Facebook", href: "https://facebook.com/fitflow", icon: "📘" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4 text-center sm:text-left">
            <Link to="/" className="flex items-center justify-center sm:justify-start space-x-2">
              <div className="w-9 h-9 bg-gradient-to-r from-fitflow-blue to-fitflow-blue-light rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold">FitFlow</span>
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed">
              Your ultimate fitness and exercise blog. Discover workouts,
              nutrition tips, and motivation to help you achieve your goals.
            </p>

            {/* Social Links */}
            <div className="flex justify-center sm:justify-start space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-fitflow-blue transition-colors duration-200"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Fitness Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-lg font-semibold">Fitness</h3>
            <ul className="space-y-2">
              {footerLinks.fitness.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-lg font-semibold">Community</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-xs mb-3">
                Get the latest fitness tips delivered to your inbox.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fitflow-blue focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full px-3 py-2 bg-fitflow-blue hover:bg-fitflow-blue-dark text-white rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <div>
              <p className="text-gray-300 text-sm">
                © {currentYear} FitFlow. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Built with ❤️ for fitness enthusiasts worldwide.
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end space-x-4">
              <Link
                to="/privacy"
                className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                to="/sitemap"
                className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-10 h-10 sm:w-12 sm:h-12 bg-fitflow-blue hover:bg-fitflow-blue-dark text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
        aria-label="Scroll to top"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};
