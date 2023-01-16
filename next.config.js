/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	compiler: {
		styledComponents: {
			displayName: true,
			ssr: true,
		},
	},
};

module.exports = nextConfig;

