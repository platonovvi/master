import React from 'react';
import Main from './Main';
import Banquets from './Banquets';
import Weddings from './Weddings';
import Restaurant from './Restaurant';
import Contacts from './Contacts';
import Navbar from './Navbar';
import BurgerMenu from './BurgerMenu';
import './App.scss';

export default class App extends React.Component {

    state = {
        isOpen: 'main',
        isOpenBurger: false
    }
    openPage = (value) => {
        this.setState({isOpen: value, isOpenBurger: false})
    }
    openMenu = () => {
        this.setState({isOpenBurger: !this.state.isOpenBurger})
    }
    render() {
        return (
            <div className={"App" + (this.state.isOpenBurger ? " scroll-block" : "")}>
                <Navbar openPage={this.openPage} openMenu={this.openMenu}></Navbar>
                {this.state.isOpenBurger && <BurgerMenu openPage={this.openPage}></BurgerMenu>}
                {this.state.isOpen === 'main' && <Main></Main>}
                {this.state.isOpen === 'banquets' && <Banquets></Banquets>}
                {this.state.isOpen === 'weddings' && <Weddings></Weddings>}
                {this.state.isOpen === 'restaurant' && <Restaurant></Restaurant>}
                {this.state.isOpen === 'contacts' && <Contacts></Contacts>}
            </div>
        );
    }
}
