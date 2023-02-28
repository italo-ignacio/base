/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/function-component-definition */
/* eslint-disable func-style */

import { Input } from '@mui/material';
import InputMask from 'react-input-mask';
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types, no-redeclare
export function Input2() {
  return (
    <InputMask mask={'99/99/9999'}>
      <Input type={'tel'} />
    </InputMask>
  );
}
