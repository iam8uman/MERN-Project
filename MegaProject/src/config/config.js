const config = {
  appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
  appwritePID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDBID: String(import.meta.env.VITE_APPWRITE_DB_ID),
  appwriteCID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default config;
