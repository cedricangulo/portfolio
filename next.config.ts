import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: "/about",
				destination: "/#about",
				permanent: true,
			},
			{
				source: "/works",
				destination: "/#works",
				permanent: true,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
			},
			{
				protocol: "https",
				hostname: "sow4xmup6y.ufs.sh",
				port: "",
				pathname: "/f/**",
			},
		],
	},
};

export default nextConfig;
