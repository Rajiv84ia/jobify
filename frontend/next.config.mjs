/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        API:'http://3.110.175.148:30002/api/v1'
    },
    images:{
        domains:['res.cloudinary.com']
    }
};

export default nextConfig;
