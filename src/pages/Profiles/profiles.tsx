/** @format */

import CreateProfileBtn from 'components/Create/BtnPro';
import ProfilesCards from 'components/ProfilesC';
import ReturnPage from 'components/ReturnPage';
import { useNavigate } from 'react-router-dom';
import * as Style from './profiles-style';

const Profiles = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('jwt');
    navigate('/');
  };

  return (
    <Style.Background>
      <ReturnPage Route={handleNavigateHome} />

      <Style.ProfileSection>
        <ProfilesCards />

        <CreateProfileBtn Create={() => navigate('/profiles/create')} />
      </Style.ProfileSection>
    </Style.Background>
  );
};

export default Profiles;
