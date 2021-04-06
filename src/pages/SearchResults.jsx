import { ResultCards } from "../component/ResultCards";
import { SearchForm } from "../component/SearchForm";

export const SearchResults = ({ match, item }) => {
	const info = match.params.query;
	let sendersName = info.split(":")[0] || 0;
	let parcelID = info.split(":")[1] || 0;
	console.log("sendersName", sendersName);
	console.log("parcelID", parcelID);

	const filteredList = item.filter(
		(item) => (item.parcel_id.startsWith(parcelID)) | (item.sender.includes(sendersName))
	);
	return (
		<div>
			{filteredList.length !== 0 &&
				filteredList.map((parcel) => (
					<ResultCards key={parcel.id} item={parcel} />
				))}
			{filteredList.length === 0 && (
				<div>
					No matching parcel was found, try again:
					<SearchForm />
				</div>
			)}
		</div>
	);
};
