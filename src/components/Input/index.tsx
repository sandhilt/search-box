import { ComponentPropsWithRef, forwardRef } from 'react';
import { InputStyled } from './styles';

type InputProps = ComponentPropsWithRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, refForward) => {
    return <InputStyled ref={refForward} {...props} />;
  },
);

export default Input;
