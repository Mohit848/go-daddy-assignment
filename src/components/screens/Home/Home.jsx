import React, { useState } from "react";
import RepoCard from "../../common/RepoCard/RepoCard";
import { useEffect } from "react";
import { getAllRepos } from "../../../services/getAllRepos";
import { Circles } from "react-loader-spinner";
import "./Home.css";
const Home = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	useEffect(() => {
		setLoading(true);
		getAllRepos()
			.then((data) => {
				setRepoData(data);
				setLoading(false);
				setError(false);
			})
			.catch((err) => {
				setError(true);
			});
	}, []);
	const [repoData, setRepoData] = useState([]);
	return (
		<div className="home-container">
			{loading && (
				<Circles
					height="60"
					width="60"
					wrapperClass="home-loader"
					ariaLabel="circles-loading"
					visible={true}
				/>
			)}
			{error && (
				<p data-testid={`repo-error`}>
					Oops, looks like something's broke
				</p>
			)}
			{repoData.length > 0 &&
				!loading &&
				!error &&
				repoData.map((repo) => (
					<RepoCard repoData={repo} key={repo.id} />
				))}
		</div>
	);
};

export default Home;
