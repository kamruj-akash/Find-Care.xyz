import { Baby, HeartPulse, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: Baby,
      title: "Baby & Child Care",
      description: "Experienced babysitters and nannies for newborns to teenagers. Safe, engaging, and fun care for your little ones.",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
      link: "/services/baby-child-care"
    },
    {
      icon: Users,
      title: "Elderly Care",
      description: "Compassionate support for seniors including companionship, medication reminders, and mobility assistance.",
      iconBg: "bg-green-50",
      iconColor: "text-green-500",
      link: "/services/elderly-care"
    },
    {
      icon: HeartPulse,
      title: "Special Needs",
      description: "Specialized care for individuals with disabilities or chronic conditions, delivered by trained professionals.",
      iconBg: "bg-pink-50",
      iconColor: "text-pink-500",
      link: "/services/special-needs"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive care solutions tailored to every stage of life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                {/* Icon */}
                <div className={`${service.iconBg} rounded-xl p-4 inline-flex mb-6`}>
                  <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:text-blue-600 transition-colors group"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}