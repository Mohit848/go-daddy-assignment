// RepoCard.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import { repoData } from "../../../__mocks__/sampleData";
import RepoCard from "../../../components/common/RepoCard/RepoCard";

describe("RepoCard Component", () => {
	const mockRepo = {
		...repoData[0],
	};

	test("renders repo name and description", () => {
		render(<RepoCard repoData={mockRepo} />);
		expect(
			screen.getByTestId(`repo-name-${mockRepo.id}`)
		).toHaveTextContent(mockRepo.name);
		expect(
			screen.getByTestId(`repo-description-${mockRepo.id}`)
		).toHaveTextContent(mockRepo.description);
	});

	test("expands and collapses details on click", () => {
		render(<RepoCard repoData={mockRepo} />);

		// Ensure details are hidden initially
		expect(
			screen.queryByTestId(`repo-details-container-${mockRepo.id}`)
		).not.toBeInTheDocument();
		// Click on the card to expand
		fireEvent.click(
			screen.getByTestId(`repo-data-card-container-${mockRepo.id}`)
		);

		// // Details should now be visible
		expect(
			screen.getByTestId(`repo-details-container-${mockRepo.id}`)
		).toBeInTheDocument();

		// // Click again to collapse
		fireEvent.click(
			screen.getByTestId(`repo-data-card-container-${mockRepo.id}`)
		);
		expect(
			screen.queryByTestId(`repo-details-container-${mockRepo.id}`)
		).not.toBeInTheDocument();
	});

	test("renders correct repo details when expanded", () => {
		render(<RepoCard repoData={mockRepo} />);

		// Expand the card
		fireEvent.click(
			screen.getByTestId(`repo-data-card-container-${mockRepo.id}`)
		);

		// Check that the repo details are rendered correctly
		expect(
			screen.getAllByTestId(`details-table-${mockRepo.id}`)
		).toBeTruthy();
	});

	test("calls window.open when link is clicked", () => {
		global.open = jest.fn(); // Mock the window.open function

		render(<RepoCard repoData={mockRepo} />);

		// Expand the card to show the repo link
		fireEvent.click(
			screen.getByTestId(`repo-data-card-container-${mockRepo.id}`)
		);

		// Click on the visit repo link
		fireEvent.click(screen.getByTestId(`repo-link-${mockRepo.id}`));

		// Check that window.open was called with the correct URL
		expect(global.open).toHaveBeenCalledWith(mockRepo.html_url, "_blank");
	});
});
