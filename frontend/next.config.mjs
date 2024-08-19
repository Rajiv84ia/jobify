/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        API:'http://backendsvc:80/api/v1'
    },
    images:{
        domains:['res.cloudinary.com']
    }
};

export default nextConfig;
