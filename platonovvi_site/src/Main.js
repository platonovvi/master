import React from 'react';
import logo from './logo.svg';
import mainImage from './main-image.jpg';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import './Main.scss';

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <div className="App-main-image">
                    <img src={mainImage}/>
                </div>
                <div className='App-body'>
                    <div className='three-block-string'>
                        <div className='item'>
                            <div className='image'>
                                <img src={img1} alt={logo}/>
                            </div>
                            <p>
                                Для получения нужного стартера можно скачать весь архив c GitHub – зелёная кнопка Code
                                ->
                                Download ZIP, распаковать и удалить ненужные папки. Или можно автоматизировать получение
                                нужного
                                стартера.
                            </p>
                        </div>
                    </div>
                    <div className='three-block-string'>
                        <div className='item'>
                            <div className='image'>
                                <img src={img2} alt={logo}/>
                            </div>
                            <p>
                                Для получения нужного стартера можно скачать весь архив c GitHub – зелёная кнопка Code
                                ->
                                Download ZIP, распаковать и удалить ненужные папки. Или можно автоматизировать получение
                                нужного
                                стартера.
                            </p>
                        </div>
                    </div>
                    <div className='three-block-string'>
                        <div className='item'>
                            <div className='image'>
                                <img src={img3} alt={logo}/>
                            </div>
                            <p>
                                Для получения нужного стартера можно скачать весь архив c GitHub – зелёная кнопка Code
                                ->
                                Download ZIP, распаковать и удалить ненужные папки. Или можно автоматизировать получение
                                нужного
                                стартера.
                            </p>
                        </div>
                    </div>
                    <div className='two-block-string'>
                        <div className='item'>
                            <div className='image'>
                                <img src={img4} alt={logo}/>
                            </div>
                            <p>
                                Для получения нужного стартера можно скачать весь архив c GitHub – зелёная кнопка Code
                                ->
                                Download ZIP, распаковать и удалить ненужные папки. Или можно автоматизировать получение
                                нужного
                                стартера. Для этого у вас должна быть устрановлена командная оболочка Unix и Git. Если
                                вы
                                пользователь MacOS или Linux, команды клонирования Git будут доступны по умолчанию. Если
                                вы
                                пользователь Windows, рекомендую использовать WSL. Инструкция по установке WSL и окруж
                            </p>
                        </div>
                    </div>
                    <div className='two-block-string'>
                        <div className='item'>
                            <div className='image'>
                                <img src={img5} alt={logo}/>
                            </div>
                            <p>
                                Для получения нужного стартера можно скачать весь архив c GitHub – зелёная кнопка Code
                                ->
                                Download ZIP, распаковать и удалить ненужные папки. Или можно автоматизировать получение
                                нужного
                                стартера. Для этого у вас должна быть устрановлена командная оболочка Unix и Git. Если
                                вы
                                пользователь MacOS или Linux, команды клонирования Git будут доступны по умолчанию. Если
                                вы
                                пользователь Windows, рекомендую использовать WSL. Инструкция по установке WSL и окруж
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}