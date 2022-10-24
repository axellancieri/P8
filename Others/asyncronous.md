======================================================
<!-- Iteration methods -->
======================================================

Array iteration methods like map(), filter(), and forEach() accept a callback function that processes each item in the original array. For example, convert each item in the fruits array to uppercase:

const capitalizedFruits = fruits.map( fruit => fruit.toUpperCase() );
Return a new array containing only those items in the sNames array that begin with the letter 'S':

const sNames = names.filter( name => {
  return name.charAt(0) === 'S';
});
Console log each item in the fruits array:

fruits.forEach( fruit => console.log(fruit) );

======================================================
<!-- Continuation-passing style (CPS) -->
======================================================

With callbacks, you can also create a chain of function calls (or a sequence of tasks) where one task runs after another is completed. This is referred to as continuation-passing style (CPS).

For example, each function takes a callback (or continuation function) as its last argument:

function add(x, y, callback) {
  callback(x + y)
}
function subtract(x, y, callback) {
  callback(x - y);
}
function multiply(x, y, callback) {
  callback(x * y);
}
function calculate(x, callback) {
  callback(x);
}

calculate(5, (n) => {
  add(n, 10, (n) => {
    subtract(n, 2, (n) => {
      multiply(n, 5, (n) => {
        console.log(n); // 65
      });
    });
  });
});

======================================================
<!-- Astronauts exercise -->
======================================================

Showing how'll look with only addeventlist on button

    const astrosUrl = 'http://api.open-notify.org/astros.json';
    const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
    const peopleList = document.getElementById('people');
    const btn = document.querySelector('button');

    // Make an AJAX request
    function getJSON(url, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = () => {
        if(xhr.status === 200) {
          let data = JSON.parse(xhr.responseText);
          return callback(data);
        }
      };
      xhr.send();
    }

    // Generate the markup for each profile
    function generateHTML(data) {
      const section = document.createElement('section');
      peopleList.appendChild(section);
      // Check if request returns a 'standard' page from Wiki
      if (data.type === 'standard') {
        section.innerHTML = `
          <img src=${data.thumbnail.source}>
          <h2>${data.title}</h2>
          <p>${data.description}</p>
          <p>${data.extract}</p>
        `;
      } else {
        section.innerHTML = `
          <img src="img/profile.jpg" alt="ocean clouds seen from space">
          <h2>${data.title}</h2>
          <p>Results unavailable for ${data.title}</p>
          ${data.extract_html}
        `;
      }
    }

    btn.addEventListener('click', () => getJSON(astrosUrl));

=====================================================
 Now implementing callback

    const astrosUrl = 'http://api.open-notify.org/astros.json';
    const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
    const peopleList = document.getElementById('people');
    const btn = document.querySelector('button');

    // Make an AJAX request
    function getJSON(url, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = () => {
        if(xhr.status === 200) {
          let data = JSON.parse(xhr.responseText);
          return callback(data);
        }
      };
      xhr.send();
    }

    // Generate the markup for each profile
    function generateHTML(data) {
      const section = document.createElement('section');
      peopleList.appendChild(section);
      // Check if request returns a 'standard' page from Wiki
      if (data.type === 'standard') {
        section.innerHTML = `
          <img src=${data.thumbnail.source}>
          <h2>${data.title}</h2>
          <p>${data.description}</p>
          <p>${data.extract}</p>
        `;
      } else {
        section.innerHTML = `
          <img src="img/profile.jpg" alt="ocean clouds seen from space">
          <h2>${data.title}</h2>
          <p>Results unavailable for ${data.title}</p>
          ${data.extract_html}
        `;
      }
    }

    btn.addEventListener('click', () => {
        getJSON(astrosUrl, (json) => {
          json.people.map
      });
    });

==================

    const astrosUrl = 'http://api.open-notify.org/astros.json';
    const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
    const peopleList = document.getElementById('people');
    const btn = document.querySelector('button');

    // Make an AJAX request
    function getJSON(url, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = () => {
        if(xhr.status === 200) {
          let data = JSON.parse(xhr.responseText);
          return callback(data);
        }
      };
      xhr.send();
    }

  function getProfiles(json) {
              json.people.map( person => {
            getJSON(wikiUrl + person.name, generateHTML);
          });

  }

    // Generate the markup for each profile
    function generateHTML(data) {
      const section = document.createElement('section');
      peopleList.appendChild(section);
      // Check if request returns a 'standard' page from Wiki
      if (data.type === 'standard') {
        section.innerHTML = `
          <img src=${data.thumbnail.source}>
          <h2>${data.title}</h2>
          <p>${data.description}</p>
          <p>${data.extract}</p>
        `;
      } else {
        section.innerHTML = `
          <img src="img/profile.jpg" alt="ocean clouds seen from space">
          <h2>${data.title}</h2>
          <p>Results unavailable for ${data.title}</p>
          ${data.extract_html}
        `;
      }
    }

    btn.addEventListener('click', (event) => {
        getJSON(astrosUrl, getProfiles);
      event.target.remove();
    });

