import { NextResponse } from "next/server";

// const isLoggedIn = true;
export function middleware(request){
    //  console.log("This is middleware")
    // if(!isLoggedIn && request.nextUrl.pathname != 'home'){
       return NextResponse.redirect(new URL('/home', request.url))
    // }
}

export const config = {
    matcher: ["/contact/:path"]
}

export default middleware;