import React from "react";

const Repository = ({ repository }) => {
    const { name, description, topics } = repository;
    return (
        <div className="border p-2">
            <h2 className="text-2xl font-semibold text-info mb-3">{name}</h2>
            <p className="mb-3">{description}</p>
            {topics.map((topic) => {
                return <button className="btn btn-sm btn-info mr-2 mb-2 text-white">{topic}</button>;
            })}
        </div>
    );
};

export default Repository;
