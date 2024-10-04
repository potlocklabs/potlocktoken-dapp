// app/layout.tsx
import './globals.css'; // Import your global styles
import { ReactNode } from 'react';
import Sidebar from './components/Sidebar'; // Adjust the path as necessary

export const metadata = {
  title: 'PotLockToken',
  description: 'Your dApp for PotLockToken',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        {/* You can add meta tags or links to external stylesheets here */}
      </head>
      <body>
        <Sidebar /> {/* Render the Sidebar component */}
        <main className="ml-64 p-6"> {/* Adjust margin-left to accommodate sidebar */}
          {children} {/* This will render your page content */}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
