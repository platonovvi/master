import React from 'react';
import './BurgerMenu.scss';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="Menu">
                <div className='MenuFlex'>
                    <div className='ItemMenu' onClick={() => this.props.openPage('main')}>Главная</div>
                    <div className='ItemMenu' onClick={() => this.props.openPage('banquets')}>Банкеты</div>
                    <div className='ItemMenu' onClick={() => this.props.openPage('weddings')}>Свадьбы</div>
                    <div className='ItemMenu' onClick={() => this.props.openPage('restaurant')}>Ресторан</div>
                    <div className='ItemMenu' onClick={() => this.props.openPage('contacts')}>Контакты</div>
                </div>
            </div>
        );
    }
}
