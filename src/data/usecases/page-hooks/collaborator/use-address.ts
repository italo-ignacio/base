import { collaboratorSchema } from 'validations/schemas/collaborator';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type { CreateCollaboratorRequest } from 'validations/schemas/collaborator';

import type {
  Control,
  FieldErrors,
  SubmitHandler,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister
} from 'react-hook-form';
import type { PhoneType } from 'domain/enums';

export const useCollaborator = (): {
  control: Control<{
    specialties?: (number | undefined)[] | undefined;
    email: string;
    name: string;
    nif: string;
    password: string;
    phone: {
      number: string;
      ddd: string;
      type: NonNullable<PhoneType | undefined>;
    };
    unities: (number | undefined)[];
  }>;
  errors: FieldErrors<{
    specialties?: (number | undefined)[] | undefined;
    email: string;
    name: string;
    nif: string;
    password: string;
    phone: {
      number: string;
      ddd: string;
      type: NonNullable<PhoneType | undefined>;
    };
    unities: (number | undefined)[];
  }>;
  register: UseFormRegister<CreateCollaboratorRequest>;
  onSubmit: SubmitHandler<CreateCollaboratorRequest>;
  handleSubmit: UseFormHandleSubmit<CreateCollaboratorRequest>;
  getValues: UseFormGetValues<{
    specialties?: (number | undefined)[] | undefined;
    email: string;
    name: string;
    nif: string;
    password: string;
    phone: {
      number: string;
      ddd: string;
      type: NonNullable<PhoneType | undefined>;
    };
    unities: (number | undefined)[];
  }>;
} => {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
    control
  } = useForm<CreateCollaboratorRequest>({
    mode: 'onChange',
    resolver: yupResolver(collaboratorSchema)
  });

  const onSubmit: SubmitHandler<CreateCollaboratorRequest> = (data) => console.log(data);

  return {
    control,
    errors,
    getValues,
    handleSubmit,
    onSubmit,
    register
  };
};
