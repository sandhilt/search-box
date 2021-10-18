import Query from '../typings/Query';
import { config } from '../config/default';

class AutoComplete {
  private readonly url = new URL(
    `/autocomplete?source=${config.source}`,
    config.baseURL,
  );

  public static readonly defaultValue: Query = {
    products: [],
    suggestions: [],
  };

  public async getSuggestions(query: string): Promise<Query> {
    const url = new URL(this.url);
    url.searchParams.set('content', query);

    try {
      const response = await fetch(url.href);
      const value: Query = await response.json();

      return value;
    } catch (e) {
      console.error(e);

      return AutoComplete.defaultValue;
    }
  }
}

export default AutoComplete;
