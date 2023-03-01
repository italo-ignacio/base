import { HttpStatusCode } from 'domain/enums';
import type {
  AuthenticationClass,
  AuthenticationParams,
  AuthenticationResponse
} from 'domain/usecase/use-login';
import type { HttpClient } from 'data/protocols/http';
import type { routes } from 'infra/http';

export class Authentication implements AuthenticationClass {
  private url: routes;

  private httpClient: HttpClient<AuthenticationResponse>;

  public constructor(url: routes, httpClient: HttpClient<AuthenticationResponse>) {
    this.url = url;
    this.httpClient = httpClient;
  }

  public async login(params: AuthenticationParams): Promise<AuthenticationResponse> {
    const httpResponse = await this.httpClient.post({
      body: params,
      route: this.url
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        if (httpResponse.data) return httpResponse.data;
        throw new Error('mes');
      case HttpStatusCode.unauthorized:
        throw new Error('mes');
      default:
        throw new Error('mes');
    }
  }
}
