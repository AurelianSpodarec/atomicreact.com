// import { Frontmatter, } from "types/frontmatter";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

function DocPage({ children, frontMatter,}:any) {
    const { title, } = frontMatter;
    // console.log(frontMatter);
    return (
        <div>
            <h1>hi</h1>
            <p>{title}</p>
            
            <div>
                {children}        
            </div>
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