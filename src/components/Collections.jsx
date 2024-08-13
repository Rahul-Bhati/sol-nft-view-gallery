import React from "react";
import { Link } from "react-router-dom";

const Collections = ({data}) => {

  return (
    <>
    <Link to={data.opensea_url} style={{textDecoration:"none"}}>
      <div className="card">
        <div className="banner">
          <img
            src={data.banner_image_url ? data.banner_image_url : "./banner.jpg"}
            alt="banner"
          />
          <div className="user">
            <img
              src={data.image_url ? data.image_url : "./user.png"}
              alt="user"
            />
          </div>
        </div>
        <div className="user-detail">
          <h3>{data.name}</h3>
          <p>{data.description}</p>
        </div>
        <div class="icons">
          <Link to={data.discord_url} className="icon">
            <ion-icon name="logo-discord"></ion-icon>
          </Link>
          <Link to={data.instagram_username} className="icon">
            <ion-icon name="logo-instagram"></ion-icon>
          </Link>
          <Link to={data.twitter_username} className="icon">
            <ion-icon name="logo-twitter"></ion-icon>
          </Link>
          <Link to={data.telegram_url} className="icon">
            <img src="./telegram.png" alt="telegram" style={{width:"25px", color:"white "}}/>
          </Link>
        </div>
      </div>
    </Link>
    </>
  );
};

export default Collections;
