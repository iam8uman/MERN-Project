export async function GET(request: Request) {
    // write backend logic here

    return new Response('Hello world from admin route!');


}

// post method
export async function POST(request: Request) {
    // write backend logic here

    return new Response('Hello world from admin route! POST Method');
}