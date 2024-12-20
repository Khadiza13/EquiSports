const express=require('express');
const cors=require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app=express();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5fnri.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
  //  await client.connect();

    const sportsCollection=client.db('sportsDB').collection('sports');

   app.get('/all',async(req,res)=>{
    const cursor=sportsCollection.find();
    const result=await cursor.toArray();
    res.send(result);
   })

   app.get('/product', async (req, res) => {
    const cursor = sportsCollection.find();
    const result = await cursor.limit(6).toArray();  
    res.send(result);
  });

   app.get('/product/:id',async(req,res)=>{
    const id=req.params.id;
    const query={_id:new ObjectId(id)}
    const result=await sportsCollection.findOne(query);
    res.send(result);
   })

   app.put('/product/:id',async(req,res)=>{
    const id=req.params.id;
    const filter={_id:new ObjectId(id)}
    const options={upsert:true};
    const updated=req.body;
    const product={
      $set:{
        image:updated.image,
        itemName:updated.itemName, 
    categoryName:updated.categoryName,
    description:updated.description,
    price:updated.price,
    rating:updated.rating,
    customization:updated.customization,
    processingTime:updated.processingTime,
    stockStatus:updated.stockStatus,
      }
    }
    const result=await sportsCollection.updateOne(filter,product,options);
    res.send(result);
   })

   app.get('/myproducts', async (req, res) => {
    const email = req.query.email; 
    const query = { userEmail: email }; 
    const result = await sportsCollection.find(query).toArray();
    res.send(result);
});

    app.post('/product',async(req,res)=>{
      const newProduct=req.body;
      console.log(newProduct);
      const result=await sportsCollection.insertOne(newProduct);
      res.send(result);
    })

    app.delete('/product/:id', async (req, res) => {
     // console.log('going to delete', req.params.id);
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await sportsCollection.deleteOne(query);
      res.send(result);
  })

    // Send a ping to confirm a successful connection
   // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);


app.get('/',(req,res)=>{
    res.send('Sever running');
})

app.listen(port,()=>{
    console.log(`Sever running on port:${port}`);
})