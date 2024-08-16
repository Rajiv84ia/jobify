/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        API:'http://65.2.191.9:5000/api/v1'
    },
    images:{
        domains:['res.cloudinary.com']
    }
};

export default nextConfig;
