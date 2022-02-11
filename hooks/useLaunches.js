import { useQuery, gql } from "@apollo/client";

const useLaunches = ({ launchId } = {}) => {
  const allLaunches = useQuery(GET_ALL_LAUNCHES);

  const oneLaunch = useQuery(GET_LAUNCH, {
    skip: !launchId,
    variables: {
      launchId,
    },
  });

  return {allLaunches, oneLaunch}
};

const GET_ALL_LAUNCHES = gql`
  query getAllLaunches {
    launchesPast(limit: 30) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
        flickr_images
      }
      rocket {
        rocket_name
      }
      launch_success
      id
    }
  }
`;

const GET_LAUNCH = gql`
  query getLaunch($launchId: ID!) {
    launch(id: $launchId) {
      details
      mission_name
      launch_year
      rocket {
        rocket_name
      }
      links {
        article_link
        video_link
      }
      launch_success
      launch_site {
        site_id
        site_name_long
        site_name
      }
    }
  }
`;

export default useLaunches
