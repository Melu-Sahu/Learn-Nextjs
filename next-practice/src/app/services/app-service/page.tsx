import Link from "next/link";

export default function AppService() {
  return (
    <div>
      <h3>next js app page</h3>

      <div className="font-sans flex items-center justify-items-center  p-8 gap-8 sm:p-20">
        <Link href="/home" className="text-blue-500 underline">
          Go to Home
        </Link>
        <Link href="/services" className="text-blue-500 underline">
          Go to Services
        </Link>
      </div>
    </div>
  );
}
