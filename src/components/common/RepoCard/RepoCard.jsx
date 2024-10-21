import { useState } from "react";
import "./RepoCard.css";
import { FaChevronCircleRight } from "react-icons/fa";
import {
	LINK_TEXT_VISIT_REPO,
	TEXT_FORKS,
	TEXT_LANGUAGE,
	TEXT_OPEN_ISSUES,
	TEXT_WATCHERS,
} from "../../../constants/constants";
const RepoCard = (props) => {
	const {
		id,
		name,
		description,
		html_url,
		watchers,
		open_issues_count,
		forks_count,
		language,
	} = props.repoData;
	const handleCardExpand = () => {
		setIsCardToggled(!isCardToggled);
	};
	const handleVisitLink = (e) => {
		e.stopPropagation();
		window.open(html_url, "_blank");
	};
	const [isCardToggled, setIsCardToggled] = useState(false);
	return (
		<div
			data-testid={`repo-data-card-container-${id}`}
			className="repo-data-card-container"
			onClick={handleCardExpand}
		>
			<div
				data-testid={`chevron-${id}`}
				className={`chevron-right ${
					isCardToggled ? "chevron-down" : ""
				}`}
			>
				<FaChevronCircleRight />
			</div>
			<div>
				<p data-testid={`repo-name-${id}`} className="repo-name">
					{name}
				</p>
				<p
					data-testid={`repo-description-${id}`}
					className="repo-description"
				>
					{description}
				</p>
				{isCardToggled && (
					<div
						data-testid={`repo-details-container-${id}`}
						className={`repo-details-container ${
							isCardToggled ? "expanded" : ""
						}`}
					>
						<a
							data-testid={`repo-link-${id}`}
							className="repo-link"
							onClick={handleVisitLink}
						>
							{LINK_TEXT_VISIT_REPO}
						</a>
						<div
							data-testid={`details-table-${id}`}
							className="details-table"
						>
							<div>
								<p className="repo-details">{TEXT_LANGUAGE}</p>
								<p className="repo-details">{TEXT_FORKS}</p>
								<p className="repo-details">
									{TEXT_OPEN_ISSUES}
								</p>
								<p className="repo-details">{TEXT_WATCHERS}</p>
							</div>
							<div className="details-data">
								<p className="repo-details">
									&nbsp;{`- ${language}`}
								</p>
								<p className="repo-details">
									&nbsp;{`- ${forks_count}`}
								</p>
								<p className="repo-details">
									&nbsp;{`- ${open_issues_count}`}
								</p>
								<p className="repo-details">
									&nbsp;{`- ${watchers}`}
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default RepoCard;
