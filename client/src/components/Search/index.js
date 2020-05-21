import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { RecordType } from "../../utils/RecordType";
import Result from "./components/Result";
import SearchBar from "./components/SearchBar";

const Search = ({ terms, dateFrom, dateTo }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageCount, setPageCount] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const fetchIdRef = useRef(0);

    const fetchData = useCallback(async ({ pageSize, pageIndex }) => {
        const fetchId = ++fetchIdRef.current;
        setLoading(true);

        // Fetch Data
        const data = await fetch(
            `/api/v1/evidence?limit=${pageSize}&page=${pageIndex}&year=2010`
        ).then((res) => res.json());

        if (fetchId === fetchIdRef.current) {
            setData(data.data);
            setTotalItems(data.totalItems);
            setPageCount(data.totalPages);
            setLoading(false);
        }
    }, []);

    const pageIndex = 0; // TODO: remove hardcoding
    const pageSize = 10; // TODO: remove hardcoding
    useEffect(() => {
        fetchData({ pageIndex, pageSize });
    }, [fetchData, pageIndex, pageSize]);

    return (
        <>
            <section className="section">
                <div className="container">
                    <h2 className="title">Browse</h2>
                    <p className="subtitle" style={{ marginBottom: "50px" }}>
                        Verify a claim by searching our curated repository.
                  </p>
                    <SearchBar />
                </div>
            </section>

            {/* Search Results */}
            <section className="section">
                <div className="container">
                    {data.map((result) => (
                        <Result
                            key={result.id}
                            title={result.title}
                            type={RecordType[result.__type]}
                            date={result.year}
                            authors={result.authors}
                            researchQuestion={result.research_question}
                            outcome={result.outcome}
                            rating={result.ratings[1]} // TODO: average of array values
                            seMethod={result.se_method}
                        />
                    ))}

                    {!data.length && (
                        <p className="has-text-centered">
                            Your search results will appear here.
                        </p>
                    )}
                </div>
            </section>
        </>
    );
}

export default Search;
