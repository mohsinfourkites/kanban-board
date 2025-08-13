import "./globals.css";
import React from "react";

export const metadata = {
  title: "Kanban Board",
  description: "Jira-like Kanban MVP"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="p-4 border-b bg-white">
          <h1 className="text-xl font-semibold">Kanban</h1>
        </div>
        {children}
      </body>
    </html>
  );
}