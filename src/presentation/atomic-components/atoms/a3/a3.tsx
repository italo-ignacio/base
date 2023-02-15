import Generic from 'main/assets/generic.svg';
import SenaiLogo from 'main/assets/senai-logo.svg';
import type { FC } from 'react';

export const A3: FC = () => (
  <div className={'flex flex-col h-[calc(100vh-40px)] p-3 gap-4'} id={'to_print'}>
    <div className={'flex items-center gap-4 max-h-[60px] '}>
      <img alt={'logo do senai'} src={SenaiLogo} />
      <h1 className={'text-[22px] font-medium'}>A3 de Desenvolvimento Tecnológico</h1>
      <img alt={'logo da Generic'} src={Generic} />
      <div className={'border border-secondary h-full p-1 pt-0.5 w-[20%]'}>Camada de aplicação</div>
      <div className={'border border-secondary h-full p-1 pt-0.5 w-[10%]'}>Data</div>
      <div className={'border border-secondary h-full p-1 pt-0.5 w-[5%]'}>REV</div>
      <div className={'border border-secondary h-full p-1 pt-0.5 w-[5%]'}>#</div>
    </div>
    <div className={'flex w-full text-[12px] font-medium gap-4 p-2 border border-secondary'}>
      <h2>TÍTULO: Retrofit nas prensas e inclusão de injetoras</h2>
      <h2>Etapa da jornada: Lorem impsum sit ameT, consectetur elit adispscing</h2>
      <h2>Equipe: Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
    </div>
    <div
      className={'grid h-full gap-2'}
      style={{
        gridTemplateAreas: `
      "context context context description description description image image image" 
      "context context context description description description image image image" 
      "context context context description description description image image image" 
      "analysis analysis analysis description description description image image image"
      "analysis analysis analysis description description description earnings earnings earningsTotal"
      "analysis analysis analysis description description description earnings earnings payback"
      "analysis analysis analysis description description description earnings earnings payback"
      "goals goals goals phases phases phases investment investment payback"
      "goals goals goals phases phases phases investment investment payback"
      "goals goals goals phases phases phases investment investment investmentTotal"
      `
      }}
    >
      <div className={'border border-primary p-1'} style={{ gridArea: 'context' }}>
        <h3 className={'font-bold text-[12px]'}>Contexto</h3>
      </div>

      <div className={'border border-primary p-1'} style={{ gridArea: 'description' }}>
        <h3 className={'font-bold text-[12px]'}>Descrição do projeto e estado futuro</h3>
      </div>

      <div className={'border border-primary p-1'} style={{ gridArea: 'image' }}>
        <h3 className={'font-bold text-[12px]'}>Imagem</h3>
      </div>

      <div className={'border border-primary p-1'} style={{ gridArea: 'analysis' }}>
        <h3 className={'font-bold text-[12px]'}>Análise de dados e estado atual</h3>
      </div>

      <div className={'border border-primary p-1'} style={{ gridArea: 'earnings' }}>
        <h3 className={'font-bold text-[12px]'}>Ganhos anuais</h3>
      </div>

      <div className={'border border-primary p-1'} style={{ gridArea: 'goals' }}>
        <h3 className={'font-bold text-[12px]'}>Objetivos e metas</h3>
      </div>

      <div className={'border border-primary p-1'} style={{ gridArea: 'phases' }}>
        <h3 className={'font-bold text-[12px]'}>Etapas e prazos</h3>
      </div>

      <div className={'border border-primary p-1'} style={{ gridArea: 'investment' }}>
        <h3 className={'font-bold text-[12px]'}>Investimento</h3>
      </div>

      <div
        className={
          'flex -ml-2.5 border-r border-t border-b border-primary bg-white p-1  justify-center items-center'
        }
        style={{ gridArea: 'earningsTotal' }}
      >
        <h3 className={'font-bold text-[12px]'}>Total</h3>
      </div>

      <div
        className={'flex border border-primary p-1 justify-center items-center'}
        style={{ gridArea: 'payback' }}
      >
        <h3 className={'font-bold text-[12px]'}>Payback</h3>
      </div>

      <div
        className={
          'flex -ml-2.5 border-r border-t border-b border-primary bg-white p-1 justify-center items-center'
        }
        style={{ gridArea: 'investmentTotal' }}
      >
        <h3 className={'font-bold text-[12px]'}>Total</h3>
      </div>
    </div>
  </div>
);
