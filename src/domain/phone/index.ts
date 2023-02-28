import type { PhoneType } from 'domain/enums';

export interface Phone {
  id: string;
  ddd: string;
  number: string;
  type: PhoneType;
}
