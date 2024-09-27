const weatherApi = "https://api.weatherapi.com/v1/current.json?key=43596417635745719bd53232242602&aqi=no";
  const set_location = document.getElementById("set_location");
  const btn = document.querySelector(".btn");
  const loadingElement = document.querySelector(".loading");
const contentOutput = document.getElementById("content-output")
  btn.addEventListener("click", function() {
    console.log("hwi")
    const locationValue = set_location.value.trim();

    if (!locationValue) {
      console.error("Mohon masukkan lokasi yang valid.");
      return;
    }

    const apiUrl = `${weatherApi}&q=${encodeURIComponent(locationValue)}`;

    // Tampilkan elemen loading
    loadingElement.style.display = "block";
    contentOutput.innerHTML = "";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        loadingElement.style.display = "none";
        console.log(data)
        const kota = data.location.name;
        const suhuC = data.current.temp_c;
        const provinsi = data.location.region;
        const cuaca = data.current.condition.text;
        const uv = data.current.uv;
        const humidity = data.current.humidity;
        const weatherIconUrl = data.current.condition.icon;
        const angin = data.current.wind_kph;
        const waktu = data.location.localtime;
        
        
        const content = `<div class="content">
  <p class="zona">
    <span><i class="fa-solid fa-location-dot"></i></span>
    <span class="outKota">${kota}</span>, <span class="outProvinsi">${provinsi}</span>
  </p>
    <p class="waktu">${waktu}</p>
  <div class="suhu">${suhuC}°</div>
  <div class="cuaca">
    <p class="keterangan-cuaca">${cuaca}</p>
    <div class="icon-suhu">
      <img id="weatherIcon" src="https:${weatherIconUrl}" alt="Weather Icon" />
    </div>
  </div>
  <div class="content-detail">
    <div class="wind-speed">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 12c0 2.762-2.238 5-5 5s-5-2.238-5-5 2.238-5 5-5 5 2.238 5 5zm-5-7c.34 0 .672.033 1 .08v-2.08h-2v2.08c.328-.047.66-.08 1-.08zm-4.184 1.401l-1.472-1.473-1.415 1.415 1.473 1.473c.402-.537.878-1.013 1.414-1.415zm9.782 1.414l1.473-1.473-1.414-1.414-1.473 1.473c.537.402 1.012.878 1.414 1.414zm-5.598 11.185c-.34 0-.672-.033-1-.08v2.08h2v-2.08c-.328.047-.66.08-1 .08zm4.185-1.402l1.473 1.473 1.415-1.415-1.473-1.472c-.403.536-.879 1.012-1.415 1.414zm-11.185-5.598c0-.34.033-.672.08-1h-2.08v2h2.08c-.047-.328-.08-.66-.08-1zm13.92-1c.047.328.08.66.08 1s-.033.672-.08 1h2.08v-2h-2.08zm-12.519 5.184l-1.473 1.473 1.414 1.414 1.473-1.473c-.536-.402-1.012-.877-1.414-1.414z"/></svg>
      <div class="uv">${uv}</div>
      <p>UV</p>
    </div>
    <div class="wind-speed">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-4.87 7.197-8 11.699-8 16.075 0 4.378 3.579 7.925 8 7.925s8-3.547 8-7.925c0-4.376-3.13-8.878-8-16.075zm.462 20.471c2.56-1.049 4.124-4.889 3.021-8.853 3.798 4.909.754 9.393-3.021 8.853z"/></svg>
      <div class="kelembapan">${humidity}%</div>
      <p>Humidity</p>
    </div>
    <div class="wind-speed">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 20c0-1.656-1.344-3-3-3h-15v2h15c.552 0 1 .448 1 1s-.448 1-1 1c-.403 0-.747-.242-.905-.587l-1.749.956c.499.965 1.494 1.631 2.654 1.631 1.656 0 3-1.344 3-3zm1.014-7.655c.082-.753.712-1.345 1.486-1.345.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-20.5v2h20.5c1.932 0 3.5-1.568 3.5-3.5s-1.568-3.5-3.5-3.5c-1.624 0-2.977 1.116-3.372 2.617l1.886.728zm-11.014-11.345c-2.671 0-4.845 2.093-4.986 4.729-1.713.307-3.014 1.803-3.014 3.604 0 2.024 1.642 3.667 3.667 3.667h8.666c2.025 0 3.667-1.643 3.667-3.667 0-1.801-1.301-3.297-3.014-3.604-.141-2.636-2.315-4.729-4.986-4.729z"/></svg>
      <div class="kecepatan-angin">${angin}km/h</div>
      <p>Wind Velocity</p>
    </div>
  </div>
</div>`

        const body = document.querySelector("body");
        contentOutput.innerHTML = content;


        

        
        // Sembunyikan elemen loading setelah data diterima
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Sembunyikan elemen loading jika terjadi kesalahan
        loadingElement.style.display = "block";
      });
  });