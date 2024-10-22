// components/Modal.js
import React, {useState} from 'react';
import Modal from 'react-modal';

const CustomModal = ({isOpen, onRequestClose}) => {

    const [isRequest, setIsRequest] = useState(false)

    const [file, setFile] = useState("")

    if (isRequest) {
        return <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="Modal__Content"
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    transform: 'translate(-50%, -50%)',
                    width: '400px',
                    padding: '20px',
                },
            }}
        >
            <button className="Modal__CloseButton" onClick={onRequestClose}>X</button>
            <h2 className="Modal__Title">Спасибо за заказ</h2>
            <p>Скоро мы с вами свяжемся для уточнения деталей.</p>
        </Modal>
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="Modal__Content"
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    transform: 'translate(-50%, -50%)',
                    width: '400px',
                    padding: '20px',
                },
            }}
        >
            <button className="Modal__CloseButton" onClick={onRequestClose}>X</button>
            <h2 className="Modal__Title">Ваш заказ</h2>
            <img src="/office-paper.svg" alt="paper"/>
            <p>Пожалуйста, заполните форму для оформления заказа.</p>
            <form className="Modal__Form">
                <div className="Modal_data">
                    <label className="Modal__Label">Имя:</label>
                    <input type="text" className="Modal__Input" required/>
                </div>
                <div className="Modal_data">
                    <label className="Modal__Label">Телефон:</label>
                    <input type="tel" className="Modal__Input" required/>
                </div>
                <div className="Modal_data">
                    <label className="Modal__Label">Адрес доставки:</label>
                    <input type="text" className="Modal__Input" required/>
                </div>
                <div className="Modal_data">
                    <label className="Modal__Label">Прикрепить файл:</label>
                    <div className="custom-file-upload">
                        <input onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                                setFile(file.name)
                                console.log("Файл выбран: ", file.name);
                            }
                        }} type="file" id="fileInput" className="Modal__InputFile" required/>
                        <label htmlFor="fileInput"
                               className="Modal__FileLabel">{!file ? "Выберете файл" : `Выбран ${file}`}</label>
                    </div>
                </div>
                <button onClick={() => {
                    setIsRequest(true)
                }} type="submit" className="Modal__Button">Подтвердить заказ
                </button>
            </form>
        </Modal>
    );
};

export default CustomModal;
