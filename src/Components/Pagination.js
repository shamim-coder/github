import React, { useEffect, useState } from "react";

const Pagination = ({ setRepositories, username }) => {
    const [pageNumber, setPageNumber] = useState(1);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);

    useEffect(() => {
        const url = `https://api.github.com/users/${username}/repos?page=${page}&per_page=${size}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setRepositories(data);
            });
    }, [page, setRepositories, size, username]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then((res) => res.json())
            .then((data) => {
                const numberOfPage = data.public_repos / size;
                setPageNumber(Math.ceil(numberOfPage));
            });
    }, [size, username]);

    return (
        <>
            <div className="btn-group w-full justify-center py-10">
                <button onClick={() => setPage(page - 1)} className={`btn btn-info btn-outline btn-sm ${page === 1 ? "btn-disabled" : undefined}`}>
                    «
                </button>

                {[...Array(pageNumber).keys()].map((number) => (
                    <button key={number} onClick={() => setPage(number + 1)} className={`${page === number + 1 ? "btn btn-sm btn-info" : "btn btn-sm btn-outline btn-info"}`}>
                        {number + 1}
                    </button>
                ))}

                <button onClick={() => setPage(page + 1)} className={`btn btn-info btn-outline btn-sm ${page === pageNumber ? "btn-disabled" : undefined}`}>
                    »
                </button>
            </div>
        </>
    );
};

export default Pagination;
