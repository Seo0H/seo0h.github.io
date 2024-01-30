export type APIResponseType = {
  data: string | null;
  message?: string;
};

export type APIStatusType = {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  isAbort: boolean;
};

export interface API {
  END_POINT: string;
  fetch(): Promise<APIResponseType>;
  getStatus(): APIStatusType;
}
