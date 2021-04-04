import React, { useState } from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Home = () => {
	//State
	const [query, setQuery] = useState({
		senderName: "",
		parcelID: "",
	});

	const { t } = useTranslation("common");

	//Property
	const history = useHistory();

	//Functions
	const handleSubmit = (e) => {
		e.preventDefault();
		history.push(`/searchresults/${query.senderName}:${query.parcelID}`);
	};

	const handleChange = ({ target }) => {
		setQuery({ ...query, [target.name]: target.value });
	};
	return (
		<Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
			<Grid.Column style={{ maxWidth: 450 }}>
				<Form size="large" onSubmit={handleSubmit}>
					<Segment stacked>
						<Form.Input
							fluid
							icon="user"
							iconPosition="left"
							placeholder={t("home.senderName")}
							name="senderName"
							value={query.senderName}
							onChange={handleChange}
						/>
						<Form.Input
							fluid
							icon="box"
							iconPosition="left"
							placeholder={t("home.parcelID")}
							name="parcelID"
							value={query.parcelID}
							onChange={handleChange}
						/>
						<Button color="teal" fluid size="large">
							{t("home.find")}
						</Button>
					</Segment>
				</Form>
			</Grid.Column>
		</Grid>
	);
};
