import AppRoutes from "./AppRoutes";
import AppHeader from "./components/common/AppHeader/AppHeader";

function App() {
	return (
		<div className="app">
			<AppHeader data-testid={`app-header`} />
			<AppRoutes />
		</div>
	);
}

export default App;
