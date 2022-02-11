import React from "react";

import Card from "../components/Card";
import styled from "styled-components/native";

const CardList = ({ data }) => {
  return (
    <ScrollList
      contentContainerStyle={{
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {/* Only display launches that have photos  */}
      {data.launchesPast.map((launch, i) => {
        const coverImage = launch.links?.flickr_images?.[0];
        return (
          coverImage && (
            <CardWrap key={i}>
              <Card launch={launch}/>
            </CardWrap>
          )
        );
      })}
    </ScrollList>
  );
};

const ScrollList = styled.ScrollView`
  height: 100%;
  margin-top: 12px;
  flex: 1;
`;

const CardWrap = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default CardList;
