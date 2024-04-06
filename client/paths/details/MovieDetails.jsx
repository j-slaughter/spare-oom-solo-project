import React from "react";
import { useParams } from "react-router-dom";

import dataLoader from "../../api.js";
import DetailsBanner from "../../components/detailsBanner/DetailsBanner.jsx";
import Locations from '../../components/Locations.jsx';

const MovieDetails = () => {
    const { id } = useParams();
    const { data } = dataLoader(`/movie/${id}/credits`);

    return (
        <div>
            <DetailsBanner crew={data?.crew} />
            <Locations />
        </div>
    );
};

export default MovieDetails;