import Link from "next/link";
import Ul from "./Ul";
import Image from "next/image";
import { Heart, User } from "@/icons";
import Search from "./Search";
import Cart from "./Cart";

export default function NavBar() {
  return (
    <div className="flex justify-between py-8">
      <div className="flex items-center justify-center gap-3">
        <Image
          src="/iconsSvgs/Logo.svg"
          alt="Logo"
          className="mb-[3px]"
          width={50}
          height={50}
          unoptimized
        />
        <Link href="/">
          <h1 className="font-mont text-3xl font-bold">Furniro</h1>
        </Link>
      </div>{" "}
      <Ul className="font-medium">
        <Link href="/">
          <Ul.li>Home</Ul.li>
        </Link>

        <Link href="/shop">
          <Ul.li>Shop</Ul.li>
        </Link>

        <Link href="/about">
          <Ul.li>About</Ul.li>
        </Link>

        <Link href="/contact">
          <Ul.li>Contact</Ul.li>
        </Link>
      </Ul>
      <div className="flex items-center gap-10">
        <Link href="/login">
          <User size={24} />
        </Link>
        <Search />
        <Link href="/wishlist">
          <Heart size={28} />
        </Link>
        <Cart />
      </div>
    </div>
  );
}

{
  /**
        <button>
          <Image src="/icons/User.svg" width={24} height={24} alt="Login" />
        </button>
        <button>
          <Image src="/icons/Loop.svg" alt="Search" width={26} height={26} />
        </button>
        <button>
          <Image src="/icons/Heart.svg" alt="Wishlist" width={26} height={26} />
        </button>
        <button>
          <Image src="/icons/Cart.svg" alt="Cart" width={26} height={26} />
        </button>
   */
}
