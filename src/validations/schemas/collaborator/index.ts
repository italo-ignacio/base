import { array, number, object, string } from 'yup';
import { phoneSchema } from 'validations/schemas/phone';
import type { InferType } from 'yup';

const defaultValues = {
  minUnities: 1,
  nameMaxLength: 100,
  nameMinLength: 2,
  passwordMaxLength: 24,
  passwordMinLength: 8
};

export const collaboratorSchema = object().shape({
  email: string().email().required(),
  name: string().min(defaultValues.nameMinLength).max(defaultValues.nameMaxLength).required(),
  nif: string().required(),
  password: string()
    .min(defaultValues.passwordMinLength)
    .max(defaultValues.passwordMaxLength)
    .matches(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,24})[a-zA-Z0-9!@#$%^&*]+$/gmu)
    .required(),
  phone: phoneSchema,
  specialties: array().of(number()),
  unities: array().of(number().required()).min(defaultValues.minUnities).required()
});

export type CreateCollaboratorRequest = InferType<typeof collaboratorSchema>;
