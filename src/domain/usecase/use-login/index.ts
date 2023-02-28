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

export interface AuthenticationClass {
  login: (params: AuthenticationParams) => Promise<AuthenticationResponse>;
}
