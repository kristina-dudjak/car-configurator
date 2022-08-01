/** @jsxImportSource @emotion/react */
import { RegistrationForm } from 'modules';
import { useNavigate } from 'react-router-dom';
import styles from './Register.styles';

export const Register: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section css={styles.wrapper}>
      <RegistrationForm />
      <p css={styles.container__redirect}>
        Already have an account?
        <a css={styles.redirect__link} onClick={() => navigate('/login')}>
          Log in
        </a>
      </p>
    </section>
  );
};
