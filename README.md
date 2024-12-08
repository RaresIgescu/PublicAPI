# **Weather App - AirVisual API Based (Community Version)**  

## **Overview**  
This project is a web application that uses the public AirVisual API to provide real-time data about weather, air quality, and supported locations. The project is ideal for exploring public API functionality, API key authentication, and integrating JSON data into a modern web application.  

The application allows users to:  
- List the countries supported by the API.  
- Display states in a specified country.  
- Retrieve cities supported in a specific state and country.  
- View detailed weather and pollution data for a specific city.  

## **Technologies Used**  
- **Backend**: Node.js, Express.js  
- **Frontend**: EJS for templating, HTML, CSS, Bootstrap for responsive design.  
- **HTTP Client**: Axios for API requests.  

## **Key Features**  
1. **API Integration**:  
   The application utilizes the AirVisual API with API key authentication to fetch and process complex data about locations and weather/air conditions.  

2. **Interactive Forms**:  
   Users can input the desired country, state, or city to get personalized information.  

3. **Dynamic Data Display**:  
   The data is displayed in a readable format using JSON formatting directly on the web interface.  

## **How to Use**  
1. **Local Setup**  
   - Clone this repository:  
     ```bash
     git clone https://github.com/username/Weather-App.git
     cd Weather-App
     ```  
   - Install dependencies:  
     ```bash
     npm install
     ```  
   - Configure the API key in the `.env` file:  
     ```env
     API_KEY=your_api_key
     ```  
   - Start the server:  
     ```bash
     npm start
     ```  

2. **Navigate the Application**  
   Open the app in your browser at `http://localhost:3000` and use the interface to explore the available locations and data.

## **Future Plans**  
- Add advanced filtering functionality for locations.  
- Implement a feature for graphical visualization of weather and air quality data.  
