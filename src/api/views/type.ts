export type APIResponseType<ReturnType> = {
  data: ReturnType | null;
  message?: string;
};

export type APIStatusType = {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  isAbort: boolean;
};

export interface API<ReturnType> {
  END_POINT: string;
  fetch(): Promise<APIResponseType<ReturnType>>;
  getStatus(): APIStatusType;
}
