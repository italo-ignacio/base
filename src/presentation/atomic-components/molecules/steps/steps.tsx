import CableIcon from '@mui/icons-material/Cable';
import Divider from '@mui/material/Divider';
import EditOutlinedIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import type { FC } from 'react';

const steps = {
  end: 5,
  icon: <CableIcon />,
  items: [
    { title: 'Sem cabeamento' },
    { title: 'Cabeamento não organizado e sem encaminhamento adequado' },
    { title: 'Cabeamento com encaminhamento' },
    { title: 'Cabeamento com documentação' },
    { title: 'Cabeamento estruturado e certificado' }
  ],
  start: 1,
  title: 'Cabeamento'
};

const defaultValues = {
  left: 32,
  number: 1,
  width: 212,
  width2: 180
};

const teste = (): string => {
  // eslint-disable-next-line no-magic-numbers
  let width = 0;

  // eslint-disable-next-line no-loops/no-loops, no-magic-numbers, no-plusplus
  for (let index = 0; index < steps.end - defaultValues.number; index++)
    // eslint-disable-next-line unused-imports/no-unused-vars
    width += Number(document.getElementById(`paper${index}`)?.getBoundingClientRect().width);

  return `${width}`;
};

const teste2 = (): string => {
  // eslint-disable-next-line no-magic-numbers
  let width = 0;

  // eslint-disable-next-line no-loops/no-loops, no-magic-numbers, no-plusplus
  for (let index = 0; index <= steps.start; index++)
    // eslint-disable-next-line unused-imports/no-unused-vars
    width += Number(document.getElementById(`paper${index}`)?.getBoundingClientRect().width);
  console.log(width);
  return `${width}`;
};

export const Steps: FC = () => (
  <div className={'flex flex-col'}>
    {teste2()}
    <div className={'flex gap-8'}>
      <div
        className={
          'flex flex-col bg-secondary text-white rounded-[20px] p-4 justify-center items-center'
        }
      >
        {steps.icon}
        {steps.title}
      </div>
      <div className={'flex gap-8 relative'}>
        <div
          className={'w-full absolute top-[45%]'}
          style={{
            left: teste2(),
            width: teste()
          }}
        >
          <Divider className={'h-2 rounded-sm bg-gradient-to-r from-red to-primary'} />
        </div>
        {steps.items.map((step, index) => (
          <Paper
            key={step.title}
            className={'flex p-4 text-center rounded-[20px] items-center '}
            elevation={3}
            id={`paper${index}`}
            sx={{ borderRadius: '20px' }}
          >
            {step.title}
          </Paper>
        ))}
      </div>

      <div className={'flex flex-col justify-center items-center'}>
        <EditOutlinedIcon />
      </div>
    </div>
  </div>
);
