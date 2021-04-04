import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./styles/App.css";
import "semantic-ui-css/semantic.min.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_en from "./translate/en/common.json";
import common_sv from "./translate/sv/common.json";

i18next.init({
	interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en:{
      common: common_en
    },
    sv:{
      common: common_sv
    }
  }
});

ReactDOM.render(
	<React.StrictMode>
		<I18nextProvider i18n={i18next}>
			<App />
		</I18nextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
