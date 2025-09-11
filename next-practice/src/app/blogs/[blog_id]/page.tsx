

export default async function BlogsPage({params, searchParams}: {params: Promise<any>, searchParams: Promise<any>}) {

    console.log("params:", await params);
    console.log("searchParams:", await searchParams);

  return <div>Blogs Page

    {JSON.stringify(await params)}

    {JSON.stringify(await searchParams)}


    <p>Blog ID is : {(await params).blog_id}</p>
    <p>Search is : {(await searchParams).category}</p>
  </div>;
}