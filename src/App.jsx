import { RiBasketballLine } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Message from "./components/Message";
import user from "./assets/default-avatar-icon-of-social-media-user-vector.jpg"
import { useState } from "react";

function App() {
const [following, setFollowing] =useState(false)

const toggleFollowing = ()=>{
setFollowing(prev=>!prev)
}

  return (
    <div className="main">

      <div className="content">

        <div className="profile">

          <img src={user} alt="#" />

        </div>

        <div className="info">

          <h3>User128378322138</h3>

          <p>@user128378322138</p>

        </div>

        <div className="social-medias">

          <div className="facebook">
            <FaFacebook />
          </div>

          <div className="linkdin">
            <FaLinkedin />
          </div>

          <div className="twitter">
            <FaXTwitter />
          </div>

          <div className="instagram">
            <RiInstagramFill />
          </div>

          <div className="browser">
            <RiBasketballLine />
          </div>

        </div>

        <div className="text">

          <p>Crafting brand and communication strategies . <br />
            creating visual designs. leading art direction, and <br />
            capturing portraits through photography.
          </p>

        </div>

        <div className="buttons">

          <button onClick={toggleFollowing} className={`follow ${following ? "follow" : "following"}`}>{following ? "Follow" : "Following"}</button>

          <Message />

        </div>

      </div>

    </div>
  )
}

export default App
