import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  _id: string;
  title: string;
  description: string;
  image: string;
  avgPrice: string;
}

const ServiceCard = ({
  _id,
  title,
  description,
  image,
  avgPrice,
}: ServiceCardProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
      {/* Image Section */}
      <div className="relative h-56 w-full bg-gray-100">
        <Image src={image} alt={title} fill className="object-cover" />

        {/* Small Icon (top-left) */}
        <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
          <span className="text-xl">😊</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>

        <p className="mb-6 text-sm leading-relaxed text-gray-600">
          {description}
        </p>

        <div className="flex items-center justify-between border-t pt-4">
          <span className="rounded-lg bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
            Avg. {avgPrice}/hr
          </span>

          <Link
            href={`/services/${_id}`}
            className="flex items-center gap-1 text-sm font-semibold text-cyan-500 hover:underline"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
