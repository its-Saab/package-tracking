import React, { useState } from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

export const Home = () => {
	//State
	const [query, setQuery] = useState({
		senderName: "",
		parcelID: "",
	});

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
							placeholder="Sender's name"
							name="senderName"
							value={query.senderName}
							onChange={handleChange}
						/>
						<Form.Input
							fluid
							icon="box"
							iconPosition="left"
							placeholder="Parcel's ID"
							name="parcelID"
							value={query.parcelID}
							onChange={handleChange}
						/>
						<Button color="teal" fluid size="large">
							Find
						</Button>
					</Segment>
				</Form>
			</Grid.Column>
		</Grid>
	);
};
