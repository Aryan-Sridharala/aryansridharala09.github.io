import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Face Mask Detection',
    desc:
      'Face Mask Detection system to detect face masks in static images as well as in real-time video streams. Own custom dataset was built using Bing Search API and Kaggle.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'SHEild',
    desc:
      "SHEild is a women safety app where women can send their current location to their guardians and police when they feel insecure and in danger just by shaking the phone or clicking the send location button. There is a separate Login page for police to see the recent requests that contains the user's image, name, location, and contact number.",
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Your DBlog',
    desc:
      'Your DBlog is a wall where you can share your pictures with hashtags also you can edit your posts and you can view and like other users posts.',
    img: UTrackerImg,
  },
];

export default projects;
