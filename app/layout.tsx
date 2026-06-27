import Header from "@/components/Header";
import "./globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <main className="min-h-screen text-gray-400">
          {/*Header*/}
          <Header />
          <div className="container py-10">{children}</div>
        </main>
      </body>
    </html>
  );
};

export default Layout;
