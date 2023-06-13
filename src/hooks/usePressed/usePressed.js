import {useState} from 'react';

const usePressed = () => {
  const [ispressed, setIsPressed] = useState(false);
  const [text2, setText2] = useState('');

  press = text => {
    ispressed ? setIsPressed(false) : setIsPressed(true);
    text2 !== text ? setText2(text) : setText2('');
  };

  return [ispressed, press, text2];
};

export default usePressed;
