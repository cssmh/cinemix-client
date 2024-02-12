import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import CineDetailCard from "../CineDetailCard/CineDetailCard";

const CineDetails = () => {
  const [matching, setMatching] = useState([]);
  // console.log(matching);

  const loaderData = useLoaderData();
  const paramsName = useParams();

  useEffect(() => {
    const matchBoth = loaderData.filter((data) => data.media === paramsName.id);
    // console.log(matchBoth);
    setMatching(matchBoth);
  }, [loaderData, paramsName]);

  return (
    <div>
      <Banner></Banner>
      <h1 className="text-2xl text-center font-semibold mt-5">CineMIX</h1>
      {matching.length == 0 ? (
        <p className="text-center my-12 text-red-500">No data available</p>
      ) : (
        ""
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto my-12">
        {matching.map((data) => (
          <CineDetailCard key={data._id} getCard={data}></CineDetailCard>
        ))}
      </div>
    </div>
  );
};

export default CineDetails;