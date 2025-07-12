import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import Search from "@mui/icons-material/Search";
import { Avatar, Input } from "@mui/material";
import "./css/Navbar.css";
import { Modal } from "react-responsive-modal";
import CloseIcon from "@mui/icons-material/Close";
import "react-responsive-modal/styles.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { logout, selectUser } from "../feature/userSlice";
import { Button } from "@mui/material";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");
  const Close = <CloseIcon />;

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSubmit = async () => {
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        questionName: question,
        questionUrl: inputUrl,
        user: user,
      };
      await axios
        .post("https://quora-2-mern.onrender.com/questions", body, config)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
          alert("Error in adding question");
        });
    }
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure to logout ?")) {
      signOut(auth)
        .then(() => {
          dispatch(logout());
          console.log("Logged out");
        })
        .catch(() => {
          console.log("error in logout");
        });
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar__logo">
          <img
            src="https://www.freeiconspng.com/uploads/description-icon-round-question-mark-jpg-3.jpeg"
            alt="logo"
          />
        </div>
        <div className="navbar__icons">
          <div className="navbar__icon">
            <HomeIcon />
          </div>
          <div className="navbar__icon">
            <FeaturedPlayListOutlinedIcon />
          </div>
          <div className="navbar__icon">
            <AssignmentTurnedInOutlinedIcon />
          </div>
          <div className="navbar__icon">
            <PeopleAltOutlinedIcon />
          </div>
          <div className="navbar__icon">
            <NotificationsOutlinedIcon />
          </div>
        </div>
        <div className="navbar__input">
          <Search />
          <input type="text" placeholder="search questions" />
        </div>
       
        <button
          className="navbar-question"
          onClick={() => setIsModalOpen(true)}
        >
          Add questions
        </button>
        <div className="navbar__Rem">
          <Avatar src={user?.photo}  />
          <span className="logout" onClick={handleLogout}>
            <Button variant="outlined" color="error">
              LogOut
            </Button>
          </span>
        </div>
        <Modal
          open={isModalOpen}
          closeIcon={Close}
          onClose={() => setIsModalOpen(false)}
          closeOnEsc
          center
          closeOnOverlayClick={false}
          styles={{
            overlay: {
              height: "auto",
            },
          }}
        >
          <div className="modal__title">
            This is modal.
            <h5>Add question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal__info">
            <Avatar className="avatar" src={user?.photo} />
            <div className="modal__scope">
              <PeopleAltOutlinedIcon />
              <p>Public</p>
              <ExpandMoreIcon />
            </div>
          </div>
          <div className="modal__Field">
            <Input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              text="text"
              placeholder="Start your question with 'What', 'How', 'Why' etc."
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <input
                style={{
                  margin: "5px 0",
                  border: "1px solid lightgray",
                  padding: "10px",
                  outline: "2px solid #000",
                }}
                type="text"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder="Optional : include a link that gives context."
              />
              {inputUrl !== "" && (
                <img
                  style={{
                    height: "40vh",
                    objectFit: "contain",
                  }}
                  src={inputUrl}
                  alt="Displayimage"
                />
              )}
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>

            <button onClick={handleSubmit} className="add" type="submit">
              Add
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Navbar;
