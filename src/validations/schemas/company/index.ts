import { addressSchema } from 'validations/schemas/address';
import { object, string } from 'yup';
import type { InferType } from 'yup';

const defaultValues = {
  areaMaxLength: 18,
  cnpjLength: 18,
  maxLength: 255
};

export const companySchema = object().shape({
  address: addressSchema.required(),
  area: string().max(defaultValues.areaMaxLength).required(),
  cnpj: string().min(defaultValues.cnpjLength).max(defaultValues.cnpjLength).required(),
  name: string().max(defaultValues.maxLength).required(),
  profilePictureUri: string()
});

export type CreateCompanyRequest = InferType<typeof companySchema>;
