const main = document.querySelector('main');


/* FETCH FUNCTIONS */
    fetch('https://randomuser.me/api/?inc=name,location,email,dob,cell,picture&results=12&noinfo')
        .then(response => response.json())
        .then(data => requestingAPIinfo(data.results))
        .catch(error => console.log(`Seems an error is happening, ${error}`))


    function requestingAPIinfo(data) {
        generateData(data);
    }


/* HELPER FUNCTIONS */


/** Not sure about this one below */

// function checkStatus(response) {
//     if(response.ok) {
//       return Promise.resolve(response);
//     } else {
//       return Promise.reject(new Error(response.statusText));
//     }
//   }

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
        <span class="close-button"></span>
        <img src="${result.picture.medium}" class="img-style">
        <p class="name-fs">${result.name.first} ${result.name.last}</p>
        <p class="ppl-details-fs">${result.email}</p>
        <p class="ppl-details-fs">${result.location.city}</p>
    </div>
    `;
    main.appendChild(modalWrapper);    
    modalWrapper.addEventListener('click', () => {
        modalWrapper.remove();
    })
}




 
