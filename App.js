import React from 'react';
import InfoForm from './form'
import InfoTable from './table'
import axios from 'axios';
// Removed logo since we don't need it anymore
import './App.css';
class App extends React.Component {

  constructor()
  {
    super();
    this.state=
  {
    data:[]
  };

  }

  
  create = data =>
  {
    axios.post('http://localhost:5000/info',data).then(res =>{
      console.log(res);    }
    
    )
    
  }
  componentDidMount()
  {
      this.getAll();
  }

  getAll()
  {
    axios.get('http://localhost:3000/').then( res =>{
      console.log(res.data);
      this.setState({
        data:res.data
      })
    })
  }
  
  render() {
    return (
      <div className="container mt -4">
        <div className='row'>
          <div className='col-6'>
            <InfoForm myData={this.create}></InfoForm>
          </div>
        
          <div className='col-6'>
            <InfoTable getData={this.state.data}></InfoTable>
          </div>
        </div>
      </div>
    );
  }
}
export default App;