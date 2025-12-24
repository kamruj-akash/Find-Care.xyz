import ServiceCardSkeleton from "@/Components/services/ServiceCardSkeleton";
import Container from "@/Components/shared/Container";

export default function loading() {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-10 p-10">
        {[...Array(10)].map((_, index) => (
          <ServiceCardSkeleton key={index} />
        ))}
      </div>
    </Container>
  );
}
