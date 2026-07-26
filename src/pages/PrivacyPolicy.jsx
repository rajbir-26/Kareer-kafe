import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen bg-[#FFFBD4] text-[#2C221E] px-6 py-12 md:px-16 md:py-20 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        
        <h1 className="text-3xl sm:text-4xl font-bold border-b border-[#A90E02]/20 pb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 font-semibold">Last Updated: July 26, 2026</p>

        <p>
          Welcome to KareerKafe ("we," "our," or "us"). We respect your privacy and are committed to being transparent about how our website works.
        </p>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">1. Who We Are</h2>
          <p>
            KareerKafe is a free job aggregation platform that helps job seekers discover job opportunities. We do not require users to log in or create an account to browse or apply for jobs.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">2. Information We Collect</h2>
          <p>
            Since KareerKafe does not require login or signup, we do not collect personal information like your name, email, or phone number directly.
          </p>
          <p>
            However, like most websites, we may automatically collect limited technical information when you visit, including:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your IP address</li>
            <li>Browser type and device information</li>
            <li>Pages visited and time spent on our site</li>
            <li>General location (city/country level, not exact address)</li>
          </ul>
          <p>
            This is collected through standard analytics tools (like Google Analytics) and advertising partners (like Google AdSense).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">3. Cookies</h2>
          <p>Our website uses cookies — small text files stored on your device — to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand how visitors use our site (via Google Analytics)</li>
            <li>Show relevant ads through third-party ad networks (like Google AdSense)</li>
          </ul>
          <p>
            Third-party ad providers may use cookies to serve ads based on your prior visits to this or other websites. You can opt out of personalized advertising by visiting Google's Ads Settings.
          </p>
          <p>By continuing to use KareerKafe, you consent to the use of cookies as described here.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">4. Third-Party Links</h2>
          <p>
            KareerKafe displays job listings and redirects users to external company websites or job application pages to apply. We are not responsible for the privacy practices or content of these external websites. We encourage you to review their privacy policies separately.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">5. Job Listings Disclaimer</h2>
          <p>
            Job listings on KareerKafe are manually curated by our team from publicly available sources. We do our best to ensure accuracy, but we do not guarantee that all information (such as salary, requirements, or deadlines) is fully up to date. Please verify details directly with the employer before applying.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">6. Advertising</h2>
          <p>
            KareerKafe may display ads served by third-party companies, such as Google AdSense. These companies may use cookies or similar technologies to serve ads based on your visits to this and other websites.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">7. Children's Privacy</h2>
          <p>
            KareerKafe is not directed at children under 13, and we do not knowingly collect information from children.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">9. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, feel free to reach out at:</p>
          <p className="font-semibold text-[#A90E02]">📧 baatkosamjhoo@gmail.com</p>
        </section>

      </div>
    </div>
  );
}