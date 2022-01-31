import { VFC } from 'react'
import styled from 'styled-components'
import { color, radius, space } from './constants'

type ButtonType = 'primary' | 'secondary' | 'error'
type Props = {
  title: string
  onClick: () => void
  type?: ButtonType
  width?: number
}
type AlertButtonProps = Omit<Props, 'type'>
const Wrapper = styled.button<{ width: number }>`
  padding: ${space.m};
  border-radius: ${radius.m};
  border: solid 1px ${color.green};
  background: ${color.green};
  color: ${color.white};
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  width: ${({width}) => width}px;

  &.secondary {
    border: solid 1px ${color.gray};
    background: ${color.white};
    color: ${color.black};
  }
  &.error {
    border: none;
    background: ${color.red};
    color: ${color.white};
  }
`

export const Button: VFC<Props> = ({title, onClick, width = 80, type = 'primary',}) => {
  return (
    <Wrapper onClick={onClick} width={width} className={type}>{title}</Wrapper>
  )
}
export const AlertButton: VFC<AlertButtonProps> = ({ title, width = 80, onClick }) => {
  return <Button type="error" onClick={onClick} title={title} width={width} />
}