import React from "react";
import Footer from "../Footer/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      {" "}
      <div className="text-white flex flex-col my-[8rem] gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-[500]">Privacy Policy</h1>
          <p className="text-white/60 text-md">
            At Royal Badminton Club, we are committed to protecting the privacy
            and confidentiality of our website visitors and members. This
            Privacy Policy outlines how we collect, use, disclose, and safeguard
            your personal information when you visit our website or engage with
            our services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-[500] mb-4">Information We Collect</h2>
          <p className="text-white/60 text-md">
            We may collect personal information from you when you visit our
            website, register for membership, book courts or training sessions,
            or communicate with us via email or other channels. This may include
            but is not limited to your name, contact details, payment
            information, and any other information you voluntarily provide to
            us.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-[500] mb-4">
            How We Use Your Information
          </h2>
          <p className="text-white/60 text-md">
            We may use your personal information to:
          </p>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-4">
            <li>Provide and personalize our services.</li>
            <li>Process bookings and payments.</li>
            <li>
              Communicate with you about your bookings, membership, or
              inquiries.
            </li>
            <li>Improve our website, services, and customer experience.</li>
            <li>Comply with legal and regulatory requirements.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-[500] mb-4">Photographs and Videos</h2>
          <p className="text-white/60 text-md">
            By participating in activities at Royal Badminton Club, you consent
            to the use of your photographs and videos for promotional purposes.
            We may use these images and videos on our website, social media
            channels, marketing materials, and other promotional activities. If
            you have any concerns about the use of your images or videos, please
            contact our management team.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-[500] mb-4">
            Security of Your Information
          </h2>
          <p className="text-white/60 text-md">
            We take reasonable precautions to protect your personal information
            from unauthorized access, use, or disclosure. However, please be
            aware that no method of transmission over the internet or electronic
            storage is 100% secure, and we cannot guarantee the absolute
            security of your information.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-[500] mb-4">
            Handling of Personal Data Complaints
          </h2>
          <p className="text-white/60 text-md">
            If you believe that your personal data has been mishandled by us,
            please follow our complaint resolution procedure:
          </p>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-4">
            <li>
              Upon receiving your complaint, we will promptly acknowledge its
              receipt and respond within 30 days.
            </li>
            <li>
              We will take the necessary steps to verify the authenticity of the
              complaint and the contact details you have provided.
            </li>
            <li>
              If additional information is required to address the complaint, we
              will seek it.
            </li>
            <li>
              If applicable, we will suggest potential solutions such as
              procedures for access, correction, or other suitable remedies.
            </li>
            <li>
              If, after 30 days, we have not responded to your complaint or it
              remains unresolved to your satisfaction, you have the option to
              escalate the matter to an external dispute resolution scheme to
              which we are affiliated.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-[600] mb-4">Contact Us</h2>
          <p className="text-white/60 text-md">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or the handling of your personal information, please
            contact us at{" "}
            <a
              href="mailto:info@royalbadmintonclub.com"
              className="text-blue-400 underline"
            >
              info@royalbadmintonclub.com
            </a>
            . We are here to assist you and address any issues promptly and
            effectively.
          </p>
          <p className="text-white/60 text-md mt-2">
            Any legal notice should be mailed to:
          </p>
          <p className="text-white/60 text-md font-bold">
            40 Holtby Ave, Unit 6, Brampton, ON, L6X 2M1
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-[600] mb-4">
            Changes to this Privacy Policy
          </h2>
          <p className="text-white/60 text-md">
            We reserve the right to update or modify this Privacy Policy at any
            time without prior notice. Any changes will be effective immediately
            upon posting on our website. We encourage you to review this Privacy
            Policy periodically for any updates.
          </p>
          <p className="text-white/60 text-md font-bold mt-2">
            Last updated: 03rd February, 2024
          </p>
        </div>

        <p className="text-white/60 text-md">
          By using our website or engaging with our services, you consent to the
          terms of this Privacy Policy.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
