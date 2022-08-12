/** @jsxImportSource @emotion/react */
import { ArrowLeft } from 'assets';
import { carAtoms, useEditing } from 'modules';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styles from './ConfiguratorNavBar.styles';

export const ConfiguratorNavBar: React.FC = () => {
  const navigate = useNavigate();
  const car = useRecoilValue(carAtoms.car);
  const { name } = useParams();
  const { editing } = useEditing();
  return (
    <nav css={styles.container__nav(editing)}>
      <div css={styles.container__nav__left}>
        <ArrowLeft
          css={styles.back}
          onClick={() => navigate('/configuration/' + name)}
        />
        <p css={styles.year}>{car.year}</p>
        <p css={styles.car}>{car.name}</p>
      </div>
      <div css={styles.container__nav__right(editing)}>
        <div css={styles.element}>
          <p css={styles.number}>
            01
            <NavLink
              css={styles.link}
              to={`/configuration/${name!.replace(' ', '%20')}/exterior`}
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? '700' : '400',
                };
              }}
            >
              Exterior
            </NavLink>
          </p>
        </div>
        <div css={styles.element}>
          <p css={styles.number}>
            02
            <NavLink
              css={styles.link}
              to={`/configuration/${name!.replace(' ', '%20')}/interior`}
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? '700' : '400',
                };
              }}
            >
              Interior
            </NavLink>
          </p>
        </div>
        <div css={styles.element}>
          <p css={styles.number}>
            03
            <NavLink
              css={styles.link}
              to={`/configuration/${name!.replace(' ', '%20')}/summary`}
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? '700' : '400',
                };
              }}
            >
              Summary
            </NavLink>
          </p>
        </div>
      </div>
    </nav>
  );
};