======================================================
<!-- Promises -->
======================================================
Let's quickly review what you've learned so far about promises:

A promise is a regular JavaScript object that changes from a pending state to either a fulfilled or rejected state

You're able to call methods on the Promise object, like then() and catch()

When the status of a promise changes to resolved, the function passed to then() gets called

When the status changes to rejected, the function passed to catch() is invoked

It's best to specify a rejection reason and call catch() on a promise – if you don’t, the promise will silently fail

- 

Creating a promise. Then / Catch

- resolve

const breakfastPromise = new Promise( (resolve, reject) => {
  setTimeout(() => {
     resolve('Your order is ready. COme and get it!')        
  }, 3000);
});

console.log(breakfastPromise);
breakfastPromise.then( val => console.log(val) )

==================

- rejecet

const breakfastPromise = new Promise( (resolve, reject) => {
  setTimeout(() => {
     reject('Oh no! There was a problem with your order.');
  }, 3000);
});

console.log(breakfastPromise);
breakfastPromise.then( val => console.log(val) ).catch( err => console.log(err) )

=================

- showcase on both. btw Error is optional, its easier to debug

const breakfastPromise = new Promise( (resolve, reject) => {
  setTimeout(() => {
     if (order) {
        resolve('Your order is ready. Come and get it!')
  } else {
    reject( Error('Your order cannot be made.'));
  }
  }, 3000);
});

console.log(breakfastPromise);
breakfastPromise
  .then( val => console.log(val) )
  .catch( err => console.log(err) )

======================================================
<!-- Multiple chaiining promises example -->
======================================================

function addFive(n) {
  return n + 5;
}
function double(n) {
  return n * 2;
}
function finalValue(nextValue) {
  console.log(`The final value is ${nextValue}`);
}

const mathPromise = new Promise( (resolve, reject) => {
  setTimeout( () => {
    // resolve promise if 'value' is a number; otherwise, reject it
    if (typeof value === 'number') {
      resolve(value);
    } else {
      reject('You must specify a number as the value.')
    }
  }, 1000);
});

const value = 5;
mathPromise
  .then(addFive)
  .then(double)
  .then(addFive) // called twice
  .then(finalValue)
  .catch( err => console.log(err) )

// The final value is 25

=================================================================================
<!-- Grabbing astronauts exercise code and changing it to promise versino -->
=================================================================================
    const astrosUrl = 'http://api.open-notify.org/astros.json';
    const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
    const peopleList = document.getElementById('people');
    const btn = document.querySelector('button');

    function getJSON(url) {
      return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
        xhr.open('GET', url); 
        xhr.onload = () => {
        if(xhr.status === 200) {
          let data = JSON.parse(xhr.responseText);
          resolve(data);
        } else {
          reject( Error(xhr.statusText) ); 
        }
      };
        xhr.onerror = () => reject( Error('A network error occurred') );
      xhr.send();
      });
    }

    function getProfiles(json) {
      const profiles = json.people.map( person => {
        return getJSON(wikiUrl + person.name);      
      }); 
      return Promise.all(profiles);
    }

    // Generate the markup for each profile
    function generateHTML(data) {
      data.map( person => {
          const section = document.createElement('section');
          peopleList.appendChild(section);
          // Check if request returns a 'standard' page from Wiki
          if (person.type === 'standard') {
            section.innerHTML = `
              <img src=${person.thumbnail.source}>
              <h2>${person.title}</h2>
              <p>${person.description}</p>
              <p>${person.extract}</p>
            `;
          } else {
            section.innerHTML = `
              <img src="img/profile.jpg" alt="ocean clouds seen from space">
              <h2>${data.title}</h2>
              <p>Results unavailable for ${data.title}</p>
              ${data.extract_html}
            `;
            }
          });
        }

    btn.addEventListener('click', (event) => {
      getJSON(astrosUrl)
        .then(getProfiles)
        .then( generateHTML )
        .catch( err => console.log(err) )
      event.target.remove();
    });

======================================================
<!-- Using finally() -->
======================================================

