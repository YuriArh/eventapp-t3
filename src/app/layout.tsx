import "~/styles/globals.css";
import "maplibre-gl/dist/maplibre-gl.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
