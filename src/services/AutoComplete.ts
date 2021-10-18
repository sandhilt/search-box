import Query from '../typings/Query';
import { config } from '../config/default';
import { StorageSuggestions } from '../typings/Storage';

class AutoComplete {
  private static keyLocalStorage = 'searches';

  public static readonly defaultValue: Query = {
    products: [],
    suggestions: [],
  };

  private readonly url = new URL(
    `/autocomplete?source=${config.source}`,
    config.baseURL,
  );

  private latestSearches: StorageSuggestions;

  public get isExpires(): boolean {
    return Date.now() > this.latestSearches.expiresAt.getTime();
  }

  private generateExpiresAtAfterSomeSeconds(seconds: number): Date {
    const now = new Date();
    const nowSeconds = now.getSeconds();

    const afterSomeTime = new Date(now);
    afterSomeTime.setSeconds(nowSeconds + seconds);

    return afterSomeTime;
  }

  private generateCache(): StorageSuggestions {
    const afterSomeTime = this.generateExpiresAtAfterSomeSeconds(30);
    const storageSearch: StorageSuggestions = {
      data: new Map(),
      expiresAt: afterSomeTime,
      searchIndexes: new Set(),
    };

    return storageSearch;
  }

  private getOrGenerateCache() {
    const storageSearchString = localStorage.getItem(
      AutoComplete.keyLocalStorage,
    );

    if (storageSearchString) {
      const storageSearch: StorageSuggestions = JSON.parse(
        storageSearchString,
        (key, value) => {
          if (key === 'data') {
            return new Map(value);
          }
          if (key === 'expiresAt') {
            return new Date(value);
          }
          if (key === 'searchIndexes') {
            return new Set(value);
          }

          return value;
        },
      );

      const isExpires = Date.now() > storageSearch.expiresAt.getTime();

      if (!isExpires) {
        return storageSearch;
      }

      localStorage.removeItem(AutoComplete.keyLocalStorage);
    }

    /**
     * Created cache
     */
    const storageSearch = this.generateCache();

    const storageSearchStringCache = JSON.stringify(
      storageSearch,
      (key, value) => {
        if (value instanceof Map) {
          return Array.from(value.entries());
        }

        if (value instanceof Set) {
          return Array.from(value);
        }

        return value;
      },
    );
    localStorage.setItem(
      AutoComplete.keyLocalStorage,
      storageSearchStringCache,
    );

    return storageSearch;
  }

  constructor() {
    this.latestSearches = this.getOrGenerateCache();
  }

  public async getSuggestions(query: string): Promise<Query> {
    if (this.isExpires) {
      this.latestSearches = this.getOrGenerateCache();
    } else {
      if (this.latestSearches.searchIndexes.has(query)) {
        const cache = this.latestSearches.data.get(query);

        if (cache) {
          return cache;
        } else {
          this.latestSearches.searchIndexes.delete(query);
        }
      }
    }

    try {
      const url = new URL(this.url);
      url.searchParams.set('content', query);

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
