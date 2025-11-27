/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'engineering.dena.com',
            },
            {
                protocol: 'https',
                hostname: 'trap.jp',
            },
        ],
    },
}

module.exports = nextConfig
