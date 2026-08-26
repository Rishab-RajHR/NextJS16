// export async function GET(request) {
//     return new Response('Hello API Route')
// }

import { NextResponse } from "next/server"

export const GET = (request) => {
    return NextResponse.json({name:"Alex", age:24, department:"CS"})
}