import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SamSora",
  description: "Trang web này có thể chia sẻ, đăng tải video dễ dàng",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
