"use client";

import { Link } from "@/i18n/navigation";
import { ArrowRight, Menu, X } from "@deemlol/next-icons";
import Ul from "./Ul";
import User from "@/icons/User";
import Search from "./Search";
import { Heart } from "@/icons";
import Cart from "./Cart";
import { useState } from "react";

export default function NavControls() {
  const [shouldOpen, setShouldOpen] = useState(false);
  return (
    <>
      <div className="block md:hidden">
        <button
          onClick={() => setShouldOpen(!shouldOpen)}
          className="relative z-10 flex h-full items-center"
        >
          <X
            className={`${
              shouldOpen ? "translate-x-5.5" : "translate-x-[1000%]"
            }
            transition-[translate] duration-500`}
          />
          <Menu
            className={`${
              shouldOpen ? "translate-x-[1000%]" : "translate-x-0"
            } transition-[translate] duration-500`}
          />
        </button>
      </div>
      <div
        className={`${
          shouldOpen ? "backdrop-blur-[3px]" : ""
        } fixed top-0 left-0 flex h-screen w-full flex-1 md:static md:h-auto`}
      >
        <div
          className={`${
            shouldOpen ? "translate-x-[18%]" : "translate-x-[118%]"
          } flex h-full w-[85%] flex-col justify-evenly gap-8 bg-biege transition-[translate] duration-500 md:w-full md:translate-0 md:flex-row md:justify-end md:bg-transparent`}
        >
          <Ul className="flex-col gap-[clamp(calc(var(--spacing)*5),4vw,calc(var(--spacing)*16))] px-6 text-[clamp(var(--text-base),1vw,var(--text-xl))] font-medium md:mx-auto md:flex-row md:px-0">
            <Link href="/" className="flex w-full">
              <Ul.li>Home</Ul.li>
              <ArrowRight className="ml-auto md:hidden" />
            </Link>

            <Link href="/shop" className="flex w-full">
              <Ul.li>Shop</Ul.li>
              <ArrowRight className="ml-auto md:hidden" />
            </Link>

            <Link href="/about" className="flex w-full">
              <Ul.li>About</Ul.li>
              <ArrowRight className="ml-auto md:hidden" />
            </Link>

            <Link href="/contact" className="flex w-full">
              <Ul.li>Contact</Ul.li>
              <ArrowRight className="ml-auto md:hidden" />
            </Link>
          </Ul>
          <div className="flex items-center justify-center gap0 md:justify-start gap-[clamp(calc(var(--spacing)*5),2vw,calc(var(--spacing)*10))]">
            <Link href="/login">
              <User size={24} className="scale-80 md:scale-80 lg:scale-100" />
            </Link>
            <Search />
            <Link href="/wishlist">
              <Heart size={28} className="scale-80 md:scale-70 lg:scale-100" />
            </Link>
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
}
