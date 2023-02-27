import { api } from 'infra/http';
import { useQuery } from 'react-query';
import type { UseQueryResult } from 'react-query';

interface userProps {
  name: string;
  id: string;
}

export interface getAllUsersQueryProps {
  page: number;
  searchUser?: string;
}

export const useGetAllUsersQuery = ({
  page,
  searchUser
}: getAllUsersQueryProps): UseQueryResult<userProps[]> =>
  useQuery([['users', page, searchUser]], () =>
    api.get({
      queryParams: { limit: 10, page, search: searchUser },
      route: '/users'
    })
  );
