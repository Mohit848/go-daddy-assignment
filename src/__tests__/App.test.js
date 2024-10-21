import { render, screen } from "@testing-library/react";
import App from "../App";
import { ThemeProvider } from "../components/providers/ThemeProvider/ThemeProvider";
import AppHeader from "../components/common/AppHeader/AppHeader";
import AppRoutes from "../AppRoutes";

jest.mock("../components/common/AppHeader/AppHeader", () => () => (
	<div>Mocked AppHeader</div>
));
jest.mock("../AppRoutes", () => () => <div>Mocked App Router</div>);
describe("App Component", () => {
	beforeEach(() => {
		render(
			<ThemeProvider>
				<App />
			</ThemeProvider>
		);
	});
	afterEach(() => {
		jest.clearAllMocks();
	});
	test("renders App Component", () => {
		const headerElement = screen.getByText(/Mocked AppHeader/i);
		const appRouteElement = screen.getByText(/Mocked App Router/i);
		expect(headerElement).toBeInTheDocument();
		expect(appRouteElement).toBeInTheDocument();
	});
});
