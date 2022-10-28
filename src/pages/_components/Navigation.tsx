import Link from "next/link";
import { useRouter, } from "next/router";
import clsx from "clsx";

import { navigation, } from "@config/navigation";

function Navigation({ className, }:any) {
    let router = useRouter();

    return (
        <>
            <div className="fixed h-screen w-[310px] text-base lg:text-sm">
                <div className="relative">
                    <div className="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block"></div>

                    <nav className="sticky top-[4.5rem] -ml-0.5 pl-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto overflow-x-hidden">
                        <div className="flex-1 space-y-1 py-16 px-8">
                        
                            <div className="sticky top-0">
                                <input className="w-full" placeholder="Search" />
                            </div>
     
                            <ul role="list" className="space-y-9 text-white">
                                {navigation.map((section:any) => (
                                    <li key={section.title}>
                                        <h2 className="font-display font-medium dark:text-white">
                                            {section.title}
                                        </h2>
                        
                                        <ul
                                            role="list"
                                            className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
                                        >
                                            {section.links.map((link:any) => (
                                                <li key={link.href} className="relative">
                                                    <Link
                                                        href={link.href}
                                                        className={clsx(
                                                            "block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full",
                                                            link.href === router.pathname
                                                                ? "font-semibold text-sky-500 before:bg-sky-500"
                                                                : "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                                                        )}
                                                    >
                                                        {link.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>

                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Navigation;