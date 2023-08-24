// import React from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
// //import { GoogleMapsAPI } from 'goo'; // Importing the API loader

// const MapContainer = (props) => {
//   const mapStyles = {
//     width: '100%',
//     height: '100%'
//   };

//   return (
//     <Map
//       google={props.google}
//       style={{ width: '300px', height: '200px' }} // Adjust the dimensions here
//       initialCenter={{ lat: 40.854885, lng: -88.081807 }}
//     />
//   );
// };

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyBUaR_YiIhtE0F6q83QGcKyjDOXZE-ov1E',
//   //LoadingContainer: GoogleMapsAPI.LoaderContainer // Adding the loader container
// })(MapContainer);




import React from 'react'
import { AspectRatio,Box,iframe } from '@chakra-ui/react'
const MapContainer = () => {
  return (
    <Box w={'30%'}>
      <AspectRatio ratio={4 / 3}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30765714.04675797!2d61.007166285890456!3d19.73048371434984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1692799054438!5m2!1sen!2sin" 
        width="60" 
        height="150"  
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
          
        </iframe>
      </AspectRatio>
    </Box>
  )
}

export default MapContainer
