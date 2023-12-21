We have created a React application that shows the current weather based on your location.

We have created this application using packages like

## -> moment - To fetch the date and day and time related,
## -> OpenweatherAPI - https://openweathermap.org/
## -> semantic UI - UI library 

Please signup in the openweather https://openweathermap.org/ and in the profile, you can find the API key,if not then create a api key

REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
REACT_APP_API_KEY = please paste you API key here
REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'

In this application, we have a done a simple application where we learnt API fetching, rendering API data,
Let's go through everything we have done so far.

#### We Learned about State and Props

State and Props are very powerful features in React. They are used to manage data and control its flow within different components.

In our application, we are managing the state which the state of the application. For example, the name of the city, the temperature, the date, humidity, and all. They vary from user to user, depending on their location.

Props, on the other hand, are used to pass data between components. We are getting the data in our app.js file, but we are reading it in weather.js. Remember, props can only be used to pass data from the parent component to the child component.

### We Used React Hooks

If you have used class components, then you must know about life-cycle methods. If not, they are the methods that are called when our page renders or re-renders. But we can't use life-cycle methods in functional components, as they are specially built for class components.

So, React Hooks is the alternative. We have used two hooks in our application. One is useState, used to manage the state of the application. The other is the useEffect, which loads when the page is rendered or loaded.

#### We Tried Out Semantic UI

Semantic UI is a library for React which has predefined awesome components.

That's all, folks. You can add more features to the app, like a five-day forecast, icons, and more.
