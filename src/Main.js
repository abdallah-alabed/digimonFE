import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import DigiCard from './components/DigiCard';
import axios from 'axios';
import Favourites from './components/Favourites';

class Main extends Component {
constructor(props){
  super(props);

  this.state=({
    CardsData:[],
  })
}

componentDidMount = async () =>{
  const digimons = await axios.get(`http://${process.env.REACT_APP_BACKEND_URL}/api`);
  this.setState({
    CardsData:digimons.data,
  })
}

addFav= async (element) =>{
  await axios.post(`http://${process.env.REACT_APP_BACKEND_URL}/addDigimon`,element)
}

  render() {
    return (
      <div>
        <DigiCard CardsData={this.state.CardsData} addFav={this.addFav} />
      </div>
    )
  }
}

export default Main
 


