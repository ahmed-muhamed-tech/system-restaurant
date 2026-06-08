
export type UserInfo = {
  address: string | null;
  avatarPublicId: string | null;
  avatarUrl: string | null;
  createdAt: string;
  email: string;
  firstName: string;
  id: string;
  isVerified: boolean;
  lastName: string;
  phonePrimary: string;
  phoneSecondary: string | null;
  role: string;
  updatedAt: string;
};

export type RegisterFrom = {
  firstName: string;
  lastName: string;
  phone: string;
  phoneAlt?: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginFrom = {
  email: string;
  password: string;
};

export type VerifyForm = {
  verify: string;
};

// utils/types.ts

// ═══ Success Response ═══

export type LoginSuccessResponse = {
  data: {
    access_token: string;
    user: UserInfo;
  };
  message: string;
  success: boolean;
};

export type RegisterSuccessResponse = {
  message: string;
};

// utils/types.ts
export type ApiError = Error & {
  response: {
    data: {
      message: string | [];
      statusCode: number;
      path: string;
      timestamp: string;
    };
    status: number;
  };
};

export type FormDataResend = {
  email: string;
};


//  Menu Page

export type Image = {
  id: string;
  menuItemId: string;
  url: string;
  publicId: string;
  order: number;
  createdAt: string;
};

export type Data = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
  images: Image[];
};

export type Meta = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type ResponseData = {
  data: Data[];
  meta: Meta;
};

export type MenuQeury = {
  data: ResponseData | undefined;
  isError: boolean;
  isPending: boolean;
  error: any;
};
