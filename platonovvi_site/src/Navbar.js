import React from 'react';
import logo from './logo.svg';
import './Navbar.scss';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <img src={logo} className='Navbar-logo' alt={logo}/>
                <div className='MenuNavbar'>
                    <div className='ItemMenu' onClick={() => this.props.openPage('main')}>Главная</div>
                    <div className='ItemMenu' onClick={() => this.props.openPage('banquets')}>Банкеты</div>
                    <div className='ItemMenu' onClick={() => this.props.openPage('weddings')}>Свадьбы</div>
                    <div className='ItemMenu' onClick={() => this.props.openPage('restaurant')}>Ресторан</div>
                    <div className='ItemMenu' onClick={() => this.props.openPage('contacts')}>Контакты</div>
                </div>
                <div className='MenuBurger' onClick={() => this.props.openMenu()}>
                    <i className="fa fa-solid fa-bars fa-lg"></i>
                </div>
            </div>
        );
    }
}
