import React from "react";
import fs from "fs";
import path from "path";

import { bundleMDX, } from "mdx-bundler";
import { getMDXComponent, } from "mdx-bundler/client";

import Button from "@components/atoms/Button/Button";
// import { getAllPosts, getSinglePost, } from "@utils/mdx";


// import { serialize, } from "next-mdx-remote/serialize";
import smartypants from "remark-smartypants";
import rehypePrism from "rehype-prism-plus";
// export const prepareMDX = async (source: string, files?: Record<string, string>) => { 
//     const {code,} = await bundleMDX(source, {
//         files,
//     });

//     return code;
// };




export default function Post({ code, frontmatter, }:any) {
    const Component = React.useMemo(() => getMDXComponent(code), [code,]);

    return (
        <div >
            <Component components={Button as any} />
        </div>
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

export async function getStaticProps(context:any) {
    const mdx = "## Hello World";
    // mdxSource - needs to be dynamic

    const result = await bundleMDX({
        source: mdx,
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

// export const getStaticProps = async ({ params, }) => {
//     const post = await getSinglePost(params.slug);
//     return {
//         props: { ...post, },
//     };
// };

// export const getStaticPaths = async () => {
//     const paths = getAllPosts().map(({ slug, }) => ({ params: { slug, }, }));
//     return {
//         paths,
//         fallback: false,
//     };
// };

// export default Post;
// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// import { getMDXComponent, } from "mdx-bundler/client";
// import Header from "@pages/_components/Header";
// import Navigation from "@pages/_components/Navigation";
// import Button from "@components/atoms/Button/Button";
// import Prose from "@components/components/Prose";
// import { bundleMDX, } from "mdx-bundler";
// import { useMemo, } from "react";
// import { getAllPosts, getSinglePost, } from "@utils/mdx";
 

// function DocPage({ code, children, frontMatter, mdxSource,}:any) {
//     // const { title, description,} = frontMatter;
//     const Component = useMemo(() => getMDXComponent(code), [code,]);
//     return (
//         <div>
//             <Header />
//             <Navigation />

//             <main className="lg:pl-[310px]">
//                 {/* <div>
//                     <h1>{title}</h1>
//                     <span>{description}</span>
//                 </div> */}
//                 <div>
//                     <Component />
//                     {/* <MDXRemote {...mdxSource} components={components} /> */}
//                 </div>
//             </main>
//             <aside>

//             </aside>
//         </div>
//     );  
// }

// export const getStaticProps = async ({ params, }:any) => {
//     const post = await getSinglePost(params.slug);
//     return {
//         props: { ...post, },
//     };
// };

// export const getStaticPaths = async () => {
//     const paths = getAllPosts().map(({ slug, }) => ({ params: { slug, }, }));
//     return {
//         paths,
//         fallback: false,
//     };
// };

// // const getStaticPaths = async () => {
// //     const files = fs.readdirSync(path.join("src", "data", "docs"));
  
// //     const paths = files.map(filename => ({
// //         params: {
// //             slug: filename.replace(".mdx", ""),
// //         },
// //     }));
  
// //     return {
// //         paths,
// //         fallback: false,
// //     };
// // };

// // const blogDirectory = path.join(process.cwd(), "blog");
// // const getStaticProps = async ({ params: { slug,}, }:any) => {
// //     const fullPath = path.join(blogDirectory, `${slug}.mdx`);
// //   const source = fs.readFileSync(fullPath, "utf8");

// //   const { code, frontmatter } = await bundleMDX(source: source, {
// //     xdmOptions(options) {
// //       options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
// //       options.rehypePlugins = [...(options?.rehypePlugins ?? []), rehypePrism];
// //       return options;
// //     },
// //   });

// //   return {
// //     slug,
// //     frontmatter,
// //     code,
// //   };
// // const markdownWithMeta = fs.readFileSync(path.join("src", "data", "docs", slug + ".mdx"), "utf-8");
  
// // const { data: frontMatter, content, } = matter(markdownWithMeta);
// // // const mdxSource = await serialize(content);
  
    
// // return {
// //     props: {
// //         frontMatter,
// //         slug,
// //         // mdxSource,
// //     },
// // };
// // };
  
// // export { getStaticProps, getStaticPaths, };
// export default DocPage;