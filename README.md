## Repo: https://github.com/a-zeb/capstone2-rest-countries-api
## Site: https://a-zeb-capstone2-rest-countries-api.netlify.app

# REST Countries API with color theme switcher

#### A frontend mentor challenge using a React and API integration.

## Description

REST Countries API with color theme switcher: this project allow users to view different country information in the theme of their choice.

## Table of Contents

- [Technologies Used](#technologiesused)
- [Features](#features)
- [Reflection](#reflection)

## <a name="technologiesused"></a>Technologies Used

- React (Vite)
- React Router
- CSS3 (Vanilla)
- JavaScript

## Features

- Fetches country information from REST Countries API.
- Shows all countries, search by name, filter by region.
- Click a country to see details; click border codes to jump to neighbors.
- Light/dark toggle using CSS variables and data-theme attributes.
- Sticky navigation for easy access to theme toggle.
- Full-width responsive layout for all devices.

## <a name="reflection"></a>Reflection

I built this project to practice fetching data and handling state in React. It was a good exercise in using useEffect to grab the country list and figuring out how to filter that data on the fly with a search bar and region dropdown. 

The trickiest part was probably the routing. I had to make sure clicking a border country used the right ID to load the next page's data properly. I also decided to fix the back button so it always takes you home instead of just looping through the countries you already saw, which makes the app way easier to use.

Overall, it was a good exercise in React and API integration and I think it helped solidify my understanding of React and API integration.