let products;

export default class productsDAO
{
    static async collection(conn)
    {
        if(products)
        {
            return;
        }
        try
        {
            products = await conn.db().collection('woo_commerce');
        }
        catch(e)
        {
            console.error(`Unable to connect in productsDAO : ${e}`);
        }
    }

    static async getProducts({filters = null, page = 0, productsPerPage = 4}={})
    {
        let query, cursor;
        
        try
        {
            cursor = await products.find(query).limit(productsPerPage).skip(productsPerPage * page);

            const productsList = await cursor.toArray();
            const totalNumProducts = await products.countDocuments(query);
            return {productsList, totalNumProducts};
        }
        catch(e)
        {
            console.error(`Unable to issue find command, ${e}`);
            return { productsList: [], totalNumProducts: 0};
        }
    }
}