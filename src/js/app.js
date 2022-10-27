const main = document.querySelector('main');

/* FETCH FUNCTIONS */

fetch('https://randomuser.me/api/?inc=name,location,email,dob,cell,picture&results=12&noinfo')
    .then(response => response.json())
    .then(data => generateData(data))


/* HELPER FUNCTIONS */

function generateData (data) {
    data.results.map(result => {
        const employeeDiv = document.createElement('Div');        
        main.appendChild(employeeDiv);
            employeeDiv.innerHTML = `
                <div class="card">
                <img src="${result.picture.medium}">
                <p class="bold | name-fs">${result.name.first} ${result.name.last}</p>
                <p class="">${result.email}</p>
                <p class="">${result.location.city}</p>
                </div>`
    })
}

