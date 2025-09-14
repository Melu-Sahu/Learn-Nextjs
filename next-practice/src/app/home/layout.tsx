import React from "react";



export const metadata = {
    title : "Home Page"
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <h4>Home Layout</h4>
      <div>{children}</div>
    </>
  );
}
