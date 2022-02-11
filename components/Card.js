import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Text, Image, TouchableOpacity } from "react-native";

const Card = ({ launch }) => {
  const { links, mission_name, id } = launch;
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("Launch", {launchId: id});
  };

  return (
    <TouchableWrapper onPress={handlePress}>
      <StyledCard>
        <CoverImage source={{ uri: links?.flickr_images?.[0] }} />
        <CardTitle>{mission_name}</CardTitle>
      </StyledCard>
    </TouchableWrapper>
  );
};

const TouchableWrapper = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
`;

const StyledCard = styled.View`
  background-color: #fff;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const CoverImage = styled.Image`
  position: absolute;
  width: 100px;
  height: 100px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  left: 0;
`;

const CardTitle = styled.Text`
  position: absolute;
  right: 0;
  width: 70%;
`;

export default Card;
