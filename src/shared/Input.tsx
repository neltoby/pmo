import { ChangeEvent, InputHTMLAttributes } from "react"

type InputProp = InputHTMLAttributes<HTMLInputElement> & {
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ value, onChange, type, ...prop }: InputProp ) => {
  return <input onChange={onChange} value={value} {...prop} />
}

export default Input