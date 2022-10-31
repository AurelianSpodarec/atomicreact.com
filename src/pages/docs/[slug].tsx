import React from "react";
import fs from "fs";
import path from "path";

import { bundleMDX, } from "mdx-bundler";
import { getMDXComponent, } from "mdx-bundler/client";
 
import smartypants from "remark-smartypants";
import rehypePrism from "rehype-prism-plus";
import LayoutDocs from "@pages/_components/layouts/LayoutDocs";


import { slugifyWithCounter, } from "@sindresorhus/slugify";

import { components, } from "./MDXComponnts";

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

export default function Post({ code, frontmatter, mdxSource,}:any) {
    const Component = React.useMemo(() => getMDXComponent(code), [code,]);
    const { title, description, } = frontmatter;
    
    let tableOfContents = mdxSource
        ? collectHeadings(code)
        : [];
    
    console.log(tableOfContents);
    return (
        <LayoutDocs pageProps={{code, frontmatter, mdxSource,}}>
            <div >
                <div>
                    <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">{title}</h1>
                    <p className="lead">{description}</p>
                </div>

                <Component components={components as any}  />
            </div>
        </LayoutDocs>
    );
};


export async function getStaticPaths() {
    const files = fs.readdirSync(path.join("src", "data", "docs"));
  
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".mdx", ""),
        },
    }));
  
    return {
        paths,
        fallback: false,
    };
}



const ROOT_PATH = process.cwd();
export const DATA_PATH = path.join(ROOT_PATH, "src/data");

export async function getStaticProps(context:any) {
    const mdxSource = fs.readFileSync(path.join(DATA_PATH, "docs", `${context.params.slug}.mdx`), "utf8");
    // const mdxSource = "## Hello World";
    
    const result = await bundleMDX({
        source: mdxSource,
        mdxOptions(options) {
            options.remarkPlugins = [...(options.remarkPlugins ?? []), [smartypants,],];
            options.rehypePlugins = [...(options.rehypePlugins ?? []), [rehypePrism,],];
            return options;
        },
    });

    return {
        props: {
            code: result.code,
            frontmatter: result.frontmatter,
            mdxSource,
        },
    };
}