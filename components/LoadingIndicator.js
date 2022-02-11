import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

const LoadingIndicator = () => {
  return (
    <Wrapper>
      <ActivityIndicator size="large" />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

export default LoadingIndicator;
