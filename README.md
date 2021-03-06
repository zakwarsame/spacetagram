# Spacetagram

Visit the live link [here](https://spacetagramverse.netlify.app/)

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Demo](#demo)
- [Dependencies](#dependencies)
- [Known Issues](#known-issues)

##  Description

A client-side single page application built using React that pulls data from Nasa's [Astronomy Picture of The Day](https://apod.nasa.gov/). It's like instagram but for space lovers. Users can browse through these images and like or unlike them. The app also has a dark-mode feature which users can toggle depending on their preference.

## Features

- Load Image data from [NASA's API](https://api.nasa.gov)
- Like and dislike each image
- Switch between dark mode and light mode
- Loading progress bar
- Display error page when it fails to load


## Installation

1. Clone this repo 

   ```sh
   git clone https://github.com/zakwarsame/spacetagram.git
   ```

1. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm). This app was both built and hosted using node v16.13.1

   ```sh
   nvm install
   ```

1. Install dependencies

   ```sh
   npm install
   ```

1. Sign up for **[NASA's free API key here](https://api.nasa.gov/)**

1. Create a `.env` file and setup your key by following the `.env.example` file

1. Start the development server

   ```sh
   npm start
   ```

## Demo

!["Spacetagram gif"](https://github.com/zakwarsame/spacetagram/blob/main/docs/spacetagram_demo.gif)
!["Error page image"](https://github.com/zakwarsame/spacetagram/blob/main/docs/error.png)


## Running Cypress Tests

```sh
npm run cypress
```

## Dependencies

- react
- axios
- material-ui
- dotenv
- react-infinite-scroll-component
- react-query

## Known Issues

The like button is a checkbox thus not being saved or persisted in local storage.
