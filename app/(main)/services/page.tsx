import SearchFilterBar from "@/Components/services/SearchFilterBar";
import ServiceCard from "@/Components/services/ServiceCard";
import Container from "@/Components/shared/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Care.XYZ - Services",
  description:
    "Explore our range of caregiving services tailored to your needs.",
};

export const servicesData = [
  {
    _id: "child-care",
    title: "Child Care",
    description:
      "Trusted babysitters and nannies for children of all ages. We ensure a safe, engaging, and fun environment for your little ones.",
    image: "/images/child-care.png",
    avgPrice: "$20",
  },
  {
    _id: "elderly-care",
    title: "Elderly Care",
    description:
      "Compassionate caregivers providing daily assistance, companionship, and medical support for seniors at home.",
    image: "/images/elderly-care.png",
    avgPrice: "$18",
  },
  {
    _id: "special-needs",
    title: "Special Needs Care",
    description:
      "Professional caregivers trained to support individuals with physical or mental special needs.",
    image: "/images/special-needs.png",
    avgPrice: "$25",
  },
  {
    _id: "pet-care",
    title: "Pet Care",
    description:
      "Reliable pet sitters and walkers to ensure your pets are happy, healthy, and well cared for.",
    image: "/images/pet-care.png",
    avgPrice: "$15",
  },
  {
    _id: "housekeeping",
    title: "Housekeeping",
    description:
      "Experienced housekeepers to keep your home clean, organized, and comfortable.",
    image: "/images/housekeeping.png",
    avgPrice: "$12",
  },
];

export default function page() {
  return (
    <div className="pt-10 pb-10">
      <Container>
        <SearchFilterBar />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {servicesData.map((item) => (
            <ServiceCard
              key={item._id}
              _id={item._id}
              title={item.title}
              description={item.description}
              image={item.image}
              avgPrice={item.avgPrice}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
