import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize, } from "next-mdx-remote/serialize";
import { MDXRemote, } from "next-mdx-remote";
import Header from "@pages/_components/Header";
import Navigation from "@pages/_components/Navigation";
import Button from "@components/atoms/Button/Button";
import Prose from "@components/components/Prose";


const components = { Button, Prose,};

function DocPage({ children, frontMatter, mdxSource,}:any) {
    const { title, description,} = frontMatter;
   
    return (
        <div>
            <Header />
            <Navigation />

            <main className="lg:pl-[310px]">
                <div>
                    <h1>{title}</h1>
                    <span>{description}</span>
                </div>
                <div>
                    <MDXRemote {...mdxSource} components={components} />
                </div>
            </main>
            <aside>

            </aside>
        </div>
    );  
}

const getStaticPaths = async () => {
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
};

const getStaticProps = async ({ params: { slug,}, }:any) => {
    const markdownWithMeta = fs.readFileSync(path.join("src", "data", "docs", slug + ".mdx"), "utf-8");
  
    const { data: frontMatter, content, } = matter(markdownWithMeta);
    const mdxSource = await serialize(content);
  
    return {
        props: {
            frontMatter,
            slug,
            mdxSource,
        },
    };
};
  
export { getStaticProps, getStaticPaths, };
export default DocPage;