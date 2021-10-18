import { ComponentPropsWithRef } from 'react';
import Suggetion from '../../typings/Suggetion';

interface DatalistProps extends ComponentPropsWithRef<'datalist'> {
  options?: Suggetion[];
}

/**
 * @todo remove?
 */
function Datalist({ options, ...props }: DatalistProps): JSX.Element {
  return (
    <datalist {...props}>
      {options?.map(({ term }, index) => (
        <option key={index} value={term} />
      ))}
    </datalist>
  );
}

export default Datalist;
