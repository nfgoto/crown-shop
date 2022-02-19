import "./menu-item.styles.scss";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Section } from "../../types";

type MenuItemProps = Omit<Section, "id">;

const MenuItem: FC<MenuItemProps> = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();

  return (
    <div className={`${size} menu-item`} onClick={() => navigate(linkUrl)}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
