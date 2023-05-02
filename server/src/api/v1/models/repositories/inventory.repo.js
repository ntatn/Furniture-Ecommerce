import inventory from "../inventory.js";

const insertInventory = async ({productId, location = "Unknown", stock}) => {
    return await inventory.create({
        productId: productId,
        location: location,
        stock: stock
    })
}

export default insertInventory