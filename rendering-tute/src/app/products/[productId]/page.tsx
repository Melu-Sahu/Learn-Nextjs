import Link from "next/link";

export async function generateStaticParams() {
  // In a real application, you might fetch this data from a database or API
  const products = [{ productId: "soap" }, { productId: "shampoo" }];

  // fetch('https://jsonplaceholder.typicode.com/posts')
  // .then(response => response.json())
  // .then(data => {
  //   data.slice(0, 5).forEach((item: any) => {
  //     products.push({ productId: item.id.toString() });
  //   });
  // })
  // .catch(error => console.error('Error fetching data:', error));

  return products;


}


export const dynamicParams = true; // Enable dynamic params for products not pre-rendereds

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;

  // Simulate fetching product data
  const product = await getProductById(productId);

  return (
    <div>
      <Link href="/" className="underline text-blue-400">
        Back to Home
      </Link>
      <h1>Product: {product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

// Mock function to simulate fetching product data
async function getProductById(productId: string) {
  // In a real application, you would fetch this data from a database or API
  return {
    id: productId,
    name: `Product ${productId}`,
    description: `This is a description for product ${productId}.`,
    price: (Math.random() * 100).toFixed(2),
  };
}
