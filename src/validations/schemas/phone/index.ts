import { PhoneType } from 'domain/enums';
import { mixed, object, string } from 'yup';
import type { InferType } from 'yup';

const defaultValues = {
  dddLength: 3,
  homePhoneLength: 8,
  mobileLength: 9
};

export const phoneSchema = object().shape({
  ddd: string()
    .min(defaultValues.dddLength)
    .max(defaultValues.dddLength)
    .required()
    .transform((value) => value.replace(/\D/gmu, ''))
    .matches(/\d/gmu),
  number: string()
    .required()
    .transform((value) => value.replace(/\D/gmu, ''))
    .matches(/\d/gmu)
    .when('type', (type, schema) => {
      const types = type as unknown as PhoneType[];

      if (types.toString() === 'HOME_PHONE')
        return schema.min(defaultValues.homePhoneLength).max(defaultValues.homePhoneLength);
      return schema.min(defaultValues.mobileLength).max(defaultValues.mobileLength);
    }),
  type: mixed<PhoneType>().oneOf(Object.values(PhoneType)).required()
});

export type CreatePhoneRequest = InferType<typeof phoneSchema>;
