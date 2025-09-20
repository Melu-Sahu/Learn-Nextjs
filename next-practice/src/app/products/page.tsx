import Link from "next/link";

export default async function Products() {
  return (
    <>
      <Link href="/" className="text-blue-500 underline mt-3">
        {" "}
        &lt; To Back to Home
      </Link>
    </>
  );
}
