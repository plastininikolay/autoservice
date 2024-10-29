export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src="/logo.svg" alt="icon"/>
                <div>
                    Печать с точкой.
                </div>
            </div>
            <nav>
                <ul className="menu">
                    <li><a href="#home">Главная</a></li>
                    <li><a href="#why-choose-us">Почему выбирают нас</a></li>
                    <li><a href="#services">Наши услуги</a></li>
                    <li><a href="#testimonials">Отзывы</a></li>
                </ul>
            </nav>
            <div className="contact-info">
                <p>📍 Ул. Центральная 1234, Ваш город</p>
                <p>📞 +1 (555) 123-4567</p>
            </div>
        </header>
    );
}
