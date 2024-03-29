/** @format */

import * as Style from './style';
import Add from 'assets/icon/addicon.png';

interface CreateProp {
  Create: () => void;
}

const CreateProfileBtn = ({ Create }: CreateProp) => {
  return (
    <Style.CreateProfile onClick={Create} src={Add} alt="Icone de adicionar" />
  );
};

export default CreateProfileBtn;
