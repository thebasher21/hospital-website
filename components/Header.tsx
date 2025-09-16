"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn, getBasePath } from "@/lib/utils";
import { useNavigation } from "@/lib/client-utils";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState("");
    const pathname = usePathname();
    const { handleNavigation } = useNavigation();

    // Update currentPath when pathname changes
    useEffect(() => {
        if (pathname) {
            // Normalize the pathname to handle GitHub Pages base path
            let normalizedPath = pathname;

            // Remove GitHub Pages base path if present
            if (
                process.env.NODE_ENV === "production" &&
                pathname.startsWith("/hospital-website")
            ) {
                normalizedPath = pathname.replace("/hospital-website", "");
            }

            // If path ends up empty, it's the home page
            if (normalizedPath === "") normalizedPath = "/";

            setCurrentPath(normalizedPath);
        }
    }, [pathname]);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            handleMenuToggle();
        }
    };

    // Navigation links with their paths
    const navLinks = [
        { name: "header.menu.home", path: "/", label: "Home" },
        { name: "header.menu.aboutUs", path: "/about-us", label: "About Us" },
        {
            name: "header.menu.specialities",
            path: "/specialities",
            label: "Specialities",
        },
        { name: "header.menu.services", path: "/services", label: "Services" },
        { name: "header.menu.doctors", path: "/doctors", label: "Doctors" },
        {
            name: "header.menu.outreachProgrammes",
            path: "/outreach-programmes",
            label: "Outreach Programmes",
        },
        { name: "header.menu.gallery", path: "/gallery", label: "Gallery" },
        {
            name: "header.menu.donations",
            path: "/donations",
            label: "Donations",
        },
        {
            name: "header.menu.contactUs",
            path: "/contact-us",
            label: "Contact Us",
        },
    ];

    // Check if a path matches the current path
    const isLinkActive = (linkPath: string): boolean => {
        // Normal matching - exact path match
        if (linkPath === currentPath) return true;

        // Special case for nested paths - check if it's a subpath
        if (linkPath !== "/" && currentPath.startsWith(linkPath)) return true;

        return false;
    };

    // Trigger loading state before navigation
    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        handleNavigation(e, "/");
    };

    return (
        <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 transition-colors">
            <div className="container mx-auto px-4 py-3">
                {/* Mobile header layout */}
                <div className="flex items-center justify-between lg:hidden">
                    <Link
                        href={getBasePath("/")}
                        aria-label="SADH Care Hospital Home"
                        className="flex-shrink-0"
                        onClick={handleLogoClick}
                    >
                        <div className="relative h-16 w-48">
                            <Image
                                src={getBasePath(
                                    "/images/logos/hospitalLogo.png"
                                )}
                                alt="SADH Care Hospital Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    <div className="flex items-center gap-4">
                        <ThemeToggle />

                        <button
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                            onClick={handleMenuToggle}
                            onKeyDown={handleKeyDown}
                            tabIndex={0}
                        >
                            <div
                                className={cn(
                                    "w-6 h-5 flex flex-col justify-between",
                                    isMenuOpen && "relative"
                                )}
                            >
                                <span
                                    className={cn(
                                        "bg-current h-0.5 w-full transition-all",
                                        isMenuOpen && "absolute top-2 rotate-45"
                                    )}
                                ></span>
                                <span
                                    className={cn(
                                        "bg-current h-0.5 w-full transition-all",
                                        isMenuOpen && "opacity-0"
                                    )}
                                ></span>
                                <span
                                    className={cn(
                                        "bg-current h-0.5 w-full transition-all",
                                        isMenuOpen &&
                                            "absolute top-2 -rotate-45"
                                    )}
                                ></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile navigation menu */}
                <div
                    className={cn(
                        "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
                        isMenuOpen
                            ? "max-h-[500px] opacity-100 mt-4"
                            : "max-h-0 opacity-0 mt-0"
                    )}
                >
                    <nav className="py-2">
                        <ul className="flex flex-col gap-3">
                            {navLinks.map((link) => {
                                const isActive = isLinkActive(link.path);
                                return (
                                    <li key={link.path}>
                                        <Link
                                            href={getBasePath(link.path)}
                                            className={cn(
                                                "flex items-center justify-center px-4 py-1.5 rounded-md text-sm font-medium transition-colors",
                                                isActive
                                                    ? "bg-blue-600 text-white dark:bg-blue-700"
                                                    : "text-gray-700 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-blue-400"
                                            )}
                                            aria-current={
                                                isActive ? "page" : undefined
                                            }
                                            onClick={(e) =>
                                                handleNavigation(e, link.path)
                                            }
                                        >
                                            <span data-i18n={link.name}>
                                                {link.label}
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>

                {/* Desktop header layout - adjusted for single line */}
                <div className="hidden lg:flex items-center h-[70px]">
                    {/* Logo on left */}
                    <div className="flex-shrink-0 mr-2">
                        <Link
                            href={getBasePath("/")}
                            aria-label="SADH Care Hospital Home"
                            onClick={handleLogoClick}
                        >
                            <div className="relative h-16 w-48 sm:w-52">
                                <Image
                                    src={getBasePath(
                                        "/images/logos/hospitalLogo.png"
                                    )}
                                    alt="SADH Care Hospital Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Navigation in center - adjusted to ensure single line */}
                    <nav className="flex-1 flex justify-center mx-1 sm:mx-2">
                        <ul className="flex items-center justify-center gap-1 xl:gap-2">
                            {navLinks.map((link) => {
                                const isActive = isLinkActive(link.path);
                                return (
                                    <li key={link.path} className="h-10">
                                        <Link
                                            href={getBasePath(link.path)}
                                            onClick={(e) =>
                                                handleNavigation(e, link.path)
                                            }
                                            className={cn(
                                                "flex items-center justify-center h-full px-1.5 xl:px-2 py-1 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap min-w-[60px] xl:min-w-[70px]",
                                                isActive
                                                    ? "bg-blue-600 text-white dark:bg-blue-700"
                                                    : "text-gray-700 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-blue-400"
                                            )}
                                            aria-current={
                                                isActive ? "page" : undefined
                                            }
                                        >
                                            <span data-i18n={link.name}>
                                                {link.label}
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Theme toggle on right */}
                    <div className="flex-shrink-0 flex items-center space-x-2">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
            <div className="w-full bg-blue-600 text-white text-center py-4 z-100">
                <div className="marquee-text">
                    <div className="marquee-text-track">
                        <p>
                            Dialysis services available 24/7 for patients in
                            need of urgent care.
                        </p>
                        <p>
                            Our hospital is open 24/7 to cater to your medical
                            emergencies anytime.
                        </p>
                        <p>
                            Proudly supported by Mankind Pharma, ensuring
                            quality medicines and healthcare!
                        </p>
                        <p>
                            Dialysis services available 24/7 for patients in
                            need of urgent care.
                        </p>
                        <p>
                            Our hospital is open 24/7 to cater to your medical
                            emergencies anytime.
                        </p>
                        <p>
                            Proudly supported by Mankind Pharma, ensuring
                            quality medicines and healthcare!
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}
