import { ReactNode } from "react";
import { Footer } from "../components/common/Footer";
import { Header } from "../components/common/Header";

interface LayoutProps {
  children: ReactNode;
  currentPath: string;
  navigate: (path: string) => void;
}

export const Layout = ({ children, currentPath, navigate }: LayoutProps) => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <Header currentPath={currentPath} navigate={navigate} />

    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);
