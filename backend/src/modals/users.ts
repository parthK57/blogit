export interface signUpBody {
  username: string;
  email: string;
  phonenumber: number;
  password: string;
  fullname: string;
}

export interface loginBody {
  username: string;
  password: string;
}
