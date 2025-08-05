

export default function NewsPage({ params, searchParams }: { params: { newsid: string }, searchParams: { category?: string } }) {
  const { newsid } = params;
  const { category } = searchParams;

  return (
    <>
      <h3>News ID: {newsid}</h3>
      <p>Category: {category ?? "No category provided"}</p>
    </>
  );
}
