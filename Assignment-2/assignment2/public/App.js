class ProductFilter extends React.Component {
  render() {
    return React.createElement("div", null, "This is a placeholder for the product filter.");
  }

}

function ProductRow(props) {
  const product = props.product;
  return React.createElement("tr", null, React.createElement("td", null, product.id), React.createElement("td", null, product.productName), React.createElement("td", null, "$", product.pricePerUnit), React.createElement("td", null, product.category), React.createElement("td", null, React.createElement("a", {
    href: product.imageUrl
  }, "View")));
}

function ProductTable(props) {
  const productRows = props.products.map(product => React.createElement(ProductRow, {
    key: product.id,
    product: product
  }));
  return React.createElement("table", {
    className: "bordered-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "ID"), React.createElement("th", null, "Product Name"), React.createElement("th", null, "Price"), React.createElement("th", null, "Category"), React.createElement("th", null, "Image"))), React.createElement("tbody", null, productRows));
}

class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.productAdd;
    const product = {
      productName: form.productName.value,
      pricePerUnit: form.pricePerUnit.value.substr(1),
      category: form.category.value,
      imageUrl: form.imageUrl.value
    };
    this.props.createProduct(product);
    form.productName.value = "";
    form.pricePerUnit.value = "$";
    form.category.value = "";
    form.imageUrl.value = "";
  }

  render() {
    return React.createElement("form", {
      name: "productAdd",
      onSubmit: this.handleSubmit
    }, React.createElement("input", {
      type: "text",
      name: "productName",
      placeholder: "Product Name"
    }), React.createElement("input", {
      type: "text",
      name: "pricePerUnit",
      placeholder: "Price (in $)",
      defaultValue: "$"
    }), React.createElement("input", {
      type: "text",
      name: "category",
      placeholder: "Category"
    }), React.createElement("input", {
      type: "text",
      name: "imageUrl",
      placeholder: "Image URL"
    }), React.createElement("button", null, "Add"));
  }

}

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
    this.createProduct = this.createProduct.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({
        products: []
      });
    }, 500);
  }

  createProduct(product) {
    product.id = this.state.products.length + 1;
    const newProductList = this.state.products.slice();
    newProductList.push(product);
    this.setState({
      products: newProductList
    });
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement("h1", null, "Product Tracker"), React.createElement("h4", null, "Showing all available products"), React.createElement("hr", null), React.createElement(ProductTable, {
      products: this.state.products
    }), React.createElement("h4", null, "Add a new product to inventory"), React.createElement("hr", null), React.createElement(ProductAdd, {
      createProduct: this.createProduct
    }));
  }

}

const element = React.createElement(ProductList, null);
ReactDOM.render(element, document.getElementById('contents'));