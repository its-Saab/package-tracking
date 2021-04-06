import { useState, useEffect } from "react";
import axios from "axios";
import { ResultCards } from "../component/ResultCards";
import { SearchForm } from "../component/SearchForm";

export const SearchResults = ({ match }) => {
	const info = match.params.query;
	let sendersName = info.split(":")[0] || 0;
	let parcelID = info.split(":")[1] || 0;
	console.log("sendersName", sendersName);
	console.log("parcelID", parcelID);

	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchedData = async () => {
			let data = await axios
				.get("https://my.api.mockaroo.com/orders.json?key=e49e6840")
				.then((res) => {
					res = res.data;
					return res;
				});
			setData(data);
		};
		fetchedData();
	}, []);

	const filteredList = data.filter(
		(item) => (item.id == parcelID) | (item.sender == sendersName)
	);
	// item.parcel_id == parcelID && item.sender == sendersName
	return (
		<div>
			{filteredList.length !== 0 &&
				filteredList.map((parcel) => (
					<ResultCards key={parcel.id} item={parcel} />
				))}
			{filteredList.length === 0 && (
				<div>
					<h1>No matching parcel was found</h1>
					<SearchForm />
				</div>
			)}
		</div>
	);
};
