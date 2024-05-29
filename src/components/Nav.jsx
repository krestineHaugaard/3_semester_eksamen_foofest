"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav() {
  const [isOpen, SetIsOpen] = useState(false);
  //samme effect som brugt i newsletter componenten, så ligger burgermenu ikke i baggrunden og er åben
  useEffect(() => {
    if (isOpen === true) {
      const timer = setTimeout(() => {
        SetIsOpen(!isOpen);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  function handleClick() {
    SetIsOpen(!isOpen);
  }
  return (
    <nav className="flex flex-col">
      <button
        onClick={handleClick}
        className="flex flex-col justify-center md:hidden py-8 self-end"
      >
        <p className="sr-only">Open main menu</p>
        <span
          className={`w-12 h-1 bg-brand-five-100 block rounded-lg transition-all duration-300 ease-out ${
            isOpen ? "rotate-45 translate-y-2" : "-translate-y-1"
          }`}
        ></span>
        <span
          className={`w-12 h-1 bg-brand-five-100 block rounded-lg my-1 transition-all duration-300 ease-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`w-12 h-1 bg-brand-five-100 block rounded-lg transition-all duration-300 ease-out ${
            isOpen ? "-rotate-45 -translate-y-2" : "translate-y-1"
          }`}
        ></span>
      </button>

      <ul
        className={`flex-col md:hidden pb-8 items-center ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <li>
          <Link
            href="/"
            prefetch={false}
            className="text-title-col hover:text-brand-two active:text-brand-five-100 text-base"
          >
            Back to front
          </Link>
        </li>
        <li className="pt-6">
          <Link
            href="/program"
            prefetch={false}
            className="text-title-col hover:text-brand-two active:text-brand-five-100 text-base"
          >
            Festival program
          </Link>
        </li>
        <li className="pt-6">
          <Link
            href="/bands"
            prefetch={false}
            className="text-title-col hover:text-brand-two active:text-brand-five-100 text-base"
          >
            Line-up
          </Link>
        </li>
        <li className="pt-6">
          <Link
            href="/booking"
            prefetch={false}
            className="text-title-col hover:text-brand-two active:text-brand-five-100 text-base"
          >
            Buy tickets
          </Link>
        </li>
      </ul>

      <ul className="hidden md:flex gap-14">
        <li>
          <Link
            href="/program"
            prefetch={false}
            className="text-title-col hover:text-brand-two active:text-brand-five-100 underline underline-offset-8 decoration-2 text-xl"
          >
            Festival program
          </Link>
        </li>
        <li>
          <Link
            href="/bands"
            prefetch={false}
            className="text-title-col hover:text-brand-two active:text-brand-five-100 underline underline-offset-8 decoration-2 text-xl"
          >
            Line-up
          </Link>
        </li>
        <li>
          <Link
            href="/booking"
            prefetch={false}
            className="text-title-col hover:text-brand-two active:text-brand-five-100 underline underline-offset-8 decoration-2 text-xl"
          >
            Buy tickets
          </Link>
        </li>
      </ul>
    </nav>
  );
}
