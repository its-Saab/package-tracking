import { Image } from "semantic-ui-react";

export const FetchMap = ({ latitude, longitude }) => {
	const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

	return <Image size="medium" src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${longitude},${latitude},8.71,0/300x300?access_token=${ACCESS_TOKEN}`} wrapped />;
};
