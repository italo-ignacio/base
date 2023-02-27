import { object, string } from 'yup';
import type { InferType } from 'yup';

const defaultValues = {
  maxLength: 100,
  minLength: 2
};

export const specialtySchema = object().shape({
  name: string().min(defaultValues.minLength).max(defaultValues.maxLength).required()
});

export type CreateSpecialtyRequest = InferType<typeof specialtySchema>;
