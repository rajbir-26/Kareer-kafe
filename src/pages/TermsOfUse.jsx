import React from 'react';

export default function TermsOfUse() {
  return (
    <div className="w-full min-h-screen bg-[#FFFBD4] text-[#2C221E] px-6 py-12 md:px-16 md:py-20 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        
        <h1 className="text-3xl sm:text-4xl font-bold border-b border-[#A90E02]/20 pb-4">
          Terms of Use
        </h1>
        <p className="text-sm text-gray-600 font-semibold">Last Updated: July 26, 2026</p>

        <p>
          Welcome to KareerKafe. By accessing or using our website, you agree to the following terms. Please read them carefully.
        </p>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">1. About KareerKafe</h2>
          <p>
            KareerKafe is a free job aggregation platform. We display job listings and provide direct links to apply on the employer's or original job source's website. We do not host job applications ourselves.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">2. No Account Required</h2>
          <p>
            KareerKafe does not require users to sign up, log in, or provide personal information to browse or use the site.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">3. Accuracy of Job Listings</h2>
          <p>
            While we manually curate job listings from publicly available sources to ensure quality, we cannot guarantee that every listing is accurate, current, or free of errors. Job details (salary, requirements, deadlines, etc.) should always be verified directly with the employer before applying.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">4. Not Responsible for External Sites</h2>
          <p>
            When you click "Apply," you will be redirected to an external website (the employer's site or original job posting source). KareerKafe is not responsible for the content, accuracy, security, or hiring practices of these external sites.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">5. No Guarantee of Employment</h2>
          <p>
            KareerKafe simply provides information about job openings. We do not guarantee that you will be hired, contacted, or considered for any position listed on our site.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">6. Prohibited Use</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use the site for any unlawful purpose</li>
            <li>Attempt to copy, scrape, or republish our curated content without permission</li>
            <li>Interfere with the site's normal functioning (e.g., hacking, spamming)</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">7. Employer & Recruiter Takedown Requests</h2>
          <p>
            If you are an employer or recruiter and want a listing updated or removed, please contact us at <span className="font-semibold text-[#A90E02]">baatkosamjhoo@gmail.com</span>, and we will process your request promptly.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">8. Advertising</h2>
          <p>
            KareerKafe may display ads through third-party networks like Google AdSense to keep the platform free for all users.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">9. Limitation of Liability</h2>
          <p>
            KareerKafe is provided "as is" without warranties of any kind. We are not liable for any loss, damage, or missed opportunity resulting from your use of this website or reliance on any job listing.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">10. Changes to These Terms</h2>
          <p>
            We may update these Terms of Use from time to time. Continued use of the site after changes are posted means you accept the updated terms.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">11. Contact Us</h2>
          <p>For any questions regarding these Terms, contact us at:</p>
          <p className="font-semibold text-[#A90E02]">📧 baatkosamjhoo@gmail.com</p>
        </section>

      </div>
    </div>
  );
}