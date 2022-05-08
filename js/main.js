//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/planetary/apod
//key KK0H3tRZsU7y2jitb2Iw0ReIcZGupDgeu7J9xGXY
document.querySelector('button').addEventListener('click', getDate)

function getDate(){
let nasaDate = document.querySelector('input').value

fetch(`https://api.nasa.gov/planetary/apod?api_key=KK0H3tRZsU7y2jitb2Iw0ReIcZGupDgeu7J9xGXY&date=${nasaDate}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('img').src = data.hdurl
      document.querySelector('h3').innerText = data.explanation
      document.querySelector('h2').innerText = data.title
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}