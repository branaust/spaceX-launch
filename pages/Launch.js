import React from "react";
import styled from "styled-components/native";
import { Button, Linking } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import Field from "../components/Field";
import useLaunches from "../hooks/useLaunches";

import LoadingIndicator from "../components/LoadingIndicator";

const Launch = ({ route }) => {
  const { launchId } = route.params;
  const { oneLaunch } = useLaunches({ launchId });

  if (oneLaunch.loading) return <LoadingIndicator />;
  if (!oneLaunch) return null;

  const { launch: selectedLaunch } = oneLaunch.data;
  const videoId = selectedLaunch?.links?.video_link.split("/")[3];

  const handlePress = () => {
    Linking.openURL(selectedLaunch.links.article_link);
  };
  return (
    <ScrollList>
      <VideoContainer>
        <StyledVideo videoId={videoId} height={250} />
      </VideoContainer>
      <LaunchDetails>
        <Field label="Mission" value={selectedLaunch.mission_name} />
        <Field label="Rocket" value={selectedLaunch.rocket.rocket_name} />
        <Field label="Year" value={selectedLaunch.launch_year} />
        <Field
          label="Site"
          value={selectedLaunch.launch_site.site_name_long.substr(0, 20)}
        />
        <Field
          label="Launch Success"
          value={`${selectedLaunch.launch_success}`}
        />

        <Details>Description</Details>
        <Details>{selectedLaunch.details}</Details>
        <Button title="Learn More" onPress={handlePress} />
      </LaunchDetails>
    </ScrollList>
  );
};

const ScrollList = styled.ScrollView`
  height: 100%;
  margin-top: 12px;
  flex: 1;
`;

const VideoContainer = styled.View``;

const StyledVideo = styled(YoutubePlayer)`
  width: 100%;
  height: 225px;
  margin-bottom: 20px;
  margin-right: 15px;
  position: absolute;
`;

const LaunchDetails = styled.View`
  padding-horizontal: 25px;
`;

const Details = styled.Text`
  color: white;
  padding-vertical: 5px;
`;

export default Launch;
