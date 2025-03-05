import React from "react";
import Footer from "../Footer/Footer";

const TermsAndCondition = () => {
  const date = new Date();
  const formattedDate = `${String(date.getDate()).padStart(2, "0")}/${String(
    date.getMonth() + 1
  ).padStart(2, "0")}/${date.getFullYear()}`;

  // console.log(formattedDate); // Example output: 05/03/2025

  return (
    <>
      <div className="text-white flex flex-col my-[8rem] gap-6">
        <h1 className="text-2xl font-[500]">Terms and Conditions</h1>
        <p className="text-white/60 text-md">Effective Date: {formattedDate}</p>
        <p className="text-white/60 text-md">
          Welcome to DataCove AI. These Terms and Conditions govern your use of
          our website, platform, and services. By accessing or using DataCove
          AI, you agree to comply with these terms. If you do not agree with any
          part of these terms, please refrain from using our services.
        </p>

        <div>
          <h2 className="text-2xl font-[500] mb-4">1. Definitions</h2>
          <p className="text-white/60 text-md">
            “DataCove AI” refers to our platform, website, and all associated
            services.
          </p>
          <p className="text-white/60 text-md">
            “User” refers to any individual or entity accessing or using our
            services.
          </p>
          <p className="text-white/60 text-md">
            “AI Processing” refers to the automated document analysis,
            summarization, and validation functionalities provided by DataCove
            AI.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-[500] mb-4">2. Use of Services</h2>
          <h3 className="text-xl font-[500] mb-4">2.1 Eligibility</h3>
          <p className="text-white/60 text-md">
            You must be at least 18 years old or have the legal capacity to
            enter into an agreement. By using DataCove AI, you confirm that all
            information provided is accurate and truthful.
          </p>
          <h3 className="text-xl font-[500] mb-4">2.2 Permitted Use</h3>
          <p className="text-white/60 text-md">
            DataCove AI is intended for lawyers, consultants, professionals, and
            businesses seeking AI-driven document analysis. Users must not
            misuse the platform, including but not limited to:
          </p>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-6">
            <li>Uploading illegal, defamatory, or harmful content.</li>
            <li>Attempting to reverse-engineer or hack into the platform.</li>
            <li>Using the service for unethical or unlawful activities.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-[500] mb-4">
            3. AI Processing & Data Handling
          </h2>
          <h3 className="text-xl font-[500] mb-4">3.1 No Legal Advice</h3>
          <p className="text-white/60 text-md">
            DataCove AI provides automated AI-driven document analysis but does
            not replace professional legal, financial, or regulatory advice.
            Users should consult professionals before making critical decisions
            based on AI-generated outputs.
          </p>
          <h3 className="text-xl font-[500] mb-4">
            3.2 Data Privacy & Protection
          </h3>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-6">
            <li>We do not sell or share user data.</li>
            <li>
              All documents processed through our platform are encrypted and
              stored securely.
            </li>
            <li>
              Personally identifiable information (PII) is automatically
              redacted before any AI model processes data.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-[500] mb-4">
            4. Payment, Subscription & Cancellation
          </h2>
          <h3 className="text-xl font-[500] mb-4">4.1 Pricing & Billing</h3>
          <p className="text-white/60 text-md">
            Certain features require a paid subscription. Pricing details are
            available on our website, and charges will be billed in accordance
            with the chosen plan.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-[500] mb-4">
            5. Intellectual Property Rights
          </h2>
          <p className="text-white/60 text-md">
            All trademarks, logos, and branding associated with DataCove AI are
            our exclusive property. Users retain ownership of their uploaded
            documents and any AI-generated outputs. Unauthorized use, copying,
            or distribution of DataCove AI’s services is strictly prohibited.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-[500] mb-4">
            6. Limitation of Liability & Disclaimers
          </h2>
          <p className="text-white/60 text-md">
            DataCove AI is provided “as is” and “as available” without
            warranties of any kind. We do not guarantee 100% accuracy of
            AI-generated outputs.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-[500] mb-4">
            7. Termination & Account Suspension
          </h2>
          <p className="text-white/60 text-md">
            Users who violate these terms may have their accounts suspended or
            terminated without prior notice. We reserve the right to take
            appropriate legal action against fraudulent or malicious activities.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-[500] mb-4">
            8. Governing Law & Dispute Resolution
          </h2>
          <p className="text-white/60 text-md">
            These Terms and Conditions are governed by the laws of [Insert
            Jurisdiction]. Any disputes shall be resolved through
            mediation/arbitration before legal proceedings. Users agree to
            resolve disputes in [Insert Preferred Jurisdiction].
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-[500] mb-4">
            9. Changes to These Terms
          </h2>
          <p className="text-white/60 text-md">
            DataCove AI reserves the right to update or modify these terms at
            any time. Users will be notified of significant changes through
            email or platform announcements. Continued use of our services after
            updates constitutes acceptance of the new terms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-[500] mb-4">10. Contact Information</h2>
          <p className="text-white/60 text-md">
            For any questions regarding these Terms and Conditions, please
            contact us at:
          </p>
          <p className="text-white/60 text-md">
            📧{" "}
            <a href="mailto:info@datacove.ai" className="text-blue-400">
              info@datacove.ai
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndCondition;
