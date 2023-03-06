const express = require('express')
const app = express()
const {MongoClient} = require('mongodb');


async function main(){

    const uri = "mongodb+srv://sana:sana2023@sana.ykms8wg.mongodb.net/test"
    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)