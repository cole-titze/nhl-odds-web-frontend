// eslint-disable-next-line
interface IResponseData<T = any> {
  value: T;
}

// eslint-disable-next-line
export interface IResponse<T = any> {
  data: IResponseData<T>;
}
