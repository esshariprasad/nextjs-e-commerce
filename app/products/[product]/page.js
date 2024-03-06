// pages/[productId].js

const ProductDetailsPage = ({ params }) => {

  const { productId } = params.product;
  console.log(productId)

};

export default ProductDetailsPage;
