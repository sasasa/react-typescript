import { VFC, InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { color, fontSize, radius, space } from './constants'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean
  type?: 'text' | 'number' | 'password'
  className?: string
}
const Wrapper = styled.input`
  height: 42px;
  padding: ${space.m};
  border-radius: ${radius.m};
  border: solid 1px ${color.gray};
  font-size: ${fontSize.m};
  box-sizing: border-box;
  &.error {
    color: ${color.red};
    border: solid 1px ${color.red};
  }
`

export const Input: VFC<Props> = ({type, value, onChange, className = '', error = false, ...props}) => {
  return (
    <Wrapper 
      className={`${className} ${error ? 'error' : ''}`}
      type={type} value={value} onChange={onChange} {...props} />
  )
}