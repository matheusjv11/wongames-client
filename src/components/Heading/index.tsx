import * as S from './styles'

export type LineColor = 'primary' | 'secondary'

export type HeadingProps = {
  children?: React.ReactNode,
  color?: 'white' | 'black',
  lineLeft?: boolean,
  lineBottom?: boolean,
  size?: 'small' | 'medium' | 'huge'
  lineColor?: LineColor
}

const Heading = ({ 
  children, 
  color = 'white', 
  lineLeft = false, 
  lineBottom = false, 
  size = 'medium',
  lineColor = 'primary'
}: HeadingProps) => (
  <S.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom} size={size} lineColor={lineColor}>
      { children }
  </S.Wrapper>
)
export default Heading