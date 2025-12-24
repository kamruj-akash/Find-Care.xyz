import { ArrowRight, Check, Heart, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Mission() {
  const features = [
    {
      icon: Check,
      title: "Verified Professionals",
      description:
        "Strict vetting process including ID verification and reference checks.",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      icon: Heart,
      title: "Compassionate Matching",
      description:
        "We match you based on personality and needs, not just availability.",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image with Floating Card */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/mission-image.jpg"
                alt="Caregiver with elderly person"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Safety Card */}
            <div className="absolute bottom-8 left-8 bg-white rounded-xl shadow-2xl p-6 max-w-xs">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 rounded-lg p-3 shrink-0">
                  <Shield className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">100% Safety</h4>
                  <p className="text-sm text-gray-600">
                    Every caregiver undergoes rigorous background checks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <div className="mb-4">
              <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">
                OUR MISSION
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Empowering Families with Trusted Care
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We believe everyone deserves compassionate care. Our platform
              connects you with professionals who treat your loved ones like
              family. Whether its specialized medical assistance or simply a
              friendly face, we are here to help.
            </p>

            {/* Features List */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className={`${feature.iconBg} rounded-lg p-3 shrink-0`}
                    >
                      <IconComponent
                        className={`w-6 h-6 ${feature.iconColor}`}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Read More Link */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:text-blue-600 transition-colors group"
            >
              Read our full story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
