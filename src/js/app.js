const main = document.querySelector('main');

/* FETCH FUNCTIONS */

fetch('https://randomuser.me/api/?inc=name,location,email,dob,cell,picture&results=12&noinfo')
    .then(response => response.json())
    .then(data => generateData(data));


/* HELPER FUNCTIONS */

function generateData (data) {
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
        main.appendChild(employeeDiv);
    });
}




/* THIS CODE BELOW ELIMINATES ISSUES WITH SAMCOOKIES
More info on the following link:
https://support.cookiehub.com/article/84-cookie-security-and-the-samesite-attribute?gclid=CjwKCAjw2OiaBhBSEiwAh2ZSP4lOaJf4kMYk_TnG1dvw92MaCdBP5O9yM75MNM87QBa4H2iPm4pDbBoCfNsQAvD_BwE */
// var cpm = {};
// (function(h,u,b){
// var d=h.getElementsByTagName("script")[0],e=h.createElement("script");
// e.async=true;e.src='https://cookiehub.net/c2/xxxxxxxx.js';
// e.onload=function(){u.cookiehub.load(b);}
// d.parentNode.insertBefore(e,d);
// })(document,window,cpm);