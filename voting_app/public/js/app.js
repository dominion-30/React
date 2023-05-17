
// class ProductList extends React.Component {

//   handleProductUpVote(productId) {
//     console.log(productId + ' was upvoted.');
//   }

//   render() {
//     const products = Seed.products.sort((a, b) => (
//       b.votes - a.votes
//     ));
//     const productComponents = products.map((product) => (
//       <Product
//         key={'product-' + product.id}
//         id={product.id}
//         title={product.title}
//         description={product.description}
//         url={product.url}
//         votes={product.votes}
//         submitterAvatarUrl={product.submitterAvatarUrl}
//         productImageUrl={product.productImageUrl}
//         onVote={this.handleProductUpVote}
//       />
//     ));
//     return (
//       <div className='ui unstackable items'>
//         {productComponents}
//       </div>
//     );
//   }
// }

// class Product extends React.Component {
//   handleUpVote() {
//     this.props.onVote(this.props.id);
//   }
//   render() {
//     return (
//       <div className='item'>
//         <div className='image'>
//           <img src={this.props.productImageUrl} />
//         </div>
//         <div className='middle aligned content'>
//           <div className='header'>
//             <a onClick={this.handleUpVote}>
//               <i className='large caret up icon' />
//             </a>
//             {this.props.votes}
//           </div>
//           <div className='description'>
//             <a href={this.props.url}>
//               {this.props.title}
//             </a>
//             <p>
//               {this.props.description}
//             </p>
//           </div>
//           <div className='extra'>
//             <span>Submitted by:</span>
//             <img
//               className='ui avatar image'
//               src={this.props.submitterAvatarUrl}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <ProductList />,
//   document.getElementById('content')
// );


// class ProductList extends React.Component{
//   render(){
//     return(<div className='ui unstackable items'>
//       Hello who is it
//     </div>);
//   }

// }

// ReactDOM.render(<ProductList />, document.getElementById("content"));

// This is the start of the project in Full Stack React




// class ProductList extends React.Component{
//   render(){
//     return(<div className="ui unstackable items">
//       <Product />
//     </div>);
//   }
// }




// class Product extends React.Component{
//   render(){
//     return(
//     <div className="item">
//       <div className="image">
//         <img src="images/products/image-aqua.png"/>
//       </div>

//       <div className="middle aligned content">
//         <div className='description'>
//           <a>Fort Knight</a>
//           <p>Authentic renaissance actors, delivered in just two week\s</p>
//         </div>

//         <div className="extra">
//         <span>Submitted by:</span>
//         <img className="ui avatar image" src="images/avatars/daniel.jpg"/>
//       </div>


//       </div>

    
//     </div>);
//   }
// }


// ReactDOM.render(<ProductList/>, document.getElementById('content'));
