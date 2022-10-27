import Link from "next/link";
import { useRouter, } from "next/router";

import { navigation, } from "@config/navigation";
import Prose from "@components/components/Prose";
import { slugifyWithCounter, } from "@sindresorhus/slugify";

import Navigation from "../Navigation";
import Header from "../Header";

 



function getNodeText(node:any) {
    let text = "";
    for (let child of node.children ?? []) {
        if (typeof child === "string") {
            text += child;
        }
        text += getNodeText(child);
    }
    return text;
}
  
function collectHeadings(nodes:any, slugify = slugifyWithCounter()):any {
    let sections = [];
  
    for (let node of nodes) {
        if (node.name === "h2" || node.name === "h3") {
            let title = getNodeText(node);
            if (title) {
                let id = slugify(title);
                node.attributes.id = id;
                if (node.name === "h3") {
                    if (!sections[sections.length - 1]) {
                        throw new Error(
                            "Cannot add `h3` to table of contents without a preceding `h2`"
                        );
                    }
                    sections[sections.length - 1].children.push({
                        ...node.attributes,
                        title,
                    });
                } else {
                    sections.push({ ...node.attributes, title, children: [], });
                }
            }
        }
  
        sections.push(...collectHeadings(node.children ?? [], slugify));
    }
  
    return sections;
}

  

function LayoutDocs({ children, title, pageProps, }:any) {

    let router = useRouter(); 

    // let allLinks = navigation.flatMap((section) => section.links);
    // let linkIndex = allLinks.findIndex((link) => link.href === router.pathname);
    // let previousPage = allLinks[linkIndex - 1];
    // let nextPage = allLinks[linkIndex + 1];

    let section = navigation.find((section) =>
        section.links.find((link) => link.href === router.pathname)
    );

    console.log("sdsd", pageProps.mdxSource);

    let tableOfContents = pageProps.mdxSource
        ? collectHeadings(pageProps.mdxSource)
        : [];
   
    console.log(tableOfContents);
    return (
        <div className="bg-slate-700">
            <Header />

            <div className="relative mx-auto flex">

                <div className="hidden lg:relative lg:block lg:flex-none">
                    <div className="sticky -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto overflow-x-hidden pb-16 pl-0.5">
                        <Navigation
                            navigation={navigation}
                            className="w-[80rem] pr-8 xl:w-72 xl:pr-16"
                        />
                    </div>
                </div>


                <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16 ml-[20rem]">
                    <article className="max-w-4xl xl:mr-[10.5rem]">
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

                    <div className="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 overflow-y-auto hidden xl:block">
                        <h2>Tale of Content</h2>

                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default LayoutDocs;