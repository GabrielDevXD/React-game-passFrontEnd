/** @format */

import { useNavigate } from "react-router-dom";
import * as Style from "./style";

interface Prop {
  Route: () => void;
}

const ReturnPage = ({ Route }: Prop) => {
  return <Style.returnsicon onClick={Route} />;
};

export default ReturnPage;
