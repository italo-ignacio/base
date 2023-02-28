import { api } from 'infra/http';
import { useQuery } from 'react-query';
import type { UseQueryResult } from 'react-query';

interface userProps {
  name: string;
  id: string;
}

export interface getAllUsersQueryProps {
  page: number;
  search?: string;
}

export const useGetAllUsersQuery = ({
  page,
  search
}: getAllUsersQueryProps): UseQueryResult<userProps[]> =>
  useQuery([['users', page, search]], () =>
    api.get({
      queryParams: { limit: 10, page, search },
      route: '/users'
    })
  );
