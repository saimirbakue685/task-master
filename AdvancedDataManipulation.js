/*
File Name: AdvancedDataManipulation.js

This code performs advanced data manipulation using various JavaScript concepts such as high-order functions, recursion, async-await, etc. It demonstrates fetching data from an API, manipulating and filtering the data, and outputting the result.

*/

// Import the required modules
const fetch = require('node-fetch');

// Async function to fetch data from API
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

// Function to filter data
function filterData(data) {
  const filteredData = data.filter((item) => item.level > 50 && item.status === 'active');
  return filteredData;
}

// Function to transform data
function transformData(data) {
  const transformedData = data.map((item) => {
    const { name, score } = item;
    return {
      name: name.toUpperCase(),
      score: score * 2,
    };
  });
  return transformedData;
}

// Recursive function to process data
function processData(data, currentIndex = 0) {
  if (currentIndex >= data.length) {
    return Promise.resolve([]);
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = processData(data, currentIndex + 1)
        .then((result) => {
          const currentItem = data[currentIndex];
          result.push({ ...currentItem, processed: true });
          return result;
        })
        .catch((error) => {
          console.error('Error processing data:', error);
        });

      resolve(processedData);
    }, 100);
  });
}

// Main async function to execute the code
async function main() {
  try {
    // Fetch data
    const fetchedData = await fetchData();
  
    // Filter data
    const filteredData = filterData(fetchedData);

    // Transform data
    const transformedData = transformData(filteredData);

    // Process data recursively
    const processedData = await processData(transformedData);

    console.log('Processed Data:', processedData);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Execute the main function
main();