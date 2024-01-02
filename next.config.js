/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
}


module.exports = nextConfig

const withVideos = require('next-videos')
module.exports = withVideos()
