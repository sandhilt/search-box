import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Button, Input } from '../components';
import Datalist from '../components/Datalist';
import Query from '../typings/Query';

function Home(): JSX.Element {
  const [source] = useState<string>('nook');
  const [query, setQuery] = useState<Query>();
  const inputRef = useRef<HTMLInputElement>(null);

  const noop = useCallback<(event: FormEvent<HTMLFormElement>) => void>(
    (event) => {
      event.preventDefault();
    },
    [],
  );

  useEffect(() => {
    console.log({ current: inputRef.current });
  }, []);

  const handleDataSuggestions = useCallback(() => {
    const text = inputRef.current?.textContent;
    console.log(text);
  }, []);

  return (
    <main>
      <form onSubmit={noop}>
        <Input
          ref={inputRef}
          onChange={handleDataSuggestions}
          name="query"
          type="search"
          minLength={3}
          maxLength={50}
          required
        ></Input>
        <Datalist />
        <Button disabled type="submit">
          Pesquisar
        </Button>
      </form>
    </main>
  );
}

export default Home;
