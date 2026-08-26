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