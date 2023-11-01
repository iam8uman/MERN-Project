import config from "../config/config";
import { Client, Account, ID, Databases, Query, Storage } from "appwrite";

export class Services {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(config.appwriteURL).setProject(config.appwritePID);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, feacturedImage, userID }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDBID,
        config.appwriteCID,
        slug,
        {
          title,
          content,
          feacturedImage,
          userID,
          createdAt: new Date().getTime(),
          updatedAt: new Date().getTime(),
        },
        ["*"],
        ["*"]
      );
    } catch (error) {
      console.log(error);
    }
  }

  // update document
  async updatePost(slug, { title, content, feacturedImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDBID,
        config.appwriteCID,
        slug,
        {
          title,
          slug,
          content,
          feacturedImage,
          status,
          updatedAt: new Date().getTime(),
        },
        ["*"],
        ["*"]
      );
    } catch (error) {
      console.log(error);
    }
  }

  // delete documents
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDBID,
        config.appwriteCID,
        slug
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  // get post 
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDBID,
        config.appwriteCID,
        slug
      );
    } catch (error) {
      console.log(error);
    }
  } 

  // get all posts baki xa yo kam voli lai
    async getAllPosts(query=[Query.equal("status", "active")]) {
        try {
        return await this.databases.listDocuments(
            config.appwriteDBID,
            config.appwriteCID,
            query,
        );
        } catch (error) {
        console.log(error);
        return false
        }
    }
}

const service = new Services();

export default service;
