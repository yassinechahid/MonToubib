import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Mon Toubib",
  description: "Mon Toubib, la solution innovante pour faciliter l'accès aux soins !",
};


export default async function LocaleLayout({ children }) {
  


  return (
    <html lang="fr">
      <body className="font-roboto">
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
