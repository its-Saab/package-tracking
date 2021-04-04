import { useState } from "react";
import { Modal, Button, Header } from "semantic-ui-react";
import { FetchMap } from "../actions/FetchMap";
import { useTranslation } from "react-i18next";

export const ParcelDetails = ({ item }) => {
	const [open, setOpen] = useState(false);
	const { t } = useTranslation("common");
	return (
		<Modal
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={
				<Button size="small" color="black">
					{t("resultCards.showDetails")}
				</Button>
			}
		>
			<Modal.Header>{t("parcelDetails.title")}</Modal.Header>
			<Modal.Content image>
				<FetchMap
					latitude={item.location_coordinate_latitude}
					longitude={item.location_coordinate_longitude}
				/>
				<Modal.Description>
					<Header>#{item.parcel_id}</Header>
					<p>
						{t("parcelDetails.from")}: {item.sender}
					</p>
					<p>
						{t("parcelDetails.to")}: {item.user_name}
					</p>
					<p>
						{t("parcelDetails.pickupLocation")}: {item.location_name}
					</p>
					<p>
						{t("parcelDetails.eta")}: {item.eta}
					</p>
					<p>Status: {t(`resultCards.status.${item.status}`)}</p>
					<p>
						{t("parcelDetails.lastUpdated")}: {item.last_updated}
					</p>
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
