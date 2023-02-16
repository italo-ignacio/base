import { Breadcrumbs, Link } from '@mui/material';
import { colors } from 'presentation/styles/palettes';
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
  const { allPathname, lastPathname } = usePath();

  return (
    <div className={`flex  ${title || subTitle ? 'justify-between' : 'justify-end'}`}>
      {title || subTitle ? (
        <div className={'flex flex-col border-l-2 border-primary pl-1'}>
          <h2>{subTitle}</h2>
          <h1 className={'text-primary font-medium uppercase text-[24px]'}>{title}</h1>
        </div>
      ) : null}
      {hasBreadcrumbs ? (
        <div className={'flex items-end'}>
          <Breadcrumbs className={'text-blue'} color={colors.blue}>
            {allPathname.map((path) => {
              if (path === lastPathname) return <div>{path}</div>;
              return (
                <Link key={path} href={`/${path}`}>
                  {path}
                </Link>
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
