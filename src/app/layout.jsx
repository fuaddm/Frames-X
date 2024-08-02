import "./styles/main.css";

export const metadata = {
  title: "Frames X",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
