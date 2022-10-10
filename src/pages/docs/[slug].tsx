import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Header from "@pages/_components/Header";
import Navigation from "@pages/_components/Navigation";

function DocPage({ children, frontMatter,}:any) {
    const { title, } = frontMatter;

    return (
        <div>
            <Header />
            <Navigation />
            
            <main className="lg:pl-[310px]">
                <h1>{title}</h1>
                {children}        
            </main>
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
    const mdxSource = await content;
  
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