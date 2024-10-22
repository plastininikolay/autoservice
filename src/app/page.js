'use client'
import Header from './components/header';
import Footer from './components/footer';
import Image from 'next/image';
import {useState} from "react";
import CustomModal from "@/app/components/modal";

export default function Home() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal}/>
            <Header/>
            <main>
                {/* Секция 1: Главная страница с изображением и кнопкой */}
                <section className="hero">
                    <h1>Печать с точкой.</h1>
                    <Image src="/bg1.jpg" alt="Печать" width={1200} height={400}/>
                    <button onClick={openModal} className="order-button">Заказать сейчас</button>
                </section>

                {/* Секция 2: Почему выбрать нас */}
                <section className="why-choose-us">
                    <h2>Почему выбирают нас?</h2>
                    <div className="reasons">
                        <div className="reason">
                            <img src="/icon1.svg" alt="Причина 1"/>
                            <p>Качественное сырьё</p>
                        </div>
                        <div className="reason">
                            <img src="/icon2.svg" alt="Причина 2"/>
                            <p>Высокое качество печати</p>
                        </div>
                        <div className="reason">
                            <img src="/icon3.svg" alt="Причина 3"/>
                            <p>Широкий ассортимент услуг</p>
                        </div>
                        <div className="reason">
                            <img src="/icon4.svg" alt="Причина 4"/>
                            <p>Быстрая доставка</p>
                        </div>
                    </div>
                </section>
                {/* Новый блок: Услуги мобильной автомойки */}
                <section className="services">
                    <h2>Наши услуги</h2>
                    <ol className="service-list">
                        <li>
                            <div className="service-details">
                                <h3>Печать документов</h3>
                                <p>Печать черно-белых и цветных документов в различных форматах, включая A4, A3 и
                                    нестандартные размеры.</p>
                            </div>
                            <p className="price">5 - 50 рублей за лист</p>
                        </li>
                        <li>
                            <div className="service-details">
                                <h3>Ксерокопирование</h3>
                                <p>Быстрое и качественное ксерокопирование черно-белых и цветных документов.</p>
                            </div>
                            <p className="price">3 - 10 рублей за лист</p>
                        </li>
                        <li>
                            <div className="service-details">
                                <h3>Сканирование документов</h3>
                                <p>Цифровое сканирование документов с возможностью сохранения в различных форматах (PDF,
                                    JPEG и др.).</p>
                            </div>
                            <p className="price">10 - 30 рублей за лист</p>
                        </li>
                        <li>
                            <div className="service-details">
                                <h3>Ламинирование документов</h3>
                                <p>Ламинирование документов для защиты от повреждений и придания долговечности.</p>
                            </div>
                            <p className="price">50 - 150 рублей за документ</p>
                        </li>
                        <li>
                            <div className="service-details">
                                <h3>Переплет документов</h3>
                                <p>Профессиональный переплет документов пластиковыми или металлическими пружинами.</p>
                            </div>
                            <p className="price">200 - 500 рублей за документ</p>
                        </li>
                        <li>
                            <div className="service-details">
                                <h3>Изготовление визиток</h3>
                                <p>Печать визитных карточек на качественной бумаге с возможностью индивидуального
                                    дизайна.</p>
                            </div>
                            <p className="price">500 - 1500 рублей за 100 шт.</p>
                        </li>
                        <li>
                            <div className="service-details">
                                <h3>Изготовление буклетов</h3>
                                <p>Создание и печать рекламных буклетов и флаеров.</p>
                            </div>
                            <p className="price">1000 - 3000 рублей за 100 шт.</p>
                        </li>
                        <li>
                            <div className="service-details">
                                <h3>Печать фото</h3>
                                <p>Печать фотографий различных форматов на фотобумаге высокого качества.</p>
                            </div>
                            <p className="price">10 - 100 рублей за фото</p>
                        </li>
                        <li>
                            <div className="service-details">
                                <h3>Нанесение изображений на сувениры</h3>
                                <p>Печать логотипов и изображений на кружки, футболки и другие сувениры.</p>
                            </div>
                            <p className="price">500 - 2000 рублей за единицу</p>
                        </li>
                        <li>
                            <div className="service-details">
                                <h3>Дизайн и верстка</h3>
                                <p>Разработка дизайна и верстка рекламных материалов, визиток, буклетов и других
                                    печатных изделий.</p>
                            </div>
                            <p className="price">1000 - 5000 рублей за проект</p>
                        </li>
                    </ol>
                </section>
                {/* Секция 3: Отзывы клиентов */}
                <section className="testimonials">
                    <h2>Отзывы клиентов</h2>
                    <div className="testimonial-cards">
                        <div className="testimonial-card">
                            <img src="/user1.jpg" alt="Иван П."/>
                            <h3>Иван П.</h3>
                            <p>Отличный сервис! Всё очень быстро и качественно.</p>
                        </div>
                        <div className="testimonial-card">
                            <img src="/user2.jpg" alt="Алексей С."/>
                            <h3>Алексей С.</h3>
                            <p>Очень удобно и быстро. Закажу ещё раз!</p>
                        </div>
                        <div className="testimonial-card">
                            <img src="/user3.jpg" alt="Петр Г."/>
                            <h3>Петр Г.</h3>
                            <p>Лучшие цены в городе! Очень доволен.</p>
                        </div>
                    </div>
                </section>
                <section className="feedback">
                    <h2>Оставьте заявку на обратную связь</h2>
                    <Image src="/bg2.jpg" alt="bg2" width={1200} height={600}/>
                    <button onClick={openModal} className="feedback-button">Оставить заявку</button>
                </section>
            </main>
            <Footer/>
        </div>
    );
}
