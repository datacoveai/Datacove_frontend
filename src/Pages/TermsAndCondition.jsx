import React from "react";
import Footer from "../Footer/Footer";

const TermsAndCondition = () => {
  return (
    <>
      <div className="text-white flex flex-col my-[8rem] gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-[500]">Terms and Conditions</h1>
          <p className="text-white/60 text-md">
            Welcome to the Royal Badminton Club. By accessing or using our
            website and services, you agree to comply with and be bound by the
            following terms and conditions. Please read them carefully. If you
            do not agree to these terms, you should not use our website or
            services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-[500] mb-4">Booking Rules</h2>
          <h3 className="text-[1rem] font-[500] mb-4 ml-4">Slot Reservation</h3>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-6">
            <li>
              Slots can be reserved on an hourly basis. (No 30 minutes slots)
            </li>
            <li>Reservations can be made through our online booking system.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[1rem] font-[500] mb-4 ml-4">
            Slot Availability
          </h3>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-6">
            <li>Slot availability is on a first-come, first-served basis.</li>
            <li>
              The club reserves the right to cancel or modify reservations due
              to unforeseen circumstances.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[1rem] font-[500] mb-4 ml-4">Payment</h3>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-6">
            <li>
              Payments must be made at the time of booking for any paid
              reservations.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[1rem] font-[500] mb-4 ml-4">
            Cancellations and Refunds
          </h3>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-6">
            <li>
              Members may cancel their reservations up to 48 hours in advance
              without any penalty.
            </li>
            <li>
              Cancellations made within 48 hours of the reservation time may be
              subject to a cancellation fee.
            </li>
            <li>
              Refunds for cancellations will be processed according to the
              club’s refund policy.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-[500] mb-4">Court Rental</h3>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-6">
            <li>
              If the court booking is not made through our website, the court
              rental fee must be received at least 48 hours before your booking
              time, or the court will be cancelled.
            </li>
            <li>
              All booking cancellations and/or refunds require 48 hours notice.
            </li>
            <li>Only proper badminton shoes are allowed on our courts.</li>
            <li>
              The club is not responsible for any injury, losses, and damages
              incurred during the use of facilities or participating in
              activities.
            </li>
            <li>The maximum number of people is 6 per court.</li>
            <li>
              Non-club coaches or multi-shuttle training are not allowed at the
              club.
            </li>
            <li>
              Please keep the courts clean; any drinks and food are not allowed
              on the courts.
            </li>
            <li>Please change your shoes before entering the club.</li>
            <li>Lost and found items will only be kept for 2 weeks.</li>
            <li>Smoking or e-cigarettes are not allowed in the club.</li>
            <li>Pets are not allowed in the club.</li>
            <li>
              We will adjust your court numbers according to the specific
              operational situation.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-[500] mb-4">
            Private Lessons & Team Training
          </h3>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-6">
            <li>All courses are non-transferable and non-refundable.</li>
            <li>
              48 hours notice is required for cancellation, otherwise, the club
              will deduct one lesson fee.
            </li>
            <li>
              The club is not responsible for any injury, losses, and damages
              incurred during the use of facilities or participating in
              activities.
            </li>
            <li>
              Parents or students will be notified if the club changes any
              original lessons; otherwise, the lessons will be held at the
              original time, including holidays and festivals.
            </li>
            <li>
              In case of absence, the club will still deduct one lesson fee.
            </li>
            <li>
              The package for all team training must be utilized within the
              designated time.
            </li>
            <li>
              The team training discount is only applicable to the purchase of
              the whole semester.
            </li>
            <li>
              Coaches cannot be designated across levels. The club will
              appropriately arrange a private coach according to the student’s
              level.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-[500] mb-4">Code of Conduct</h3>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-6">
            <li>
              Members are expected to behave in a respectful and sportsmanlike
              manner at all times.
            </li>
            <li>
              Any form of harassment, abuse, or unsportsmanlike conduct will not
              be tolerated and may result in suspension or termination of
              membership.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-[500] mb-4">Liability</h3>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-6">
            <li>
              The Royal Badminton Club is not responsible for any personal
              injury, loss, or damage to personal property that occurs on the
              club premises.
            </li>
            <li>Members participate in activities at their own risk.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-[500] mb-4">Privacy Policy</h3>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-6">
            <li>
              The Royal Badminton Club is committed to protecting the privacy of
              its members.
            </li>
            <li>
              Personal information collected during membership registration and
              slot bookings will be used solely for club purposes and will not
              be shared with third parties without consent.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-[500] mb-4">Amendments</h3>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-6">
            <li>
              The Royal Badminton Club reserves the right to amend these terms
              and conditions at any time.
            </li>
            <li>
              Members will be notified of any significant changes via email or
              through announcements on our website.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-[500] mb-4">Contact Information</h3>
          <ul className="text-white/60 text-md list-disc list-outside mt-2 ml-6">
            <li>
              If you have any questions or concerns about these terms and
              conditions, please contact us at:
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:info@royalbadmintonclub.com"
                className="text-blue-400"
              >
                info@royalbadmintonclub.com
              </a>
            </li>
            <li>Phone: +1 905-960-4881</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndCondition;
