import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="text-2xl text-blue-500">💙</span>
              <span className="text-xl font-semibold text-gray-900">
                Care.xyz
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-gray-500">
              Connecting families with verified, compassionate caretakers for
              babysitting, elderly care, and special needs assistance.
            </p>

            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border text-sm text-gray-600 hover:bg-gray-100">
                FB
              </span>
              <span className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border text-sm text-gray-600 hover:bg-gray-100">
                TW
              </span>
              <span className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border text-sm text-gray-600 hover:bg-gray-100">
                IG
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Services</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link
                  href="/services/babysitting"
                  className="hover:text-blue-600"
                >
                  Babysitting
                </Link>
              </li>
              <li>
                <Link href="/services/elderly" className="hover:text-blue-600">
                  Elderly Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services/special-needs"
                  className="hover:text-blue-600"
                >
                  Special Needs
                </Link>
              </li>
              <li>
                <Link href="/services/pet-care" className="hover:text-blue-600">
                  Pet Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services/housekeeping"
                  className="hover:text-blue-600"
                >
                  Housekeeping
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Company</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-blue-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/safety" className="hover:text-blue-600">
                  Safety & Trust
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Newsletter</h4>
            <p className="mb-4 text-sm text-gray-500">
              Subscribe for care tips and updates.
            </p>

            <div className="flex items-center">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-l-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-blue-500"
              />
              <button className="flex h-10 w-12 items-center justify-center rounded-r-lg bg-blue-500 text-white hover:bg-blue-600">
                ➜
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>© 2023 Care.xyz. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-600">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
