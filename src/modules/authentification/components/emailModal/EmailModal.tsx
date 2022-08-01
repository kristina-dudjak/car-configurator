/** @jsxImportSource @emotion/react */
import styles from './EmailModal.styles';
import { useRecoilState, useRecoilValue } from 'recoil';
import { authAtoms, useAuth } from 'modules';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useRecoilState(authAtoms.userEmail);
  const auth = useAuth();
  const errorMessage = useRecoilValue(authAtoms.authError);

  function sendEmail(e: React.FormEvent) {
    e.preventDefault();
    auth.resetPassword();
  }
  return (
    <div css={styles.wrapper}>
      {isOpen && (
        <section css={styles.container}>
          <h2>Reset your password</h2>
          <form css={styles.input__group} onSubmit={sendEmail}>
            <label css={styles.input__label}>Email</label>
            <input
              value={email}
              type="email"
              required={true}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            {errorMessage && (
              <p css={styles.container__error}> {errorMessage} </p>
            )}
            <button css={styles.container__submit}>Send email</button>
            <button onClick={onClose} type="button" css={styles.button}>
              Cancel
            </button>
          </form>
        </section>
      )}
    </div>
  );
};
