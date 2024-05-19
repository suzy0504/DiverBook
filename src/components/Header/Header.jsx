import { Link } from "react-router-dom";
import "../Header/header.scss";

const Header = () => {
  return (
    <>
      <div className="mainLogo">
        <img className="logoImg" src="/Img/logo.png" />
      </div>

      <div className="Nav">
        <div className="NavBtn">
          <div>
            <Link className="NavHome" to="/">
              홈
            </Link>
          </div>
          <div>
            <Link className="NavFish" to="/">
              물고기
            </Link>
          </div>
          <div>
            <Link className="NavCook" to="/Cook">
              요리
            </Link>
          </div>
          <div>
            <Link className="NavFarm" to="/">
              농장
            </Link>
          </div>
          <div>
            <Link className="NavWeapon" to="/">
              무기
            </Link>
          </div>
          <div>
            <Link className="NavInterior" to="/">
              인테리어
            </Link>
          </div>
          <div>
            <Link className="NavDredge" to="/">
              드렛지
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
