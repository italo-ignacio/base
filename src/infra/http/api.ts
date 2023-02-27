type routes = 'users';

interface ApiProps {
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
    `https://63f75efd833c7c9c60828761.mockapi.io/api/v1/${params.route}${
      params.id ? `/${params.id}` : ''
    }${
      params.queryParams ? `?${new URLSearchParams(params.queryParams as { search: string })}` : ''
    }`.replace(/undefined/gu, ''),
    {
      body: JSON.stringify(params.body),
      method: params.method
    }
  );

  return api.json().then((data) => data);
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
