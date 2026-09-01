import { connectionString } from "@/lib/database/db_connection"
import mongoose from "mongoose"
import { NextResponse } from "next/server";


export const POST = async () => {
    try {
       await mongoose.connect(connectionString);

       const data = await request.formData();
       const file = data.get('file');

       if(!file) {
          return NextResponse.json({success:false})
       }

       const bufferData = await file.arrayBuffer();
       const buffer = Buffer.from(bufferData);

       const newImage = new Image({
           name: file.name,
           data: buffer,
           contentType: file.Type
       });
       await newImage.save();

       return NextResponse.json({ response: "Successfully Updated", success:true});

    } catch (error) {
       console.log(error);
    }
}