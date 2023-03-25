const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb+srv://andrewparsons_tmu:cGVyto6BvhpNmJQn@tmucluster2.ipti0ek.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
async function run() {
  try {
    const db = client.db('ccps530_lab7');
    const coll = db.collection('books');
    // Query
    const docs = [{ 
        title: "Deep Learning for Coders with fastai & PyTorch: AI Applications Without a PhD", 
        author: "Jeremy Howard & Sylvain Gugger", 
        publisher: "O'Reilly Media, Inc.", 
        date: "2021-11-05", 
        website: "https://course.fast.ai/Resources/book.html" },
        { title: "Quantum Computation and Quantum Information: 10th Anniversity Edition", 
        author: "Michael A. Nielsen and Isaac L. Chuang", 
        publisher: "Cambridge University Press", 
        date: "2011-01-30", 
        website: "https://www.cambridge.org/highereducation/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE#overview"},
        { title: "Spatial Computing", 
        author: "Shashi Shekhar and Pamela Vold", 
        publisher: "The MIT Press", 
        date: "2020-02-18", 
        website: "https://mitpress.mit.edu/9780262538046/spatial-computing/" },
        { title: "Machine Learning Engineering", 
        author: "Andriy Burkov", 
        publisher: "True Positive Inc.", 
        date: "2020-09-08", 
        website: "http://www.mlebook.com/wiki/doku.php" },
        { title: "Principles of Computer Architecture", 
        author: "Miles J. Murdocca, Vincent P. Heuring", 
        publisher: "Prentice-Hall", 
        date: "1999-11-29", 
        website: "https://academicos.azc.uam.mx/oan/lac/Murdocca_en.pdf" }
    ];

    const query = await coll.insertMany(docs);
    console.log('Multiple document inserted');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);