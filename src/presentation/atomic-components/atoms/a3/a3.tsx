import type { FC } from 'react';

export const A3: FC = () => (
  <div
    className={'grid p-2 h-[100vh] gap-2'}
    style={{
      gridTemplateAreas: `
      "a a b b c c" 
      "a a b b c c" 
      "a a b b c c" 
      "d d b b c c"
      "d d b b e i"
      "d d b b e j"
      "d d b b e j"
      "f f g g h j"
      "f f g g h j"
      "f f g g h k"
      `
    }}
  >
    <div className={'border-2 border-primary'} style={{ gridArea: 'a' }}>
      a
    </div>

    <div className={'border-2 border-primary '} style={{ gridArea: 'b' }}>
      b
    </div>

    <div className={'border-2 border-primary '} style={{ gridArea: 'c' }}>
      c
    </div>

    <div className={'border-2 border-primary'} style={{ gridArea: 'd' }}>
      d
    </div>

    <div className={'border-2 border-primary '} style={{ gridArea: 'e' }}>
      e
    </div>

    <div className={'border-2 border-primary '} style={{ gridArea: 'f' }}>
      f
    </div>

    <div className={'border-2 border-primary'} style={{ gridArea: 'g' }}>
      g
    </div>

    <div className={'border-2 border-primary '} style={{ gridArea: 'h' }}>
      h
    </div>

    <div
      className={'-ml-2.5 border-r-2 border-t-2 border-b-2 border-primary bg-white'}
      style={{ gridArea: 'i' }}
    >
      i
    </div>

    <div className={'border-2 border-primary '} style={{ gridArea: 'j' }}>
      j
    </div>

    <div
      className={'-ml-2.5 border-r-2 border-t-2 border-b-2 border-primary bg-white'}
      style={{ gridArea: 'k' }}
    >
      k
    </div>
  </div>
);
