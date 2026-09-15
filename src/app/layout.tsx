import type { Metadata, Viewport } from "next";
import { Noto_Serif, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-serif-scholarly",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-sans-viet",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Bản đồ hình thành tư tưởng Hồ Chí Minh · HCM202 (Nhóm 5)",
  description: "Website tương tác học thuật chuyên sâu về các cơ sở hình thành, vai trò từng nhân tố và 5 giai đoạn phát triển tư tưởng Hồ Chí Minh. Bài tập nhóm môn HCM202 - Nhóm 5.",
  keywords: ["Tư tưởng Hồ Chí Minh", "HCM202", "Bản đồ hình thành tư tưởng", "Lịch sử Việt Nam", "Giáo trình 2019"],
  authors: [{ name: "Nhóm 5 - HCM202" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${notoSerif.variable} ${beVietnamPro.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FAF7F2] text-[#1C2024] font-sans selection:bg-[#8B1E1E]/20 selection:text-[#8B1E1E]">
        {children}
      </body>
    </html>
  );
}
