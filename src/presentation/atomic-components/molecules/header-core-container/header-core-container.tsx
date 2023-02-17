import { Breadcrumbs } from '@mui/material';
import { colors } from 'presentation/styles/palettes';
import { useNavigate } from 'react-router-dom';
import { usePath } from 'data/usecases';
import type { FC } from 'react';

interface HeaderCoreContainerProps {
  title?: string;
  subTitle?: string;
  hasBreadcrumbs?: boolean;
}
export const HeaderCoreContainer: FC<HeaderCoreContainerProps> = ({
  title,
  subTitle,
  hasBreadcrumbs
}) => {
  const { allPathname, lastPathname, getLink } = usePath();
  const navigate = useNavigate();

  return (
    <div className={`flex  ${title || subTitle ? 'justify-between' : 'justify-end'}`}>
      {title || subTitle ? (
        <div className={'flex flex-col border-l-2 border-primary pl-2'}>
          <h2>{subTitle}</h2>
          <h1 className={'text-primary font-medium uppercase text-[24px]'}>{title}</h1>
        </div>
      ) : null}
      {hasBreadcrumbs ? (
        <div className={'flex items-end'}>
          <Breadcrumbs className={'text-blue'} color={colors.blue}>
            {allPathname.map((path, index) => {
              if (path === lastPathname) return <div key={path}>{path}</div>;
              return (
                <button
                  key={path}
                  className={'hover:underline'}
                  onClick={(): void => {
                    navigate(getLink(allPathname, index));
                  }}
                  type={'button'}
                >
                  {path}
                </button>
              );
            })}
          </Breadcrumbs>
        </div>
      ) : null}
    </div>
  );
};

HeaderCoreContainer.defaultProps = {
  hasBreadcrumbs: true
};
