import { employee } from "@/app/db/db"
import { NextResponse } from "next/server";


export const GET = async (req, { params }) => {
    //  console.log(value.params.employeeId);
    // const data = employee;

    const { empid } = await params;

    const empData = employee.filter((item) => item.employeeId == empid)
    let result = empData.length == 0 ? {result: 'No Employee Found'} : {result: empData}
    return NextResponse.json(result)
}

export const DELETE = async (req, { params }) => {

    const { empid } = await  params;
    let employeeId = empid;
    if (employeeId) {
        return NextResponse.json({result: "Employee Info Deleted Successfully", success: true}, {status: 200})
    } else {
        return NextResponse.json({result: "Employee Not Found", success: false}, {status: 404})
    }
}

export const PUT = async (req, { params }) => {

     const { empid } = await params;     
     let payload = await req.json();
     payload.employeeId = empid;
    //  console.log(payload);
    //  return NextResponse.json({success: true})
    if(!payload.employeeId || !payload.name || !payload.salary || !payload.email){
        return NextResponse.json({result:"Error",success: false})
    }
    return NextResponse.json({result:"Success",success:true})
}