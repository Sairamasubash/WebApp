// Import the Axios library, which is used for making HTTP requests.
import axios from 'axios';
// Import the React library to use React components.
import React from 'react';
// Import an image file, 'Marvel.jpg', which will be used in the component.
import logo from './Marvel.jpg';

// Define a React component named 'App' that extends React's Component class.
class App extends React.Component 
{

  // Initialize the component's state with an empty 'details' array.
  state = {details: [], }

  // React lifecycle method that is called immediately after the component is mounted.
  componentDidMount() 
  {
    let data;   // Declare a variable 'data' to hold the response from the API.

    // Make a GET request to the server at 'http://localhost:8000' using Axios.
    axios.get('http://localhost:8000').then(res => {data = res.data; this.setState({details: data});}).catch(err => { })
  }

  render()   // Define the render method, which determines the component's output.
  {
    return (

      <div style={styles.container}>
      {/* Apply the styles defined in the 'styles.container' object to this div. */}

        <img src={logo} alt="Top Image" style={styles.image} />
        {/* Display the imported image with styles defined in 'styles.image'. */}

        <header style={styles.header}>Marvel Avengers Employment</header>
        {/* Display a header with the text "Marvel Avengers Employment" styled with 'styles.header'. */}

        <hr style={styles.hr}></hr>
        {/* Display a horizontal rule (line) with styles defined in 'styles.hr'. */}
        
        {this.state.details.map((output, id) => (
        // Iterate over the 'details' array in the state and render each item.

          <div key={id} style={styles.card}>
          {/* For each item, render a div styled with 'styles.card'. The 'key' attribute is set to the index 'id' to ensure each item is uniquely identified. */}

            <div>

              {/* Display the 'employee' field from the current item in an h2 element styled with 'styles.employee'. */}
              <h2 style={styles.employee}>{output.employee}</h2>

              {/* Display the 'department' field from the current item in an h3 element styled with 'styles.department'. */}
              <h3 style={styles.department}>{output.department}</h3>

            </div>

          </div>

        ))}

      </div>
    )
  }
}

// Define an object 'styles' to hold CSS styles for the component.
const styles = 
{
  container:   // Style the container div that wraps all content.
  {
    fontFamily: 'Arial, sans-serif',

    padding: '20px',

    backgroundColor: 'red',  

    textAlign: 'center',
  },
  image:   // Style the image element.
  {
    maxWidth: '100%',

    height: 'auto',

    marginBottom: '20px',
  },
  header:   // Style the header element.
  {
    fontSize: '24px',

    color: '#fff',  

    marginBottom: '20px',
  },
  hr:   // Style the horizontal rule (line) element.
  {
    border: '1px solid #fff',

    marginBottom: '20px',
  },
  card:   // Style the card element that wraps each 'employee' and 'department' pair.
  {
    backgroundColor: '#fff',

    padding: '15px',

    margin: '10px auto',

    borderRadius: '8px',

    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',

    maxWidth: '400px',
  },
  employee:   // Style the h2 element displaying the employee name.
  {
    fontSize: '20px',

    color: '#333',
  },
  department:   // Style the h3 element displaying the department name.
  {
    fontSize: '16px',

    color: '#555',
  }
}

// Export the App component as the default export from this module.
export default App