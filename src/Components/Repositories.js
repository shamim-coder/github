import React from "react";
import { useParams } from "react-router-dom";
import Repository from "./Repository";

const Repositories = ({ repositories }) => {
    const { username } = useParams();

    console.log(username);

    return (
        <div>
            <h1>Repositories</h1>
            <div className="grid grid-cols-2 gap-5">
                {repositories.map((repository) => (
                    <Repository key={repository.id} repository={repository} />
                ))}
            </div>
        </div>
    );
};

export default Repositories;
