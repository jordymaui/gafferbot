"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/predictions", label: "Predictions" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-[#1e1e1e] sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/gaffer-pfp-blue.jpg"
            alt="The Gaffer"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="font-bold text-lg hidden sm:inline">The Gaffer</span>
        </Link>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? "text-white font-medium"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
