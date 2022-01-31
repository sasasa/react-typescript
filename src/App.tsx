import { Text } from './libs/Text'
import { Heading } from './libs/Heading'
import { Button, AlertButton } from './libs/Button'
import { Textarea } from './libs/Textarea'
import { Input } from './libs/Input'
import { PasswordForm } from './libs/PasswordForm'

export const App = () => {
  return (
    <>
      <div>
        <PasswordForm onSubmit={(password) => alert(password)} />
      </div>
      <Text text="hoge" />
      <Heading tag="h1">見出し</Heading>
      <Heading tag="h3">
        <span>hello, world!</span>
      </Heading>
      <div>
        <Button onClick={() => console.log('clicked!')} title="Button1" type="primary" width={120} />
        <Button onClick={() => console.warn('clicked!')} title="Button2" type="secondary" />
        <Button onClick={() => console.error('clicked!')} title="Button3" type="error" />
        <AlertButton onClick={() => console.error('clicked!')} title="Button4" />
      </div>
      <div>
        <Textarea width={200} maxLength={100} />
      </div>
      <div>
        <Input type="password" error={true} />
      </div>
    </>
  )
}