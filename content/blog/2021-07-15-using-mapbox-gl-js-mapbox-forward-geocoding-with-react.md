---
layout: blog
title: Using Mapbox GL JS, Mapbox Forward Geocoding with React
slug: using-mapbox-gl-js-mapbox-forward-geocoding-with-react
date: 2021-07-06T11:47:22.254Z
tags:
  - React
  - Mapbox
  - Geocoding
  - Javascript
  - Programming
---
![](https://miro.medium.com/max/1400/1*NsV6-3NN7XrMAKORfhDhIg.jpeg)

I’ve always been a fan of [Mapbox](https://www.mapbox.com/). Maybe because I’ve found most developers using it, I think I love it due to its simplicity and ease of set-up. Besides this, Mapbox provides a powerful way to customize your map, and their documentation is pretty great.

In this tutorial, I’ll be showing you how to use React, React hooks, and Mapbox GL JS to build:

*   interactive map with custom marker
*   forward geocoding in Mapbox

Getting started
===============

First, you’ll need an API access token to configure Mapbox GL JS for routing and geocoding. Go to [mapbox.com](https://www.mapbox.com/), create an account. On your dashboard, create a token. Please note that this tutorial assumes you have a basic understanding of React.

**_Setting up our project_**

**Step 1:** On your terminal, run `npx create-react-app mapbox-demo` to create our react project. Once the installation is done, enter your project folder with `cd mapbox-demo`.

**Step 2:** Let us also install the Mapbox GL JS library and Mapbox SDK since we’ll be using it.

`npm install mapbox-gl @mapbox/mapbox-sdk`

**Step 3:** In your **src** folder, create a **components** folder. Inside the folder, you’ve just created, create a **GenerateMap.js** file.

Your project structure should look like this

```
...  
└── src  
    ├── components  
    │   └── GenerateMap.js  
    │  
    ├── App.css  
    ├── App.js  
...
```

Now let’s start by writing some code 😋

Create the HTML page
====================

Open the `public/index.html` file and paste the following code inside it.

This code creates the structure of the HTML page. Here we have the `div` that contains the `id` that holds the root of the page. We also have the `mapbox-gl.css` link at the `head`tag.

Create the React App
====================

Open the `GenerateMap.js` file. Add the following code into it.

We’ve decided to import a few things here. The Mapbox SDK provides us with services for working with geocoding. And don’t worry, the `<React.Fragment/>` will be changed later.

Next, let us initialize the map. This code will run immediately after the page mounts.

The `mapContainerRef` is needed to render the map into an HTML element.

Here we added the Mapbox map within a React `useEffect` hook. This ensures that the map will render before React tries to create the element that contains the map. This also takes a set of options:

`container`: This option tells Map JS to render the map inside the specified DOM element. Here, the map expect the receive the `mapContainerRef` .

`style`: This option defines the style the map will use. Here, we added `mapbox://styles/mapbox/streets-v11`

The `Zoom and Center` options help to determine the map zoom level and center coordinate. Here, we set the zoom level to 9 and the center which receives the longitude and latitude where the map should be center to \[3.361881, 6.672557\].

Note that the coordinate I added here is for **Lagos, Nigeria**. You can change it to your own choice.

Render Map
==========

Now, let us render the map

The `mapContainerRef` specifies the entry point to which the map will be rendered on the page.

The map also needs to be corrected with few styles. Add the following code to your `app.css` file.

Open `App.js` file and paste the below code.

Here, we import our `GenerateMap.js` into `App.js` . This is to render the map.

If you’ve followed the code well, you should be having the below on your browser.

![](https://miro.medium.com/max/2000/1*EXOFDlmWiyLVOHrxPgZbTg.png)

Mapbox Geocoding
================

Now, let us talk about geocoding and how it’s been used in Mapbox.

**Geocoding** is the process of transforming a description of a location — such as a pair of coordinates, an address, or a name of a place — to a location on the earth’s surface.

The **Mapbox Geocoding API** does two things: _forward geocoding_ and _reverse geocoding_.

Forward geocoding converts location text into geographic coordinates, turning `Ikeja, Lagos` into `3.33333, 6.58333`.

Reverse geocoding turns geographic coordinates into place names, turning `3.33333, 6.58333` into `Ikeja, Lagos`. These location names can vary in specificity, from individual addresses to states and countries that contain the given coordinates.

**_Okay, let us go back to our code._**

You will need to set up Mapbox geocoding to allow it to transform our location. Now, add the following code to `GenerateMap.js` file.

Here, we added the Mapbox geocoding SDK into the React`useCallback` hook. We then passed in `accessToken` option.

Since this tutorial focused on forward geocoding, We’ve decided to work with the `forwardGeocode` method. This also takes a set of options:

*   The `query` option to receive the location to be converted. When you make a query, you get a _response_, a JSON-formatted document of the most relevant results from your query.
*   The `countries` option takes the array of string of the country code you are trying to find. **ng** is the internet country code for Nigeria.
*   The `limit` option is to limit the search result. Here, we used 2.

[Click here to read more about geocoding options and services.](https://github.com/mapbox/mapbox-sdk-js/blob/master/docs/services.md#geocoding)

Display the new geometry coordinate
===================================

Now that we’ve been able to fetch the forward geocoding address, let’s create an additional `useEffect` hook to call the function. Add the following code:

Here are few things we did:

*   We load the new geometry coordinate `fetchData()` and do a check once there’s an update.
*   `**new mapboxgl.Marker()**`  creates a marker and using the `setLngLat()` method to set a new coordinate. And we use the `setPopup()` method to create a popup showing the coordinate description whenever the marker is clicked.
*   We wrote a Mapbox GL JS `map.on('load')` function that helps to load the new values and using `map.flyTo()` to re-center the map to our new value whenever there’s a change to the geometry center.

You may also notice that we created a new `div` element with `marker` className. Now, let us add styling to our marker. In addition to your previous styling, add the following code to your `app.css` file.

Save your work and go back to the browser page. There is a marker with a ripple effect indicating the position of our new location. You can click the marker to view the description.

Finally!!!😊
============

You have successfully created a React app that uses Mapbox GL JS and Mapbox forward geocoding. If you’ve followed the tutorial to this point, your final result should look like this:

![](https://miro.medium.com/max/2000/1*TAmXyIuwt53Rnb908_dxGA.png)

I believe this tutorial has been of help to you. Kindly give it as much clap as you can using the clap button and do leave a comment for any contribution.

The complete code for this tutorial can be found at [https://github.com/sadewole/Mapbox-Reactjs](https://github.com/sadewole/Mapbox-Reactjs)






\--

**You can like and do leave a comment for any contribution to this article on [medium](https://samador9.medium.com/building-an-auto-logout-session-timeout-with-react-using-hooks-e7804ef973ec#434c-70de593939bb). Thank you for reading.**