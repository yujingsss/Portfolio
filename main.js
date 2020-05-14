const allothercovers = Array.from(document.querySelectorAll('.othercover'));
let othercovers = document.querySelectorAll('.othercover');

othercovers.forEach(othercover => {
    let prevW;
    othercover.querySelector('img').addEventListener('mouseover', enlarge);
    function enlarge() {
        prevW = othercover.querySelector('img').style.width;
        othercover.querySelector('img').style.width = "800px";
        // console.log(event.target);
    };
    othercover.querySelector('img').addEventListener('mouseleave', shrink);
    function shrink() {
        console.log('leave');
        othercover.querySelector('img').style.width = prevW;
    }
});

// Array.from(othercovers).forEach(othercover => {
//     othercover.addEventListener('mouseover', (event) => {
//         console.log(event.target);
//         let covernum = allothercovers.findIndex(function (matchcover) {
//             return matchcover === event.target;
//         });
//         if (covernum == 0) {
//             console.log('adfadsfadsf');
//         }
//     });
// });
