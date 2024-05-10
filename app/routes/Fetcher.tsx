// src/routes/PostPage.js
import { useFetcher } from '@remix-run/react';


function PostPage() {
  const { data, error, isLoading } = useFetcher({
    name: 'products',
    action: async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return response.json();
    }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data)

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data?.map(product => (
          <li key={product.id}>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <img src={product.image} alt={product.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostPage;
