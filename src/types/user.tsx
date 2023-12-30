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
    _id: string
    fullName: string
    tokenIsNew: boolean
    tokenCountUsed: number
    generatedDoc: number
    email: string
    accountType: string
    isVerified: boolean
    verified: string
    createdAt: string
    updatedAt: string
    __v: number
  };
  