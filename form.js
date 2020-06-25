import React from 'react';
// Removed logo since we don't need it anymore
import './App.css';
class InfoForm extends React.Component {
  constructor()
  {
    super();

    this.state={
      Product:"",
      Price:"",
      ID:""
    }
  }

  infoChange = event=> {
    const{name,value}=event.target;
    this.setState(
      {
        [name] : value
      }
    )
  }
  
  infoSubmit = event =>{
    event.preventDefault();
    let data ={
      Product:this.state.Product,
      Price:this.state.Price,
      ID:this.state.ID
    }
    this.props.myData(data);
  }
  render() {
    return (
        <form onSubmit={this.infoSubmit} autoComplete='off'>
        <div className="form-group">
          <label>Product Name:</label>
          <input type="text" className="form-control" placeholder='Enter Product name'
          
          onChange={this.infoChange}
          name="Product"
          value={this.state.Product}
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="number" className="form-control" placeholder='Enter price'
          
          onChange={this.infoChange}
          name="Price"
          value={this.state.Price}
          />
        </div>
        <div className="form-group">
          <label>Product ID:</label>
          <input type="number" className="form-control" placeholder='Enter Product ID' 
          
          onChange={this.infoChange}
          name="ID"
          value={this.state.ID}
          />
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
        </form>
    );
  }
}
export default InfoForm;