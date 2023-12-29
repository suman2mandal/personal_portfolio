/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'udemy-certificate.s3.amazonaws.com',
            },
            {
                protocol: 'https',
                hostname: 'myportfoliodata.s3.ap-south-1.amazonaws.com',
            }
        ],
    },
}

module.exports = nextConfig
