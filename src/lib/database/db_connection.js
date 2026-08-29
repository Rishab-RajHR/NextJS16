const username = process.env.myusername
const password = process.env.mypassword

if(!username || !password) {
   throw new Error("Missing MongoDB Credentials")
}

export const connectionString = `mongodb+srv://${username}:${password}@cluster0.7zdxvo1.mongodb.net/?appName=Cluster0`;