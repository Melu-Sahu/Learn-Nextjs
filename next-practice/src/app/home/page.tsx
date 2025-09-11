import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h3>next js home page</h3>

      <div className="font-sans flex items-center justify-items-center  p-8 gap-8 sm:p-20">
        <Link href="/" className="text-blue-500 underline">
          Go to Back
        </Link>
        <Link href="/services" className="text-blue-500 underline">
          Go to Services
        </Link>
      </div>
    </div>
  );
}
