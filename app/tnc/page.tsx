// components/TermsAndConditions.tsx
'use client';

import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Terms & Conditions</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By using our website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Use of Website</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>You must be at least 13 years old to use this site</li>
          <li>Do not misuse or attempt to hack our website</li>
          <li>All content is for personal use only</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Product Information</h2>
        <p>
          We strive to ensure accurate product descriptions, but we do not guarantee that all information is error-free. Prices and availability are subject to change.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
        <p>
          All images, logos, and content on this site are the property of Joy Junction and may not be used without permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
        <p>
          Joy Junction is not liable for any direct or indirect damages from using our website or products, including data loss or injury.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Governing Law</h2>
        <p>
          These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of the courts of [Your City, India].
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
        <p>
          For any queries regarding these terms, please contact us at{" "}
          <a href="mailto:legal@joyjunction.com" className="text-blue-600 hover:underline">
            legal@joyjunction.com
          </a>
        </p>
      </section>

      <p className="text-sm text-gray-500 mt-10 text-center">
        Last updated: July 17, 2025
      </p>
    </div>
  );
};

export default TermsAndConditions;
