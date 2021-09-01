/*const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=c6c264b809c170f3d2e991a1888e5615&query=37.8267,-122.4233&units=f'
request({url:url, json: true}, (error,response,body)=>{
  if(error){
    console.log('Unable to connect weather site')
  } else if(response.body.error){
    console.log('Unable to find location')
  }else{

    console.log(response.body.current.weather_descriptions[0] + " .It is currently " + response.body.current.temperature + " but it feels like " + response.body.current.feelslike )
  }

    })

  //const request = require('request')
 const address ='https://api.mapbox.com/geocoding/v5/mapbox.places/India.json?access_token=pk.eyJ1IjoicHJpeWFzaHJpcmFtIiwiYSI6ImNrc25yZzJ3ZDNrbGMybnJvbmZoamJ2NnQifQ.tEzJ7-1vDZuVZFaqOvCB4A'
  request({ url:address, json: true},(error,response)=>{
   
      console.log("The latitude and longitude of the city is " +response.body.features[0].center)
    
    //console.log("The latitude and longitude of the city is " +response.body.features[0].center)
  }) */
  
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')
const address = process.argv[2]
console.log(process.argv)
if (!address)
{
  console.log("Please provide a location")
}
  else{
    
  
  geocode(address, (error, {latitude, longitude, location})=>{
  if(error){
    return console.log(error)
  }
    forecast(latitude, longitude,(error, forecastdata)=>{
      if (error){
        return console.log(error)
      }
      console.log(location)
     console.log(forecastdata)
    })
  })
}
  