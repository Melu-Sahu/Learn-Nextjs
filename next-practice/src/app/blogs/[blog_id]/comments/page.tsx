

export default async function CommentPage({params, searchParams}: {params: Promise<any>, searchParams: Promise<any>}) {

  console.log("Params", await params);
  console.log("SearchParams", await searchParams);


  return <div>Comments Page

    {JSON.stringify(await params)}

    {JSON.stringify(await searchParams)}

    <p> Blog ID : {(await params).blog_id}</p>
    <p> Comment ID : {(await params).comments}</p>
    <p> Search Category : {(await searchParams).category}</p>
    <p> Search Stars : {(await searchParams).stars}</p>
  </div>;
}