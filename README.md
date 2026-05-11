# WebGIS with Leaflet

**Student:** Megan Larson

**Course:** GIST 604B – Open Source GIS

**Module:** Module 6 - WebGIS & Full-Stack Orchestration 

**University of Arizona**

## Project Description
This project involved building a live, interactive web map from scratch using web technologies. I created a map of the parks in the city of Nampa that allows users to view park boundaries, find amenities, and trace pathway routes directly in a web browser using open-source tools.

## Tools and Technologies
- Leaflet (JavaScript Mapping Library)
- HTML5 & CSS3 (Web Structure and Styling)
- JavaScript (Map Logic and Interaction)
- GeoJSON (Spatial Data Format)
- GitHub Pages (Web Hosting)
- Visual Studio Code (Development Environment)

## What I Did
- **Built a Web Framework:** Set up a local development environment using VS Code and Node.js to write and test web code in real-time.
- **Prepared Spatial Data:** Processed and converted Nampa city data into the GeoJSON format, ensuring all points (amenities), lines (pathways), and polygons (park outlines) were in the correct map projection (WGS84).
- **Developed Map Logic:** Used JavaScript and the Leaflet library to initialize the map, add a background "basemap," and include essential navigation tools like a scale bar and zoom buttons.
- **Created Interactive Elements:** Programmed custom popups that appear when a user clicks on an amenity, displaying specific information from the dataset’s attributes.
- **Published a Live Site:** Used Git to push my code to GitHub and enabled GitHub Pages to host my map online, making it accessible to anyone via a public URL.

## How to View / Run
- **Live Website:** Visit the project (https://meganlarson42.github.io/gist604b-webgis-leaflet-sp26/) to interact with the live map.
- **Explore Data:** Look in the data/ folder to see the GeoJSON files for Nampa's parks, amenities, and pathways.

## Repository Structure
    .
    ├── data/
    │   ├── your_point_layer.geojson
    │   ├── your_line_layer.geojson
    │   └── your_polygon_layer.geojson
    ├── js/
    │   └── your_js_file.js
    ├── css/
    │   └── your_css_file.css
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── .gitignore
    └── README.md

## Notes
- Replace the placeholder filenames in `data/`, `js/`, and `css/` with your own files.
- All GeoJSON datasets must be in WGS84 (EPSG:4326) and placed in the `data/` folder.
- Run `npm install` to install dependencies and `npm start` to launch the local development server.
- Open `http://localhost:8080` in your browser to preview your map during development.
- The final web map is published using GitHub Pages.
