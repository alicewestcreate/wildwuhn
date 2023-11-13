// import proj4 from 'proj4';

// export const transformCoordinates = () => {
//     const sourceProjection = 'EPSG:4326'; // WGS 84 (standard lat/lng)
//     const targetProjection = 'EPSG:27700'; // OSGB36 / British National Grid

//     const sourceCoordinates = [51.25084680000001, -0.1363178]; // [lng, lat]




//     // Define the source and target coordinate systems
//     proj4.defs(sourceProjection, '+proj=longlat +datum=WGS84 +no_defs');
//     proj4.defs(targetProjection, '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +units=m +no_defs');

//     // Perform the coordinate transformation
//     const transformedCoordinates = proj4(sourceProjection, targetProjection, sourceCoordinates);

//     console.log(transformedCoordinates);
// };[7438308.763770938, -5552398.59066744]