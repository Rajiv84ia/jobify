/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        API:'http://65.1.91.24:30002/api/v1'
    },
    images:{
        domains:['res.cloudinary.com']
    }
};

export default nextConfig;
