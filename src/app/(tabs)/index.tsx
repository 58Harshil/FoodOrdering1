import { Text, View } from '@/components/Themed';
import products from '../../../assets/data/products';
import ProductListItem from '@/components/ProductListItem';
export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product={products[6]} />
      <ProductListItem product={products[7]} />
    </View>
  );
}
