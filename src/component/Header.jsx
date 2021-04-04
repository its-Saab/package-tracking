import { Image } from "semantic-ui-react";
import logo from "../assets/stayConnected-logo.png";

export const Header = () => {
	return (
		<div>
			<a href="/">
				<Image src={logo} size={"small"} centered={true} ui={true} />
			</a>
			<hr />
		</div>
	);
};
