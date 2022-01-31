import { VFC } from 'react'
import styled from 'styled-components'
import { fontSize } from './constants'

type Props = {
  text: string
  className?: string
}
const Wrapper = styled.p`
  font-size: ${fontSize.m};
`

export const Text: VFC<Props> = ({ text, className = '' }) => {
  return <Wrapper className={className}>{text}</Wrapper>
}