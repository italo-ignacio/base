import { PhoneType } from 'domain/enums';
import { mixed, object, string } from 'yup';
import type { InferType } from 'yup';

const defaultValues = {
  dddMaxLength: 3,
  dddMinLength: 2,
  maxLength: 9,
  minLength: 8
};

export const phoneSchema = object().shape({
  ddd: string()
    .min(defaultValues.dddMinLength)
    .max(defaultValues.dddMaxLength)
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
