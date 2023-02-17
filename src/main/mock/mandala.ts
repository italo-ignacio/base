import { paths } from 'main/config';

export const dataArray: {
  active: boolean;
  label: string;
  subItem?: { label: string; link: string }[];
}[] = [
  {
    active: true,
    label: 'Construção cívil',
    subItem: [
      { label: 'Canteiro de obras', link: paths.AsIsToBe },
      { label: 'Coordenação', link: paths.AsIsToBe },
      { label: 'Projetos', link: paths.AsIsToBe }
    ]
  },
  {
    active: true,
    label: 'TI',
    subItem: [
      { label: 'Infraestrutura', link: paths.AsIsToBe },
      { label: 'Sistemas', link: paths.AsIsToBe }
    ]
  },
  { active: true, label: 'Eficiência energética' },
  { active: true, label: 'Processos' },
  { active: true, label: 'Tecnologia de automação' },
  { active: true, label: 'Produtos e serviços inteligentes' },
  { active: true, label: 'Segurança do Trabalho' },
  { active: true, label: 'Manutenção' },
  { active: true, label: 'Logística' },
  { active: true, label: 'Qualidade' }
];
