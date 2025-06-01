import Link from "next/link";
import Image from "next/image";
import NavControls from "./NavControls";

export default function NavBar() {
  return (
    <nav className="flex justify-between px-3 py-5 md:px-5 md:py-7">
      <div className="mr-10 flex items-center justify-center gap-1 md:gap-3">
        <Image
          src="/iconsSvgs/Logo.svg"
          alt="Logo"
          className="w-[clamp(calc(var(--spacing)*6),3vw,calc(var(--spacing)*16))] md:-mt-[4px]"
          width={50}
          height={50}
          unoptimized
        />
        <Link href="/">
          <h1 className="font-mont text-[clamp(var(--text-xl),2vw,var(--text-3xl))] font-bold">
            Furniro
          </h1>
        </Link>
      </div>
      <NavControls />
    </nav>
  );
}
