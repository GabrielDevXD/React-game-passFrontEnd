/** @format */

import ContainerForm from "components/form";
import ReturnPage from "components/ReturnPage";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { ProfilesTypes } from "types/interfaces";
import { Profiles } from "Service/profileService";
import * as Style from "./EditProfile-style";
import DeleteProfileBtn from "components/Modal/DeleteProfileBtn";

const EditProfile = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [profile, setProfile] = useState<ProfilesTypes>({
    title: "",
    imageUrl: "",
    userId: "",
  });

  useEffect(() => {
    getProfileId();
  }, []);

  const getProfileId = async () => {
    if (id) {
      const GetByIdProfile = await Profiles.ProfileGetById(id);

      const profileValues = {
        title: GetByIdProfile?.data.title,
        imageUrl: GetByIdProfile?.data.imageUrl,
        userId: GetByIdProfile?.data.userId,
      };

      setProfile({
        ...profile,
        ...profileValues,
      });
    }
  };

  const handleChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile((values: ProfilesTypes) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEditProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const getUserId = localStorage.getItem("userId");

    if (getUserId) {
      setProfile({
        ...profile,
        userId: getUserId,
      });
    }

    if (id) {
      const payloadEdit: any = await Profiles.EditProfile(id, profile);

      if (payloadEdit) {
        swal({
          title: "Updated profile!",
          icon: "success",
          timer: 6000,
        });
        navigate("/profiles");
      } else {
        swal({
          title: "Error",
          text: "Error updating profile!",
          icon: "error",
          timer: 6000,
        });
      }
    }
  };

  return (
    <Style.Background>
      <ReturnPage Route={() => navigate("/profiles")} />

      <ContainerForm>
        <Style.EditImg src={profile.imageUrl ? profile.imageUrl : ""} />

        <Style.EditForm onSubmit={handleEditProfile}>
          <Style.InputEdit
            type='text'
            placeholder=' Url da imagem'
            name='imageUrl'
            id='imageUrl'
            value={profile.imageUrl}
            onChange={handleChangeValues}
            required
          />

          <Style.InputEdit
            type='text'
            placeholder=' Nome do perfil'
            name='title'
            id='title'
            value={profile.title}
            onChange={handleChangeValues}
            required
          />

          <Style.ContainerBtns>
            <Style.EditProfileBtn type='submit'>updater</Style.EditProfileBtn>
            <DeleteProfileBtn />
          </Style.ContainerBtns>
        </Style.EditForm>
      </ContainerForm>
    </Style.Background>
  );
};

export default EditProfile;
