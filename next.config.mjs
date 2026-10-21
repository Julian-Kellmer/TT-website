/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'drive.google.com', // imágenes viejas de Google Drive
      'qnhsrnglvaunsayzempx.supabase.co', // fotos de productos de la base nueva (Supabase Storage)
    ],
  },
};

export default nextConfig;
