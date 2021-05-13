export class User {
  $key: string;
  userName: string;
  emailId: string;
  password?: string;
  location?: {
    lat: number;
    lon: number;
  };
  phoneNumber: string;
  createdOn?: string;
  isAdmin: boolean;
  avatar?: string;
  roles: Roles;
}

export class UserDetail {
  $key: string;
  firstName: string;
  lastName: string;
  userName: string;
  emailId: string;
  address1: string;
  address2: string;
  country: string;
  state: string;
  zip: number;
}

export interface Roles {
  subscriber?: boolean;
  admin?: boolean;
}
