import React from "react";
import { ResultCards } from "../component/ResultCards";
import { SearchForm } from "../component/SearchForm";
import { Loader, Dimmer} from 'semantic-ui-react'

export const Home = ({ item,flag }) => {
	// item.parcel_id == parcelID && item.sender == sendersName
	return (
		<div>
			<SearchForm />
			{!flag &&
			<Dimmer active>
        <Loader indeterminate>Preparing Files</Loader>
      </Dimmer>
		}
			<br/>
			{item.map((parcel) => (
				<ResultCards key={parcel.id} item={parcel} />
			))}
		</div>
	);
};
