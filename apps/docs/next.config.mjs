import remarkPrism from 'remark-prism'
import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/introduction',
        permanent: true,
      },
    ]
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkPrism, remarkGfm],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
