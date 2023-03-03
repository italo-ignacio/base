import { api } from 'infra/http';

interface teste {
  data: {
    accessToken: string;
    user: {
      name: string;
    };
  };
}
export const authRequests = {
  async login({ email, password }: { email: string; password: string }): Promise<teste> {
    const data = await api.post<teste>({
      body: {
        email,
        password
      },
      route: '/users'
    });

    return data;
  }
};
