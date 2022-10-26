import React from "react";
import fs from "fs";
import path from "path";

import { bundleMDX, } from "mdx-bundler";
import { getMDXComponent, } from "mdx-bundler/client";
 
import smartypants from "remark-smartypants";
import rehypePrism from "rehype-prism-plus";
import LayoutDocs from "@pages/_components/layouts/LayoutDocs";

// import { getAllPosts, getSinglePost, } from "@utils/mdx";

// const getCompiledMDX = async (content: string) => {
//     // Add your remark and rehype plugins here
//     const remarkPlugins:any = [];
//     const rehypePlugins:any = [];
  
//     try {
//         return await bundleMDX(content, {
            
//             xdmOptions(options) {
//                 options.remarkPlugins = [
//                     ...(options.remarkPlugins ?? []),
//                     ...remarkPlugins,
//                 ];
//                 options.rehypePlugins = [
//                     ...(options.rehypePlugins ?? []),
//                     ...rehypePlugins,
//                 ];
  
//                 return options;
//             },
//         });
//     } catch (error) {
//         throw new Error(error);
//     }
// };

export default function Post({ code, frontmatter, }:any) {
    const Component = React.useMemo(() => getMDXComponent(code), [code,]);
    // const { title, description, } = frontmatter;
    console.log("frontmatter", frontmatter);
    return (
        <LayoutDocs>
            <div >
                <div>
                    {/* <h1>{title}</h1>
                <span>{description}</span> */}
                </div>
                <Component />
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
    const mdxSource = fs.readFileSync(path.join(DATA_PATH, "docs", `${"button"}.mdx`), "utf8");
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
        },
    };
}