import Link from "next/link";

export default function Services() {
  return (
    <div>
      <h3>next js services page</h3>

      <div className="font-sans flex items-center justify-items-center p-8 gap-8 sm:p-20">
        <Link href="/" className="text-blue-500 underline">
          Go to Back
        </Link>
        <Link href="/home" className="text-blue-500 underline">
          Go to Home
        </Link>
      </div>

      <div className="font-sans flex items-center justify-items-center p-8 gap-8 sm:p-20">
        <Link href="/services/web-service" className="text-blue-500 underline">
          Go to Web Service
        </Link>
        <Link href="/services/app-service" className="text-blue-500 underline">
          Go to App Service
        </Link>
      </div>
    </div>
  );
}
