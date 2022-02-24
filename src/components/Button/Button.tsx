import React from 'react';

import classes from './Button.module.scss';
type ButtonProps = {
  type?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  onClick,
  children,
}) => (
  <button className={classes.button} type={type} onClick={onClick}>
    {children}
  </button>
);

export default Button;
