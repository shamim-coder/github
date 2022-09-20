import axios from "axios";
import { useEffect, useState } from "react";

const useRepositories = (username) => {
    // const [user] = useUser();
    // const { repos_url } = user;

    const [page, setPage] = useState(2);
    const [perPage, setPerPage] = useState(10);

    const repos_url = `https://api.github.com/users/${username}/repos?per_page=${perPage}`;

    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const getRepos = async () => {
            try {
                const { data } = await axios.get(repos_url);
                setRepositories(data);
                setLoading(false);
            } catch (error) {
                console.error(error.message);
            }
        };
        getRepos();
    }, [repos_url]);
    return [repositories, setRepositories, loading];
};

export default useRepositories;
