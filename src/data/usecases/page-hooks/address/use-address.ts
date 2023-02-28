import { addressSchema } from 'validations/schemas';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type { CreateAddressRequest } from 'validations/schemas';
import type {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister
} from 'react-hook-form';

export const useAddress = (): {
  errors: FieldErrors<{ city: string; state: string }>;
  register: UseFormRegister<CreateAddressRequest>;
  onSubmit: SubmitHandler<CreateAddressRequest>;
  handleSubmit: UseFormHandleSubmit<CreateAddressRequest>;
} => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<CreateAddressRequest>({
    resolver: yupResolver(addressSchema)
  });

  const onSubmit: SubmitHandler<CreateAddressRequest> = (data) => console.log(data);

  return {
    errors,
    handleSubmit,
    onSubmit,
    register
  };
};
