/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines */
import { A3 } from 'presentation/atomic-components/atoms/a3/a3';
import { Button, IconButton, Input, InputAdornment } from '@mui/material';
import { Heading } from 'presentation/atomic-components/molecules/heading/heading';
import { Mandala } from 'presentation/atomic-components/atoms/mandala/mandala';
import { Modal } from 'presentation/atomic-components/molecules/modal/modal';
import { Select } from 'presentation/atomic-components/atoms/select/select';
import { Textarea } from 'presentation/atomic-components/atoms/textarea/textarea';
import { dataArray } from 'main/mock/mandala';
import { options } from 'main/utils/items';
import { useModal } from 'data/usecases/use-modal';
import { useReactToPrint } from 'react-to-print';
import { useRef, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import type { FC, LegacyRef, RefObject } from 'react';
// eslint-disable-next-line max-lines-per-function
export const HomePage: FC = () => {
  const [values, setValues] = useState(false);
  const componentRef = useRef() as LegacyRef<HTMLDivElement>;
  const [liberada, setLiberada] = useState(true);
  const [selected, setSelected] = useState<number | null>(null);
  const [rotation, setRotation] = useState<number>(0);
  const [animation, setAnimation] = useState<{ easing: 'linear'; duration: number } | undefined>(
    undefined
  );
  const handleClickShowPassword = (): void => {
    setValues(!values);
  };
  const liberar = (): void => {
    setLiberada(false);
  };

  const {
    closeModal: closeFirstModal,
    isOpen: isOpenFirstModal,
    openModal: openFirstModal
  } = useModal();

  const {
    closeModal: closeSecondModal,
    isOpen: isOpenSecondModal,
    openModal: openSecondModal
  } = useModal();

  const {
    closeModal: closeThirdModal,
    isOpen: isOpenThirdModal,
    openModal: openThirdModal
  } = useModal();

  const girar = (): void => {
    const data = new Array(Math.floor(Math.random() * 100 + 20));
    let position = rotation;

    setAnimation({
      duration: 3000,
      easing: 'linear'
    });

    // eslint-disable-next-line no-loops/no-loops, @typescript-eslint/prefer-for-of, no-plusplus
    for (let index = 0; index < data.length; index++) {
      position += 18;
      setRotation(position);

      if (index === data.length - 5)
        setAnimation({
          duration: 10000,
          easing: 'linear'
        });
    }
  };

  const spin = (): void => {
    const data = new Array(Math.floor(Math.random() * 100 + 20));
    let position = 0;

    setAnimation(undefined);
    setRotation(rotation);

    // eslint-disable-next-line no-loops/no-loops, @typescript-eslint/prefer-for-of, no-plusplus
    for (let index = 0; index < data.length; index++)
      // eslint-disable-next-line no-loop-func
      setTimeout(() => {
        if (position < dataArray.length - 1) position += 1;
        else position = 0;
        setSelected(position);
      }, 300);
  };
  const handlePrint = useReactToPrint({
    content() {
      if (typeof componentRef !== 'string' && componentRef) {
        const element = componentRef as RefObject<HTMLDivElement>;

        return element.current;
      }

      return null;
    }
  });

  return (
    <>
      <Heading title={'home'} />
      <div className={'flex flex-col pt-2'}>
        <div className={'flex justify-start'}>
          <Button onClick={handlePrint}>
            <LocalPrintshopIcon />
          </Button>
        </div>
        <div ref={componentRef}>
          <A3 />
        </div>

        <div className={'flex flex-col justify-center text-center '}>
          <div>
            <KeyboardArrowDownIcon fontSize={'large'} />
          </div>

          <div className={'flex justify-center'}>
            <Button onClick={girar}>Girar</Button>

            <div className={'animate-'}>
              <Mandala
                animation={animation}
                dataArray={dataArray}
                rotation={rotation}
                selected={selected}
                setSelected={setSelected}
              />
            </div>

            <Button onClick={spin}>Rodar</Button>
          </div>
        </div>

        <div className={'flex flex-col p-6 gap-2 justify-center md:flex-row'}>
          <div className={'flex flex-col gap-2'}>
            <Button endIcon={<Visibility />} startIcon={<Visibility />}>
              Button
            </Button>

            <Button startIcon={<Visibility />}>Button</Button>
            <Button endIcon={<Visibility />}>Button</Button>

            <Modal
              button={{
                StartIcon: Visibility,
                title: 'Abrir modal'
              }}
              closeModal={closeFirstModal}
              isOpen={isOpenFirstModal}
              openModal={openFirstModal}
              size={'small'}
              title={'Modal'}
            >
              <Button endIcon={<Visibility />} onClick={closeFirstModal}>
                fechar modal
              </Button>
            </Modal>
          </div>

          <div className={'flex flex-col gap-2'}>
            <Button endIcon={<Visibility />} startIcon={<Visibility />} variant={'secondary'}>
              Button
            </Button>

            <Button startIcon={<Visibility />} variant={'secondary'}>
              Button
            </Button>

            <Modal
              button={{
                StartIcon: Visibility,
                title: 'Abrir modal',
                variant: 'secondary'
              }}
              closeModal={closeSecondModal}
              isOpen={isOpenSecondModal}
              openModal={openSecondModal}
              size={'small'}
              title={'Modal'}
            >
              <Button
                endIcon={<Visibility />}
                onClick={(): void => {
                  closeSecondModal();
                  liberar();
                }}
                variant={'secondary'}
              >
                fechar modal
              </Button>
            </Modal>

            <Button variant={'secondary'}>Button</Button>
          </div>

          <div className={'flex flex-col gap-2'}>
            <Button disabled endIcon={<Visibility />} startIcon={<Visibility />}>
              Button
            </Button>

            <Modal
              button={{
                StartIcon: Visibility,
                disabled: liberada,
                title: 'Abrir modal',
                variant: 'secondary'
              }}
              closeModal={closeThirdModal}
              isOpen={isOpenThirdModal}
              openModal={openThirdModal}
              size={'small'}
              title={'Boaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}
            >
              Boa
            </Modal>

            <p className={'flex justify-center'}>Aperte um botão para liberar a modal</p>

            <Button disabled endIcon={<Visibility />}>
              Button
            </Button>

            <Button disabled>Button</Button>
          </div>
        </div>

        <div className={'flex flex-col p-6 gap-2 justify-center md:flex-row'}>
          <div className={'flex flex-col gap-2'}>
            <Input
              endAdornment={
                <InputAdornment position={'end'}>
                  <IconButton onClick={handleClickShowPassword}>
                    {values ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              startAdornment={
                <InputAdornment position={'start'}>
                  <IconButton onClick={handleClickShowPassword}>
                    {values ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              type={values ? 'text' : 'password'}
            />

            <Input
              startAdornment={
                <InputAdornment position={'start'}>
                  <IconButton>
                    <Visibility />
                  </IconButton>
                </InputAdornment>
              }
            />

            <Input
              endAdornment={
                <InputAdornment position={'end'}>
                  <IconButton>
                    <Visibility />
                  </IconButton>
                </InputAdornment>
              }
            />

            <Input />
          </div>

          <div className={'flex flex-col gap-2'}>
            <Input
              endAdornment={
                <InputAdornment position={'end'}>
                  <IconButton onClick={handleClickShowPassword}>
                    {values ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              error
              startAdornment={
                <InputAdornment position={'start'}>
                  <IconButton onClick={handleClickShowPassword}>
                    {values ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              type={values ? 'text' : 'password'}
            />

            <Input
              error
              startAdornment={
                <InputAdornment position={'start'}>
                  <IconButton>
                    <Visibility />
                  </IconButton>
                </InputAdornment>
              }
            />

            <Input
              endAdornment={
                <InputAdornment position={'end'}>
                  <IconButton>
                    <Visibility />
                  </IconButton>
                </InputAdornment>
              }
              error
            />

            <Input error />
          </div>
        </div>

        <div className={'flex flex-col p-6 gap-2 justify-center md:flex-row'}>
          <div className={'flex flex-col gap-2'}>
            <Textarea />
          </div>
        </div>

        <div className={'flex flex-col p-6 gap-2 justify-center md:flex-row'}>
          <div className={'flex flex-col gap-2 w-80'}>
            <Select options={options} />
          </div>

          <div className={'flex flex-col gap-2 w-80'}>
            <Select isMultiple options={options} />
          </div>
        </div>

        <div className={'flex flex-col p-6 gap-2 justify-center md:flex-row'}>
          <div className={'flex flex-col gap-2'}>
            <Switch />
          </div>

          <div className={'flex flex-col gap-2'}>
            <Switch />
          </div>
        </div>

        <div className={'flex flex-col p-6 gap-2 justify-center md:flex-row'}>
          <div className={'flex flex-col gap-2'}>
            <FormControlLabel
              control={<Checkbox defaultChecked size={'small'} />}
              label={'Lorena Ipsula'}
            />

            <FormControlLabel control={<Checkbox size={'small'} />} label={'Lorena Ipsula'} />
          </div>

          <div className={'flex flex-col gap-2'}>
            <FormControlLabel control={<Checkbox defaultChecked />} label={'Lorena Ipsula'} />
            <FormControlLabel control={<Checkbox />} label={'Lorena Ipsula'} />
          </div>

          <div className={'flex flex-col gap-2'}>
            <FormControlLabel
              control={<Checkbox defaultChecked size={'large'} />}
              label={'Lorena Ipsula'}
            />

            <FormControlLabel control={<Checkbox size={'large'} />} label={'Lorena Ipsula'} />
          </div>
        </div>

        <div className={'flex flex-col p-6 gap-2 justify-center md:flex-row'}>
          <div className={'flex flex-col gap-2'}>
            <RadioGroup>
              <FormControlLabel
                control={<Radio size={'small'} />}
                label={'Lorena Ipsula'}
                value={'1'}
              />

              <FormControlLabel control={<Radio size={'small'} />} label={'Female'} value={'2'} />
            </RadioGroup>
          </div>

          <div className={'flex flex-col gap-2'}>
            <RadioGroup>
              <FormControlLabel control={<Radio />} label={'Lorena Ipsula'} value={'3'} />
              <FormControlLabel control={<Radio />} label={'Lorena Ipsula'} value={'4'} />
            </RadioGroup>
          </div>

          <div className={'flex flex-col gap-2'}>
            <RadioGroup>
              <FormControlLabel
                control={<Radio size={'large'} />}
                label={'Lorena Ipsula'}
                value={'5'}
              />

              <FormControlLabel
                control={<Radio size={'large'} />}
                label={'Lorena Ipsula'}
                value={'6'}
              />
            </RadioGroup>
          </div>
        </div>
      </div>
    </>
  );
};
