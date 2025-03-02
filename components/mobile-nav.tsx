"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function MobileNav() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const [activeHash, setActiveHash] = useState("")

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash)
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/#about", label: t.nav.about },
    { href: "/events", label: t.nav.events },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/rooms", label: t.nav.rooms },
    { href: "/careers", label: t.nav.careers },
    { href: "/resident-portal", label: t.nav.residentPortal },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-lg font-medium hover:text-gray-900 transition-colors ${
                pathname === item.href || (item.href === "/#about" && activeHash === "#about")
                  ? "text-[#295548] font-semibold"
                  : "text-gray-600"
              }`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

