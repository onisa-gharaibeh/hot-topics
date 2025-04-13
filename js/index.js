// GET THE REFERENCES
const container = document.querySelector('.content');

const links = document.querySelectorAll('nav ul li a');

let url = 'partials/home.html';

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
const loadContent = function (urlFeed) {

   /*
   IMPORTANT NOTES:
   loadContent RUNS EVERY TIME A LINK IS CLICKED.
   loadContent REQUIRES THE INPUT. THIS INPUT IS
   THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK.
   EVERY TIME A LINK IS CLICKED, urlFeed WILL GET 
   THE UPDATED PATH TO THE REQUESTED CONTENT.
   */
   // RUN THE fetch(urlFeed).then().then().catch()
   fetch(urlFeed)
      .then(function (rsp) {
         if (rsp.ok) {
            return rsp.text();
         } else {
            throw new Error(rsp.statusText);
         }
      })
      .then(function (dataStr) {
         container.innerHTML = dataStr;
      })
      .catch(function (err) {
         console.log(err.message);
      })
   // CLOSE YOUR FUNCTION loadContent HERE
}

// CALL loadContent WITH THE CURRENT VALUE OF url 
loadContent(url);


// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
const selectContent = function (e) {
   // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
   e.preventDefault();

   // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
   url = e.target.href;

   // CALL THE FUNCTION loadContent PROVIDING THE href
   // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
   // OF loadContent FUNCTION.
   loadContent(url);

   // CLOSE YOUR FUNCTION selectContent HERE
}


// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
for (let link of links) {
   link.addEventListener('click', selectContent);
}