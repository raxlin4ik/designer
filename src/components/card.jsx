import React from "react";
import pic1 from '../img/pic1.png'


function Card() {
    return (
        <section className="card">
        <div className="container">
            <div className="card-content">
                <div className="left">
                    <h2 className="">Зимняя распродажа</h2>
                    <h1 className="">СКИДКИ ДО 90%</h1>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                         elit. Morbi urna sem, faucibus at porttitor
                        nec, porttitor et velit. Morbi tempor turpis vitae risus efficitur semper. Donec ut eleifend
                        urna. Cras pellentesque dolor ac hendrerit sagittis. Ut sit amet orci luctus, consequat ante in,
                        viverra diam. Proin ut ultrices orci, nec scelerisque nisl. Aliquam eget urna eget libero
                        posuere convallis.</p>
                    <button>СМОТРЕТЬ МОДЕЛИ</button>
                </div>
                <div className="right">
                    <h2 className="">9 900 ₽</h2>
                    <h1 className="">1 900 ₽</h1>
                    <img src={pic1} alt="" />
                </div>
            </div>
        </div>
    </section>
    )
    
}

export default Card;