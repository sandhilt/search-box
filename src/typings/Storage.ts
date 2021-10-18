import Query from './Query';

export interface StorageSuggestions {
  searchIndexes: Set<string>;
  data: Map<string, Query>;
  expiresAt: Date;
}
