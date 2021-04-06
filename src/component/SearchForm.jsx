import React, { useState } from "react";
import { Button, Select, Input } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const SearchForm = () => {
	//State
	const [query, setQuery] = useState({
		senderName: "",
		parcelID: "",
	});
  //i18next function for translation
	const { t } = useTranslation("common");
  //Drop-down list properties
	const [keyName, setKeyName] = useState("parcelID");
	const options = [
		{ key: "parcelID", text: t("home.parcelID"), value: "parcelID" },
		{ key: "senderName", text: t("home.senderName"), value: "senderName" },
	];

	//Property
	const history = useHistory();

	//Functions
	const handleSubmit = (e) => {
		e.preventDefault();
		history.push(`/searchresults/${query.senderName}:${query.parcelID}`);
	};
	const handleName = (e, data) => {
		setKeyName(data.value);
	};

	const handleChange = (e, data) => {
		setQuery({ ...query, [e.target.name]: e.target.value });
	};
	return (
		<div>
			<Input
				type="text"
				placeholder={t("home.find") + "..."}
				action
				onChange={handleChange}
				focus={true}
				fluid={true}
			>
				<input name={keyName} />
				<Select
					compact
					options={options}
					defaultValue="parcelID"
					onChange={handleName}
				/>
				<Button
					onClick={handleSubmit}
					type="submit"
					color={"facebook"}
					size={"medium"}
				>
					{t("home.find")}
				</Button>
			</Input>
		</div>
	);
};
