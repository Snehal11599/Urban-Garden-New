import React from 'react';
import PlacesAutocomplete from "react-places-autocomplete";
import scriptLoader from 'react-async-script-loader';


 function AutocompleteGoogleMap({isScriptLoaded,isScriptLoadSucceed})
 {
     if(isScriptLoaded && isScriptLoadSucceed){
        return 
            <div>
              
            </div>;

        }
        else{
            return <div> </div>;
        }
 
  
}
export default scriptLoader([`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY=${process.env.REACT_APP_GOOGLE_MAP_API}&libraries=places`])(App);