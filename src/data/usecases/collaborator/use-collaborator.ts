import { collaboratorSchema } from 'validations/schemas/collaborator';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type { CreateCollaboratorRequest } from 'validations/schemas/collaborator';

import { api } from 'infra/http';
import type {
  Control,
  FieldErrors,
  SubmitHandler,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue
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
      type: PhoneType;
    };
    unities: number[];
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
      type: PhoneType;
    };
    unities: number[];
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
      type: PhoneType;
    };
    unities: number[];
  }>;
  setValue: UseFormSetValue<{
    specialties?: (number | undefined)[] | undefined;
    email: string;
    name: string;
    nif: string;
    password: string;
    phone: {
      number: string;
      ddd: string;
      type: PhoneType;
    };
    unities: number[];
  }>;
} => {
  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { errors },
    control
  } = useForm<CreateCollaboratorRequest>({
    resolver: yupResolver(collaboratorSchema)
  });

  const onSubmit: SubmitHandler<CreateCollaboratorRequest> = (data) =>
    api.post({
      body: data,
      route: '/collaborators'
    });

  return {
    control,
    errors,
    getValues,
    handleSubmit,
    onSubmit,
    register,
    setValue
  };
};
