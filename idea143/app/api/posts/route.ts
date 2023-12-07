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
