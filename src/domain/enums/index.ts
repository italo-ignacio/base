export enum Role {
  ADMIN = 'ADMIN',
  LOCAL = 'LOCAL',
  CONSULTANT = 'CONSULTANT',
  COMPANY_EMPLOYEE = 'COMPANY_EMPLOYEE',
  SUPPORT = 'SUPPORT',
  UNDEFINED = 'UNDEFINED'
}

export enum PhoneType {
  MOBILE = 'MOBILE',
  HOME_PHONE = 'HOME_PHONE'
}

export enum HttpStatusCode {
  badRequest = 400,
  forbidden = 403,
  noContent = 204,
  notFound = 404,
  ok = 200,
  serverError = 500,
  unauthorized = 401
}
