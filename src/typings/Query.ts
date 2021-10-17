import Product from './Product';
import Suggetion from './Suggetion';

export default interface Query {
  products: Product[];
  suggestions: Suggetion[];
}
