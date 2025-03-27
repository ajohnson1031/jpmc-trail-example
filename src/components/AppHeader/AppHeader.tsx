import { RootState } from "@/store";
import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppHeaderProps } from "./";

const AppHeader: FC<AppHeaderProps> = () => {
  const navigate = useNavigate();
  const { FirstName } = useSelector((state: RootState) => state.userProps);
  return <div>AppHeader</div>;
};

export default AppHeader;
