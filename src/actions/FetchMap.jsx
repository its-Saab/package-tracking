import { Image } from "semantic-ui-react";
import { Marker } from "mapbox-gl";
export const FetchMap = ({ latitude, longitude }) => {
	const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
	return (

			<Image
				size="medium"
				src={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/static/pin-s+555555(${longitude},${latitude})/${longitude},${latitude},9.47,0/300x200?access_token=${ACCESS_TOKEN}`}
				wrapped
			/>

	);
};
