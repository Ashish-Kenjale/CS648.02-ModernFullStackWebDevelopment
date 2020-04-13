import React from 'react';

function ProductRow({ product }) {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.productName}</td>
      <td>
        $
        {product.pricePerUnit}
      </td>
      <td>{product.category}</td>
      <td><a href={product.imageUrl} target="_blank">View</a></td>
    </tr>
  );
}

export default function ProductTable({ products }) {
  const productRows = products.map(product => (<ProductRow key={product.id} product={product} />));

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
    </table>
  );
}
