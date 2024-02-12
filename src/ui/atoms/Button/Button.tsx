import s from "./Button.module.css";

interface ButtonProps {
  className?: string;
  children?: string | JSX.Element | "Next";
  onClick: () => void;
}

export const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${s.root} ${className}`}>
      {children}
    </button>
  );
};
