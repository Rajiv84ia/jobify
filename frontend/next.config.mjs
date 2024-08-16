/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        API:'http://13.235.185.253:8090/api/v1'
    },
    images:{
        domains:['res.cloudinary.com']
    }
};

export default nextConfig;
