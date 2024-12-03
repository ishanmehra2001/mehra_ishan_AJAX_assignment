# mehra_ishan_AJAX_assignment

## Overview

The **Novo Earbuds** 3D Viewer allows users to interact with a 3D model of earbuds, viewing various hotspots on the model for additional product information. The application also fetches material details and other related data from an external API.

This project leverages several modern web technologies, including **WebGL**, **3D models**, **AJAX (Fetch API)**.

## Features

- **Interactive 3D Model**: Users can rotate and zoom into a 3D model of the earbuds.
- **Hotspots with Info**: Users can hover over hotspots on the model to reveal additional information about different features of the earbuds.
- **Material Information**: Material details are dynamically loaded via an API and displayed to the user.
- **Augmented Reality (AR)**: Supports AR viewing on compatible devices via the `<model-viewer>` component.
- **Responsive Design**: The application is mobile-friendly and adjusts for different screen sizes.


## How It Works

1. **HTML Structure**: The `<model-viewer>` element is used to display a 3D model of the earbuds, with AR functionality and custom settings for camera control and lighting.
   
2. **Hotspot Interaction**: 
   - Hotspots are placed on the 3D model using buttons with the `Hotspot` class.
   - When a user hovers over these hotspots, additional information appears with the help of GreenSock's animation library (`gsap`), which fades the information in and out smoothly.

3. **AJAX Fetch Requests**:
   - When the page loads, two different sets of data are fetched:
     - **Info Boxes**: Fetches and displays information about the earbuds' features.
     - **Materials**: Fetches information about the materials used in the earbuds.
   - This data is dynamically inserted into the HTML using template elements (`<template>`), making it more modular and reusable.

4. **Error Handling**: If there is an issue fetching the data from the API, a fallback error message is displayed.

5. **AR Support**: 
   - The application supports AR viewing on compatible devices (like smartphones and tablets). The "View in your space" button launches AR mode.

## Dependencies

1. **Model Viewer**: `<model-viewer>` for displaying the 3D model and AR functionality.
2. **GSAP**: GreenSock Animation Platform (GSAP) is used for animations, such as showing and hiding hotspot information.
3. **Fetch API**: Used for making AJAX calls to fetch data from external APIs.

## Setup Instructions

1. Clone or download the repository.
2. Ensure you have a local server or hosting solution to view the 3D model and make fetch requests work properly (for example, by using `http-server` for Node.js).
3. Open `index.html` in your browser to interact with the 3D earbuds model and see the hotspot and material information.


## Known Issues

- AR functionality may not work on all devices or browsers. Ensure that the browser supports AR and WebXR.
- The application relies on internet access to fetch data from the external API.

## License

This project is licensed under the MIT License.

