import { useState } from "react";
import axios from "axios";
import { ListItemProps } from "../utils/dataList";

type UseAxiosRequestTypes = {
	data: any;
	loading: boolean;
	error: string;
	listTitle: string;
	request: string;
	fetchDataHandler: (listItem: ListItemProps) => void;
};

export const useAxiosRequest = (): UseAxiosRequestTypes => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>("");
	const [request, setRequest] = useState<string>("");
	const [listTitle, setListTitle] = useState<string>("");
	const fetchDataHandler = (listItem: ListItemProps): void => {
		const { query, title } = listItem;
		setLoading(true);
		setData([]);
		setRequest(query);
		setListTitle(title);
		if (error) {
			setError("");
		}
		axios
			.get(
				`${process.env.REACT_APP_BASE_URL}/${listItem.query}/${process.env.REACT_APP_API_KEY}`,
			)
			.then((res: any): any => {
				const data: any = res.data;
				setData(data.items);
				setLoading(false);
			})
			.catch(err => {
				setLoading(false);
				setError(err.message);
			});
	};
	return { data, loading, error, listTitle, request, fetchDataHandler };
};
