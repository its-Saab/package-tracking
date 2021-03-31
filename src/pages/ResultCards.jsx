import { Item, Grid } from "semantic-ui-react";
import openBoxPhoto from "../assets/open-box.png";
import closedBoxPhoto from "../assets/closed-box.png";
import { ParcelDetails } from "./ParcelDetails";

export const ResultCards = ({ item }) => {
	return (
		<div>
			<Grid container columns={1} textAlign="left">
				<Grid.Column style={{ maxWidth: 450 }}>
					<Item.Group>
						<Item>
							<Item.Image
								size="tiny"
								src={item.status == "delivered" ? openBoxPhoto : closedBoxPhoto}
							/>
							<Item.Content verticalAlign={"middle"}>
								<Item.Header as="h1">Package-ID: {item.parcel_id}</Item.Header>
								<Item.Meta>Status: {item.status}</Item.Meta>
								<Item.Extra>From: {item.sender}</Item.Extra>
							</Item.Content>
						</Item>
					</Item.Group>
				</Grid.Column>
			</Grid>
			<ParcelDetails item={item} />
			<hr />
		</div>
	);
};
