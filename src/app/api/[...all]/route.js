import { NextResponse } from "next/server"


export const GET = async (req, value) => {
    // console.log(value.params.all);
    // return NextResponse.json({result: "Success"})

    // Another method
    const details = value.params.all
    return NextResponse.json({result: details})
}