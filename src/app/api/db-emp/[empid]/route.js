import { connectionString } from "@/lib/database/db_connection";
import { Employee } from "@/lib/database/model/employee";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const PUT = async (req, {params}) => {
     // for id
     const { empId } = await params;

     const id = { _id: empId };
    //  console.log(id);

     // For Data
     const payload = await req.json();
    //  console.log(payload);

    // For Mongo DB
   await mongoose.connect(connectionString);

   // getting result
   const result = await Employee.findOneAndUpdate(id,payload)

     return NextResponse.json({result, success: true})
}

export const GET = async (req, {params}) => {
    const { empId } = await params;
    const id = { _id:empId };
    // For Mongo
    await mongoose.connect(connectionString);
    // getting result
    const result = await Employee.findById(id)
    return NextResponse.json({result, success: true})
}

export const DELETE = async (req, {params}) => {
    const { empId } = await params;
    const id = { _id:empId };
    // For Mongo
    await mongoose.connect(connectionString);
    // getting result
    const result = await Employee.deleteOne(id);
    return NextResponse.json({result,success: true})
}