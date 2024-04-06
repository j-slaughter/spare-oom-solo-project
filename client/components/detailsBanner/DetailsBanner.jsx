import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./detailsBanner.scss";
    
import ContentWrapper from "../contentWrapper/ContentWrapper.jsx";
import dataLoader from "../../api.js";
import Img from "../Img.jsx";
    
const DetailsBanner = ({ crew }) => {
    
    const { id } = useParams();
    const { data, loading } = dataLoader(`/movie/${id}`);
    
    const { url } = useSelector((state) => state.homepage);
    
    const director = crew?.filter((f) => f.job === "Director");
    const writer = crew?.filter((f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer");
    
    return (
        <div className="detailsBanner">
            {!loading ? (
                <>
                    {!!data && (
                        <React.Fragment>
                            <div className="backdrop-img">
                                <Img src={url.imageLink + data.backdrop_path} />
                            </div>
                            <div className="opacity-layer"></div>
                                <ContentWrapper>
                                    <div className="content">
                                        <div className="left">
                                            <Img
                                                className="posterImg"
                                                src={url.imageLink + data.poster_path}
                                            />
                                        </div>
                                        <div className="right">
                                            <div className="title">
                                                {`${data.name || data.title}`}
                                            </div>
                                            <div className="subtitle">
                                                {data.tagline}
                                            </div>
                                            <div className="overview">
                                                <div className="heading">
                                                    Overview:
                                                </div>
                                                <div className="description">
                                                    {data.overview}
                                                </div>
                                            </div>
                                            <div className="info">
                                                {data.release_date && (
                                                    <div className="infoItem">
                                                        <span className="text bold">
                                                            Release Date:{" "}
                                                        </span>
                                                        <span className="text">
                                                            {data.release_date}
                                                        </span>
                                                    </div>
                                                )}
                                                {data.runtime && (
                                                    <div className="infoItem">
                                                        <span className="text bold">
                                                            Runtime:{" "}
                                                        </span>
                                                        <span className="text">
                                                            {`${data.runtime} mins`}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                            {director?.length > 0 && (
                                                <div className="info">
                                                    <span className="text bold">
                                                        Director:{" "}
                                                    </span>
                                                    <span className="text">
                                                        {director?.map((d, i) => (
                                                            <span key={i}>
                                                                {d.name}
                                                                {director.length -
                                                                    1 !==
                                                                    i && ", "}
                                                            </span>
                                                        ))}
                                                    </span>
                                                </div>
                                            )}
                                            {writer?.length > 0 && (
                                                <div className="info">
                                                    <span className="text bold">
                                                        Writer:{" "}
                                                    </span>
                                                    <span className="text">
                                                        {writer?.map((d, i) => (
                                                            <span key={i}>
                                                                {d.name}
                                                                {writer.length -
                                                                    1 !==
                                                                    i && ", "}
                                                            </span>
                                                        ))}
                                                    </span>
                                                </div>
                                            )}
                                            <div className="info">
                                                <span className="text bold">
                                                    Location(s):{" "}
                                                </span>
                                                <span className="text">
                                                    <span>Test</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </ContentWrapper>
                            </React.Fragment>
                        )}
                    </>
                ) : (
                    <div className="detailsBannerSkeleton">
                        <ContentWrapper>
                            <div className="left">Cannot load movie image</div>
                            <div className="right">
                                <div className="row">Cannot load movie info</div>
                            </div>
                        </ContentWrapper>
                    </div>
                )}
            </div>
        );
    };
    
    export default DetailsBanner;