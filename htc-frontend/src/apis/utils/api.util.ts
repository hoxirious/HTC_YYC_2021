import axios, { Method } from "axios";

export interface CustomError<ErrorMessageType extends string = string> {
  message: ErrorMessageType;
  detailMessage?: string;
  canToast?: boolean;
}

export interface APIResult<
  ReturnType = any,
  ErrorType extends CustomError = any,
> {
  result: ReturnType | null;
  error: ErrorType | null;
}

export interface SendRequestProps<T> {
  endpointInfo: {
    endpoint: string;
    method: Method;
  };
  data?: T;
  extraPath?: string;
}

export const sendRequest = async <
  ReqT = any,
  ResT = any,
  ErrorMessageType extends string = string,
>({
  endpointInfo,
  data,
  extraPath,
}: SendRequestProps<ReqT>): Promise<APIResult<ResT>> => {
  let result: APIResult<ResT, CustomError<ErrorMessageType>> = {
    result: null,
    error: null,
  };
  try {
    const baseURL = endpointInfo.endpoint + (extraPath ?? "");
    const response = await axios({
      baseURL,
      method: endpointInfo.method,
    });
    result.result = response.data;
  } catch {
    //TODOS complete result.error
    console.error(result.error);
  }
  return result;
};
