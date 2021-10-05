
import { useEffect, useState } from 'react';
import { storedDb } from '../Utilities/fakeDb';

const useCart = product => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        if (product.length) {
            const saveCart = storedDb()
            const newCart = []
            for (const id in saveCart) {
                const addItem = product.find(pd => pd.id == id);
                if (addItem) {
                    const quantity = saveCart[id]
                    addItem.quantity = quantity;
                    newCart.push(addItem)
                }
            }
            setCart(newCart)
        }

    }, [product])
    return [cart, setCart]
}
export default useCart;