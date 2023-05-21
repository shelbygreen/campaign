// These styles apply to every route in the application
import './globals.css';
 
export const metadata = {
  title: 'Shelby Green',
  description: 'Shelby is a recovering politician, researcher, and software developer in Tallahasse, Florida.',
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}