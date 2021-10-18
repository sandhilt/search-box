import { ComponentPropsWithRef } from 'react';
import { FormStyled } from './styles';

type FormProps = ComponentPropsWithRef<'form'>;

function Form({ ...props }: FormProps): JSX.Element {
  return <FormStyled {...props} />;
}

export default Form;
