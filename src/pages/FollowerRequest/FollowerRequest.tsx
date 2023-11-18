import React, { useState } from 'react';
import logo from './creepy-face.jpeg';
import './FollowerRequest.css';
import { Button } from "nes-ui-react";

function FollowerRequest() {

  const [isUserLeftContact, setIsUserLeftContact] = useState<boolean>(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Header-text">
        </p>

        <p className="landing-text">
        </p>
        <div className='Flex-container'>

          <Button

            color="warning"

            onClick={async () => {
                try {
                  console.log('1');
                  //setIsUserLeftContact(true);
                } catch (err) {
                  console.log(err);
                  alert('Пожалуйста, проверьте введённую информацию. Может, вы уже оставляли нам свой контакт?');
                }
            }}>
            {!isUserLeftContact ? 'Опция 1': 'Спасибо! Мы с вами свяжемся ❤️'}
          </Button>

          <Button
            onClick={async () => {
                try {
                  console.log('2');
                } catch (err) {
                  console.log(err);
                  alert('Пожалуйста, проверьте введённую информацию. Может, вы уже оставляли нам свой контакт?');
                }
            }}>
            {!isUserLeftContact ? 'Опция 2': 'Спасибо! Мы с вами свяжемся ❤️'}
          </Button>



        </div>
      </header>
    </div>
  );
}

export default FollowerRequest;
