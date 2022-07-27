/** @format */

import ReturnPage from 'components/ReturnPage';
import * as Style from './style';
import { useNavigate } from 'react-router-dom';
import ContainerForm from 'components/form';
import React, { useState } from 'react';
import { CreateGameType, CreateGenrerType } from 'types/interfaces';
import { Genrers } from 'Service/genrerService';
import swal from 'sweetalert';

const CrudGenrer = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<CreateGenrerType>({
    name: '',
  });

  const handleValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'year' || e.target.name === 'imbScore') {
      setName((value: CreateGameType) => ({
        ...value,
        [e.target.name]: parseInt(e.target.value),
      }));
    } else {
      setName((value: CreateGameType) => ({
        ...value,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const createGenrer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payloadCreate = await Genrers.CreateGenrer(name);

    if (payloadCreate) {
      swal({
        title: 'Genre registered successfully!',
        icon: 'success',
        timer: 6000,
      });
    } else {
      swal({
        title: 'Error registering gender!',
        icon: 'error',
        timer: 6000,
      });
    }
  };

  return (
    <Style.Page>
      <ReturnPage Route={() => navigate(-1)} />

      <Style.DivContainers>
        <ContainerForm>
          <Style.DescriptionForm>Add game genres</Style.DescriptionForm>

          <Style.Form onSubmit={createGenrer}>
            <Style.Input
              type="text"
              placeholder=" Genre"
              name="name"
              id="name"
              onChange={handleValues}
              required
            />

            <Style.Btn type="submit">add</Style.Btn>
          </Style.Form>
        </ContainerForm>

        <ContainerForm>
          <Style.DescriptionForm>Edit or delete genres</Style.DescriptionForm>

          <Style.Form>
            <Style.ContainerOption>
              <Style.OptionSelect>
                <Style.Options value="default">Genre</Style.Options>
                <Style.Options value="">Test</Style.Options>
              </Style.OptionSelect>
            </Style.ContainerOption>

            <Style.Input />
          </Style.Form>
        </ContainerForm>
      </Style.DivContainers>
    </Style.Page>
  );
};

export default CrudGenrer;
