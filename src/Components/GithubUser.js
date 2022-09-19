import React from "react";
import { useParams } from "react-router-dom";
import useRepositories from "../Hooks/useRepositories";
import useUser from "../Hooks/useUser";
import Header from "./Header";
import Repositories from "./Repositories";

const GithubUser = () => {
    const { username } = useParams();
    const [repositories] = useRepositories(username);
    const [user] = useUser(username);
    return (
        <div>
            <Header user={user} />
            <Repositories repositories={repositories} />
        </div>
    );
};

export default GithubUser;
