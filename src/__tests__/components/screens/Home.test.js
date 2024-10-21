import { render, screen, waitFor } from "@testing-library/react";
import Home from "../../../components/screens/Home/Home";

import { act } from "react";
import { repoData } from "../../../__mocks__/sampleData";
import { getAllRepos } from "../../../services/getAllRepos";

jest.mock("../../../services/getAllRepos", () => ({
	getAllRepos: jest.fn(),
}));
describe("App Component", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});
	test("displays loader while fetching data", async () => {
		// Mock the implementation to simulate a delay
		getAllRepos.mockImplementation(() => new Promise(() => {}));

		await act(async () => {
			render(<Home />);
		});

		// Check if the loader is visible
		expect(screen.getByTestId("circles-loading")).toBeInTheDocument();
	});
	test("displays repo cards when data is fetched successfully", async () => {
		// Mock the implementation of getAllRepos
		getAllRepos.mockResolvedValue(repoData);
		const id = repoData[0].id;
		await act(async () => {
			render(<Home />);
		});

		// Wait for the repo cards to appear
		await waitFor(() => {
			expect(
				screen.getByTestId("repo-data-card-container-" + id)
			).toBeInTheDocument();
		});
	});
	test("displays error message when fetching data fails", async () => {
		// Mock the implementation of getAllRepos to reject with an error
		getAllRepos.mockRejectedValue(new Error("Failed to fetch"));

		await act(async () => {
			render(<Home />);
		});

		// Wait for the error message to appear
		await waitFor(() => {
			expect(screen.getByTestId("repo-error")).toBeInTheDocument();
		});
	});
});
