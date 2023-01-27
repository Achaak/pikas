import type { PikasCSS } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import type { HTMLAttributes } from 'react';
import { ReactNode, FC } from 'react';

const TitleStyle = styled('h1', {
  all: 'unset',
  whiteSpace: 'pre-line',
  color: '$BLACK',

  variants: {
    variant: {
      h1: {
        fontSize: '$EM-XXX-LARGE',
        fontWeight: '$MEDIUM',
        letterSpacing: '$MEDIUM',
      },
      h2: {
        fontSize: '$EM-XX-LARGE',
        fontWeight: '$BOLD',
        letterSpacing: '$MEDIUM',
      },
      h3: {
        fontSize: '$EM-X-LARGE',
        fontWeight: '$BOLD',
        letterSpacing: '$SMALL',
      },
      h4: {
        fontSize: '$EM-LARGE',
        fontWeight: '$BOLD',
        letterSpacing: '$SMALL',
      },
      h5: {
        fontSize: '$EM-MEDIUM',
        fontWeight: '$BOLD',
        letterSpacing: '$SMALL',
      },
      h6: {
        fontSize: '$EM-SMALL',
        fontWeight: '$BOLD',
        letterSpacing: '$SMALL',
      },
    },
    textTransform: {
      uppercase: {
        textTransform: 'uppercase',
      },
      lowercase: {
        textTransform: 'lowercase',
      },
      capitalizeWords: {
        textTransform: 'capitalize',
      },
      none: {
        textTransform: 'none',
      },
      capitalizeFirstLetter: {
        '&:first-letter': {
          textTransform: 'uppercase',
        },
      },
    },
  },
});

export const titleComponent = {
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  h6: true,
} as const;
export type TitleAs = keyof typeof titleComponent;

export const textTransformComponent = {
  uppercase: true,
  lowercase: true,
  capitalizeFirstLetter: true,
  capitalizeWords: true,
  none: true,
} as const;
export type TitleTextTransform = keyof typeof textTransformComponent;

export const titleVariant = titleComponent;
export type TitleVariant = keyof typeof titleVariant;

export type TitleCSS = {
  global?: PikasCSS;
  h1?: PikasCSS;
  h2?: PikasCSS;
  h3?: PikasCSS;
  h4?: PikasCSS;
  h5?: PikasCSS;
  h6?: PikasCSS;
};

export type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  as: TitleAs;
  variant?: TitleVariant;
  textTransform?: TitleTextTransform;
  css?: TitleCSS;
  children?: ReactNode;
};

export const Title: FC<TitleProps> = ({
  children,
  as,
  variant,
  textTransform,
  css,
}) => (
  <TitleStyle
    as={as}
    variant={variant ?? as}
    css={{
      textTransform,
      ...css?.global,
      ...css?.[variant ?? as],
    }}
  >
    {children}
  </TitleStyle>
);
