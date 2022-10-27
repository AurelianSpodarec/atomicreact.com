/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
        return [
            {
                source: "/docs",
                destination: "/docs/installation",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;

// const withMDX = require("@next/mdx")({
//     extension: /\.mdx?$/,
//     options: {
//         providerImportSource: "@mdx-js/react",
//         remarkPlugins: [],
//         rehypePlugins: [],
//     // If you use `MDXProvider`, uncomment the following line.
//     // providerImportSource: "@mdx-js/react",
//     },
// });

// module.exports = withMDX({
//     // Append the default value with md extensions
//     pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx",],
// });

