import { Item, Grid } from "semantic-ui-react";
import openBoxPhoto from "../assets/open-box.png";
import closedBoxPhoto from "../assets/closed-box.png";
import { ParcelDetails } from "./ParcelDetails";
import {useTranslation} from 'react-i18next';



export const ResultCards = ({ item }) => {
	const {t} = useTranslation('common')
	return (
		<div style = {{backgroundColor: "rgba(133, 149, 150, 0.5)"}}>
			<Grid container columns={1} textAlign="left">
				<Grid.Column style={{ maxWidth: 450 }}>
					<Item.Group>
						<Item>
							<Item.Image
								size="tiny"
								src={item.status == "delivered" ? openBoxPhoto : closedBoxPhoto}
							/>
							<Item.Content verticalAlign={"middle"}>
								<Item.Header as="h1">{t('resultCards.parcelID')}: {item.parcel_id}</Item.Header>
								<Item.Meta>Status: {t(`resultCards.status.${item.status}`)}</Item.Meta>
								<Item.Extra>{t('resultCards.from')}: {item.sender}</Item.Extra>
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
