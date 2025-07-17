// components/RefundPolicy.tsx
'use client';

import React from "react";

const RefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Refund & Returns Policy</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Return Window</h2>
        <p>
          You can request a return within <strong>7 days of delivery</strong> for most items if they are unused and in original packaging.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Eligibility for Returns</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Product must be unused and in original condition</li>
          <li>Must include all original tags, labels, and accessories</li>
          <li>Proof of purchase (order ID or receipt) is required</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Non-returnable Items</h2>
        <p>
          Items like personalized toys, gift cards, or clearance-sale items are non-returnable unless defective or damaged.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Refund Process</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Once we receive and inspect the item, we’ll notify you via email</li>
          <li>If approved, refund will be issued to your original payment method within 5-7 business days</li>
          <li>Shipping charges are non-refundable unless the item is defective or damaged</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">5. Contact</h2>
        <p>
          For return-related issues, contact us at{" "}
          <a href="mailto:support@joyjunction.com" className="text-blue-600 hover:underline">
            support@joyjunction.com
          </a>
        </p>
      </section>

      <p className="text-sm text-gray-500 mt-10 text-center">
        Last updated: July 17, 2025
      </p>
    </div>
  );
};

export default RefundPolicy;
