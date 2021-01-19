// alert('bilal ahmad')

// var name = prompt("Enter userName: ")
// if (name === 'bilal') {
//     alert("Name is correct")
// } else {
//     alert('Name is not correct')
// }

// var names = [1,2,3,4,5]
// for (var i=0; i<5; i++){
//     console.log(names)
// }

// var todatDate = new Date()
// console.log(todatDate.getFullYear())
// console.log(todatDate.getHours())
// console.log(todatDate.getTime())

function getCurrentTime () {
    var now = new Date();
    var hours = now.getHours();
    var min = now.getMinutes();
    var time = 'hours are ' + hours + " mintues are " + min;
    console.log(time)
}

getCurrentTime()