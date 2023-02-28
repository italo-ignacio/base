import type { ApiProps } from 'infra/http';
import type { HttpStatusCode } from 'domain/enums';

export type HttpMethod = 'delete' | 'get' | 'post' | 'put';
export interface HttpRequest {
  url: string;
  method: HttpMethod;
  body?: unknown;
  headers?: unknown;
}

export interface HttpResponse<T = unknown> {
  statusCode: HttpStatusCode;
  data?: T;
}

export interface HttpClient<T> {
  delete: (params: Omit<ApiProps, 'body' | 'method'>) => Promise<HttpResponse<T>>;
  get: (params: Omit<ApiProps, 'body' | 'method'>) => Promise<HttpResponse<T>>;
  path: (params: Omit<ApiProps, 'method'>) => Promise<HttpResponse<T>>;
  post: (params: Omit<ApiProps, 'method'>) => Promise<HttpResponse<T>>;
  put: (params: Omit<ApiProps, 'method'>) => Promise<HttpResponse<T>>;
}
