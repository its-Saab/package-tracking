import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Container } from "semantic-ui-react";
import { Header } from "./component/Header";
import { Home } from "./pages/Home";
import { SearchResults } from "./pages/SearchResults";
import "./styles/App.css";

function App() {
	return (
		<div className="main-container">
			<Container>
				<Router>
					<Header />
					<Switch>
						<Route component={Home} path="/" exact />
						<Route component={SearchResults} path="/searchresults/:query" />
					</Switch>
				</Router>
			</Container>
		</div>
	);
}

export default App;
