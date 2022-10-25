import fs from "fs";
import path from "path";
import { bundleMDX, } from "mdx-bundler";

const ROOT_PATH = process.cwd();
export const DATA_PATH = path.join(ROOT_PATH, "data");


export const getMdxBySlug = async (basePath:any, slug:any) => {
    const source = fs.readFileSync(path.join(DATA_PATH, basePath, `${slug}.mdx`), "utf8");
    const { frontmatter, code, } = await bundleMDX(source, {
        xdmOptions(input:any, options:any) {
            options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkSlug, remarkHeroTemplate,];
            options.rehypePlugins = [
                ...(options.rehypePlugins ?? []),
                rehypeMetaAttribute,
  
                rehypeHighlightCode,
            ];  
  
            return options;
        },
    });
  
    return {
        frontmatter: {
            ...(frontmatter as Frontmatter),
            slug,path
            readingTime: readingTime(code),
        } as Frontmatter,
        code,
    };
};