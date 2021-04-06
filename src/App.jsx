import { useState, useEffect } from "react";
import { Header } from "./component/Header";
import { Home } from "./pages/Home";
import { SearchResults } from "./pages/SearchResults";
import FetchData from "./actions/FetchData";
import "./styles/App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

function App() {
	const [data, setData] = useState([]);
	const [flag, setFlag] = useState(false);

	useEffect(() => {
		if (!flag) {
			FetchData().then((res) => {
				setData(res);
				setFlag(true);
			});
		}
	}, []);
	return (
		<div className="main-container">
			<Container>
				<Router>
					<Header />
					<Switch>
						<Route render={() => <Home item={data} flag={flag} />} path="/" exact />
						<Route
							component={(props) => (
								<SearchResults match={props.match} item={data} />
							)}
							path="/searchresults/:query"
						/>
					</Switch>
				</Router>
			</Container>
		</div>
	);
}

export default App;
