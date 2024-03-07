import axios from 'axios';

// app/page.js 
export default async function ProductPage() {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://65e8a31c4bb72f0a9c4ffc6f.mockapi.io/products');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return []; // Return an empty array on error
    }
  };

  const products = await fetchData();

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
