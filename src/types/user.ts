export type ProfileTypes = {
  _id: string;
  fullName: string;
  email: string;
  accountType: string;
  token: string;
};

export type SavedNDAResTypes = {
  success: boolean;
  msg: string;
  fileId: string;
};

export type UserTypes = {
  _id: string;
  fullName: string;
  tokenIsNew: boolean;
  tokenCountUsed: number;
  generatedDoc: number;
  email: string;
  accountType: string;
  isVerified: boolean;
  verified: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type LoginType = {
  email: string;
  password: string;
};

export type RegisterTypes = {
  businessName: string;
  businessAddress: string;
  businessEmail: string;
  businessPhone: string;
  businessCategory: string;
  accountNumber: string;
  houseNumber: string;
  streetNumber: string;
  city: string;
  state: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  password: string;
  confirm_password: string;
  image: string;
};
