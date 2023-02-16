const defaultValues = {
  indexOfPathname: 3,
  lastNumber: 1,
  splitNumber: 4
};

export const usePath = (): {
  allPathname: (string | undefined)[];
  firstPathname: string;
  lastPathname: string;
} => {
  const firstPathname = `/${
    window.location.href.split('/', defaultValues.splitNumber)[defaultValues.indexOfPathname]
  }`;

  const lastPathname =
    window.location.href.split('/')[
      window.location.href.split('/').length - defaultValues.lastNumber
    ];

  const allPathname = window.location.href
    .split('/')
    .map((pathname, index): string | undefined => {
      if (index >= defaultValues.indexOfPathname) return pathname;
      return '';
    })
    .filter((value) => value !== '');

  return { allPathname, firstPathname, lastPathname };
};
