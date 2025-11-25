import React, { forwardRef } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className = "", ...props }, ref) => (
  <button ref={ref} className={className} {...props} />
));

Button.displayName = "Button";

export default Button;
