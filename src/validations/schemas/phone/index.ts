import { PhoneType } from 'domain/enums';
import { mixed, object, string } from 'yup';
import type { InferType } from 'yup';

const defaultValues = {
  dddLength: 3,
  maxLength: 9,
  minLength: 8
};

export const phoneSchema = object().shape({
  ddd: string()
    .min(defaultValues.dddLength)
    .max(defaultValues.dddLength)
    .required()
    .transform((value) => value.replace(/\D/gmu, ''))
    .matches(/\d/gmu),
  number: string()
    .min(defaultValues.minLength)
    .max(defaultValues.maxLength)
    .required()
    .transform((value) => value.replace(/\D/gmu, ''))
    .matches(/\d/gmu),
  type: mixed<PhoneType>().oneOf(Object.values(PhoneType)).required()
});

export type CreatePhoneRequest = InferType<typeof phoneSchema>;
