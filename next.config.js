/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    images: {
        domains: ['res.cloudinary.com'],
    },
}

module.exports = nextConfig
