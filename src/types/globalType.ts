export type IMeta = {
  page: number;
  limit: number;
  total: number;
};

export type ISuccessResponse = {
  data: any;
  meta?: IMeta;
};
export type IGenericErrorMessages = {
  path: string | number;
  message: string;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessages[];
};

export type ICommonDataType = {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type ICategory = {
  title: string;
} & ICommonDataType;

export type IService = {
  name: string;
  description: string;
  categoryId: string;
  status: string;
  warranty?: number | null | string;
  imageUrl: string;
  durationInMinutes: number;
  takenBookingCount: number;
  fee: number | string;
} & ICategory;

export type IUser = {
  email: string;
  id: string;
  name: string;
  password: string;
  profile?: null | any;
  role: string;
} & ICommonDataType;
