import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Button, Input, Datalist, Title, Form } from '../../components';
import Query from '../../typings/Query';
import debounce from '../../utils/debounce';
import { Container, WrapperBox } from './styles';
import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import AutoComplete from '../../services/AutoComplete';

function Home(): JSX.Element {
  const [data, setData] = useState<Query>(AutoComplete.defaultValue);
  const [query, setQuery] = useState<string>();

  const service = useRef(new AutoComplete());

  const inputRef = useRef<HTMLInputElement>(null);

  const handleData = async (query: string) => {
    const response = await service.current.getSuggestions(query);
    setData(response);
  };

  useEffect(() => {
    if (query) {
      handleData(query);
    } else {
      setData(AutoComplete.defaultValue);
    }
  }, [query]);

  const handleSubmit = useCallback<(event: FormEvent<HTMLFormElement>) => void>(
    (event) => {
      event.preventDefault();
    },
    [],
  );

  const handleDataSuggestions = useCallback(async () => {
    const text = inputRef.current?.value.trim();

    if (!text || text.length === 0) {
      setQuery(undefined);
    }

    if (text && text.length >= 3 && text !== query) {
      setQuery(text);
    }
  }, [query]);

  const debounceHandlerChange = useMemo(
    () => debounce(handleDataSuggestions, 2000),
    [handleDataSuggestions],
  );

  const handleClear = () => {
    setQuery(undefined);
    setData(AutoComplete.defaultValue);
  };

  return (
    <Container>
      <WrapperBox>
        <Title>Busca</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            list="suggestions-list"
            ref={inputRef}
            onChange={debounceHandlerChange}
            name="query"
            type="search"
            minLength={3}
            maxLength={50}
            required
          ></Input>
          <Datalist id="suggestions-list" options={data.suggestions} />
          <Button type="reset" onClick={handleClear}>
            <FontAwesomeIcon icon={faTrash} /> Limpar
          </Button>
          <Button type="submit">
            <FontAwesomeIcon icon={faSearch} fixedWidth />
            Pesquisar
          </Button>
        </Form>
      </WrapperBox>
    </Container>
  );
}

export default Home;
