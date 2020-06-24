import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'; //bootstrap implementation in react
import Menu from './MenuComponent';
import Dishdetails from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish : null
    };
  }

  onDishSelect(dishId) {

        this.setState({ selectDish: dishId });
    }


  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Home</NavbarBrand>
          </div>
        </Navbar> 
        <Menu dishes={this.state.dishes} 
            onClick={(dishId) => this.onDishSelect(dishId)}
        />  
        <Dishdetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectDish)[0]} />
      </div>                           
    );
  }

}

export default Main;
