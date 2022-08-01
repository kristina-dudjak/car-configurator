/** @jsxImportSource @emotion/react */
import { EmailModal, LoginForm } from 'modules';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.styles';

export const Login: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <section css={styles.wrapper}>
      <LoginForm onShow={() => setIsOpen(true)} />
      <p css={styles.container__redirect}>
        Don't have an account?
        <a css={styles.redirect__link} onClick={() => navigate('/register')}>
          Register
        </a>
      </p>
      <EmailModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
};
