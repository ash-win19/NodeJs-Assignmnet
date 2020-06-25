import React from 'react';
// Removed logo since we don't need it anymore
import './App.css';
class InfoTable extends React.Component {
  
  render() {
    return (
    <table className="table table-striped">
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Price</th>
        <th>Product ID</th>
      </tr>
    </thead>
    <tbody>
        {
            this.props.getData.length > 0 ?
            (
                this.props.getData.map(e=>
                    <tr key={e._id}>
                        <td>{e.Product}</td>
                        <td>{e.Price}</td>
                        <td>{e.ID}</td>
                        <td><button className='btn btn-primary'></button></td>
                        <td><button className='btn btn-primary'></button></td>
                    </tr>

                )
            )
            :
            (
                <tr>
                    <td>No data</td>
                </tr>
            )
            }
            
         
        
    </tbody>
  </table>
    );
  }
}
export default InfoTable;