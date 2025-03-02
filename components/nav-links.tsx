"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/language-context";

export function NavLinks() {
  const { t } = useLanguage();
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/"
        className={`text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium ${
          pathname === "/" ? "text-[#295548] font-semibold" : ""
        }`}
      >
        {t.nav.home}
      </Link>
      <Link
        href="/#about"
        className={`text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium ${
          pathname === "/" && pathname.includes("#about")
            ? "text-[#295548] font-semibold"
            : ""
        }`}
      >
        {t.nav.about}
      </Link>
      <Link
        href="/events"
        className={`text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium ${
          pathname === "/events" ? "text-[#295548] font-semibold" : ""
        }`}
      >
        {t.nav.events}
      </Link>
      <Link
        href="/gallery"
        className={`text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium ${
          pathname === "/gallery" ? "text-[#295548] font-semibold" : ""
        }`}
      >
        {t.nav.gallery}
      </Link>
      <Link
        href="/rooms"
        className={`text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium ${
          pathname === "/rooms" ? "text-[#295548] font-semibold" : ""
        }`}
      >
        {t.nav.rooms}
      </Link>
      <Link
        href="/careers"
        className={`text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium ${
          pathname === "/careers" ? "text-[#295548] font-semibold" : ""
        }`}
      >
        {t.nav.careers}
      </Link>
      <Link
        href="/resident-portal"
        className={`text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium ${
          pathname === "/resident-portal" ? "text-[#295548] font-semibold" : ""
        }`}
      >
        {t.nav.residentPortal}
      </Link>
    </>
  );
}
