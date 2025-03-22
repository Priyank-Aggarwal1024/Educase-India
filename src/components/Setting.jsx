import "../styles/Setting.css";
import avatar from "../assets/avatar.png";
import camera from "../assets/camera.png";
function Setting() {
  return (
    <>
      <div className="setting">
        <h2 className="setting-head">Account Settings</h2>
        <div className="setting-main">
          <div className="setting-main-top">
            <div className="setting-main-top-left">
              <img src={avatar} alt="Avatar" />
              <img src={camera} alt="camera" className="setting-mtl-camera" />
            </div>
            <div className="setting-main-top-right">
              <div className="setting-mtr-name">Marry Doe</div>
              <div className="setting-mtr-email">Marry@Gmail.Com</div>
            </div>
          </div>
          <div className="setting-main-bottom">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </div>
        </div>
      </div>
    </>
  );
}

export default Setting;
