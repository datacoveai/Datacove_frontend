import React from "react";
import Footer from "../Footer/Footer";

const TermsAndCondition = () => {
  return (
    <>
      <div className="text-white flex flex-col my-[8rem] gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-[500]">Terms and Conditions</h1>
          <p className="text-white/60 text-md">
            Welcome to Datacove AI. By accessing or using our website and
            services, you agree to comply with and be bound by the following
            terms and conditions. Please read them carefully. If you do not
            agree to these terms, you should not use our website or services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-[500] mb-4">Booking Rules</h2>
          <h3 className="text-[1rem] font-[500] mb-4 ml-4">
            Demo Session Booking
          </h3>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-6">
            <li>Demo sessions can be booked based on availability.</li>
            <li>
              Reservations must be made through our online booking system.
            </li>
            <li>Cancellations must be made at least 24 hours in advance.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[1rem] font-[500] mb-4 ml-4">
            AI Purchase Policy
          </h3>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-6">
            <li>
              All AI solutions and services are sold as per the listed price.
            </li>
            <li>
              Custom AI development requires prior consultation and approval.
            </li>
            <li>
              Refunds are not applicable once the AI service is delivered.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-[500] mb-4">Privacy Policy</h3>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-6">
            <li>Datacove AI is committed to protecting user privacy.</li>
            <li>
              Any data collected, including name, email, and payment details,
              will be used solely for service provision and will not be shared
              with third parties without consent.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-[500] mb-4">Liability</h3>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-6">
            <li>
              Datacove AI is not responsible for any business decisions made
              using our AI services.
            </li>
            <li>
              Users acknowledge that AI-generated outputs may not always be 100%
              accurate.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-[500] mb-4">Amendments</h3>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-6">
            <li>
              Datacove AI reserves the right to modify these terms at any time.
            </li>
            <li>
              Users will be notified of significant changes via email or website
              updates.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-[500] mb-4">Contact Information</h3>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-6">
            <li>If you have any questions, please contact us at:</li>
            <li>
              Email:{" "}
              <a href="mailto:info@datacove.ai" className="text-blue-400">
                info@datacove.ai
              </a>
            </li>
            <li>Phone: +1 9052915453</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndCondition;
