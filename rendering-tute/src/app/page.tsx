import Link from "next/link";

export default function Home() {
  
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold text-center">Welcome to the Product Store</h1>

      Explore Products Below
     
      <div className=" text-center flex gap-2 text-gray-500">
        Image by{" "}
        <Link href={"/products/soap"} className="underline">Soap</Link>
        <Link href={"/products/shampoo"} className="underline">Shampoo</Link>
        <Link href={"/products/lotion"} className="underline">Lotion</Link>
        <Link href={"/products/conditioner"} className="underline">Conditioner</Link>
        <Link href={"/products/toothpaste"} className="underline">Toothpaste</Link>
        <Link href={"/products/mouthwash"} className="underline">Mouthwash</Link>
        <Link href={"/products/floss"} className="underline">Floss</Link>
        <Link href={"/products/deodorant"} className="underline">Deodorant</Link>
        </div>
    </div>
  );
}
