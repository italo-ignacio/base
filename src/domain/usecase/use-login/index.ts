import type { Role } from 'domain/enums';

export interface AuthenticationParams {
  email: string;
  password: string;
}

export interface AuthenticationResponse {
  accessToken: string;
  name: string;
  role: Role;
}

export interface HookFormParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigate: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useForm: any;
}

export interface AuthenticationClass {
  login: (params: AuthenticationParams) => Promise<AuthenticationResponse>;
}
