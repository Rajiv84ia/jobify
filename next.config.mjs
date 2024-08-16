/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        API:'http://localhost:3000/api/v1'
    },
    images:{
        domains:['res.cloudinary.com']
    }
};

export default nextConfig;
