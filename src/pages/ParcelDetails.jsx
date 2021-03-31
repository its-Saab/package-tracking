import { useState } from "react";
import { Image, Modal, Button, Header } from "semantic-ui-react";
import { FetchMap } from "../actions/FetchMap";

export const ParcelDetails = ({ item }) => {
	const [open, setOpen] = useState(false);
	console.log(item);
	return (
		<Modal
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={
				<Button size="small" color="black">
					Show Details
				</Button>
			}
		>
			<Modal.Header>Parcel Details</Modal.Header>
			<Modal.Content image>
				<FetchMap
					latitude={item.location_coordinate_latitude}
					longitude={item.location_coordinate_longitude}
				/>
				<Modal.Description>
					<Header>{item.parcel_id}</Header>
					<p>From: {item.sender}</p>
					<p>To: {item.user_name}</p>
					<p>Pick-up location: {item.location_name}</p>
					<p>ETA: {item.eta}</p>
					<p>Status: {item.status}</p>
					<p>Last updated: {item.last_updated}</p>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button
					content="Done"
					labelPosition="right"
					icon="checkmark"
					onClick={() => setOpen(false)}
					positive
				/>
			</Modal.Actions>
		</Modal>
	);
};