btn.addEventListener('click', (event) => {
  event.target.textContent = "Loading...";
  
  getJSON(astrosUrl)
    .then(getProfiles)
    .then( generateHTML )
    .catch( err => {
      peopleList.innerHTML = '<h3>Something went wrong</h3>';
      console.log(err);
    })
    .finally( () => event.target.remove());

======================================================
<!-- Using Fetching with astronauts code -->
======================================================

const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');


- delted the getJson since fetch does that for us 

function getProfiles(json) {
  const profiles = json.people.map( person => {
    const craft = person.craft;
    return fetch(wikiUrl + person.name)
      .then( response => response.json() )
      .then(profile => {
        return {...profile, craft}
      })
      .catch( err => console.log('Error Fetching Wiki:'), err )    
  }); 
  return Promise.all(profiles);
}

// Generate the markup for each profile
function generateHTML(data) {
  data.map( person => {
      const section = document.createElement('section');
      peopleList.appendChild(section);
      // Check if request returns a 'standard' page from Wiki
      if (person.type === 'standard') {
        section.innerHTML = `
          <img src=${person.thumbnail.source}>
          <span>${person.craft}</span>
          <h2>${person.title}</h2>
          <p>${person.description}</p>
          <p>${person.extract}</p>
        `;
      } else {
        section.innerHTML = `
          <img src="img/profile.jpg" alt="ocean clouds seen from space">
          <h2>${data.title}</h2>
          <p>Results unavailable for ${data.title}</p>
          ${data.extract_html}
        `;
        }
      });
    }

btn.addEventListener('click', (event) => {
  event.target.textContent = "Loading...";
  
  fetch(astrosUrl)
    .then( response => response.json() )
    .then(getProfiles)
    .then( generateHTML )
    .catch( err => {
      peopleList.innerHTML = '<h3>Something went wrong</h3>';
      console.log(err);
    })
    .finally( () => event.target.remove());
});

======================================================
<!-- Converting Promise code to await/async -->
======================================================

const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

// Handle all fetch requests
async function getPeopleInSpace(url) {
  const peopleResponse = await fetch(url);
  const peopleJSON = await peopleResponse.json();
  
  const profiles = peopleJSON.people.map( async (person) => {
                                          const craft = person.craft;
    const profileResponse = await fetch(wikiUrl + person.name);
    const profileJSON = await profileResponse.json();
  
    return {...profileJSON, craft};
  });

  return Promise.all(profiles);
}

// Generate the markup for each profile
function generateHTML(data) {
  data.map( person => {
    const section = document.createElement('section');
    peopleList.appendChild(section);
    // Check if request returns a 'standard' page from Wiki
    if (person.type === 'standard') {
      section.innerHTML = `
        <img src=${person.thumbnail.source}>
        <span>${person.craft}</span>
        <h2>${person.title}</h2>
        <p>${person.description}</p>
        <p>${person.extract}</p>
      `;
    } else {
      section.innerHTML = `
        <img src="img/profile.jpg" alt="ocean clouds seen from space">
        <h2>${person.title}</h2>
        <p>Results unavailable for ${person.title}</p>
        ${person.extract_html}
      `;
    }
  });
}

btn.addEventListener('click', async (event) => {
  event.target.textContent = "Loading...";

  const astros = await getPeopleInSpace(astrosUrl);
  generateHTML(astros);
  event.target.remove();
});

======================================================
<!-- Mxing promise with async/await syntax -->
======================================================

const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

// Handle all fetch requests
async function getJSON(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw error;
    }
}

async function getPeopleInSpace(url) {
  const peopleJSON = await getJSON(url);
    
  const profiles = peopleJSON.people.map( async (person) => {
                                          const craft = person.craft;
    const profileJSON = await getJSON(wikiUrl + person.name)
  
    return {...profileJSON, craft};
  });

  return Promise.all(profiles);
}

// Generate the markup for each profile
function generateHTML(data) {
  data.map( person => {
    const section = document.createElement('section');
    peopleList.appendChild(section);
    // Check if request returns a 'standard' page from Wiki
    if (person.type === 'standard') {
      section.innerHTML = `
        <img src=${person.thumbnail.source}>
        <span>${person.craft}</span>
        <h2>${person.title}</h2>
        <p>${person.description}</p>
        <p>${person.extract}</p>
      `;
    } else {
      section.innerHTML = `
        <img src="img/profile.jpg" alt="ocean clouds seen from space">
        <h2>${person.title}</h2>
        <p>Results unavailable for ${person.title}</p>
        ${person.extract_html}
      `;
    }
  });
}

btn.addEventListener('click', (event) => {
  event.target.textContent = "Loading...";

  getPeopleInSpace(astrosUrl)
    .then(generateHTML)
  .catch( e => {
    peopleList.innerHeight = '<h3>Something went wrong!</h3>';
    console.error(e);
  })
    .finally( () => event.target.remove())
});

also the event listener can be done as 

btn.addEventListener('click', async (event) => {
  event.target.textContent = 'Loading...';
  try {
    const astros = await getPeopleInSpace(astrosUrl);
    generateHTML(astros);
  } catch(e) {
    peopleList.innerHTML = '<h3>Something went wrong!</h3>';
    console.error(e);    
  } finally {
    event.target.remove();
  }
});

======================================================
<!-- Simple Fetch example -->
======================================================

    const select = document.getElementById('breeds');
    const card = document.querySelector('.card'); 
    const form = document.querySelector('form');

    // ------------------------------------------
    //  FETCH FUNCTIONS
    // ------------------------------------------

    fetch('https://dog.ceo/api/breeds/list')
      .then(response => response.json())
      .then(data => generateOptions(data.message))

    fetch('https://dog.ceo/api/breeds/image/random')
      .then( response => response.json())
      .then(data => generateImage(data.message));

    // ------------------------------------------
    //  HELPER FUNCTIONS
    // ------------------------------------------

    function generateOptions(data) {
      const options = data.map(item => `
        <option value='${item}'>${item}</option>
      `).join('');
      select.innerHTML = options;
    }

    function generateImage(data) {
      const html = `
      <img src='${data}' alt>
      <p>Click to view images of ${select.value}s</p>
      `;
      card.innerHTML = html;
    }

- now refactoring and giving some action with eventListeners


      function generateOptions(data) {
        const options = data.map(item => `
          <option value='${item}'>${item}</option>
        `).join('');
        select.innerHTML = options;
      }

      function generateImage(data) {
        const html = `
        <img src='${data}' alt>
        <p>Click to view images of ${select.value}s</p>
        `;
        card.innerHTML = html;
      }

      function fetchBreedImage() {
        const breed = select.value;
        const img = card.querySelector('img');
        const p = card.querySelector('p');
        
        fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
          .then(data => {
            img.src = data.message;
            img.alt = breed;
            p.textContent = `Click to view more${breed}s`;
          })
      }

      // ------------------------------------------
      //  EVENT LISTENERS
      // ------------------------------------------
      select.addEventListener('change', fetchBreedImage);
      card.addEventListener('click', fetchBreedImage);

- adding error handling

const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

function fetchData(url) {
  return fetch(url)
          .then(res => console.log(res))
          .then(res => res.json())
          .catch(error => console.log('Looks like there was a problem', error))
          
}

fetchData('https://dog.ceo/api/breeds/list')
  .then(data => generateOptions(data.message))

fetchData('https://dog.ceo/api/breeds/image/random')
  .then(data => generateImage(data.message));


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function checkStatus(response) {
  if(response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function generateOptions(data) {
  const options = data.map(item => `
    <option value='${item}'>${item}</option>
  `).join('');
  select.innerHTML = options;
}

function generateImage(data) {
  const html = `
  <img src='${data}' alt>
  <p>Click to view images of ${select.value}s</p>
  `;
  card.innerHTML = html;
}

function fetchBreedImage() {
  const breed = select.value;
  const img = card.querySelector('img');
  const p = card.querySelector('p');
  
  fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(data => {
      img.src = data.message;
      img.alt = breed;
      p.textContent = `Click to view more${breed}s`;
    })
}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------
select.addEventListener('change', fetchBreedImage);
card.addEventListener('click', fetchBreedImage);

- multiple requests with promise.all

const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

function fetchData(url) {
  return fetch(url)
          .then(checkStatus)
          .then(res => res.json())
          .catch(error => console.log('Looks like there was a problem!', error))
}

Promise.all([
fetchData('https://dog.ceo/api/breeds/list'),
fetchData('https://dog.ceo/api/breeds/image/random')
])
.then(data => {
  const breedList = data[0].message;
  const randomImage = data[1].message;
  
  generateOptions(breedList);
  generateImage(randomImage);
})


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function checkStatus(response) {
  if(response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function generateOptions(data) {
  const options = data.map(item => `
    <option value='${item}'>${item}</option>
  `).join('');
  select.innerHTML = options;
}

function generateImage(data) {
  const html = `
  <img src='${data}' alt>
  <p>Click to view images of ${select.value}s</p>
  `;
  card.innerHTML = html;
}

function fetchBreedImage() {
  const breed = select.value;
  const img = card.querySelector('img');
  const p = card.querySelector('p');
  
  fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(data => {
      img.src = data.message;
      img.alt = breed;
      p.textContent = `Click to view more${breed}s`;
    })
}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------
select.addEventListener('change', fetchBreedImage);
card.addEventListener('click', fetchBreedImage);

- adding post 

// ------------------------------------------
//  POST DATA
// ------------------------------------------

function postData(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name, comment: comment }) // when key and value are the same you can just do ({name, comment}) aswell
  })
    .then(checkStatus)
    .then(res => res.json())
    .then(data => console.log(data)
  
  fetch('https://jsonplaceholder.typicode.com/comments')
}

