interface ProductMeta {
  score: number;
  visitsClickCount: string;
}

export default interface Product {
  id: string;
  name: string;
  type: string;
  _meta: ProductMeta;
}
