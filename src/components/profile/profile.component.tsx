import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectUser } from "../../selector/user.selector";

import profileimage from "../../assets/images/userSvg.png";


const Profile = () => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);

    const { selectedUser } = user;

    useEffect(() => {
        if (!selectedUser) {
            navigate("/listing");
        }
    }, [])

    return (
        <section id="user_profile">
            {selectedUser ?
                <div className="container">
                    <div className="profile-container">
                        <div className="inner">

                            <div className="profile-block">
                                <img src={selectedUser.picture?.large} alt="" />
                            </div>
                        </div>

                        <div className="user-detail">
                            <span>Hi, My name is</span>
                            <h1>{selectedUser.name?.first} {selectedUser.name?.last}</h1>
                        </div>

                        <ul className="user-icons">
                            <li><a><img src={profileimage} /></a></li>
                            <li><a><img src={profileimage} /></a></li>
                            <li><a><img src={profileimage} /></a></li>
                            <li><a><img src={profileimage} /></a></li>
                            <li><a><img src={profileimage} /></a></li>
                            <li><a><img src={profileimage} /></a></li>

                        </ul>
                    </div>
                </div>
                : null
            }

        </section>
    );
}


export default Profile;