const main = document.querySelector('main');
const search = document.querySelector('#directoryUser');

/* FETCH FUNCTIONS */
    fetch(`https://randomuser.me/api/?nat=us,gb&inc=name,location,email,dob,cell,picture,nat&results=12&noinfo`)
        .then(response => response.json())
        .then(data => gettingAPIinfo(data.results))
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

function generateData(data) {
    data.map((result, index) => {
        const employeeDiv = document.createElement('Div'); 
        employeeDiv.classList.add('card');       
            employeeDiv.innerHTML = `
                <img src="${result.picture.large}" class="img-style">
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
        const getDataRight = data[index].dob.date.slice(0, 10).split('-');
                       
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
            <p class="ppl-details-fs-modal">Birthday: ${getDataRight[1]}-${getDataRight[2]}-${getDataRight[0]}</p>
        </div>
            <span class="arrow-right">
                <i class="fa-solid fa-arrow-right"></i>
            </span>
            <span class="arrow-left">
                <i class="fa-solid fa-arrow-left"></i>
            </span>
        `;
        return gotit
    }

    modalWrapper.innerHTML = getcardText(data, index);
main.appendChild(modalWrapper);
    modalWrapper.addEventListener('click', (e) => {
        if (e.target.closest('.arrow-right') && index >= 11) {
            return modalWrapper.innerHTML = getcardText(data, index = 0);            
        } else if(e.target.closest('.arrow-left') && index <= 0) {
            return modalWrapper.innerHTML = getcardText(data, index = 11); 
        } else if (e.target.closest('.arrow-right')) {
            return modalWrapper.innerHTML = getcardText(data, index += 1); 
        } else if (e.target.closest('.arrow-left')) {
            return modalWrapper.innerHTML = getcardText(data, index -= 1); 
        } else if (e.target.closest('.close-button') ) {
            modalWrapper.remove();
        } else if (e.target.closest('.modal-content')) {
            return e.target.style.borderColor = '#7b7bff'; 
        } else if ( e.target.closest('.modal')) {
            modalWrapper.remove();
        }
    })
/*keyboard listener for modal swapper */
    window.addEventListener('keydown', (event) => {
        const keyName = event.key;
        const checkVisib = getComputedStyle(modalWrapper).getPropertyValue('visibility');

        if (keyName === 'ArrowRight' | keyName === 'ArrowUp' && checkVisib === 'visible' && index >= 11 ) {
            return modalWrapper.innerHTML = getcardText(data, index = 0);    
        } else if(keyName === 'ArrowLeft' | keyName === 'ArrowDown' && checkVisib === 'visible' && index <= 0 ) {
            return modalWrapper.innerHTML = getcardText(data, index = 11); 
        } else if (keyName === 'ArrowRight' | keyName === 'ArrowUp' && checkVisib === 'visible' ) {
            return modalWrapper.innerHTML = getcardText(data, index += 1);    
        } else if(keyName === 'ArrowLeft' | keyName === 'ArrowDown' && checkVisib === 'visible' ) {
            return modalWrapper.innerHTML = getcardText(data, index -= 1); 
        }
    })
    // rightArrow.addEventListener('click', (event) => {
        // if(event === rightArrow){
            // console.log('xd')
        // }
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


