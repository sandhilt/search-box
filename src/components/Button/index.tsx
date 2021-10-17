import { ComponentPropsWithoutRef } from 'react';
import { ButtonStyled } from './styles';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

function Button({ ...props }: ButtonProps): JSX.Element {
  return <ButtonStyled {...props} />;
}

export default Button;
