import { MongoClient } from "mongodb";



// api/new-meetup
// POST /api/new-meetup

// name of this function is up to you, req contains object about incoming request, res will be needed for sending back a response
async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://kontaktjangolder:y0NXwPOTFRITGFVa@cluster0.tptrjbi.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({message:'Meetup inserted!'});

    }
}

export default handler;