interface ProductMeta {
  score: number;
  visitsClickCount: number;
}

export default interface Product {
  id: number;
  name: string;
  type: string;
  _meta: ProductMeta;
}
