import { styled } from '@pikas-ui/styles'
import React from 'react'

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export interface ToastProps {}

export const Toast: React.FC<ToastProps> = () => {
  return <Container></Container>
}

Toast.defaultProps = {}
