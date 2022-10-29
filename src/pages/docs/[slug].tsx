import React from "react";
import fs from "fs";
import path from "path";

import { bundleMDX, } from "mdx-bundler";
import { getMDXComponent, } from "mdx-bundler/client";
 
import smartypants from "remark-smartypants";
import rehypePrism from "rehype-prism-plus";
import LayoutDocs from "@pages/_components/layouts/LayoutDocs";

import Button from "@components/atoms/Button/Button";
import Input from "@components/atoms/Input/Input";
import Text from "@components/atoms/Text/Text";
 
const components = {
    Button,
    Input,
    Text,
};


export default function Post({ code, frontmatter, mdxSource,}:any) {
    const Component = React.useMemo(() => getMDXComponent(code), [code,]);
    const { title, description, } = frontmatter;
    
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