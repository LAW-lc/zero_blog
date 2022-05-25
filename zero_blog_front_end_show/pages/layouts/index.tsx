import { ReactElement } from "react";

import Navbar from "@/pages/layouts/navbar";
import Footer from "@/pages/layouts/footer";

interface LayoutProps {
  children: ReactElement
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex co">
      <Navbar />
      <main className="pt-4">{children}</main>
      <Footer />
    </div>
  );
}
