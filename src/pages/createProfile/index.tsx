/** @format */

import { useNavigate } from "react-router-dom";
import * as Style from "./styles";
import Avatar from "assets/img/avatar.jpg";
import ReturnPage from "components/ReturnPage";
import ContainerForm from "components/form";
import { ProfilesTypes } from "types/interfaces";
import React, { useState } from "react";
import swal from "sweetalert";
import { Profiles } from "Service/profileService";

const CreateProfile = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState<ProfilesTypes>({
    imageUrl: "",
    title: "",
    userId: "",
  });

  const handleValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const idUser = localStorage.getItem("userId");

    if (idUser)
      setProfile((profile: ProfilesTypes) => ({
        ...profile,
        userId: idUser,
        [e.target.name]: e.target.value,
      }));
  };

  const handleCreateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const idUser = localStorage.getItem("userId");

    if (idUser) {
      setProfile({
        ...profile,
        userId: idUser,
      });
    }

    const payload: any = await Profiles.CreateProfile(profile);

    if (payload) {
      swal({
        title: "Successful registration!",
        icon: "success",
        timer: 6000,
      });
      navigate("/profiles");
    } else {
      swal({
        title: "Error",
        icon: "error",
        timer: 6000,
      });
    }
  };

  return (
    <Style.Background>
      <ReturnPage Route={() => navigate("/profiles")} />

      <ContainerForm>
        <Style.Img src={profile.imageUrl ? profile.imageUrl : Avatar} />

        <Style.Form onSubmit={handleCreateProfile}>
          <Style.InputCreate
            type='text'
            placeholder=' Url image'
            name='imageUrl'
            id='imageUrl'
            onChange={handleValues}
            required
          />

          <Style.InputCreate
            type='text'
            placeholder=' Name'
            name='title'
            id='title'
            onChange={handleValues}
            required
          />

          <Style.CreateProfileBtn>Create</Style.CreateProfileBtn>
        </Style.Form>
      </ContainerForm>
    </Style.Background>
  );
};

export default CreateProfile;
