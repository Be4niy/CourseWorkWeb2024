
        ymaps.ready(init);

        function init() {
            const map = new ymaps.Map('map', {
                center: [55.76, 37.64], // Москва
                zoom: 10
            });

            // Получение геолокации пользователя
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const userLat = position.coords.latitude;
                        const userLon = position.coords.longitude;

                        // Установка вида карты на местоположение пользователя
                        map.setCenter([userLat, userLon], 13);

                        // Добавление метки на местоположение пользователя
                        const userPlacemark = new ymaps.Placemark([userLat, userLon], {
                            balloonContent: 'Вы здесь!'
                        });

                        map.geoObjects.add(userPlacemark);
                    },
                    () => {
                        alert("Не удалось получить ваше местоположение.");
                    }
                );
            } else {
                alert("Геолокация не поддерживается вашим браузером.");
            }
        }