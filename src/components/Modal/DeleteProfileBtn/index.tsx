/** @format */

import { useNavigate, useParams } from 'react-router-dom';
import { Profiles } from 'Service/profileService';
import swal from 'sweetalert';
import * as Style from './style';

const DeleteProfileBtn = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDeleteProfile = async () => {
    if (id) {
      const payloadDelete = await Profiles.DeleteProfile(id);

      if (payloadDelete) {
        swal({
          title: 'Profile deleted!',
          icon: 'success',
          timer: 6000,
        });
        navigate('/profiles');
      } else {
        swal({
          title: 'Error',
          text: 'Error deleting profile!',
          icon: 'error',
          timer: 6000,
        });
      }
    }
  };

  const openModalDelete = () => {
    swal({
      title: 'Delete Character?',
      icon: 'warning',
      buttons: ['No', 'Yes'],
    }).then((resp) => {
      if (resp) {
        handleDeleteProfile();
      }
    });
  };

  return (
    <>
      <Style.DeleteProfileBtn type="button" onClick={openModalDelete}>
        Remove
      </Style.DeleteProfileBtn>
    </>
  );
};

export default DeleteProfileBtn;
