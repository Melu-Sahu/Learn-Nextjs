

export default async function BlogsPage({params, searchParams}: {params: any, searchParams: any}) {

    console.log("params:", await params);
    console.log("searchParams:", await searchParams);
  return <div>Blogs Page</div>;
}