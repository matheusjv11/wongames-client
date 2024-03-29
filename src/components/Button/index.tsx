import React, { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes = AnchorHTMLAttributes<HTMLAnchorElement> | ButtonHTMLAttributes<HTMLAnchorElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large',
  fullWidth?: boolean,
  minimal?: boolean,
  icon?: JSX.Element, // Same as ReacNode
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperButton, ButtonProps> = ({ 
  children, 
  icon, 
  size = 'medium', 
  minimal = false, 
  fullWidth = false, 
  ...props}, ref) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} minimal={minimal} ref={ref} {...props}>
      {icon}
      {!!children && <span>{children}</span>}
  </S.Wrapper>
)
export default forwardRef(Button)
