
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


// React Journey

// class ProductList extends React.Component{
//   render(){
//     return(<div className="ui unstackable items">
//       <Product />
//     </div>);
//   }
// }

// Data Driven Model

// class ProductList extends React.Component{
//   render(){
//     const product = Seed.products[3]
//     return(<div className="ui unstackable items">
//       <Product 
//       id={product.id}
//       title={product.title}
//       description={product.description}
//       url={product.url}
//       votes={product.votes}
//       submitterAvatarUrl={product.submitterAvatarUrl}
//       productImageUrl={product.productImageUrl}/>
//     </div>

//     );
//   }
// }



// class Product extends React.Component{
//   render(){
//     return(
//     <div className="item">
//       <div className="image">
//         <img src={this.props.productImageUrl}/>
//       </div>

//       <div className="middle aligned content">
//         <div className='header'>
//           <a>
//             <i className="large caret up icon"/>
//           </a>
//           {this.props.votes}
          
//         </div>

//         <div className="description">
//           <a href={this.props.url}>
//             {this.props.title}  
//           </a> 

//           <p>
//             {this.props.description}
//           </p>

//         </div>

//         <div className="extra">
//         <span>Submitted by:</span>
//         <img className="ui avatar image" src={this.props.submitterAvatarUrl}/>
//       </div>


//       </div>

    
//     </div>);
//   }
// }


// ReactDOM.render(<ProductList/>, document.getElementById('content'));

// Rendering a single product

// class ProductList extends React.Component{
//   render(){
//     const product = Seed.products[0];
//     return(<div className="ui unstackable items">
//       <Product 
//       id={product.id}
//       title={product.title}
//       description={product.description}
//       url={product.url}
//       votes={product.votes}
//       submitterAvatarUrl={product.submitterAvatarUrl}
//       productImageUrl={product.productImageUrl}/>
//     </div>);
//   }
// }


// class ProductList extends React.Component{
//   render(){
//     const products = Seed.products.sort((a,b) => (b.votes - a.votes));
//     const productComponents = Seed.products.map((product) =>(
    
//       <Product
//       key={"product-" + product.id}
//       id={product.id}
//       title={product.title}
//       description={product.description}
//       url={product.url}
//       votes={product.votes}
//       submitterAvatarUrl={product.submitterAvatarUrl}
//       productImageUrl={product.productImageUrl}
//       />));

//       return(<div className="ui unstackable items">
//         {productComponents}
//       </div>)
    
 
//   }
// }

// class Product extends React.Component{
//   render(){
//     return(
//       <div className="item">
//         <div className="image">
//           <img src={this.props.productImageUrl}/>
//         </div>
//         <div className="middle aligned content">
//           <div className="header">
//             <a>
//               <i className="large caret up icon"/>
//             </a>
//             {this.props.votes}
//           </div>

//           <div className="description">
//           <a href={this.props.url}>
//             {this.props.title}
//           </a>
//           <p>
//             {this.props.description}
//           </p>
//         </div>

//         <div className="extra">
//           <span>Submitted by:</span>
//           <img className="ui avatar image" src={this.props.submitterAvatarUrl}/>
//         </div>
//         </div>
       
//       </div>
//     );
//   }
// }

// ReactDOM.render(<ProductList/>, document.getElementById("content"));

class ProductList extends React.Component{
  handleProductUpVote(productId){
    console.log(productId + "was upvoted.");
  }
  render(){
   
    const products = Seed.products.sort((a,b)=>(b.votes - a.votes));
    const productComponents = Seed.products.map((product)=>(<Product
      key={'product-' + product.id}
      id={product.id}
      title={product.title}
      description={product.description}
      url={product.url}
      votes={product.votes}
      submitterAvatarUrl={product.submitterAvatarUrl}
      productImageUrl={product.productImageUrl}
      onVote = {this.handleProductUpVote}
     /> 
      
      ));
      return(
        <div className="ui unstackable items">
          {productComponents}
        </div>
      );
  }
}

class Product extends React.Component{
  constructor(props){
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this);
  }

  handleUpVote(){
    this.props.onVote(this.props.id);
  }
  render(){
    return(
      <div className="item">
        <div className="image">
          <img src={this.props.productImageUrl}/>
        </div>

        <div className="middle aligned content">
          <div className="header">
            <a onClick={this.handleUpVote}>
              <i className="large caret up icon"/>
            </a>
            {this.props.votes}
          </div>

          <div className="description">
            <a href={this.props.url}>
              {this.props.title}
            </a>

            <p>
              {this.props.description}
            </p>
          </div>

          <div className="extra">

            <span>Submitted by:</span>
            <img className="ui avatar image" src={this.props.submitterAvatarUrl}/>

          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<ProductList/>, document.getElementById("content"));