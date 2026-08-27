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
        return NextResponse.json({result: "Employee Info Deleted Successfully"}, {status: 200})
    } else {
        return NextResponse.json({result: "Employee Not Found"}, {status: 404})
    }
}