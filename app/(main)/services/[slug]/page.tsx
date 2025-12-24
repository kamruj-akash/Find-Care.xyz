import { Star } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Service Details - Elderly Care",
  description: "Detailed information about our Elderly Care service.",
};

const ServiceDetailsPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-80 w-full">
        <Image
          src="/images/elderly-hero.jpg"
          alt="Elderly Care"
          fill
          className="object-cover"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header Card */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
                Elderly Care
              </span>

              <h1 className="mt-3 text-2xl font-bold text-gray-900">
                Professional Elderly Care Assistance
              </h1>

              <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                <span className="flex items-center gap-1 text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} />
                </span>
                <span className="font-medium text-gray-800">4.9</span>
                <span>(120 verified reviews)</span>
                <span className="ml-4">📍 San Francisco Bay Area</span>
              </div>
            </div>

            {/* About */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h2 className="mb-3 font-semibold text-gray-900">
                About this Service
              </h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Providing compassionate, verified assistance for your loved ones
                is our top priority. Our Professional Elderly Care Assistance
                service supports families with qualified caregivers who ensure
                safety, comfort, and companionship.
              </p>
            </div>

            {/* Included + Qualifications */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 font-semibold">Whats Included</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✔ Daily meal preparation</li>
                  <li>✔ Medication reminders</li>
                  <li>✔ Mobility support</li>
                  <li>✔ Light housekeeping</li>
                  <li>✔ Companionship</li>
                </ul>
              </div>

              <div className="rounded-xl bg-blue-50 p-6 shadow-sm">
                <h3 className="mb-4 font-semibold">Caretaker Qualifications</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✔ Background Checked (FBI & DOJ)</li>
                  <li>✔ Certified Nursing Assistant (CNA)</li>
                  <li>✔ CPR & First Aid Certified</li>
                  <li>✔ 5+ Years Experience</li>
                </ul>
              </div>
            </div>

            {/* How it Works */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-6 font-semibold">How it Works</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 text-center">
                <Step step="1" title="Book Online" />
                <Step step="2" title="Meet & Greet" />
                <Step step="3" title="Care Begins" />
              </div>
            </div>

            {/* FAQ */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 font-semibold">Frequently Asked Questions</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="rounded-lg border p-3">
                  Is there a minimum booking duration?
                </li>
                <li className="rounded-lg border p-3">
                  Can I interview the caretaker beforehand?
                </li>
                <li className="rounded-lg border p-3">
                  What if I need to cancel?
                </li>
              </ul>
            </div>

            {/* Reviews */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 font-semibold">Ratings & Reviews</h3>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">4.9</span>
                <span className="text-sm text-gray-600">120 reviews</span>
              </div>
            </div>
          </div>

          {/* RIGHT BOOKING CARD */}
          <div className="rounded-xl bg-white p-6 shadow-sm h-fit sticky top-10 ">
            <p className="text-sm text-gray-500">STARTING AT</p>
            <p className="text-2xl font-bold">$25 / hour</p>

            <div className="mt-4 space-y-3">
              <input
                type="date"
                className="w-full rounded-lg border px-3 py-2 text-sm"
              />
              <select className="w-full rounded-lg border px-3 py-2 text-sm">
                <option>09:00 AM</option>
              </select>
              <select className="w-full rounded-lg border px-3 py-2 text-sm">
                <option>4 Hours</option>
              </select>
            </div>

            <div className="mt-4 flex justify-between text-sm font-medium">
              <span>Total Estimate</span>
              <span>$100.00</span>
            </div>

            <button className="mt-5 w-full rounded-lg bg-blue-500 py-3 text-white font-medium hover:bg-blue-600">
              Request Booking →
            </button>

            <p className="mt-2 text-xs text-center text-gray-500">
              You won’t be charged yet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;

/* ---------- Step Component ---------- */
const Step = ({ step = "1", title = "Book Online" }) => {
  return (
    <div>
      <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500 text-blue-500 font-semibold">
        {step}
      </div>
      <p className="font-medium">{title}</p>
    </div>
  );
};
