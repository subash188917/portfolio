// "use client";

// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { CiMenuFries } from "react-icons/ci";

// const links = [
//     {
//         name: "home",
//         path: "/",
//     },
//     {
//         name: "services",
//         path: "/services",
//     },
//     {
//         name: "resume",
//         path: "/resume",
//     },
//     {
//         name: "work",
//         path: "/work",
//     },
//     {
//         name: "contact",
//         path: "/contact",
//     },
// ];

// const MobileNav = () => {
//     const pathname = usePathname();

//     return (
//         <Sheet>
//             {/* Trigger for opening the menu */}
//             <SheetTrigger className="flex justify-center items-center">
//                 <CiMenuFries className="text-[32px] text-accent" />
//             </SheetTrigger>

//             {/* Mobile Navigation Content */}
//             <SheetContent className="flex flex-col">
//                 {/* Logo */}
//                 <div className="mt-32 mb-40 text-center text-2xl">
//                     <Link href="/">
//                         <h1 className="text-4xl font-semibold">
//                             Subash Madhavan<span className="text-accent">.</span>
//                         </h1>
//                     </Link>
//                 </div>

//                 {/* Navigation Links */}
//                 <nav className="flex flex-col justify-center items-center gap-8">
//                     {links.map((link, index) => (
//                         <Link
//                             href={link.path}
//                             key={index}
//                             className={`${
//                                 link.path === pathname
//                                     ? "text-accent border-b-2 border-accent"
//                                     : ""
//                             } text-xl capitalize hover:text-accent transition-all`}
//                         >
//                             {link.name}
//                         </Link>
//                     ))}
//                 </nav>
//             </SheetContent>
//         </Sheet>
//     );
// };

// export default MobileNav;
"use client";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useEffect, useState } from "react";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close sheet when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger 
        className="flex justify-center items-center"
        aria-label="Open navigation menu"
      >
        <CiMenuFries className="text-[32px] text-accent hover:text-accent/80 transition-colors" />
      </SheetTrigger>

      <SheetContent side="left" className="flex flex-col bg-background/95 backdrop-blur-sm">
        {/* Logo */}
        <div className="mt-20 mb-20 lg:mt-32 lg:mb-40 text-center">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <h1 className="text-4xl font-semibold">
              Subash Madhavan<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <SheetClose asChild key={index}>
              <Link
                href={link.path}
                className={`${
                  link.path === pathname
                    ? "text-accent border-b-2 border-accent"
                    : "text-white/90"
                } text-xl capitalize hover:text-accent transition-all`}
                aria-current={link.path === pathname ? "page" : undefined}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;