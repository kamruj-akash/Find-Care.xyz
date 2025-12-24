import Footer from "@/Components/shared/Footer";
import Navbar from "@/Components/shared/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Care.XYZ",
    template: "Care.XYZ - %s",
  },
  description: "Your health companion app",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
