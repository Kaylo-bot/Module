import {Component} from 'react';

import NavBar from '../NavBar/Navbar';
import Menu from '../Menu/Menu';
import Content from '../Content/Content';


import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {value:'Cards', href: '/cards', icon: 'card'},
      ],
      menuActive: false,
      // cardContent:[]////////////закінчив на розробці зміни рандома для різних типів слів
    }
  }
  updateCardContent = (id) => {
///////////////////////////////////////////////////////////////////
  }
  setMenuActive() {
    this.setState((prevState) => {
      return {
        menuActive: !prevState.menuActive
      }
    })
  }
  render(){
    return (
      <div className="App">
        <NavBar setMenuActive={() => this.setMenuActive()}/>

        <Content />

        <Menu header={'Menu'}
              items={this.state.data}
              active={this.state.menuActive}
              setMenuActive={() => this.setMenuActive()}
              updateCardContent={this.updateCardContent()}/>
      </div>
    );
  }
}

export default App;
