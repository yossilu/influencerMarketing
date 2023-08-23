export interface Contacts {
    user_id: string;
    username: string;
    url: string;
    picture: string;
    fullname: string;
    contacts: ContactItem[];
  }
  
  export interface ContactItem {
    type: string;
    value: string;
    formatted_value: string;
    checked?: boolean;
  }
  