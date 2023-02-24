import { Button, Fade } from '@mui/material';
import type { FC, ReactNode } from 'react';

import type { QueryObserverResult, UseQueryResult } from 'react-query';

interface QueryManagerProps {
  query: UseQueryResult;
  children: ReactNode;
  skeleton: ReactNode;
}

const QueryManager: FC<QueryManagerProps> = ({ query, children, skeleton }) => {
  if (query.isLoading || (query.isFetching && !query.isFetched)) return <div>{skeleton}</div>;

  if (query.isError)
    return (
      <Fade in>
        <div>
          <h1>Parece que houve um erro ao carregar os dados.</h1>
          <Button
            onClick={(): Promise<QueryObserverResult> => query.refetch()}
            variant={'outlined'}
          >
            Tentar novamente
          </Button>
        </div>
      </Fade>
    );

  return <div>{children}</div>;
};

export default QueryManager;
