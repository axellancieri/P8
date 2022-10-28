const main = document.querySelector('main');


/* FETCH FUNCTIONS */
    fetch('https://randomuser.me/api/?inc=name,location,email,dob,cell,picture&results=12&noinfo')
    .then(response => response.json())
    .then(data => generateData(data))
    // .then(data => modalStepsIn(data))



/* HELPER FUNCTIONS */

function generateData(data) {
    data.results.map(result => {
        const employeeDiv = document.createElement('Div'); 
        employeeDiv.classList.add('card');       
            employeeDiv.innerHTML = `
                <img src="${result.picture.medium}" class="img-style">
                <div>
                <p class="name-fs">${result.name.first} ${result.name.last}</p>
                <p class="ppl-details-fs">${result.email}</p>
                <p class="ppl-details-fs">${result.location.city}</p>
                </div>`;
                //NEW MODAL ATTEMPT V2
                employeeDiv.addEventListener('click', () => {
                    const modalWrapper = document.createElement('Div');
                    modalWrapper.classList.add('modal');
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
                }); //console.log(result.cell)
        main.appendChild(employeeDiv);
    });
    // const allCards = main.getElementsByClassName('card');
    return data
}

/* MODAL ATTEMPT V1*/

function modalStepsIn(data) {
    const modalWrapper = document.createElement('Div');
    modalWrapper.classList.add('modal');
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
}




 
