import { notFound } from "next/navigation";

export default async function ProductDetails({
  params,
}: {
  params: { product_id: string };
}) {
  const {product_id} =  params;


  console.log("Product Id is : ", product_id)

  if(product_id){
    
  }

  return (
    <>
      <p>Product Id is : {product_id}</p>
    </>
  );
}



// below will also work with await syntex 


// export default async function ProductDetails({
//   params,
// }: {
//   params: Promise<{product_id : string}>;
// }) {
//   const {product_id} =  await params;

//   return (
//     <>
//       <p>Product Id is : {product_id}</p>
//     </>
//   );
// }
