import { StyleSheet, Image } from 'react-native';
import Colors from '@/constants/Colors';
import { Text, View } from '@/components/Themed';

const ProductListItem = ({ product }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>{product.price}</Text>
        </View>
    );
}

export default ProductListItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // For Android shadow
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 10,
        color: 'black',
    },
    price: {
        color: Colors.light.tint,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        aspectRatio: 1, // Keep the image aspect ratio as 1:1
    },
});
