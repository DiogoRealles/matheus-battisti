import { useEffect, useState } from 'react';
import styles from './Message.module.css';
import bus from '../../utils/bus';

const Message = () => {
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    bus.addListener('flash', ({ message, type }) => {
      setVisibility(true);
      setMessage(message);
      setType(type);

      setTimeout(() => {
        setVisibility(false);
      }, 2500);
    });
  }, []);

  return (
    visibility && (
      <div className={`${styles.message} ${styles[type]}`}>{message}</div>
    )
  );
};

export default Message;
