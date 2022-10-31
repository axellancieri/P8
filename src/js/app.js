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
    data.map((result, index) => {
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
            employeeDiv.addEventListener('click', () => modalStepsIn(data, index))         
        })
}
function modalStepsIn(data, index) {   
    const modalWrapper = document.createElement('Div');
    modalWrapper.classList.add('modal');
    setTimeout( () => {
        modalWrapper.classList.add('show-modal');
    }, 5)
    const getcardText = function(data, index) {
        let gotit = `
        <div class="modal-content">
            <span class="close-button">x</span>
            <img src="${data[index].picture.large}" class="img-style-modal">
            <p class="name-fs-modal">${data[index].name.first} ${data[index].name.last}</p>
            <p class="ppl-details-fs-modal">${data[index].email}</p>
            <p class="ppl-details-fs-modal">${data[index].location.city}</p>
            <span class="dist-bar"></span>
            <p class="ppl-details-fs-modal">${data[index].cell}</p>
            <p class="ppl-details-fs-modal">${data[index].location.street.number} ${data[index].location.street.name}, ${data[index].location.state} ${data[index].location.postcode}</p>
            <p class="ppl-details-fs-modal">Birthday: ${data[index].dob.date.slice(0,10)}</p>
        </div>
        `;
        return gotit
    }

    modalWrapper.innerHTML = getcardText(data, index);
main.appendChild(modalWrapper);

    modalWrapper.addEventListener('click', () => {
        modalWrapper.remove();
    })
    window.addEventListener('keydown', (event) => {
    const keyName = event.key;
    const checkVisib = getComputedStyle(modalWrapper).getPropertyValue('visibility');
    if (keyName === 'ArrowRight' | keyName === 'ArrowUp' && checkVisib === 'visible' ) {
        return modalWrapper.innerHTML = getcardText(data, index += 1);
        console.log('1');//console.log('forwd')//up n right
    } else if(keyName === 'ArrowLeft' | keyName === 'ArrowDown' && checkVisib === 'visible' ) {
        return modalWrapper.innerHTML = getcardText(data, index -= 1);
        console.log('back');//left and down
    }
})
}

    /*keyboard listener for modal swapper */ 




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


