import dotenv from 'dotenv';
import mongodb from 'mongodb';
import productsDAO from './dao/productsDAO.js';
import app from './index.js';


async function main()
{
    dotenv.config();
    const port = process.env.PORT || 5000;
    const client = new mongodb.MongoClient(process.env.DB_URI);
    
    try
    {
        await client.connect();

        await client.db().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        await productsDAO.collection(client);

        app.listen(port, ()=>{
            console.log(`Server is running on http://localhost:${port}/api/v1/products`);
        });
    }
    catch(e)
    {
        console.error(e);
        process.exit(1);
    }
}

main().catch(console.error);