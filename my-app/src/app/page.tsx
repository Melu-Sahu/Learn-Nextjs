import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      App


      <Link href={'/users/1'}>Users 1</Link>
      <Link href={'/users/2'}>Users 2</Link>
      <Link href={'/users/3'} replace >Users 3 & Replace</Link>
    </div>
  );
}