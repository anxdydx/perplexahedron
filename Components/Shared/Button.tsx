import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Link from "next/link";

const Button = ({ className, href, onClick, children, px, white }: any) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-col-1  ${
    px || "px-4"
  } ${white ? "text-n-7" : "text-n-1"} ${className || ""}`;
  const spanClass = "relative z-8";

  const renderButton = () => (
    <button className={classes}>
      <ButtonGradient />
      {ButtonSvg(white)}
      <span className={spanClass}>{children}</span>
    </button>
  );
  const renderLink = () => (
    <Link href={href} className={classes}>
      <ButtonGradient />
      {ButtonSvg(white)}
      <span className={spanClass}>{children}</span>
    </Link>
  );
  return href ? renderLink() : renderButton();
};

export default Button;
