import React from "react";

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="animate-appear">
      <div></div>
      {children}
    </div>
  );
}
