import React from "react";
import Footer from "../Footer/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="text-white flex flex-col my-[8rem] gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-[500]">Privacy Policy</h1>
          <p className="text-white/60 text-md">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
          <p className="text-white/60 text-md">
            Welcome to DataCove AI. We are committed to protecting your privacy
            and ensuring the security of your data. This Privacy Policy outlines
            how we collect, use, store, and safeguard your information while
            maintaining compliance with GDPR (General Data Protection
            Regulation) and PIPEDA (Personal Information Protection and
            Electronic Documents Act). By using our services, you agree to the
            terms outlined in this Privacy Policy.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-[500] mb-4">1. Information We Collect</h2>
          <p className="text-white/60 text-md">
            We collect the following types of information to provide and improve
            our services:
          </p>
          <div className="text-white/60 text-md mt-2 ml-4">
            <h3 className="text-lg font-[500] mb-2">
              1.1 Personal Information (Only When Necessary)
            </h3>
            <ul className="list-disc list-outside ml-4">
              <li>
                Name, email address, phone number (when signing up or contacting
                us)
              </li>
              <li>
                Billing information (if applicable for subscriptions or paid
                services)
              </li>
            </ul>

            <h3 className="text-lg font-[500] mb-2 mt-4">
              1.2 Document & Data Processing Information
            </h3>
            <ul className="list-disc list-outside ml-4">
              <li>
                Files and documents you upload for AI-powered analysis and
                processing
              </li>
              <li>
                Metadata related to your uploaded documents, such as file type,
                date of submission, and processing status
              </li>
            </ul>

            <h3 className="text-lg font-[500] mb-2 mt-4">
              1.3 Usage & Technical Information
            </h3>
            <ul className="list-disc list-outside ml-4">
              <li>
                Log data, including IP addresses, browser type, operating
                system, and usage patterns to improve service performance and
                security
              </li>
              <li>
                Cookies and analytics to enhance user experience (you can
                opt-out via browser settings)
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-[500] mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-white/60 text-md">
            We use your information strictly to provide and improve our
            services, ensuring security and compliance:
          </p>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-4">
            <li>
              Processing and analyzing documents securely while maintaining
              strict data protection protocols
            </li>
            <li>
              Eradicating sensitive information before AI model processing,
              ensuring that no personal or confidential data is shared with
              third-party AI models
            </li>
            <li>
              Ensuring compliance with regulatory frameworks (GDPR, PIPEDA) by
              anonymizing and securing document data
            </li>
            <li>
              Improving AI accuracy and efficiency without storing personally
              identifiable or confidential data beyond necessary processing
            </li>
            <li>
              Providing customer support and service enhancements while
              maintaining user privacy
            </li>
            <li>
              Conducting internal research and analytics to optimize system
              performance and user experience
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-[500] mb-4">
            3. Data Security & Protection Measures
          </h2>
          <p className="text-white/60 text-md">
            We implement industry-standard security measures to protect your
            data from unauthorized access, modification, or disclosure:
          </p>
          <div className="text-white/60 text-md mt-2 ml-4">
            <h3 className="text-lg font-[500] mb-2">Security Protocols</h3>
            <ul className="list-disc list-outside ml-4">
              <li>
                Data Encryption: All uploaded documents and processed outputs
                are encrypted at rest and in transit using AES-256 encryption
              </li>
              <li>
                Secure Data Storage: Documents are stored securely in ISO
                27001-compliant cloud infrastructure (e.g., AWS S3 with
                restricted access policies)
              </li>
              <li>
                Access Control: Only authorized personnel have limited access to
                data for troubleshooting and support, with strict role-based
                authentication
              </li>
              <li>
                Automatic Data Erasure: We do not store documents longer than
                required. All files are automatically deleted from our servers
                within 180 days after processing, unless users choose to retain
                them
              </li>
              <li>
                AI Processing Compliance: Any data processed by AI models is
                scrubbed of sensitive and personally identifiable information
                before being used in LLM models, ensuring compliance with GDPR
                and PIPEDA
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-[500] mb-4">
            4. Data Sharing & Third-Party Policies
          </h2>
          <p className="text-white/60 text-md">
            We do NOT sell, rent, or share your personal data with third parties
            for marketing or any other purposes. Your documents and private
            information remain confidential.
          </p>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-4">
            <li>
              Third-Party AI Models: Data is not shared with external AI
              providers. Instead, we use internal processing layers that
              anonymize and protect data before interacting with AI models
            </li>
            <li>
              Legal Compliance: We may share limited information only if
              required by law, such as in response to a valid legal request or
              subpoena
            </li>
            <li>
              Third-Party Services: Some analytics or security services may be
              used (e.g., Google Analytics, AWS Cloud Security) but only
              anonymized and aggregated data is shared, ensuring no personally
              identifiable information (PII) is exposed
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-[500] mb-4">
            5. Your Rights & Choices (GDPR & PIPEDA Compliance)
          </h2>
          <p className="text-white/60 text-md">
            You have full control over your data and can exercise the following
            rights:
          </p>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-4">
            <li>
              Right to Access & Portability – Request a copy of your stored data
            </li>
            <li>
              Right to Rectification – Correct or update any inaccuracies in
              your data
            </li>
            <li>
              Right to Deletion – Request deletion of your stored data unless
              legally required to retain it
            </li>
            <li>
              Right to Restrict Processing – Limit the use of your data for AI
              processing or analytics
            </li>
            <li>
              Right to Object – Withdraw consent for data processing at any time
            </li>
          </ul>
          <p className="text-white/60 text-md mt-2">
            To exercise any of these rights, contact us at{" "}
            <a
              href="mailto:info@datacove.ai"
              className="text-blue-400 underline"
            >
              info@datacove.ai
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-[500] mb-4">
            6. Data Retention & Deletion Policy
          </h2>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-4">
            <li>
              Uploaded documents are automatically deleted within 180 days after
              processing
            </li>
            <li>
              Processed AI-generated reports are stored securely, and users can
              delete them at any time
            </li>
            <li>
              If you delete your account, all associated data is permanently
              removed from our systems within 90 days
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-[500] mb-4">
            7. Cookies & Tracking Technologies
          </h2>
          <p className="text-white/60 text-md">
            We use cookies and similar tracking technologies to improve user
            experience. You can manage cookie settings in your browser.
          </p>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-4">
            <li>Essential Cookies: Required for site functionality</li>
            <li>
              Performance Cookies: Help us analyze how users interact with the
              site
            </li>
            <li>Opt-Out: Users can disable cookies via browser settings</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-[500] mb-4">
            8. Updates to this Privacy Policy
          </h2>
          <p className="text-white/60 text-md">
            We may update this policy periodically to reflect changes in
            regulations or services. The latest version will always be available
            on our website. Users will be notified of significant changes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-[500] mb-4">9. Contact Us</h2>
          <p className="text-white/60 text-md">
            For questions or concerns about this Privacy Policy, please contact
            us at:
            <a
              href="mailto:info@datacove.ai"
              className="text-blue-400 underline ml-2"
            >
              info@datacove.ai
            </a>
          </p>
        </div>

        <p className="text-white/60 text-md">
          By using our services, you consent to the terms outlined in this
          Privacy Policy.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
