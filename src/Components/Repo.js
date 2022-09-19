import React from "react";
import { useParams } from "react-router-dom";

const Repo = () => {
    const { username } = useParams();
    console.log(username);
    return <div></div>;
};

export default Repo;
