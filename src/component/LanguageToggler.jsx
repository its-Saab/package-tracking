import { Button } from "semantic-ui-react";
import { useTranslation } from "react-i18next";

export const LanguageToggler = () => {
	const { i18n } = useTranslation("common");
	return (
		<div>
			<Button animated="fade" onClick={() => i18n.changeLanguage("en")}>
				<Button.Content visible>En</Button.Content>
				<Button.Content hidden>Switch</Button.Content>
			</Button>
			<Button animated="fade" onClick={() => i18n.changeLanguage("sv")}>
				<Button.Content visible>Sv</Button.Content>
				<Button.Content hidden>Switch</Button.Content>
			</Button>
		</div>
	);
};
