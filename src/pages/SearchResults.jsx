import { useState, useEffect } from "react";
import axios from "axios";
import { ResultCards } from "../component/ResultCards";




export const SearchResults = ({ match }) => {
	const info = match.params.query;
	let sendersName = info.split(":")[0];
	let parcelID = info.split(":")[1];
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

  const filteredList = data.filter(item => item )
  // item.parcel_id == parcelID && item.sender == sendersName
	return (
		<div>
			{filteredList.map(parcel => (
        <ResultCards key={parcel.id} item={parcel}/>
	))}
		</div>
	);
};
