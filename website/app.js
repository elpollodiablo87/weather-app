// Personal API Key for OpenWeatherMap API
const key = 'a055dfbf06ba783119b20ef52f8bf6fb';
// The API link
const api = `api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${key}`;

/* Function to GET Web API Data*/
const gettingData = async () => {
    await fetch('https://api.openweathermap.org/data/2.5/weather?zip=94040&appid=a055dfbf06ba783119b20ef52f8bf6fb').then((res) => {
        return res.json();
    }).then((data => {
        const temperature = data.main.temp;
        console.log(temperature);
    })).catch((err) => {
        console.log('Error: ', err);
    })
}


// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', async () => {
    const zip = document.getElementById('zip').value;
    const userMood = document.getElementById('feelings').value;
    gettingData().then(()=> {
        const post = async (url = '/postData', data = {date: 1999, temperature, userMood}) => {
            await fetch(url, {
                method: 'POST', 
                mode: 'cors', 
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                  'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data)
              })
        }
    }).then(()=> {
        const getFinal = async () => {
            await fetch ('/getData')
        }
    })
   })
    



