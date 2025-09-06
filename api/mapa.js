export default function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        const map = new google.maps.Map(document.getElementById("mapa"), {
          center: pos,
          zoom: 14,
        });

        new google.maps.Marker({
          position: pos,
          map: map,
          title: "Você está aqui!",
        });
      },
      function () {
        alert("Não foi possível obter sua localização.");
      }
    );
  } else {
    alert("Geolocalização não é suportada neste navegador.");
  }
}