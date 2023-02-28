import { useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

import { useDebounce } from './use-debounce';

interface useSearchProps {
  page: number;
  search: string;
  setPage: Dispatch<SetStateAction<number>>;
}

interface useSearchResponse {
  page: number;
  search: string;
}

const firstPage = 1;
const delay = 500;

export const useSearch = (props: useSearchProps): { data: useSearchResponse } => {
  const [call, setCall] = useState(true);
  const [data, setData] = useState<useSearchResponse>({
    page: props.page,
    search: props.search
  });

  useEffect(
    () =>
      setData({
        page: props.page,
        search: props.search
      }),
    [props.page, call]
  );

  useDebounce(
    () => (props.page === firstPage ? setCall(!call) : props.setPage(firstPage)),
    [props.search],
    delay
  );

  return { data };
};
