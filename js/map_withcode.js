// map.js
// Loads OSM data and displays park amenities, pathways, and park boundaries using Leaflet

// ============================================
// Step 1: Initialize the map
// ============================================

// Create a Leaflet map in the "map" div
// setView([lat, lon], zoom)

const map = L.map('map').setView([43.5788, -116.5598], 12);

// ============================================
// Step 2: Add a basemap
// ============================================

// Tile layer provides the visual background

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


// ============================================
// Step 3: Add/Customize controls
// ============================================

// Move zoom buttons (default = topleft)

map.zoomControl.setPosition('topright');

// Add a scale bar

L.control.scale().addTo(map);

// ============================================
// Step 4: Create layer groups
// ============================================

// Layer groups allow toggling layers on/off

const pointLayer = L.layerGroup().addTo(map);
const polygonLayer = L.layerGroup().addTo(map);
const lineLayer = L.layerGroup().addTo(map);

// UI control to toggle layers

L.control.layers(null, {
  'Park Amenities': pointLayer,
  'Pathways': lineLayer,
  'City of Nampa Parks': polygonLayer
}).addTo(map);


// ============================================
// Step 5: Load point data (Park Amenities)
// ============================================

fetch('data/Namp_Park_Amenities.geojson')
  .then(res => res.json())
  .then(data => {L.geoJSON(data, {

      // Style points as circle markers
      pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
          radius: 6,
          fillColor: '#f53990',
          color: '#ffffff',
          weight: 1,
          fillOpacity: 0.9
        });
      },

      // Add popups
      onEachFeature: function(feature, layer) {
        const name = feature.properties.FTR_TYP || 'Park Amenity';
        layer.bindPopup(`<strong>${name}</strong>`);
      }

    }).addTo(pointLayer);

  })
  .catch(err => console.error('Error loading park amenities:', err));


// ============================================
// Step 6: Load line data (Pathways)
// ============================================

fetch('data/Nampa_Bike_Routes_and_Pathways.geojson')
  .then(res => res.json())
  .then(data => {L.geoJSON(data, {

      // Style lines
      style: function(feature) {
        return {
          color: '#383a39',
          weight: 2
        };
      },
    }).addTo(lineLayer);

  })
  .catch(err => console.error('Error loading pathways:', err));


// ============================================
// Step 7: Load polygon data (Park Boundaries)
// ============================================

fetch('data/Namp_Parks.geojson')
  .then(res => res.json())
  .then(data => {

    // Add polygon and immediately fit to its bounds
    map.fitBounds(
      L.geoJSON(data, {
        style: function() {
          return {
            color: '#7570b3',
            weight: 3,
            fill: false
          };
        }
      })
      .addTo(polygonLayer)
      .getBounds()
    );

  })
  .catch(err => console.error('Error loading park boundaries:', err));