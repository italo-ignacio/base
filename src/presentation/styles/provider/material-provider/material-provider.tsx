// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable max-lines */
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { colors } from 'presentation/styles/palettes';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import RadioButtonCheckedTwoToneIcon from '@mui/icons-material/RadioButtonCheckedTwoTone';
import type { FC, ReactNode } from 'react';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
  }
}
declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    isSelect: true;
  }
}
declare module '@mui/material/Checkbox' {
  interface CheckboxPropsSizeOverrides {
    small: true;
    medium: true;
    large: true;
  }
}
declare module '@mui/material/Radio' {
  interface RadioPropsSizeOverrides {
    small: true;
    medium: true;
    large: true;
  }
}

interface Children {
  children: ReactNode;
}

// eslint-disable-next-line max-lines-per-function
export const MaterialUIProvider: FC<Children> = ({ children }: Children) => {
  const ThemeMui = createTheme({
    components: {
      MuiButton: {
        defaultProps: {
          style: {
            alignItems: 'center',
            borderRadius: '999px',
            display: 'flex',
            flexDirection: 'row',
            fontFamily: 'Montserrat',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '800',
            justifyContent: 'center',
            lineHeight: '20px',
            padding: '0.75rem',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            textTransform: 'uppercase'
          },
          variant: 'primary'
        },
        variants: [
          {
            props: { size: 'small' },
            style: {}
          },
          {
            props: { size: 'medium' },
            style: {}
          },
          {
            props: { size: 'large' },
            style: {}
          },

          {
            props: { variant: 'primary' },
            style: {
              ':hover': {
                background: colors.primary,
                filter: 'brightness(0.95)'
              },
              background: colors.primary,
              borderColor: colors.primary,
              color: colors.secondary
            }
          },
          {
            props: { variant: 'secondary' },
            style: {
              ':hover': {
                background: colors.secondary,
                filter: 'brightness(0.9)'
              },
              background: colors.secondary,
              borderColor: colors.secondary,
              color: colors.bg
            }
          },
          {
            props: { disabled: true },
            style: {
              background: 'transparent',
              boxShadow: `inset 0 0 0 3px ${colors.lightGray}`,
              color: `${colors.lightGray} !important`
            }
          }
        ]
      },
      MuiCheckbox: {
        defaultProps: {
          checkedIcon: <CheckBoxTwoToneIcon />,
          color: 'primary',
          size: 'medium'
        },
        variants: [
          {
            props: { size: 'small' },
            style: {
              svg: {
                height: '1.25rem',
                width: '1.25rem'
              }
            }
          },
          {
            props: { size: 'medium' },
            style: {
              svg: {
                height: '1.5rem',
                width: '1.5rem'
              }
            }
          },
          {
            props: { size: 'large' },
            style: {
              svg: {
                height: '2rem',
                width: '2rem'
              }
            }
          },
          {
            props: { color: 'primary' },
            style: {
              svg: {
                'path:first-child': {
                  color: colors.primary,
                  opacity: 1
                },
                'path:last-child': {
                  color: colors.secondary
                }
              }
            }
          }
        ]
      },
      MuiChip: {
        defaultProps: {
          style: {
            backgroundColor: `${colors.primary}`,
            color: `${colors.secondary}`,
            fontFamily: 'Montserrat',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            height: '1.1rem',
            width: 'max-content'
          },
          variant: 'filled'
        },
        variants: [
          {
            props: {
              variant: 'outlined'
            },
            style: {
              backgroundColor: `${colors.white} !important`,
              border: `1px solid ${colors.secondary} `
            }
          }
        ]
      },
      MuiInput: {
        defaultProps: {
          color: 'primary'
        },
        variants: [
          {
            props: { color: 'primary' },
            style: {
              ':focus-within': {
                ':before': {
                  borderBottom: `1px solid ${colors.primary}`
                },
                svg: {
                  color: `${colors.primary} !important`
                }
              },
              ':hover': {
                svg: {
                  color: colors.secondary
                }
              },
              ':hover:before': {
                borderBottom: `2px solid ${colors.secondary}`
              }
            }
          },
          {
            props: { color: 'secondary' },
            style: {
              ':focus-within': {
                ':after': {
                  borderBottom: `2px solid ${colors.white}`
                },
                ':before': {
                  borderBottom: `1.5px solid ${colors.white}`
                },
                svg: {
                  color: `${colors.bg} `
                }
              },
              ':hover': {
                svg: {
                  color: colors.white
                }
              },
              ':hover:before': {
                borderBottom: `1.5px solid ${colors.white}`
              },
              borderBottom: `1px solid ${colors.white}`,
              color: colors.white,
              svg: {
                color: colors.bg
              }
            }
          },
          {
            props: { error: true },
            style: {
              ':focus-within': {
                ':after': {
                  borderBottom: `2px solid ${colors.error} !important`
                },
                ':before': {
                  borderBottom: `1.5px solid ${colors.error} !important`
                },
                svg: {
                  color: `${colors.error} !important`
                }
              },

              ':hover:before': {
                borderBottom: `1.5px solid ${colors.error} !important`
              },
              borderBottom: `1px solid ${colors.error} !important`,

              svg: {
                color: `${colors.error} !important`
              }
            }
          }
        ]
      },
      MuiLink: {
        defaultProps: {
          style: {
            color: colors.blue
          },
          underline: 'hover'
        }
      },
      MuiRadio: {
        defaultProps: {
          checkedIcon: <RadioButtonCheckedTwoToneIcon />,
          color: 'primary',
          size: 'medium'
        },
        variants: [
          {
            props: { size: 'small' },
            style: {
              svg: {
                height: '1.25rem',
                width: '1.25rem'
              }
            }
          },
          {
            props: { size: 'medium' },
            style: {
              svg: {
                height: '1.5rem',
                width: '1.5rem'
              }
            }
          },
          {
            props: { size: 'large' },
            style: {
              svg: {
                height: '2rem',
                width: '2rem'
              }
            }
          },
          {
            props: { color: 'primary' },
            style: {
              svg: {
                circle: {
                  r: 6
                },
                path: {
                  color: colors.secondary
                }
              }
            }
          }
        ]
      },
      MuiSwitch: {
        defaultProps: {
          color: 'primary',
          style: {
            color: colors.white
          }
        },
        variants: [
          {
            props: { color: 'primary' },
            style: {
              '& .MuiSwitch-thumb': {
                boxShadow: 'none',
                height: 16,
                margin: 2,
                width: 16
              },
              '& .MuiSwitch-track': {
                background: colors.secondary,
                borderRadius: 11,
                opacity: '1 !important'
              },
              padding: 8
            }
          }
        ]
      },
      MuiTableCell: {
        defaultProps: {
          style: {
            color: `${colors.gray}`,
            fontFamily: 'Montserrat',
            fontSize: 'clamp(.7rem, .8vw, 1.3rem)'
          },
          variant: 'body'
        },
        variants: [
          {
            props: {
              variant: 'head'
            },
            style: {
              color: `${colors.secondary} !important`,
              fontSize: 'clamp(.8rem, .9vw, 1.5rem) !important',
              fontWeight: 'bold'
            }
          }
        ]
      },
      MuiTableHead: {
        defaultProps: {
          style: {
            fontWeight: 'bold'
          }
        }
      },
      MuiTextField: {
        defaultProps: {
          color: 'primary',
          style: {
            background: '#FAFAFA',
            borderTopLeftRadius: '2px',
            borderTopRightRadius: '2px',
            paddingLeft: '2px'
          },
          variant: 'standard'
        },
        variants: [
          {
            props: {
              multiline: true
            },
            style: {
              '.MuiInputBase-root': {
                padding: '0 ',
                paddingBottom: '20px',
                paddingRight: '0.8px',
                paddingTop: '14px'
              },
              fieldset: {
                borderColor: `${colors.secondary} !important`
              },
              label: {
                color: `${colors.secondary} !important`
              },
              textarea: {
                overflowX: 'hidden',
                paddingLeft: '16px',
                paddingRight: '16px'
              },
              'textarea::-webkit-scrollbar': {
                width: '6px'
              },
              'textarea::-webkit-scrollbar-thumb': {
                background: '#888',
                borderRadius: '20px'
              },
              'textarea::-webkit-scrollbar-thumb:hover': {
                background: '#555'
              },
              'textarea::-webkit-scrollbar-track': {
                background: '#f1f1f1',
                borderRadius: '20px'
              }
            }
          },
          {
            props: { color: 'isSelect' },
            style: {
              '.MuiButtonBase-root': {
                background: colors.primary,
                svg: {
                  color: colors.secondary
                }
              },
              '.MuiButtonBase-root:hover': {
                background: colors.primary,
                borderBottom: '0px solid black !important',
                cursor: 'pointer'
              },
              '.MuiInputBase-root': {
                borderBottom: '0px solid black !important',
                flexWrap: 'wrap',
                maxWidth: '100%',
                paddingTop: '12px'
              },
              '.MuiInputBase-root:after': {
                borderBottom: '0px solid black !important',
                cursor: 'pointer'
              },
              '.MuiInputBase-root:before': {
                borderBottom: '0px solid black !important'
              },
              '.MuiInputBase-root:hover': {
                borderBottom: '0px solid black !important',
                cursor: 'pointer'
              },
              '.MuiInputBase-root:hover:before': {
                borderBottom: '0px solid black !important',
                cursor: 'pointer'
              },
              background: 'transparent !important',
              input: {
                display: 'none'
              },
              paddingLeft: '0 !important'
            }
          }
        ]
      }
    },
    palette: {
      error: { main: colors.error },
      primary: { main: colors.primary },
      secondary: { main: colors.secondary }
    }
  });

  return <ThemeProvider theme={ThemeMui}>{children}</ThemeProvider>;
};
