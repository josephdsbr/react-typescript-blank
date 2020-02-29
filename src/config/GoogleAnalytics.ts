import ReactGA from 'react-ga';

if (process.env.NODE_ENV === 'production') {
  const trackingId = "UA-1234567890-1";
  ReactGA.initialize(trackingId);
}
