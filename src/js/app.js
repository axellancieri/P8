const main = document.querySelector('main');
const search = document.querySelector('#directoryUser');

/* FETCH FUNCTIONS */
    fetch(`https://randomuser.me/api/?nat=us,gb&inc=name,location,email,dob,cell,picture,nat&results=12&noinfo`)
        .then(response => response.json())
        .then(data => gettingAPIinfo(data.results))//randomPplArrays.push(data.results))//console.log(data))
        .catch(error => console.log(`Seems an error is happening, ${error}`))
    

/* HELPER FUNCTIONS */
function gettingAPIinfo(data) {
    generateData(data)
    gettingNames(data)
    searchBar(data)
}

function gettingNames(data) {
    return data.map(array => `${array.name.first} ${array.name.last}`);; 
}

/** Not sure about this one below */

// function checkStatus(response) {
//     if(response.ok) {
//       return Promise.resolve(response);
//     } else {
//       return Promise.reject(new Error(response.statusText));
//     }
//   }
const randomPplArrays = [];
//kake.map(array => `${array.name.first} ${array.name.last}`);
//.reduce((acc, curr) => [...acc, ...curr], []);
function generateData(data) {
    data.map(result => {
        const employeeDiv = document.createElement('Div'); 
        employeeDiv.classList.add('card');       
            employeeDiv.innerHTML = `
                <img src="${result.picture.medium}" class="img-style">
                <div>
                <p class="name-fs">${result.name.first} ${result.name.last}</p>
                <p class="ppl-details-fs">${result.email}</p>
                <p class="ppl-details-fs">${result.location.city}</p>
                </div>`;
            main.appendChild(employeeDiv);
            employeeDiv.addEventListener('click', () => modalStepsIn(result))           
        })
}

function modalStepsIn(result) {
    const modalWrapper = document.createElement('Div');
        modalWrapper.classList.add('modal');
    setTimeout( () => {
        modalWrapper.classList.add('show-modal');
    }, 5)
    modalWrapper.innerHTML = `
    <div class="modal-content">
        <span class="close-button">x</span>
        <img src="${result.picture.large}" class="img-style-modal">
        <p class="name-fs-modal">${result.name.first} ${result.name.last}</p>
        <p class="ppl-details-fs-modal">${result.email}</p>
        <p class="ppl-details-fs-modal">${result.location.city}</p>
        <span class="dist-bar"></span>
        <p class="ppl-details-fs-modal">${result.cell}</p>
        <p class="ppl-details-fs-modal">${result.location.street.number} ${result.location.street.name}, ${result.location.state} ${result.location.postcode}</p>
        <p class="ppl-details-fs-modal">Birthday: ${result.dob.date.slice(0,10)}</p>
    </div>
    `;
    main.appendChild(modalWrapper);    
    modalWrapper.addEventListener('click', () => {
        modalWrapper.remove();
    })

    /*keyboard listener for modal swapper */
    // window.addEventListener('keydown', (event) => {
    //     const keyName = event.key;
    //     const checkVisib = getComputedStyle(modalWrapper).getPropertyValue('visibility');
    //     if (keyName === 'ArrowRight' | keyName === 'ArrowUp' && checkVisib === 'visible' )
    //     console.log('forwd')//up n right
    //     else if(keyName === 'ArrowLeft' | keyName === 'ArrowDown' && checkVisib === 'visible' ) {
    //         console.log('back')//left and down
    //     }
        
    // })
    
}

/* FILTER */
function searchBar(data) {
    const names = gettingNames(data);
    const realNames = document.querySelectorAll('.card');
    // search.value = search.value.toUpperCase();
    search.addEventListener('keyup', () => {
        names.map(name => {
            if (name.toUpperCase().includes(search.value.toUpperCase())) {
                realNames[names.indexOf(name)].style.display = 'flex';
            } else {
                realNames[names.indexOf(name)].style.display = 'none';
            }
        }
    )})
}


