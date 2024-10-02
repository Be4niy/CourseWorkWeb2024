         
                const map = L.map('map').setView([51.505, -0.09], 13);
        
                
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);
        
                
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function(position) {
                        const lat = position.coords.latitude;
                        const lng = position.coords.longitude;
                        const userLocation = [lat, lng];
        
                      
                        map.setView(userLocation, 15);
        
                       
                        L.marker(userLocation).addTo(map)
                            .bindPopup('Вы здесь!')
                            .openPopup();
                    }, function() {
                        console.error("Не удалось получить местоположение.");
                    });
                } else {
                    console.error("Ваш браузер не поддерживает геолокацию.");
                }
         