/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      API_URL: 'http://localhost:8000',
    },
    modularizeImports: {
      "react-bootstrap": {
        transform: "react-bootstrap/{{member}}",
      },
      lodash: {
        transform: "lodash/{{member}}",
      },
    },
};

export default nextConfig;
