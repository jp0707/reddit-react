# Reddit using React

A learning experiment.


# Disable CORS

1. What is CORS?
  >[Cross Origin Resource Sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) is a policy that let the browser gain permission to access resources from a server on a different domain.

2. Why we need CORS disabled?
  >We directly access data from reddit server which is different from our github domain. Which is why some browsers won't allow access to it. Hence we need the CORS disabled at browser level to access the data.

Here are the addons/extensions that allow disabling CORS protections temporarily:

- [Chrome extension](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)
- [Mozilla Add on](https://addons.mozilla.org/en-CA/firefox/addon/access-control-allow-origin/)

# Feature List

- Voting
- Comment count
- Share
- Infinite scrolling
- Screen Navigation
