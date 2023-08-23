import { Contacts } from "./contacts.model";
import { InstagramPostModel } from "./instagram-post.model";
import { UserModel } from "./user.model";

export class CurrentUserModel {
    user?: UserModel;
    posts?: InstagramPostModel[];
    contacts?: Contacts;
}