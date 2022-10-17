import type { PikasConfig } from '@pikas-ui/styles'
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

export interface DefaultToastCSS<Config extends PikasConfig>
  extends CustomToastCSS<Config> {
  icon?: IconCSS<Config>
  title?: Config['css']
  description?: Config['css']
}

export interface DefaultToastProps<Config extends PikasConfig>
  extends CustomToastProps<Config> {
  title?: string
  description?: string
  Icon?: React.FC<Config>
  css?: DefaultToastCSS<Config>
}

export const DefaultToast = <Config extends PikasConfig = PikasConfig>({
  description,
  title,
  Icon,
  css,
  ...props
}: DefaultToastProps<Config>): JSX.Element => {
  return (
    <CustomToast<Config> {...props} css={css}>
      <Container>
        {Icon && <Icon size={24} colorName="BLACK" css={css?.icon} />}
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
