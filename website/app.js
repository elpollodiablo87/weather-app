// Personal API Key for OpenWeatherMap API
const key = 'a055dfbf06ba783119b20ef52f8bf6fb';
// The API link
const api = `api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${key}`;

//Date function
const date = new Date();


/* Function to GET Web API Data*/
const gettingData = async (zip) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=a055dfbf06ba783119b20ef52f8bf6fb`);
    const result = await response.json();
    console.log(result.main.temp);
    return result.main.temp;
}

// post function

const postData = async (url = '', data = {}) => {
    const res = await fetch(url,  {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
   })
}

//get function

const getData = async () => {
    const data = await fetch('/getData');
    const jsonData = await data.json();
    console.log(jsonData);
    return jsonData;
}

//UI update function

const updateUI = (data) => {
    document.getElementById('date').innerText = date;
    document.getElementById('temp').innerText = data.temperature;
    document.getElementById('content').innerText = data.userMood;
}

// Event listener 
document.getElementById('generate').addEventListener('click', async () => {
    const zip = document.getElementById('zip').value;
    const userMood = document.getElementById('feelings').value;
    gettingData(zip).then((result)=> {
        postData('/postData', {temperature: result, userMood, date})
    }).then(() => {
        return getData()
    }).then((data) => {
        updateUI(data)
    }).catch((err) => {
        console.log('Error: ', err);
    })
})
    



