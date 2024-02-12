import s from './Button.module.css'

interface ButtonProps {
  className?: string
  children?: string | JSX.Element | 'Next'
}

export const Button = ({className, children}: ButtonProps ) => {
  return (
    <button className={`${s.root} ${className}`}>{children}</button>
  )
}