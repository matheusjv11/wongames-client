import * as S from './styles'
import { InputHTMLAttributes } from 'react'

/* New Storybook structure */

export type CheckboxProps = {
  onCheck: (status: boolean) => void,
  label?: string,
  labelFor?: string,
  labelColor?: 'white' | 'black'
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  onCheck,
  label,
  labelFor = '',
  labelColor = 'white'
}: CheckboxProps) => (
  <S.Wrapper>
    <S.Input id={labelFor} type="checkbox" />
    {!!label && <S.Label htmlFor={labelFor} labelColor={labelColor}>{label}</S.Label>}
  </S.Wrapper>
)
export default Checkbox
