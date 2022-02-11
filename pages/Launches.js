import React from "react";
import CardList from "../components/CardList";
import LoadingIndicator from "../components/LoadingIndicator";
import useLaunches from "../hooks/useLaunches";

const Launches = () => {
  const { allLaunches } = useLaunches();

  if (allLaunches.loading) return <LoadingIndicator />;
  if (!allLaunches) return null
  return <CardList data={allLaunches.data} />;
};

export default Launches;
