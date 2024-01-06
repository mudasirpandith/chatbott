import Footer from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Providers } from "./provider";
import NextTopLoader from "nextjs-toploader";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          <NextTopLoader showSpinner={false} height={10} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
