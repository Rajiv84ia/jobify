/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        API:'http://3.111.217.181/api/v1'
    },
    images:{
        domains:['res.cloudinary.com']
    }
};

export default nextConfig;
