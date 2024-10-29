import { Footer } from "./footer";
import { Header } from "./header";
import { Navbar } from "./navbar";

interface layoutPropTypes {
  children: React.ReactNode;
}

export const LandingPageLayout = ({ children }: layoutPropTypes) => {
  return (
    <div className="flex flex-col">
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
