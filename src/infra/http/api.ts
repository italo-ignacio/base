export type routes =
  | '/collaborators'
  | '/companies'
  | '/specialties'
  | '/unities'
  | '/users'
  | 'none';

export interface ApiProps {
  route: routes;
  body?: unknown;
  id?: string;
  method?: 'DELETE' | 'GET' | 'PATH' | 'POST' | 'PUT';
  queryParams?: {
    search?: string;
    page?: number;
    limit?: number;
  };
}

const apiFunction = async <T>(params: ApiProps): Promise<T> => {
  const api = await fetch(
    `https://jtd2-server-develop.azurewebsites.net/api/v2${params.route}${
      params.id ? `/${params.id}` : ''
    }${
      params.queryParams ? `?${new URLSearchParams(params.queryParams as { search: string })}` : ''
    }`.replace(/undefined/gu, ''),
    {
      body: JSON.stringify(params.body),
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      method: params.method
    }
  );

  return api.json();
};

export const api = {
  delete: <T>(params: Omit<ApiProps, 'body' | 'method'>): Promise<T> =>
    apiFunction({ ...params, method: 'DELETE' }),
  get: <T>(params: Omit<ApiProps, 'body' | 'method'>): Promise<T> =>
    apiFunction({ ...params, method: 'GET' }),
  path: <T>(params: Omit<ApiProps, 'method'>): Promise<T> =>
    apiFunction({ ...params, method: 'PATH' }),
  post: <T>(params: Omit<ApiProps, 'method'>): Promise<T> =>
    apiFunction({ ...params, method: 'POST' }),
  put: <T>(params: Omit<ApiProps, 'method'>): Promise<T> =>
    apiFunction({ ...params, method: 'PUT' })
};
