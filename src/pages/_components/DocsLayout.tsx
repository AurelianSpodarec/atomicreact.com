import { useCallback, useEffect, useState, } from "react";
import Link from "next/link";
import { useRouter, } from "next/router";
import Navigation from "./Navigation";
import Prose from "@components/components/Prose";
// import clsx from "clsx";



const navigation = [
    {
        title: "Introduction",
        links: [
            { title: "Getting started", href: "/", },
            { title: "Installation", href: "/docs/installation", },
        ],
    },
    {
        title: "Core concepts",
        links: [
            { title: "Understanding caching", href: "/docs/understanding-caching", },
            {
                title: "Predicting user behavior",
                href: "/docs/predicting-user-behavior",
            },
            { title: "Basics of time-travel", href: "/docs/basics-of-time-travel", },
            {
                title: "Introduction to string theory",
                href: "/docs/introduction-to-string-theory",
            },
            { title: "The butterfly effect", href: "/docs/the-butterfly-effect", },
        ],
    },
    {
        title: "Advanced guides",
        links: [
            { title: "Writing plugins", href: "/docs/writing-plugins", },
            { title: "Neuralink integration", href: "/docs/neuralink-integration", },
            { title: "Temporal paradoxes", href: "/docs/temporal-paradoxes", },
            { title: "Testing", href: "/docs/testing", },
            { title: "Compile-time caching", href: "/docs/compile-time-caching", },
            {
                title: "Predictive data generation",
                href: "/docs/predictive-data-generation",
            },
        ],
    },
    {
        title: "API reference",
        links: [
            { title: "CacheAdvance.predict()", href: "/docs/cacheadvance-predict", },
            { title: "CacheAdvance.flush()", href: "/docs/cacheadvance-flush", },
            { title: "CacheAdvance.revert()", href: "/docs/cacheadvance-revert", },
            { title: "CacheAdvance.regret()", href: "/docs/cacheadvance-regret", },
        ],
    },
    {
        title: "Contributing",
        links: [
            { title: "How to contribute", href: "/docs/how-to-contribute", },
            { title: "Architecture guide", href: "/docs/architecture-guide", },
            { title: "Design principles", href: "/docs/design-principles", },
        ],
    },
];

 

function DocsLayout({ children, title, tableOfContents, }:any) {
    let router = useRouter();
    let isHomePage = router.pathname === "/";
    let allLinks = navigation.flatMap((section) => section.links);
    let linkIndex = allLinks.findIndex((link) => link.href === router.pathname);
    let previousPage = allLinks[linkIndex - 1];
    let nextPage = allLinks[linkIndex + 1];
    let section = navigation.find((section) =>
        section.links.find((link) => link.href === router.pathname)
    );
   
    return (
        <>
            <div className="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12">

                <div className="hidden lg:relative lg:block lg:flex-none">
                    <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
                    <div className="absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
                    <div className="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block" />
                    <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto overflow-x-hidden py-16 pl-0.5">
                        <Navigation
                            navigation={navigation}
                            className="w-64 pr-8 xl:w-72 xl:pr-16"
                        />
                    </div>
                </div>

                <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
                    <article>
                        {(title || section) && (
                            <header className="mb-9 space-y-1">
                                {section && (
                                    <p className="font-display text-sm font-medium text-sky-500">
                                        {section.title}
                                    </p>
                                )}
                                {title && (
                                    <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
                                        {title}
                                    </h1>
                                )}
                            </header>
                        )}
                        <Prose>{children}</Prose>
                    </article>

                    
                </div>
                
            </div>
        </>
    );
}

export default DocsLayout;