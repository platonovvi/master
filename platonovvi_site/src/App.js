import React from 'react';
import Main from './Main';
import Navbar from './Navbar';
import BurgerMenu from './BurgerMenu';
import './App.scss';

export default class App extends React.Component {

    state ={
        isOpen:'main',
        isOpenBurger: false
    }
    openPage = (value) => {
        this.setState({ isOpen: value })
    }
    openMenu = () => {
        this.setState({ isOpenBurger: !this.state.isOpenBurger })
        console.log(this.state.isOpenBurger);

    }
    render() {
        return (
            <div className={"App" + (this.state.isOpenBurger ? " scroll-block" : "")}>
                <Navbar openPage={this.openPage} openMenu={this.openMenu}></Navbar>
                {this.state.isOpenBurger && <BurgerMenu openPage={this.openPage}></BurgerMenu>}
                {this.state.isOpen === 'main' && <Main></Main>} {/*должен быть отдельно от бургера*/}
            </div>
        );
    }
}
