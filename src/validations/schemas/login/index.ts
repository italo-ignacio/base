import { object, string } from 'yup';
import type { InferType } from 'yup';

export const loginSchema = object().shape({
  email: string().email().required(),
  password: string().required()
});

export type LoginRequest = InferType<typeof loginSchema>;
