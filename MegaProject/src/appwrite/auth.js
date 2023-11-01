import config from "../config/config";
import { Client, Account, ID } from "appwrite";

class AuthService {
   client = new Client();
   account;

  constructor() {
    this.client.setEndpoint(config.appwriteURL).setProject(config.appwritePID);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    const userAccount = await this.Account.create(
      ID.unique(),
      email,
      password,
      name
    );
    if (userAccount) {
      //call another method

    } else {
      return userAccount;
    }
  }

  async login({ email, password }) {
    const userAccount = await Account.createEmailSession(email, password);
    if (userAccount) {
      //call another method

    } else {
      return userAccount;
    }
  }
}

// object of authService
const authService = new AuthService();

export default authService;
