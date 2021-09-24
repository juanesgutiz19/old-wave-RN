import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { useProductDetail } from '../hooks/useProductDetail';
import React, { useContext, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ProductsStackParams } from '../navigator/ProductsNavigator';
import { ProductDetail } from '../components/product-detail/ProductDetail';
import { ShoppingCartContext } from '../context/CartContext';
import { CompleteProduct } from '../interfaces/appInterfaces';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductDetailScreen'> { };


export const ProductDetailScreen = ({ route, navigation }: Props) => {
    const { top, left } = useSafeAreaInsets();
    const { id } = route.params;

    function goToShoppingCart(item?: CompleteProduct) {
        if (item) {
            onAddItemTocart(item);
            navigation.navigate('ShoppingCartScreen')
        }

    }

    const { addItemToCart } = useContext(ShoppingCartContext);
    function onAddItemTocart(item: any) {
        addItemToCart({
            price: item.precio,
            quantity: 1,
            selected: false,
            item: {
                id: item.id,
                name: item.nombre,
                unitPrice: item.precio,
                image: item.pictures[0]
            }
        })
    }

    const { isLoading, productDetail } = useProductDetail(id);

    return (
        <>

            {
                isLoading
                    ? <ActivityIndicator size={35} color="grey" style={{ marginTop: top }} />
                    : <ProductDetail
                        productFull={productDetail!}
                        onAddToCart={onAddItemTocart.bind(this, productDetail)}
                        goToShoppingCart={goToShoppingCart.bind(this, productDetail)}
                    />
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    }
});