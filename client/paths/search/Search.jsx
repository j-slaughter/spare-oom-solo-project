import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper.jsx';

import { fetchDataFromApi } from '../../api.js';
import Movie from '../../components/movie/Movie.jsx';

import './search.scss';

const Search = () => {

    const [data, setData] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const [loading, setLoading] = useState(false);
    const { query } = useParams();

    const fetchInitialData = () => {
        setLoading(true);
        fetchDataFromApi(`/search/movie?query=${query}&page=${pageNum}`)
          .then((res) => {
            setData(res);
            setPageNum((prev) => prev + 1);
            setLoading(false);
          });
    };

    const fetchNextData = () => {
        fetchDataFromApi(`/search/movie?query=${query}&page=${pageNum}`)
          .then((res) => {
            if (data?.results) {
                setData({
                    ...data,
                    results: [...data?.results, ...res.results],
                });
            }
            else {
                setData(res);
            }
            setPageNum((prev) => prev + 1);
          });
    };

    // Load search results
    useEffect(() => {
        setPageNum(1);
        fetchInitialData();
    }, [query]);

    return (
        <div className="searchResultsPage">
            {!loading && (
                <ContentWrapper>
                    {data?.results?.length > 0 ? (
                         <><div className="pageTitle">
                            {`Search result(s) for: ${query}`}
                        </div><InfiniteScroll
                            className="content"
                            dataLength={data?.results?.length || []}
                            next={fetchNextData}
                            hasMore={pageNum <= data?.total_pages}
                        >
                                {data?.results.map((item, index) => {
                                    if (item.media_type === "person") return;
                                    if (item.popularity < 40) return;
                                    return (
                                        <Movie
                                            key={index}
                                            data={item}
                                            fromSearch={true} />
                                    );
                                })}
                            </InfiniteScroll></>
                    ) : (
                        <span className="resultNotFound">
                            No results found!
                        </span>
                    )}
                </ContentWrapper>
            )}
        </div>
    );
};

export default Search;