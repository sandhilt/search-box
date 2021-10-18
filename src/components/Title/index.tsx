import { ComponentPropsWithRef } from 'react';
import { TitleStyled } from './styles';

type TitleProps = ComponentPropsWithRef<'h1'>;

function Title({ ...props }: TitleProps): JSX.Element {
  return <TitleStyled {...props} />;
}

export default Title;
