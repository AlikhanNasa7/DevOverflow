import React from "react";
import Link from "next/link";
import Image from "next/image";
import Theme from "./Theme";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 
    fixed z-50 w-full p-6 dark:shadow-none sm:px-12 
    shadow-light-300 gap-5">
        <Link href="/" className="flex items-center gap-2">
            <Image 
                src="/images/site-logo.svg"
                width={23}
                height={23}
                alt="DevOverflow Logo"
            />
            <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
                Dev <span className="text-primary-500">Flow</span>
            </p>
        </Link>
        <div className="relative flex items-center">
            Global Search
        </div>
        <div className="flex-between gap-5">
            <Theme/>
            <MobileNavigation/>
        </div>
    </nav>
  );
};

export default Navbar;
