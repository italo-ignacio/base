import { number, object, string } from 'yup';
import type { InferType } from 'yup';

const defaultValues = {
  maxLength: 100,
  minLength: 2
};

export const unitySchema = object().shape({
  code: number().positive().required(),
  name: string().min(defaultValues.minLength).max(defaultValues.maxLength).required()
});

export type CreateUnityRequest = InferType<typeof unitySchema>;
