import type { PikasCSS } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import type { IconCSS, IconProps } from '@pikas-ui/icons';
import * as ToastPrimitive from '@radix-ui/react-toast';
import type {
  CustomToastCSS,
  CustomToastProps,
} from '../customToast/CustomToast.js';
import { CustomToast } from '../customToast/CustomToast.js';
import { FC } from 'react';

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  rowGap: 8,
});

const Title = styled(ToastPrimitive.Title, {
  fontWeight: '$bold',
  color: '$black',
  fontSize: '$em-base',
});

const Description = styled(ToastPrimitive.Description, {
  margin: 0,
  color: '$black',
  fontSize: '$em-small',
});

const Container = styled('div', {
  display: 'flex',
  columnGap: 16,
  alignItems: 'center',
});

export type DefaultToastCSS = CustomToastCSS & {
  icon?: IconCSS;
  title?: PikasCSS;
  description?: PikasCSS;
};

export type DefaultToastProps = CustomToastProps & {
  title?: string;
  description?: string;
  Icon?: FC<IconProps>;
  css?: DefaultToastCSS;
};

export const DefaultToast: FC<DefaultToastProps> = ({
  description,
  title,
  Icon,
  css,
  ...props
}) => (
  <CustomToast {...props} css={css}>
    <Container>
      {Icon && <Icon size={24} colorName="black" css={css?.icon} />}
      {title ?? description ? (
        <Content>
          {title && <Title css={css?.title}>{title}</Title>}
          {description && (
            <Description css={css?.description}>{description}</Description>
          )}
        </Content>
      ) : null}
    </Container>
  </CustomToast>
);
