## About

This is a small project created during the 2020 pandemic to cheer myself up. It is a very simple React application that queries the Pexels api for pictures of cats and displays them randomly on the page. You can choose to save your randomly generated image and use it as a background, etc. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Preview:

[![Screenshot-2021-01-24-Rando-Catto.jpg](https://i.postimg.cc/VLCJ4kBC/Screenshot-2021-01-24-Rando-Catto.jpg)](https://postimg.cc/sv3fgyLj)

## Getting Started

You will need to get your own Pexels api key in order to run this project locally: https://www.pexels.com/api/. 

Once you have the key, add a '.env' file in the base directory. It should contain an entry for your Pexels api key:

REACT_APP_PEXELS_API_KEY=your_api_key_here

After setting that up, you can start the app with the following command:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
