import React, { useState } from 'react';
import logo from './silly-face.jpeg';
import './MainPage.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { InputValidationType } from '../../components/Input/InputValidationTypes';

function MainPage() {

  const [userContact, setUserContact] = useState<string>();
  const [isContactValid, setIsContactValid] = useState<boolean>(true);
  const [isUserLeftContact,setIsUserLeftContact] = useState<boolean>(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Header-text">
          Привет!<br/>
          Скоро здесь будет Палома.<br/>
        </p>

        <p className="landing-text">
          <b>Палома</b> — твой проводник в мир таро.<br/>
          Тем, кто хочет узнать ответы на свои вопросы,<br/>
          сервис поможет найти специалиста по гаданию таро онлайн,<br/>
          а практикующим тарологам — найти клиентов,<br/>
          обрести новые знания о значениях карт таро<br/>
          и помогать миру своей энергетикой и даром.
        </p>
        <div className='Input-with-button'>
          {!isUserLeftContact && <Input
            onInputChange={(contact: string) => setUserContact(contact)}
            handleInvalidInput={(isInputValid: boolean) => setIsContactValid(isInputValid)}
            inputValidationType={InputValidationType.Telegram}
          />}
          <Button
            success={isUserLeftContact}
            onClick={async () => {
              if (!isContactValid || !userContact) alert('Пожалуйста, проверьте введённую информацию')
              else {
                try {
                  console.log({contact: userContact});
                  setIsUserLeftContact(true);
                } catch (err) {
                  console.log(err);
                  alert('Пожалуйста, проверьте введённую информацию. Может, вы уже оставляли нам свой контакт?');
                }
              }
            }}
            text={!isUserLeftContact ? 'Хочу узнать о запуске': 'Спасибо! Мы с вами свяжемся ❤️'}/>
        </div>
      </header>
    </div>
  );
}

export default MainPage;
