export interface signUpBody {
  username: string;
  email: string;
  password: string;
  fullname: string;
}

export interface loginBody {
  username: string;
  password: string;
}

export interface updateUserData {
  fullname: string;
  username: string;
  title: string | null;
  profilePicture: string | null;
  age: string | null;
  education: string | null;
  location: string | null;
  github: string | null;
  gitlab: string | null;
  linkedIn: string | null;
  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
}
