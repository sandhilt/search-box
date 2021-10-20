import { ComponentPropsWithoutRef } from 'react';
import { CardStyled } from './styles';

type CardProps = ComponentPropsWithoutRef<'section'>;

function Card({ ...props }: CardProps): JSX.Element {
  return <CardStyled {...props} />;
}

export default Card;
