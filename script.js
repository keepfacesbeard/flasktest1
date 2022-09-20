
const header = document.getElementById('topheader');
const sectionTitle = document.getElementById('sectiontitle');
console.log(header);
let headerHeight = header.offsetHeight - 1;
console.log(headerHeight)
sectionTitle.style.top = headerHeight +'px';


console.log(headerHeight);




// //email stuff

// const serviceID = "homepage-gmail";
// const templateParams = {
//     fromName: '',
//     fromEmail: '',
//     fromPhone: '',
//     message: '',
// };

// emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
//     .then(function(response) {
//        console.log('SUCCESS!', response.status, response.text);
//     }, function(error) {
//        console.log('FAILED...', error);
//     });
