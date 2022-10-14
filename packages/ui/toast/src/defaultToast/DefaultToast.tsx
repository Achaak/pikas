import type { PikasCSS } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import type { IconCSS, IconProps } from '@pikas-ui/icons'
import React from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import type {
  CustomToastCSS,
  CustomToastProps,
} from '../customToast/CustomToast.js'
import { CustomToast } from '../customToast/CustomToast.js'

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  customRowGap: 8,
})

const Title = styled(ToastPrimitive.Title, {
  fontWeight: '$BOLD',
  color: '$BLACK',
  fontSize: '$EM-MEDIUM',
})

const Description = styled(ToastPrimitive.Description, {
  margin: 0,
  color: '$BLACK',
  fontSize: '$EM-SMALL',
})

const Container = styled('div', {
  display: 'flex',
  customColumnGap: 16,
  alignItems: 'center',
})

export interface DefaultToastCSS extends CustomToastCSS {
  icon?: IconCSS
  title?: PikasCSS
  description?: PikasCSS
}

export interface DefaultToastProps extends CustomToastProps {
  title?: string
  description?: string
  Icon?: React.FC<IconProps>
  css?: DefaultToastCSS
}

export const DefaultToast: React.FC<DefaultToastProps> = ({
  description,
  title,
  Icon,
  css,
  ...props
}) => {
  return (
    <CustomToast {...props} css={css}>
      <Container>
        {Icon && <Icon size={24} color="BLACK" css={css?.icon} />}
        {title || description ? (
          <Content>
            {title && <Title css={css?.title}>{title}</Title>}
            {description && (
              <Description css={css?.description}>{description}</Description>
            )}
          </Content>
        ) : null}
      </Container>
    </CustomToast>
  )
}
