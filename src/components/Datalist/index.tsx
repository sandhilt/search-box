import { ComponentPropsWithRef } from 'react';

interface DatalistProps extends ComponentPropsWithRef<'datalist'> {
  options?: string[];
}

function Datalist({ options, ...props }: DatalistProps): JSX.Element {
  return (
    <datalist {...props}>
      {options?.map((option, index) => (
        <option key={index} value={option} />
      ))}
    </datalist>
  );
}

export default Datalist;
