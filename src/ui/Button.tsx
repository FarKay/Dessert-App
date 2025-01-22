import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type: "primary" | "secondary" | "selected";
  disabled?: boolean;
  onClick?: () => void;
}

function Button({ children, type, disabled, onClick }: ButtonProps) {
  const base = "bg-[#c44e2a] border rounded-full text-sm font-medium";

  const styles = {
    primary:
      base +
      " border-[#816a5c] bg-[#ffffff] flex jusify-center items-center gap-2 py-3 px-6",
    secondary: base + " text-[#ffffff] w-full py-3 px-6",
    selected:
      base +
      " text-[#ffffff] flex justify-between items-center py-3 px-3 gap-[30px]",
  };

  if (onClick) {
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );
  }

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
