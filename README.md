# Spacetagram

Visit the live link [here]()

## Table of Contents

- [Description](#about)
- [Installation](#installation)
- [Demo](#demo)
- [Dependencies](#dependencies)
- [Known Issues](#knownissues)

##  Description

A client-side single page application built using React that pulls data from Nasa's [Astronomy Picture of The Day](https://apod.nasa.gov/). Users can then browse through these image and can like or unlike each image. The app also has a dark-mode feature which users can switch to their preference.


## Installation

1. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm). This app was both built and hosted using node v16.13.1 and it is highly recommended to use this in your environment

   ```sh
   nvm install
   ```

1. Install dependencies

   ```sh
   npm install
   ```

1. Start the development server

   ```sh
   npm start
   ```
1. Sign up for **[NASA's free API key here](https://api.nasa.gov/)**

1. Create a `.env` file and setup your key by following the `.env.example` file

## Demo

!["Scheduler gif"](https://github.com/zakwarsame/spacetagram/blob/master/docs/spacetagram_demo.gif)

## Running Cypress Tests

```sh
npm run storybook
```

## Dependencies

- react
- axios
- material-ui
- dotenv

## Known Issues

The like button is a checkbox thus not being saved or persisted in localstorage
