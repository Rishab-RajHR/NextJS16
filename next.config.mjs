/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images : {
      domains : ['images.gstatic.com']
  },
    // output: "export"
    redirects : async () => {
        return [
           {
               source: '/redirection',
               destination : '/',
               permanent: false
           },
        ]
    }
};

export default nextConfig;
