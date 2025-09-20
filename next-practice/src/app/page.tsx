import Link from "next/link";

export default function App() {
  return (
    <div className="">
      <h3>next js app page</h3>

      <div className="font-sans  h-[40vh]">
        <h6 className="text-3xl font-bold underline text-center">
          Below are example of route groups
        </h6>
        <div className="flex justify-center items-center gap-4">
          (auth) is route group for login and signup page
          <Link className="text-blue-500 underline" href={'/signup'}>Sign UP Page</Link>
          <Link className="text-blue-500 underline" href={'/login'}>Login Page</Link>
        </div>
      </div>

      <div className="font-sans flex items-center justify-items-center  p-8 gap-8 sm:p-20">
        <Link href="/home" className="text-blue-500 underline">
          Go to Home
        </Link>
        <Link href="/services" className="text-blue-500 underline">
          Go to Services
        </Link>

        <Link href={'/products'} className="text-blue-500 underline">
          Go To Products Page
        </Link>
      </div>
    </div>
  );
}
