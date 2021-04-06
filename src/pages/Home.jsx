import React from "react";
import { ResultCards } from "../component/ResultCards";
import { SearchForm } from "../component/SearchForm";

export const Home = ({ item }) => {
	// item.parcel_id == parcelID && item.sender == sendersName
	return (
		<div>
			<SearchForm />
			<br/>
			{item.map((parcel) => (
				<ResultCards key={parcel.id} item={parcel} />
			))}
		</div>
	);
};
