/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, FormControl, FormGroup, ControlLabel, Button,
} from 'react-bootstrap';

export default class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.productAdd;

    const product = {
      productName: form.productName.value, pricePerUnit: form.pricePerUnit.value.substr(1), category: form.category.value, imageUrl: form.imageUrl.value,
    };

    const { createProduct } = this.props;
    createProduct(product);

    form.productName.value = '';
    form.pricePerUnit.value = '$';
    form.category.value = 'Shirts';
    form.imageUrl.value = '';
  }


  render() {
    return (
      <Form inline name="productAdd" onSubmit={this.handleSubmit}>
      <FormGroup>
        <ControlLabel>Owner:</ControlLabel>
        {' '}
        <FormControl type="text" name="owner" />
      </FormGroup>
      {' '}
      <FormGroup>
        <ControlLabel>Title:</ControlLabel>
        {' '}
        <FormControl type="text" name="title" />
      </FormGroup>
      {' '}
      <Button bsStyle="primary" type="submit">Add</Button>
    </Form>

      

      <Form inline name="productAdd" onSubmit={this.handleSubmit}>
        <FormGroup>
          <ControlLabel>Category:</ControlLabel>
          <FormControl
            componentClass="select"
            value={status}
            onChange={this.onChangeStatus}
          >
            <option value="">(All)</option>
            <option value="New">New</option>
            <option value="Assigned">Assigned</option>
            <option value="Fixed">Fixed</option>
            <option value="Closed">Closed</option>
          </FormControl>
        </FormGroup>

        <table className="unbordered-table">
          <tbody>
            <tr>
              <td>
                <div>
                  Category
                  <br />
                  <select id="categoryMenu" name="category">
                    <option value="Shirts">Shirts</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Jackets">Jackets</option>
                    <option value="Sweaters">Sweaters</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>
              </td>

              <td>
                <div>
                  Price Per Unit
                  <br />
                  <input type="text" name="pricePerUnit" defaultValue="$" />
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <div>
                  Product Name
                  <br />
                  <input type="text" name="productName" />
                </div>
              </td>
              <td>
                <div>
                  Image URL
                  <br />
                  <input type="text" name="imageUrl" />
                </div>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>
                <Button bsStyle="primary" type="submit">Add Product</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </Form>
    );
  }
}

ProductAdd.propTypes = {
  createProduct: PropTypes.func.isRequired,
};
