import { Image } from "semantic-ui-react";
import logo from "../assets/stayConnected-logo.png";
import { LanguageToggler } from "./LanguageToggler";

export const Header = () => {
	return (
		<div>
			<LanguageToggler/>
			<a href="/">
				<Image src={logo} size={"small"} centered={true} ui={true} />
			</a>
			<hr />
		</div>
	);
};
