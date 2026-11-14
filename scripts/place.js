const temperature = 8;
const windSpeed = 15;

const calculateWindChill = (temp, speed) => 13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16;

const isWindChillViable = temperature <= 10 && windSpeed > 4.8;

document.querySelector('#wind-chill').textContent = isWindChillViable
    ? `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`
    : 'N/A';

document.querySelector('#currentyear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;
