import { object, string } from 'yup';
import type { InferType } from 'yup';

const defaultValues = {
  maxLength: 255
};

export const addressSchema = object().shape({
  city: string().max(defaultValues.maxLength).required(),
  state: string().max(defaultValues.maxLength).required()
});

export type CreateAddressRequest = InferType<typeof addressSchema>;
