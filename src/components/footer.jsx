import React from "react";


function Footer() {
    return (
        <footer className="footer">
        <div className="container">
            <div className="footer-content">
                <div className="footer-itme">
                    <h3>Основные ссылки</h3>
                        <a>О компании</a>
                        <a>Каталог</a>
                        <a>Доставка</a>
                        <a>Оплата</a>
                    </div>
                    <div className="footer-itme">
                        <h3>Категории</h3>
                        <a>Мужская одежда</a>
                        <a>Женская одежда</a>
                        <a>Детская одежда</a>
                        <a>Для животных</a>
                    </div>
                    <div className="footer-itme">
                        <h3>ПОЛЕЗНЫЕ ССЫЛКИ</h3>
                        <a href="">Таблица размеров</a>
                        <a href="">Блог о моде</a>
                        <a href="">Наша миссия</a>
                    </div>
                    <div className="footer-itme">
                        <h3>СОЦ СЕТИ</h3>
                        <a href="" className="vk">VK.com</a>
                        <a href="" className="face">Facebook</a>
                        <a href="" className="insta">Instagram</a>
                    </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;