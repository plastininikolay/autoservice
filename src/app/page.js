'use client'
import Header from './components/Header';
import Footer from './components/Footer';
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
            <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal} />
            <Header/>
            <main>
                {/* Секция 1: Главная страница с изображением и кнопкой */}
                <section className="hero">
                    <Image src="/bg1.png" alt="Автомойка" width={1200} height={400}/>
                    <button onClick={openModal} className="order-button">Заказать сейчас</button>
                </section>

                {/* Секция 2: Почему выбрать нас */}
                <section className="why-choose-us">
                    <h2>Почему выбирают нас?</h2>
                    <div className="reasons">
                        <div className="reason">
                            <img src="/icon1.svg" alt="Причина 1"/>
                            <p>Быстрое обслуживание</p>
                        </div>
                        <div className="reason">
                            <img src="/icon2.svg" alt="Причина 2"/>
                            <p>Экологически чистые решения</p>
                        </div>
                        <div className="reason">
                            <img src="/icon3.svg" alt="Причина 3"/>
                            <p>Доступные цены</p>
                        </div>
                    </div>
                </section>
                <div className="service-options">
                    <h2>Выберите способ обслуживания</h2>
                    <p>Вы можете выбрать, как получить услуги:</p>
                    <div className="options">
                        <div className="option">
                            <h3>Приехать в автомойку</h3>
                            <p>Посетите нашу автомойку и получите услуги прямо на месте.</p>
                            <img src="/car-wash-house.svg"/>
                            <button className="option-button">Узнать адрес</button>
                        </div>
                        <div className="option">
                            <h3>Заказать мобильную автомойку</h3>
                            <p>Закажите мобильную автомойку, и мы приедем к вам.</p>
                            <img src="/car-wash.svg"/>
                            <button className="option-button">Заказать сейчас</button>
                        </div>
                    </div>
                </div>
                {/* Новый блок: Услуги мобильной автомойки */}
                <section className="services">
                    <h2>Наши услуги</h2>
                    <ol className="service-list">
                        <li>
                            <div className="service-details">
                                <h3>Внешняя мойка автомобиля</h3>
                                <p>Очистка кузова автомобиля с использованием бесконтактной мойки, специальных шампуней
                                    и воды.</p>
                            </div>
                            <p className="price">500 - 1000 рублей</p>
                        </li>
                        <li>
                            <div className="service-details">
                                <h3>Комплексная мойка (внешняя и внутренняя)</h3>
                                <p>Полная мойка автомобиля, включая внешнюю очистку кузова и уборку салона.</p>
                            </div>
                            <p className="price">1500 - 2500 рублей</p>
                        </li>
                        <li>
                            <div className="service-details">
                                <h3>Химчистка салона</h3>
                                <p>Глубокая очистка сидений, ковриков и обшивки автомобиля с использованием специальных
                                    химических средств.</p>
                            </div>
                            <p className="price">3000 - 5000 рублей</p>
                        </li>
                        <li>
                            <div className="service-details">
                                <h3>Полировка кузова</h3>
                                <p>Процедура полировки кузова для устранения мелких царапин и придания автомобилю
                                    блеска.</p>
                            </div>
                            <p className="price">2500 - 7000 рублей</p>
                        </li>
                        <li>
                            <div className="service-details">
                                <h3>Нанесение воска или защитных покрытий</h3>
                                <p>Нанесение защитного покрытия для защиты кузова от загрязнений и погодных условий.</p>
                            </div>
                            <p className="price">1000 - 3000 рублей</p>
                        </li>
                        <li>
                            <div className="service-details">
                                <h3>Чистка и полировка фар</h3>
                                <p>Очистка и восстановление прозрачности фар автомобиля.</p>
                            </div>
                            <p className="price">500 - 1500 рублей</p>
                        </li>
                        <li>
                            <div className="service-details">
                                <h3>Чистка колес и дисков</h3>
                                <p>Глубокая очистка и полировка колесных дисков.</p>
                            </div>
                            <p className="price">500 - 1000 рублей</p>
                        </li>
                        <li>
                            <div className="service-details">
                                <h3>Удаление насекомых и битума</h3>
                                <p>Специальная очистка для удаления следов насекомых и битумных пятен с кузова.</p>
                            </div>
                            <p className="price">500 - 1500 рублей</p>
                        </li>
                        <li>
                            <div className="service-details">
                                <h3>Обработка салона антибактериальными средствами</h3>
                                <p>Дезинфекция и устранение неприятных запахов в салоне автомобиля.</p>
                            </div>
                            <p className="price">1000 - 2000 рублей</p>
                        </li>
                        <li>
                            <div className="service-details">
                                <h3>Чистка двигателя</h3>
                                <p>Очистка моторного отсека от пыли и грязи с использованием специальных чистящих
                                    средств.</p>
                            </div>
                            <p className="price">1500 - 3000 рублей</p>
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
                    <Image src="/bg2.jpg" alt="Автомойка" width={1200} height={600}/>
                    <button className="feedback-button">Оставить заявку</button>
                </section>
            </main>
            <Footer/>
        </div>
    );
}
