import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
	output: 'export',
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	basePath: process.env.NODE_ENV === 'production' ? '/freya_portfolio' : '',
	assetPrefix: process.env.NODE_ENV === 'production' ? '/freya_portfolio/' : '',
};

export default withContentlayer(nextConfig);
