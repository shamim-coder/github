import React from "react";
import { useParams } from "react-router-dom";
import useRepositories from "../Hooks/useRepositories";
import useUser from "../Hooks/useUser";
import Header from "./Header";
import Pagination from "./Pagination";
import Repositories from "./Repositories";

const GithubUser = () => {
    const { username } = useParams();
    const [repositories, setRepositories] = useRepositories(username);
    const [user] = useUser(username);

    return (
        <div>
            <Header user={user} />
            <Repositories repositories={repositories} />
            <Pagination totalRepos={user.public_repos} setRepositories={setRepositories} username={username} />
        </div>
    );
};

export default GithubUser;
