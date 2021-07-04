// log the pageview with their URL
export const pageview = (url) => {
  window.gtag('config', 'G-0PC8G90G58', {
    page_path: url,
  });
};

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag('event', action, params);
};
