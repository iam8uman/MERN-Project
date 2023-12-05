import config from "../config/config";
import { Client, Account, ID } from "appwrite";

className AuthService {
   client = new Client();
   account;

  constructor() {
    this.client.setEndpoint(config.appwriteURL).setProject(config.appwritePID);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    const userAccount = await this.account.create(
      ID.unique(),
      email,
      password,
      name
    );
    if (userAccount) {
      //call another method
      return this.login({email,password})

    } else {
      return userAccount;
    }
  }

  async login({ email, password }) {
    return await this.account.createEmailSession(email, password);
  }

  async getCurrentUser(){
    try {
      await this.account.get();
    } catch (error) {
      // return error;
      console.log(error)  ;
      
    }
    return null;
  }

  async logout(){
    try {
      return await this.account.deleteSessions();
      
    } catch (error) {
      console.log(error)
    }
  }

}

// object of authService
const authService = new AuthService();

export default authService;
