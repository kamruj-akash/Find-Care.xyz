import { Clock, LucideIcon, Shield, Smile, Star } from "lucide-react";

interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
  bgColor: string;
  iconColor: string;
}

export default function Stats() {
  const stats: StatItem[] = [
    {
      icon: Shield,
      value: "5,000+",
      label: "Verified Carers",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      icon: Smile,
      value: "10k+",
      label: "Families Served",
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Average Rating",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-500",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Support Available",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className={`${stat.bgColor} rounded-lg p-3 shrink-0`}>
                    <IconComponent className={`w-8 h-8 ${stat.iconColor}`} />
                  </div>

                  <div>
                    <div className="text-2xl font-bold text-gray-800 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
