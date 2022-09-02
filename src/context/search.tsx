import axios from "axios";
import { useEffect, useState } from "react";

export const SearchData = (props: {
    phrase: string;
    sortBy: string;
    pageNumber: number;
}) => {
    const [data, setData] = useState([]);
    const apikey = "e75c1dd786c8454d989a14ccd2e3ca27";
    useEffect(() => {
        axios
            .get(
                `https://newsapi.org/v2/everything?q="${props.phrase}"&sortBy=${props.sortBy}&page=${props.pageNumber}&apiKey=${apikey}`
            )
            .then((r) => {
                setData(r.data);
            });
    }, [props.pageNumber]);
    return { data };
};
