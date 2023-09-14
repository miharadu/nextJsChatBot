/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', //https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
    // reactStrictMode: true, Since Next.js 13.4, Strict Mode is true by default with app router, so the above configuration is only necessary for pages.
    // https://nextjs.org/docs/pages/api-reference/next-config-js/reactStrictMode
}

module.exports = nextConfig
