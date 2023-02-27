import type { Address } from 'domain/address';

export interface Company {
  id: string;
  name: string;
  cnpj: string;
  profilePictureUri: string;
  area: string;
  address: Address;
  createdAt: string;
  updatedAt: string;
}
