import { NextResponse } from "next/server";

// GET method for the route /api/posts
export async function GET() {
  // return 'Hello World!'
  const value=25;

  if(value>10){
    return Response.json({message:'value is greater than 10'});
    }
    else{

  return Response.redirect('https://www.google.com');
    }

}

// POST method for the route /api/posts
export async function POST() {
  return NextResponse.json({msg: 'Hello World!'});
}
