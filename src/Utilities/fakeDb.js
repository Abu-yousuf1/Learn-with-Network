
const addToDb = id => {
    const stored_Cart = storedDb();
    if (id in stored_Cart) {
        stored_Cart[id] += 1
    } else {
        stored_Cart[id] = 1
    }
    upDateDb(stored_Cart)
}

const storedDb = () => {
    const exist = localStorage.getItem('service-Cart')
    return exist ? JSON.parse(exist) : {}
}

const upDateDb = cart => {
    localStorage.setItem("service-Cart", JSON.stringify(cart))
}
export { addToDb, storedDb }