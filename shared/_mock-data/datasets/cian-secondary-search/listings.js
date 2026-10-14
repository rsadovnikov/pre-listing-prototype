/* Собрано tools/collect-search.mjs. Руками не править. Имена людей сокращены по AGENTS.md. */
var MOCK_DATASET = {
 "collectedAt": "2026-10-06T21:38:38.192Z",
 "source": "https://www.cian.ru/kupit-kvartiru-vtorichka/",
 "totalOffers": 38087,
 "listings": [
  {
   "source": "https://www.cian.ru/sale/flat/334623607/",
   "seenAt": "2026-10-06T21:38:39.985Z",
   "offer": {
    "category": "flatSale",
    "status": "published",
    "dealType": "sale",
    "offerType": "flat",
    "geo": {
     "address": [
      {
       "fullName": "Москва",
       "id": 1,
       "locationTypeId": 1,
       "name": "Москва",
       "shortName": "Москва",
       "type": "location",
       "url": "https://www.cian.ru/kupit-3-komnatnuyu-kvartiru/"
      },
      {
       "fullName": "СЗАО",
       "id": 1,
       "locationTypeId": -1,
       "name": "СЗАО",
       "shortName": "СЗАО",
       "type": "okrug",
       "url": "https://www.cian.ru/kupit-3-komnatnuyu-kvartiru-moskva-szao-041/"
      },
      {
       "fullName": "район Покровское-Стрешнево",
       "id": 127,
       "locationTypeId": -1,
       "name": "Покровское-Стрешнево",
       "shortName": "р-н Покровское-Стрешнево",
       "type": "raion",
       "url": "https://www.cian.ru/kupit-3-komnatnuyu-kvartiru-moskva-pokrovskoe-streshnevo-04127/"
      },
      {
       "fullName": "Волоколамское шоссе",
       "id": 821,
       "locationTypeId": -1,
       "name": "Волоколамское",
       "shortName": "Волоколамское ш.",
       "type": "street",
       "url": "https://www.cian.ru/kupit-3-komnatnuyu-kvartiru-moskva-volokolamskoe-shosse-02821/"
      },
      {
       "fullName": "81/2с3",
       "id": 11434418,
       "locationTypeId": -1,
       "name": "81/2с3",
       "shortName": "81/2с3",
       "type": "house",
       "url": "https://www.cian.ru/cat.php?deal_type=sale&engine_version=2&house%5B0%5D=11434418&offer_type=flat&room3=1"
      }
     ],
     "coordinates": {
      "lat": 55.825689,
      "lng": 37.413215
     },
     "highways": [],
     "jk": {
      "id": 890268,
      "name": "Апартаментный комплекс Левел Стрешнево",
      "house": {
       "id": 2038201,
       "name": "Волоколамское, 81/2с3 (Север)"
      },
      "gaGeo": {
       "moId": 0,
       "oblId": 1,
       "cityId": 1
      },
      "fullUrl": "https://www.cian.ru/zhiloy-kompleks-apartamentnyy-kompleks-level-streshnevo-moskva-890268/",
      "fullUrlTemplate": "{request_scheme}://zhk-apartamentnyy-kompleks-level-streshnevo-i.{host}/",
      "webSiteUrl": "https://level.ru/projects/streshnevo/?utm_source=cian_kartochka_zhk&utm_medium=LS"
     },
     "railways": [
      {
       "id": 769,
       "directionIds": [
        18
       ],
       "distance": "1.0",
       "time": 20,
       "name": "Трикотажная",
       "travelType": "byFoot"
      },
      {
       "id": 769,
       "directionIds": [
        18
       ],
       "distance": "2.0",
       "time": 4,
       "name": "Трикотажная",
       "travelType": "byCar"
      },
      {
       "id": 755,
       "directionIds": [
        18
       ],
       "distance": "2.0",
       "time": 25,
       "name": "Тушино",
       "travelType": "byFoot"
      },
      {
       "id": 739,
       "directionIds": [
        18
       ],
       "distance": "4.0",
       "time": 57,
       "name": "Покровское-Стрешнево",
       "travelType": "byFoot"
      },
      {
       "id": 755,
       "directionIds": [
        18
       ],
       "distance": "6.0",
       "time": 11,
       "name": "Тушино",
       "travelType": "byCar"
      },
      {
       "id": 739,
       "directionIds": [
        18
       ],
       "distance": "6.0",
       "time": 8,
       "name": "Покровское-Стрешнево",
       "travelType": "byCar"
      }
     ],
     "undergrounds": [
      {
       "id": 275,
       "name": "Спартак",
       "lineColor": "94007C",
       "travelType": "transport",
       "travelTime": 6,
       "url": "https://www.cian.ru/kupit-3-komnatnuyu-kvartiru-moskva-metro-spartak-275/",
       "underConstruction": false
      },
      {
       "id": 133,
       "name": "Тушинская",
       "lineColor": "94007C",
       "travelType": "walk",
       "travelTime": 21,
       "url": "https://www.cian.ru/kupit-3-komnatnuyu-kvartiru-moskva-metro-tushinskaya-133/",
       "underConstruction": false
      },
      {
       "id": 421,
       "name": "Трикотажная",
       "lineColor": "BD748F",
       "travelType": "walk",
       "travelTime": 21,
       "url": "https://www.cian.ru/kupit-3-komnatnuyu-kvartiru-moskva-metro-trikotazhnaya-421/",
       "underConstruction": false,
       "lineType": "mcd2"
      }
     ]
    },
    "id": 334623607,
    "objectGuid": "a10cfdba-0084-4cac-bb5a-8f2ed8dc24be",
    "cianId": 334623607,
    "userId": 144584377,
    "publishedUserId": 144584377,
    "cianUserId": 144584377,
    "isByHomeowner": true,
    "title": "ЖК Бизнес класса на берегу 2х рек",
    "description": "эксклюзивная квартира ( статус апартамента прописка разрешена ) В данный момент прописан один взрослый собственник . До сделки выпишется .  Низкая налоговая ставка 0,5 %  16 тыс.руб в год \n\n\nТаких предложений на рынке с такой ценой встретить очень сложно . Срочная продажа в связи с покупкой нового объекта недвижимости . Продажа ведется под конкретный вариант . Имеется ещё машиноместо прямо под нашей башней рядом с лифтом . \n\n\n\nуникальные 3-комнатные апартаменты в башне -Север- ЖК Level Стрешнево.\n\nПанорамный вид на воду из любого окна, от которого захватывает дух.\nЗдесь не нужно ничего делать.\nЗдесь нужно просто жить, наслаждаясь каждым квадратным метром.\nВ этот интерьер вложено более 25 000 000 рублей.\nВы покупаете готовый музей современного комфорта.\nПочему этот объект иключение из ПРАВИЛ:\n1. Архитектура и Дизайн (шаблонов НЕТ).\nДизайн в единственном экземпляре.\nСвет:\n• Редкие люстры Feiss (США) и французский винтаж.\n• Свет здесь выставлен как в дорогом ресторане.\nФормы:\n• Карнизы из гипса созданы вручную под сложные радиусные стены.\n• Арочные двери в гостиной - это арт-объект стоимостью 800 тыс. руб.\nТактильность:\n• Натуральный дубовый паркет французская ёлочка.\n• Шторы пошиты индивидуально.\n• Мебель из массива дуба на заказ.\n\n2. Техническое Совершенство (Инженерия люкс-класса)\nКухня МЕЧТА: \n- Столешница Vicostone (кварц) с благородным фацетом. \n- Полная комплектация техникой Miele.\n- Водопроводная вода питьевая благодаря обратному осмосу. \n- Измельчитель Omoikiri.\n\nВанные комнаты: \n- Натуральный мрамор. \n- Сантехника Villeroy & Boch и Burlington. \n- Фурнитура Fede из цельной латуни — тяжелая, надежная, вечная.\n\nКлимат-контроль: \n- Канальная система Haier. Вы сами задаете температуру в каждой комнате. Никаких шумных блоков на стенах.\nТепло: \n- Тёплые полы везде, где есть плитка (даже на балконе!). \n- Дизайнерские радиаторы Tubog идеально вписаны в архитектуру окон.\n\n3. Безопасность и Приватность\nSmart-доступ: \n- Вход только по отпечатку пальца. Никаких ключей.\n- Видеонаблюдение с доступом со смартфона. Вы всегда знаете, что происходит у вашей двери.",
    "photos": [
     {
      "id": 2979797207,
      "isDefault": true,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797207-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797207-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797207-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797207-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2980164523,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980164523-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980164523-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980164523-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980164523-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2980163886,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980163886-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980163886-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980163886-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980163886-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979773176,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773176-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773176-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773176-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773176-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979772679,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772679-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772679-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772679-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772679-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979772693,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772693-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772693-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772693-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772693-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979797457,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797457-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797457-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797457-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797457-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979772632,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772632-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772632-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772632-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772632-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979772637,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772637-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772637-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772637-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772637-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979772723,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772723-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772723-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772723-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772723-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979772742,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772742-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772742-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772742-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772742-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979772772,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772772-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772772-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772772-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772772-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979772665,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772665-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772665-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772665-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772665-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979772822,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772822-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772822-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772822-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772822-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979772768,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772768-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772768-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772768-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772768-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979772743,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772743-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772743-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772743-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772743-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979772755,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772755-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772755-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772755-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772755-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979772777,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772777-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772777-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772777-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772777-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979773566,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773566-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773566-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773566-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773566-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979772836,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772836-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772836-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772836-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772836-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979797956,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797956-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797956-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797956-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797956-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979797315,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797315-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797315-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797315-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797315-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979797163,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797163-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797163-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797163-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797163-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979797365,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797365-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797365-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797365-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797365-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2980171641,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980171641-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980171641-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980171641-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980171641-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979798486,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798486-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798486-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798486-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798486-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979796903,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979796903-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979796903-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979796903-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979796903-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979798277,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798277-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798277-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798277-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798277-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979797696,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797696-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797696-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797696-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797696-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2980167629,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980167629-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980167629-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980167629-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980167629-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2980167630,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980167630-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980167630-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980167630-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980167630-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2980167650,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980167650-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980167650-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980167650-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980167650-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979798362,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798362-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798362-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798362-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798362-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979796895,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979796895-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979796895-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979796895-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979796895-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979798007,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798007-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798007-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798007-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798007-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979772994,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772994-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772994-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772994-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772994-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979772938,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772938-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772938-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772938-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772938-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979773047,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773047-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773047-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773047-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773047-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979797220,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797220-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797220-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797220-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797220-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979772954,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772954-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772954-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772954-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772954-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979772925,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772925-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772925-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772925-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772925-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979773120,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773120-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773120-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773120-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773120-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979773060,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773060-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773060-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773060-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773060-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979773137,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773137-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773137-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773137-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773137-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979773296,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773296-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773296-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773296-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773296-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979797208,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797208-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797208-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797208-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797208-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2980244644,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980244644-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980244644-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980244644-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980244644-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979773232,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773232-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773232-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773232-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773232-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979773151,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773151-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773151-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773151-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773151-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2979773235,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773235-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773235-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773235-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773235-3.jpg",
      "isCianLayout": false
     }
    ],
    "phones": [
     {
      "countryCode": "+7",
      "number": "9163928266"
     }
    ],
    "publishTerms": {
     "terms": [
      {
       "services": [
        "auction"
       ],
       "days": 1,
       "type": "dailyLimited"
      },
      {
       "services": [
        "free"
       ],
       "days": 30,
       "type": "periodical",
       "tariffIdentificator": {
        "tariffId": 500002,
        "tariffGridType": "packageTariff"
       }
      }
     ],
     "autoprolong": true
    },
    "flatType": "rooms",
    "roomType": "separate",
    "isApartments": true,
    "totalArea": "82.5",
    "livingArea": "50.0",
    "kitchenArea": "30.0",
    "loggiasCount": 0,
    "balconiesCount": 1,
    "separateWcsCount": 0,
    "combinedWcsCount": 1,
    "repairType": "design",
    "hasFurniture": true,
    "flags": {
     "isArchived": false,
     "isCommercialOwnershipVerified": false
    },
    "hasLift": true,
    "specialty": {
     "types": [],
     "additionalTypes": []
    },
    "isNeedHideExactAddress": false,
    "areaParts": [],
    "roomsCount": 3,
    "floorNumber": 8,
    "bargainTerms": {
     "price": 51000000,
     "priceType": "all",
     "currency": "rur",
     "mortgageAllowed": true,
     "saleType": "alternative",
     "includedOptions": [],
     "prices": {
      "rur": 51000000,
      "usd": 600489,
      "eur": 534957
     },
     "tags": []
    },
    "building": {
     "floorsCount": 25,
     "parking": {
      "type": "underground"
     },
     "hasGarbageChute": false,
     "ceilingHeight": "3.1",
     "totalArea": "82.5",
     "liftTypes": [],
     "cranageTypes": [],
     "passengerLiftsCount": 3,
     "cargoLiftsCount": 1
    },
    "editDate": "2026-10-06T22:41:06.720000Z",
    "humanizedEditDate": "вчера, 22:41",
    "hasRamp": false,
    "isInCpd": false,
    "isInHiddenBase": false,
    "isObjectHidden": false,
    "isClosedVisibility": false,
    "videos": [
     {
      "id": "866f19fa-d698-4659-8d96-bed373afdefa",
      "url": "https://kinescope.io/embed/hAQ2hKb5jTRkqn6FiGoeHd",
      "type": "kinescope",
      "previewUrl": "https://kinescopecdn.net/f9f281e3-5528-474a-b760-2c5cecf2ce98/posters/cf2941ed-0552-4ea1-b6b1-ef455b777d97/md/01a1111a-35e5-779c-b0cd-298c86af7823.jpg"
     }
    ],
    "priceTotal": 51000000,
    "priceTotalRur": 51000000,
    "exportLinks": {
     "pdfUrl": "/export/pdf/sale/flat/334623607/",
     "docxUrl": "/export/docx/sale/flat/334623607/"
    },
    "passengerLiftsCount": 3,
    "cargoLiftsCount": 1,
    "added": "вчера, 22:41",
    "valueAddedServices": {
     "isStandard": false,
     "isTop3": true,
     "isPremium": false
    },
    "promotion": {
     "isPerformanceVasPilot": false,
     "promotionDescription": "Топ + 5 320 ₽",
     "isCpcAuction": false
    },
    "categoriesIds": [
     1,
     100,
     110,
     111
    ],
    "publicationDate": 1791288439,
    "creationDate": "2026-10-06T15:07:19.43",
    "recoveryLink": "/razmestit-obyavlenie/334623607/",
    "isFromBuilder": false,
    "isFromSeller": false,
    "isFromLeadFactory": false,
    "trackingData": {
     "moId": 0,
     "oblId": 1,
     "cityId": 1,
     "fbRegion": "Москва",
     "fbCity": "Москва"
    },
    "editPhoto": "/realty/add2.aspx?id=334623607",
    "newEdit": "/razmestit-obyavlenie/?realty_id=334623607",
    "certificate": "https://www.cian.ru/newobjects/cian/certification/get?announcementId=334623607",
    "edit": "/realty/add1.aspx?id=334623607",
    "similarOffersLink": "",
    "similarOffersCount": 0,
    "buildersIds": [
     11623
    ],
    "builderId": 11623,
    "isImported": false,
    "userConfirmedFix": false,
    "newbuilding": {
     "id": 890268,
     "name": "Апартаментный комплекс Левел Стрешнево",
     "house": {
      "isReliable": false,
      "isFinished": true,
      "finishDate": {
       "quarter": 4,
       "year": 2022
      },
      "id": 2038201,
      "name": "Волоколамское, 81/2с3 (Север)"
     },
     "isFromDeveloper": false,
     "isFromBuilder": false,
     "isFromSeller": false,
     "isFromLeadFactory": false,
     "showJkReliableFlag": false,
     "isFichering": false,
     "isFicheringPlus": false,
     "isPremium": false,
     "newbuildingFeatures": {
      "imagesCount": 17,
      "firstImageUrl": "https://images.cdn-cian.ru/images/apartamentnyy-kompleks-level-streshnevo-moskva-jk-2415001582-6.jpg",
      "videosCount": 0,
      "deadlineInfo": "Сдан"
     },
     "isReliable": false,
     "isTariffPremium": false
    },
    "timezone": 3,
    "isEnabledCallTracking": true,
    "callTrackingProvider": "mts",
    "rosreestrCheck": {
     "status": "success"
    },
    "isRentByParts": false,
    "homeownerProofs": [
     "passport"
    ],
    "isDuplicate": false,
    "userTrust": "new",
    "userTrustLevel": "new",
    "showWarningMessage": false,
    "moderationInfo": {
     "showContactWarningMessage": false
    },
    "isUnique": false,
    "isUniqueCheckDate": "2026-10-06",
    "isCianPartner": false,
    "isIllegalConstruction": false,
    "isSoldFurnished": true,
    "amenities": [
     "noThresholdAtEntrance",
     "noThresholdAtEntranceToFlat",
     "spaciousElevator",
     "wideEntranceDoor",
     "extraWideBathroomAndToiletDoors",
     "extraWideRoomsAndKitchenDoors"
    ],
    "externalOfferUrl": "",
    "cianLayouts": null,
    "demolishedInMoscowProgramm": false
   },
   "features": [
    {
     "title": "О квартире",
     "id": "aboutFlat",
     "features": [
      {
       "value": "Вторичка / Апартаменты",
       "label": "Тип жилья"
      },
      {
       "value": "82,5 м²",
       "label": "Общая площадь"
      },
      {
       "value": "50 м²",
       "label": "Жилая площадь"
      },
      {
       "value": "30 м²",
       "label": "Площадь кухни"
      },
      {
       "value": "3,1 м",
       "label": "Высота потолков"
      },
      {
       "value": "1 совмещенный",
       "label": "Санузел"
      },
      {
       "value": "1 балкон",
       "label": "Балкон/лоджия"
      },
      {
       "value": "Дизайнерский",
       "label": "Ремонт"
      },
      {
       "value": "Не было",
       "label": "Перепланировка"
      },
      {
       "value": "Да",
       "label": "Продаётся с мебелью"
      }
     ]
    },
    {
     "title": "О доме",
     "id": "aboutBuilding",
     "features": [
      {
       "value": "3 пассажирских, 1 грузовой",
       "label": "Количество лифтов"
      },
      {
       "value": "Есть консьерж",
       "label": "О подъезде"
      },
      {
       "value": "Шлагбаум",
       "label": "Придомовая территория"
      },
      {
       "value": "Подземная",
       "label": "Парковка"
      }
     ]
    },
    {
     "title": "Юридические особенности",
     "id": "legal",
     "features": [
      {
       "value": "Нет",
       "label": "Несовершеннолетние собственники"
      },
      {
       "value": "Не использовался",
       "label": "Материнский капитал при покупке"
      }
     ]
    }
   ],
   "factoids": [
    {
     "title": "Общая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/size.svg",
     "value": "82,5 м²"
    },
    {
     "title": "Жилая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/plan.svg",
     "value": "50 м²"
    },
    {
     "title": "Площадь кухни",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/kitchen.svg",
     "value": "30 м²"
    },
    {
     "title": "Этаж",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/floor.svg",
     "value": "8 из 25"
    }
   ],
   "priceChanges": [
    {
     "changeTime": "2026-10-06T18:52:26.076643Z",
     "priceData": {
      "currency": "rur",
      "price": 51000000
     }
    },
    {
     "changeTime": "2026-10-06T12:07:21.875876Z",
     "priceData": {
      "currency": "rur",
      "price": 50000000
     }
    }
   ],
   "bti": null,
   "stats": {
    "totalViewsFormattedString": "196 просмотров, 196 за сегодня"
   },
   "priceInfo": {
    "pricePerSquareValue": 618181
   },
   "serp": {
    "id": 334623607,
    "title": "ЖК Бизнес класса на берегу 2х рек",
    "description": "эксклюзивная квартира ( статус апартамента прописка разрешена ) В данный момент прописан один взрослый собственник . До сделки выпишется .  Низкая налоговая ставка 0,5 %  16 тыс.руб в год \n\n\nТаких предложений на рынке с такой ценой встретить очень сложно . Срочная продажа в связи с покупкой нового объекта недвижимости . Продажа ведется под конкретный вариант . Имеется ещё машиноместо прямо под нашей башней рядом с лифтом . \n\n\n\nуникальные 3-комнатные апартаменты в башне -Север- ЖК Level Стрешнево.\n\nПанорамный вид на воду из любого окна, от которого захватывает дух.\nЗдесь не нужно ничего делать.\nЗдесь нужно просто жить, наслаждаясь каждым квадратным метром.\nВ этот интерьер вложено более 25 000 000 рублей.\nВы покупаете готовый музей современного комфорта.\nПочему этот объект иключение из ПРАВИЛ:\n1. Архитектура и Дизайн (шаблонов НЕТ).\nДизайн в единственном экземпляре.\nСвет:\n• Редкие люстры Feiss (США) и французский винтаж.\n• Свет здесь выставлен как в дорогом ресторане.\nФормы:\n• Карнизы из гипса созданы вручную под сложные радиусные стены.\n• Арочные двери в гостиной - это арт-объект стоимостью 800 тыс. руб.\nТактильность:\n• Натуральный дубовый паркет французская ёлочка.\n• Шторы пошиты индивидуально.\n• Мебель из массива дуба на заказ.\n\n2. Техническое Совершенство (Инженерия люкс-класса)\nКухня МЕЧТА: \n- Столешница Vicostone (кварц) с благородным фацетом. \n- Полная комплектация техникой Miele.\n- Водопроводная вода питьевая благодаря обратному осмосу. \n- Измельчитель Omoikiri.\n\nВанные комнаты: \n- Натуральный мрамор. \n- Сантехника Villeroy & Boch и Burlington. \n- Фурнитура Fede из цельной латуни — тяжелая, надежная, вечная.\n\nКлимат-контроль: \n- Канальная система Haier. Вы сами задаете температуру в каждой комнате. Никаких шумных блоков на стенах.\nТепло: \n- Тёплые полы везде, где есть плитка (даже на балконе!). \n- Дизайнерские радиаторы Tubog идеально вписаны в архитектуру окон.\n\n3. Безопасность и Приватность\nSmart-доступ: \n- Вход только по отпечатку пальца. Никаких ключей.\n- Видеонаблюдение с доступом со смартфона. Вы всегда знаете, что происходит у вашей двери. Купить квартиру вторичка в Москве.",
    "formattedFullPrice": "51 000 000 ₽",
    "formattedFullInfo": "3-комн. апарт.  ·  82,5 м²  ·  8/25 этаж",
    "formattedAdditionalInfo": "Альтернативная продажа, возможна ипотека",
    "humanizedTimedelta": "вчера",
    "geo": {
     "highways": [],
     "buildingAddress": null,
     "jk": {
      "webSiteUrl": "https://level.ru/projects/streshnevo/?utm_source=cian_kartochka_zhk&utm_medium=LS",
      "webSiteUrlUtm": "https://level.ru/projects/streshnevo/?utm_source=cian_kartochka_zhk&utm_medium=LS",
      "gaGeo": {
       "oblId": 1,
       "cityId": 1,
       "moId": 0
      },
      "id": 890268,
      "name": "Апартаментный комплекс Левел Стрешнево",
      "house": {
       "id": 2038201,
       "name": "Волоколамское, 81/2с3 (Север)"
      },
      "displayName": "ЖК «Апартаментный комплекс Левел Стрешнево»",
      "developer": null,
      "fullUrl": "https://zhk-apartamentnyy-kompleks-level-streshnevo-i.cian.ru/"
     },
     "coordinates": {
      "lat": 55.825689,
      "lng": 37.413215
     },
     "districts": [
      {
       "locationId": 1,
       "parentId": 1,
       "fullName": "р-н Покровское-Стрешнево",
       "id": 127,
       "name": "Покровское-Стрешнево",
       "title": "р-н Покровское-Стрешнево",
       "geoType": "district",
       "type": "raion",
       "qs": "deal_type=sale&district%5B0%5D=127&engine_version=2&object_type%5B0%5D=1&offer_type=flat"
      },
      {
       "locationId": 1,
       "parentId": null,
       "fullName": "СЗАО",
       "id": 1,
       "name": "СЗАО",
       "title": "СЗАО",
       "geoType": "district",
       "type": "okrug",
       "qs": "deal_type=sale&district%5B0%5D=1&engine_version=2&object_type%5B0%5D=1&offer_type=flat"
      }
     ],
     "railways": [
      {
       "distance": 1,
       "time": 20,
       "id": 769,
       "name": "Трикотажная",
       "geoType": "railway",
       "directionIds": [
        18
       ],
       "travelType": "byFoot",
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&railway%5B0%5D=769"
      },
      {
       "distance": 6,
       "time": 8,
       "id": 739,
       "name": "Покровское-Стрешнево",
       "geoType": "railway",
       "directionIds": [
        18
       ],
       "travelType": "byCar",
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&railway%5B0%5D=739"
      },
      {
       "distance": 6,
       "time": 11,
       "id": 755,
       "name": "Тушино",
       "geoType": "railway",
       "directionIds": [
        18
       ],
       "travelType": "byCar",
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&railway%5B0%5D=755"
      }
     ],
     "userInput": "Россия, Москва, Волоколамское шоссе, 81/2с3",
     "countryId": 138,
     "undergrounds": [
      {
       "lineColor": "94007C",
       "time": 6,
       "releaseYear": null,
       "cianId": null,
       "lineId": 11,
       "transportType": "transport",
       "isDefault": true,
       "id": 275,
       "name": "Спартак",
       "underConstruction": false,
       "qs": "deal_type=sale&engine_version=2&metro%5B0%5D=275&object_type%5B0%5D=1&offer_type=flat",
       "lineType": null
      },
      {
       "lineColor": "BD748F",
       "time": 4,
       "releaseYear": null,
       "cianId": null,
       "lineId": 32,
       "transportType": "transport",
       "isDefault": false,
       "id": 421,
       "name": "Трикотажная",
       "underConstruction": false,
       "qs": "deal_type=sale&engine_version=2&metro%5B0%5D=421&object_type%5B0%5D=1&offer_type=flat",
       "lineType": "mcd2"
      },
      {
       "lineColor": "94007C",
       "time": 5,
       "releaseYear": null,
       "cianId": null,
       "lineId": 11,
       "transportType": "transport",
       "isDefault": false,
       "id": 133,
       "name": "Тушинская",
       "underConstruction": false,
       "qs": "deal_type=sale&engine_version=2&metro%5B0%5D=133&object_type%5B0%5D=1&offer_type=flat",
       "lineType": null
      }
     ],
     "address": [
      {
       "isFormingAddress": true,
       "fullName": "Москва",
       "shortName": "Москва",
       "id": 1,
       "name": "Москва",
       "locationTypeId": 1,
       "title": "Москва",
       "geoType": "location",
       "type": "location",
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&region=1"
      },
      {
       "isFormingAddress": null,
       "fullName": "СЗАО",
       "shortName": "СЗАО",
       "id": 1,
       "name": "СЗАО",
       "locationTypeId": null,
       "title": "СЗАО",
       "geoType": "district",
       "type": "okrug",
       "qs": "deal_type=sale&district%5B0%5D=1&engine_version=2&object_type%5B0%5D=1&offer_type=flat"
      },
      {
       "isFormingAddress": null,
       "fullName": "р-н Покровское-Стрешнево",
       "shortName": "р-н Покровское-Стрешнево",
       "id": 127,
       "name": "Покровское-Стрешнево",
       "locationTypeId": null,
       "title": "р-н Покровское-Стрешнево",
       "geoType": "district",
       "type": "raion",
       "qs": "deal_type=sale&district%5B0%5D=127&engine_version=2&object_type%5B0%5D=1&offer_type=flat"
      },
      {
       "isFormingAddress": null,
       "fullName": "м. Трикотажная",
       "shortName": "м. Трикотажная",
       "id": 421,
       "name": "Трикотажная",
       "locationTypeId": null,
       "title": "м. Трикотажная",
       "geoType": "underground",
       "type": "metro",
       "qs": "deal_type=sale&engine_version=2&metro%5B0%5D=421&object_type%5B0%5D=1&offer_type=flat"
      },
      {
       "isFormingAddress": true,
       "fullName": "Волоколамское шоссе",
       "shortName": "Волоколамское ш.",
       "id": 821,
       "name": "Волоколамское",
       "locationTypeId": null,
       "title": "Волоколамское шоссе",
       "geoType": "street",
       "type": "street",
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&street%5B0%5D=821"
      },
      {
       "isFormingAddress": true,
       "fullName": "81/2с3",
       "shortName": "81/2с3",
       "id": 11434418,
       "name": "81/2с3",
       "locationTypeId": null,
       "title": "81/2с3",
       "geoType": "house",
       "type": "house",
       "qs": "deal_type=sale&engine_version=2&house%5B0%5D=11434418&object_type%5B0%5D=1&offer_type=flat"
      }
     ],
     "sortedGeoIds": [
      {
       "type": "underground",
       "id": 275
      },
      {
       "type": "underground",
       "id": 421
      },
      {
       "type": "underground",
       "id": 133
      },
      {
       "type": "railway",
       "id": 769
      },
      {
       "type": "railway",
       "id": 739
      },
      {
       "type": "railway",
       "id": 755
      },
      {
       "type": "district",
       "id": 127
      },
      {
       "type": "district",
       "id": 1
      }
     ]
    },
    "isApartments": true,
    "isByHomeowner": true,
    "isUnique": false,
    "isSoldFurnished": true,
    "isRosreestrChecked": true,
    "offerFeatureLabels": [],
    "offerFeatureLabelsV2": [],
    "photos": [
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797207-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797207-4.jpg",
      "isDefault": true,
      "id": 2979797207,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797207-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797207-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980164523-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980164523-4.jpg",
      "isDefault": false,
      "id": 2980164523,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980164523-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980164523-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980163886-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980163886-4.jpg",
      "isDefault": false,
      "id": 2980163886,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980163886-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980163886-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773176-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773176-4.jpg",
      "isDefault": false,
      "id": 2979773176,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773176-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773176-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772679-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772679-4.jpg",
      "isDefault": false,
      "id": 2979772679,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772679-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772679-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772693-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772693-4.jpg",
      "isDefault": false,
      "id": 2979772693,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772693-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772693-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797457-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797457-4.jpg",
      "isDefault": false,
      "id": 2979797457,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797457-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797457-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772632-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772632-4.jpg",
      "isDefault": false,
      "id": 2979772632,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772632-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772632-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772637-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772637-4.jpg",
      "isDefault": false,
      "id": 2979772637,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772637-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772637-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772723-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772723-4.jpg",
      "isDefault": false,
      "id": 2979772723,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772723-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772723-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772742-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772742-4.jpg",
      "isDefault": false,
      "id": 2979772742,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772742-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772742-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772772-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772772-4.jpg",
      "isDefault": false,
      "id": 2979772772,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772772-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772772-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772665-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772665-4.jpg",
      "isDefault": false,
      "id": 2979772665,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772665-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772665-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772822-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772822-4.jpg",
      "isDefault": false,
      "id": 2979772822,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772822-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772822-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772768-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772768-4.jpg",
      "isDefault": false,
      "id": 2979772768,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772768-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772768-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772743-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772743-4.jpg",
      "isDefault": false,
      "id": 2979772743,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772743-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772743-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772755-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772755-4.jpg",
      "isDefault": false,
      "id": 2979772755,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772755-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772755-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772777-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772777-4.jpg",
      "isDefault": false,
      "id": 2979772777,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772777-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772777-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773566-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773566-4.jpg",
      "isDefault": false,
      "id": 2979773566,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773566-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773566-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772836-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772836-4.jpg",
      "isDefault": false,
      "id": 2979772836,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772836-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772836-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797956-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797956-4.jpg",
      "isDefault": false,
      "id": 2979797956,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797956-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797956-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797315-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797315-4.jpg",
      "isDefault": false,
      "id": 2979797315,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797315-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797315-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797163-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797163-4.jpg",
      "isDefault": false,
      "id": 2979797163,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797163-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797163-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797365-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797365-4.jpg",
      "isDefault": false,
      "id": 2979797365,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797365-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797365-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980171641-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980171641-4.jpg",
      "isDefault": false,
      "id": 2980171641,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980171641-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980171641-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798486-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798486-4.jpg",
      "isDefault": false,
      "id": 2979798486,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798486-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798486-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979796903-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979796903-4.jpg",
      "isDefault": false,
      "id": 2979796903,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979796903-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979796903-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798277-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798277-4.jpg",
      "isDefault": false,
      "id": 2979798277,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798277-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798277-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797696-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797696-4.jpg",
      "isDefault": false,
      "id": 2979797696,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797696-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797696-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980167629-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980167629-4.jpg",
      "isDefault": false,
      "id": 2980167629,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980167629-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980167629-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980167630-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980167630-4.jpg",
      "isDefault": false,
      "id": 2980167630,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980167630-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980167630-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980167650-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980167650-4.jpg",
      "isDefault": false,
      "id": 2980167650,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980167650-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980167650-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798362-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798362-4.jpg",
      "isDefault": false,
      "id": 2979798362,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798362-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798362-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979796895-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979796895-4.jpg",
      "isDefault": false,
      "id": 2979796895,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979796895-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979796895-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798007-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798007-4.jpg",
      "isDefault": false,
      "id": 2979798007,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798007-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979798007-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772994-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772994-4.jpg",
      "isDefault": false,
      "id": 2979772994,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772994-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772994-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772938-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772938-4.jpg",
      "isDefault": false,
      "id": 2979772938,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772938-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772938-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773047-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773047-4.jpg",
      "isDefault": false,
      "id": 2979773047,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773047-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773047-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797220-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797220-4.jpg",
      "isDefault": false,
      "id": 2979797220,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797220-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797220-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772954-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772954-4.jpg",
      "isDefault": false,
      "id": 2979772954,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772954-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772954-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772925-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772925-4.jpg",
      "isDefault": false,
      "id": 2979772925,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772925-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979772925-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773120-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773120-4.jpg",
      "isDefault": false,
      "id": 2979773120,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773120-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773120-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773060-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773060-4.jpg",
      "isDefault": false,
      "id": 2979773060,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773060-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773060-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773137-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773137-4.jpg",
      "isDefault": false,
      "id": 2979773137,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773137-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773137-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773296-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773296-4.jpg",
      "isDefault": false,
      "id": 2979773296,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773296-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773296-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797208-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797208-4.jpg",
      "isDefault": false,
      "id": 2979797208,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797208-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979797208-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980244644-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980244644-4.jpg",
      "isDefault": false,
      "id": 2980244644,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980244644-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2980244644-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773232-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773232-4.jpg",
      "isDefault": false,
      "id": 2979773232,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773232-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773232-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773151-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773151-4.jpg",
      "isDefault": false,
      "id": 2979773151,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773151-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773151-1.jpg"
     },
     {
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773235-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773235-4.jpg",
      "isDefault": false,
      "id": 2979773235,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773235-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-volokolamskoe-shosse-2979773235-1.jpg"
     }
    ],
    "photoFeatureIcons": [
     {
      "type": "hasVideo",
      "text": "Объявление с видео",
      "link": "https://www.cian.ru/sale/flat/334623607/"
     }
    ],
    "promotion": {
     "isPerformanceVasPilot": false,
     "promotionDescription": "Топ + 5 320 ₽"
    },
    "bargainTerms": {
     "priceType": "all",
     "leaseType": null,
     "price": 51000000,
     "priceRur": 51000000,
     "currency": "rur",
     "paymentPeriod": null,
     "priceForWorkplace": null,
     "vatPrice": null,
     "saleType": "alternative",
     "agentBonus": null,
     "bargainAllowed": null,
     "clientFee": null,
     "tax": null,
     "mortgageAllowed": true,
     "deposit": null,
     "leaseTermType": null,
     "tags": [],
     "utilitiesTerms": null,
     "vatType": null,
     "agentFee": null
    },
    "roomsCount": 3,
    "floorNumber": 8,
    "totalArea": "82.5",
    "building": {
     "buildYear": null,
     "accessType": null,
     "heatingType": null,
     "classType": null,
     "deadline": null,
     "floorsCount": 25,
     "passengerLiftsCount": 3,
     "parking": {
      "locationType": null,
      "isAvailable": null,
      "placesCount": null,
      "isFree": null,
      "priceMonthly": null,
      "type": "underground",
      "priceEntry": null,
      "currency": null,
      "purposeType": null
     },
     "materialType": null,
     "type": null,
     "cargoLiftsCount": 1
    },
    "fullUrl": "https://www.cian.ru/sale/flat/334623607/",
    "phones": [
     {
      "number": "9163928266",
      "countryCode": "7"
     }
    ],
    "user": {
     "cianUserId": "144584377",
     "isAgent": false,
     "agentModerationInfo": {
      "isUserIdentified": true,
      "isUserIdentifiedByDocuments": true,
      "showUserIdentifiedByDocuments": true
     },
     "isChatsEnabled": true
    }
   },
   "files": [
    {
     "id": 2979797207,
     "isDefault": true,
     "full": "334623607-1.jpg",
     "mini": "334623607-1m.jpg"
    },
    {
     "id": 2980164523,
     "isDefault": false,
     "full": "334623607-2.jpg",
     "mini": "334623607-2m.jpg"
    },
    {
     "id": 2980163886,
     "isDefault": false,
     "full": "334623607-3.jpg",
     "mini": "334623607-3m.jpg"
    },
    {
     "id": 2979773176,
     "isDefault": false,
     "full": "334623607-4.jpg",
     "mini": "334623607-4m.jpg"
    },
    {
     "id": 2979772679,
     "isDefault": false,
     "full": "334623607-5.jpg",
     "mini": "334623607-5m.jpg"
    }
   ],
   "media": {}
  },
  {
   "source": "https://www.cian.ru/sale/flat/333989474/",
   "seenAt": "2026-10-06T21:38:42.672Z",
   "offer": {
    "category": "flatSale",
    "status": "published",
    "dealType": "sale",
    "offerType": "flat",
    "geo": {
     "address": [
      {
       "fullName": "Москва",
       "id": 1,
       "locationTypeId": 1,
       "name": "Москва",
       "shortName": "Москва",
       "type": "location",
       "url": "https://www.cian.ru/kupit-3-komnatnuyu-kvartiru/"
      },
      {
       "fullName": "ЦАО",
       "id": 4,
       "locationTypeId": -1,
       "name": "ЦАО",
       "shortName": "ЦАО",
       "type": "okrug",
       "url": "https://www.cian.ru/kupit-3-komnatnuyu-kvartiru-moskva-cao-044/"
      },
      {
       "fullName": "район Хамовники",
       "id": 21,
       "locationTypeId": -1,
       "name": "Хамовники",
       "shortName": "р-н Хамовники",
       "type": "raion",
       "url": "https://www.cian.ru/kupit-3-komnatnuyu-kvartiru-moskva-hamovniki-0421/"
      },
      {
       "fullName": "Погодинская улица",
       "id": 1838,
       "locationTypeId": -1,
       "name": "Погодинская",
       "shortName": "Погодинская ул.",
       "type": "street",
       "url": "https://www.cian.ru/kupit-3-komnatnuyu-kvartiru-moskva-pogodinskaya-ulica-021838/"
      },
      {
       "fullName": "2",
       "id": 6342882,
       "locationTypeId": -1,
       "name": "2",
       "shortName": "2",
       "type": "house",
       "url": "https://www.cian.ru/cat.php?deal_type=sale&engine_version=2&house%5B0%5D=6342882&offer_type=flat&room3=1"
      }
     ],
     "coordinates": {
      "lat": 55.735713,
      "lng": 37.572351
     },
     "highways": [],
     "jk": {
      "id": 21369,
      "name": "Жизнь на Плющихе",
      "house": {
       "id": 42221,
       "name": "Погодинская, 2"
      },
      "gaGeo": {
       "moId": 0,
       "oblId": 1,
       "cityId": 1
      },
      "fullUrl": "https://www.cian.ru/zhiloy-kompleks-zhizn-na-plyushcihe-moskva-21369/",
      "fullUrlTemplate": "{request_scheme}://zhk-zhizn-na-plyushcihe-i.{host}/"
     },
     "railways": [
      {
       "id": 693,
       "directionIds": [
        14
       ],
       "distance": "1.0",
       "time": 17,
       "name": "Москва (Киевский вокзал)",
       "travelType": "byFoot"
      },
      {
       "id": 693,
       "directionIds": [
        14
       ],
       "distance": "3.0",
       "time": 4,
       "name": "Москва (Киевский вокзал)",
       "travelType": "byCar"
      },
      {
       "id": 707,
       "directionIds": [
        11
       ],
       "distance": "4.0",
       "time": 55,
       "name": "Тестовская",
       "travelType": "byFoot"
      },
      {
       "id": 690,
       "directionIds": [
        17
       ],
       "distance": "5.0",
       "time": 10,
       "name": "Москва (Павелецкий вокзал)",
       "travelType": "byCar"
      },
      {
       "id": 690,
       "directionIds": [
        17
       ],
       "distance": "5.0",
       "time": 61,
       "name": "Москва (Павелецкий вокзал)",
       "travelType": "byFoot"
      },
      {
       "id": 707,
       "directionIds": [
        11
       ],
       "distance": "6.0",
       "time": 9,
       "name": "Тестовская",
       "travelType": "byCar"
      }
     ],
     "undergrounds": [
      {
       "id": 143,
       "name": "Фрунзенская",
       "lineColor": "CF0000",
       "travelType": "walk",
       "travelTime": 14,
       "url": "https://www.cian.ru/kupit-3-komnatnuyu-kvartiru-moskva-metro-frunzenskaya-143/",
       "underConstruction": false
      },
      {
       "id": 46,
       "name": "Киевская",
       "lineColor": "03238B",
       "travelType": "walk",
       "travelTime": 14,
       "url": "https://www.cian.ru/kupit-3-komnatnuyu-kvartiru-moskva-metro-kievskaya-46/",
       "underConstruction": false
      },
      {
       "id": 86,
       "name": "Парк Культуры",
       "lineColor": "800000",
       "travelType": "walk",
       "travelTime": 20,
       "url": "https://www.cian.ru/kupit-3-komnatnuyu-kvartiru-moskva-metro-park-kultury-86/",
       "underConstruction": false
      }
     ]
    },
    "id": 333989474,
    "objectGuid": "e27bb345-1f3e-4373-844e-91205445e06c",
    "cianId": 333989474,
    "userId": 52290923,
    "publishedUserId": 52290923,
    "cianUserId": 52290923,
    "isByHomeowner": false,
    "title": "Лучшее предложение в ЖК",
    "description": "Предлагается к продаже квартира евро 3 комнатная с двумя просторными спальнями и кухней гостиной.\n\nВид из окон на две стороны . во двор с фонтаном и на тихий 2 тружеников переулок\nВ квартире предусмотрено два санузла и гардеробная комната.\nНачат ремонт:\nВозведены стены , оштукатурены. На стенах  гипсовая лепнина .\nсделана электрика , сантехника.\n\nО КОМПЛЕКСЕ \nЗакрытая территория \nОчень зеленый двор , с фонтаном, детской площадкой и местами отдыха.\n\nДОКУМЕНТЫ\n\n1 взрослый собственник , без ипотек , без мат капиталов.",
    "photos": [
     {
      "id": 2966255453,
      "isDefault": true,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255453-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255453-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255453-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255453-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2966251477,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966251477-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966251477-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966251477-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966251477-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2966253089,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253089-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253089-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253089-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253089-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2966253326,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253326-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253326-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253326-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253326-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2966253608,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253608-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253608-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253608-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253608-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2966253800,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253800-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253800-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253800-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253800-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2966254711,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966254711-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966254711-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966254711-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966254711-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2966254932,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966254932-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966254932-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966254932-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966254932-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2966255032,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255032-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255032-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255032-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255032-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2966255118,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255118-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255118-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255118-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255118-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2966255266,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255266-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255266-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255266-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255266-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2966255554,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255554-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255554-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255554-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255554-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2966275167,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966275167-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966275167-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966275167-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966275167-3.jpg",
      "isLayout": true,
      "isCianLayout": false
     }
    ],
    "phones": [
     {
      "countryCode": "+7",
      "number": "9230757638"
     }
    ],
    "publishTerms": {
     "terms": [
      {
       "services": [
        "auction"
       ],
       "days": 1,
       "type": "dailyLimited"
      },
      {
       "services": [
        "top3"
       ],
       "days": 30,
       "type": "periodical",
       "tariffIdentificator": {
        "tariffId": 1296855,
        "tariffGridType": "packageTariff"
       }
      }
     ],
     "autoprolong": false
    },
    "flatType": "rooms",
    "roomType": "separate",
    "isApartments": false,
    "isPenthouse": false,
    "totalArea": "153.0",
    "kitchenArea": "50.0",
    "loggiasCount": 0,
    "balconiesCount": 0,
    "windowsViewType": "yardAndStreet",
    "separateWcsCount": 0,
    "combinedWcsCount": 0,
    "land": {
     "area": "0.0"
    },
    "flags": {
     "isArchived": false,
     "isCommercialOwnershipVerified": false
    },
    "specialty": {
     "types": [],
     "additionalTypes": []
    },
    "isNeedHideExactAddress": false,
    "areaParts": [],
    "roomsCount": 3,
    "floorNumber": 4,
    "bargainTerms": {
     "price": 275000000,
     "priceType": "all",
     "currency": "rur",
     "mortgageAllowed": true,
     "includedOptions": [],
     "prices": {
      "rur": 275000000,
      "usd": 3237927,
      "eur": 2884568
     },
     "tags": []
    },
    "building": {
     "materialType": "monolithBrick",
     "floorsCount": 13,
     "buildYear": 2019,
     "hasGarbageChute": true,
     "ceilingHeight": "3.5",
     "totalArea": "153.0",
     "liftTypes": [],
     "cranageTypes": [],
     "passengerLiftsCount": 1,
     "cargoLiftsCount": 0,
     "houseMaterialType": "monolithBrick"
    },
    "editDate": "2026-10-06T12:29:10.597000Z",
    "humanizedEditDate": "вчера, 12:29",
    "hasRamp": false,
    "isInCpd": false,
    "isInHiddenBase": false,
    "isObjectHidden": false,
    "isClosedVisibility": false,
    "videos": [],
    "demolishedInMoscowProgramm": false,
    "priceTotal": 275000000,
    "priceTotalRur": 275000000,
    "exportLinks": {
     "pdfUrl": "/export/pdf/sale/flat/333989474/",
     "docxUrl": "/export/docx/sale/flat/333989474/"
    },
    "passengerLiftsCount": 1,
    "cargoLiftsCount": 0,
    "added": "вчера, 12:29",
    "valueAddedServices": {
     "isStandard": false,
     "isTop3": true,
     "isPremium": false
    },
    "promotion": {
     "isPerformanceVasPilot": false,
     "promotionDescription": "Топ + 5 040 ₽",
     "isCpcAuction": false
    },
    "categoriesIds": [
     1,
     100,
     110,
     111
    ],
    "publicationDate": 1789558468,
    "creationDate": "2026-09-16T14:34:28.3",
    "recoveryLink": "/razmestit-obyavlenie/333989474/",
    "isFromBuilder": false,
    "isFromSeller": false,
    "isFromLeadFactory": false,
    "trackingData": {
     "moId": 0,
     "oblId": 1,
     "cityId": 1,
     "fbRegion": "Москва",
     "fbCity": "Москва"
    },
    "editPhoto": "/realty/add2.aspx?id=333989474",
    "newEdit": "/razmestit-obyavlenie/?realty_id=333989474",
    "certificate": "https://www.cian.ru/newobjects/cian/certification/get?announcementId=333989474",
    "edit": "/realty/add1.aspx?id=333989474",
    "similarOffersLink": "",
    "similarOffersCount": 0,
    "buildersIds": [
     6017
    ],
    "builderId": 6017,
    "isImported": false,
    "userConfirmedFix": false,
    "newbuilding": {
     "id": 21369,
     "name": "Жизнь на Плющихе",
     "house": {
      "isReliable": false,
      "isFinished": true,
      "finishDate": {
       "quarter": 4,
       "year": 2019
      },
      "id": 42221,
      "name": "Погодинская, 2"
     },
     "isFromDeveloper": false,
     "isFromBuilder": false,
     "isFromSeller": false,
     "isFromLeadFactory": false,
     "showJkReliableFlag": false,
     "isFichering": false,
     "isFicheringPlus": false,
     "isPremium": false,
     "newbuildingFeatures": {
      "imagesCount": 14,
      "firstImageUrl": "https://images.cdn-cian.ru/images/1/209/979/zhizn-na-plyushcihe-moskva-jk-979902186-6.jpg",
      "videosCount": 1,
      "deadlineInfo": "Сдан"
     },
     "isReliable": false,
     "isTariffPremium": false
    },
    "timezone": 3,
    "isEnabledCallTracking": true,
    "callTrackingProvider": "mtt",
    "isRentByParts": false,
    "isDuplicate": false,
    "userTrust": "involved",
    "userTrustLevel": "involved",
    "showWarningMessage": false,
    "moderationInfo": {
     "showContactWarningMessage": false
    },
    "isUnique": true,
    "isUniqueCheckDate": "2026-10-06",
    "isCianPartner": false,
    "isIllegalConstruction": false,
    "amenities": [],
    "externalOfferUrl": "",
    "cianLayouts": null
   },
   "features": [
    {
     "title": "О квартире",
     "id": "aboutFlat",
     "features": [
      {
       "value": "Вторичка",
       "label": "Тип жилья"
      },
      {
       "value": "153 м²",
       "label": "Общая площадь"
      },
      {
       "value": "50 м²",
       "label": "Площадь кухни"
      },
      {
       "value": "3,5 м",
       "label": "Высота потолков"
      },
      {
       "value": "На улицу и двор",
       "label": "Вид из окон"
      }
     ]
    },
    {
     "title": "О доме",
     "id": "aboutBuilding",
     "features": [
      {
       "value": "2019",
       "label": "Год постройки"
      },
      {
       "value": "Индивидуальный проект",
       "label": "Строительная серия"
      },
      {
       "value": "1 пассажирский",
       "label": "Количество лифтов"
      },
      {
       "value": "Монолитно-кирпичный",
       "label": "Тип дома"
      },
      {
       "value": "Железобетонные",
       "label": "Тип перекрытий"
      },
      {
       "value": "Есть мусоропровод",
       "label": "О подъезде"
      },
      {
       "value": "Центральное",
       "label": "Отопление"
      },
      {
       "value": "Нет",
       "label": "Аварийность"
      }
     ]
    }
   ],
   "factoids": [
    {
     "title": "Общая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/size.svg",
     "value": "153 м²"
    },
    {
     "title": "Площадь кухни",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/kitchen.svg",
     "value": "50 м²"
    },
    {
     "title": "Этаж",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/floor.svg",
     "value": "4 из 13"
    },
    {
     "title": "Год постройки",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/build_year.svg",
     "value": "2019"
    }
   ],
   "priceChanges": [
    {
     "changeTime": "2026-09-16T11:34:29.885149Z",
     "priceData": {
      "currency": "rur",
      "price": 275000000
     }
    }
   ],
   "bti": {
    "houseData": {
     "yearRelease": 2019,
     "houseMaterialType": "monolithBrick",
     "floorMax": 13,
     "entrances": 0,
     "flatCount": 202,
     "isEmergency": false,
     "demolishedInMoscowProgramm": false,
     "houseHeatSupplyType": "central",
     "houseOverhaulFundType": "undefined",
     "houseGasSupplyType": "without",
     "houseOverlapType": "concrete",
     "lifts": 17,
     "seriesName": "Индивидуальный проект"
    }
   },
   "stats": {
    "totalViewsFormattedString": "711 просмотров, 107 за сегодня"
   },
   "priceInfo": {
    "pricePerSquareValue": 1797385
   },
   "serp": {
    "id": 333989474,
    "title": "Лучшее предложение в ЖК",
    "description": "Предлагается к продаже квартира евро 3 комнатная с двумя просторными спальнями и кухней гостиной.\n\nВид из окон на две стороны . во двор с фонтаном и на тихий 2 тружеников переулок\nВ квартире предусмотрено два санузла и гардеробная комната.\nНачат ремонт:\nВозведены стены , оштукатурены. На стенах  гипсовая лепнина .\nсделана электрика , сантехника.\n\nО КОМПЛЕКСЕ \nЗакрытая территория \nОчень зеленый двор , с фонтаном, детской площадкой и местами отдыха.\n\nДОКУМЕНТЫ\n\n1 взрослый собственник , без ипотек , без мат капиталов. Продается квартира на вторичном рынке в Москве.",
    "formattedFullPrice": "275 000 000 ₽",
    "formattedFullInfo": "3-комн.кв.  ·  153 м²  ·  4/13 этаж",
    "formattedAdditionalInfo": "Возможна ипотека",
    "humanizedTimedelta": "вчера",
    "geo": {
     "highways": [],
     "buildingAddress": null,
     "jk": {
      "webSiteUrl": null,
      "webSiteUrlUtm": null,
      "gaGeo": {
       "oblId": 1,
       "cityId": 1,
       "moId": 0
      },
      "id": 21369,
      "name": "Жизнь на Плющихе",
      "house": {
       "id": 42221,
       "name": "Погодинская, 2"
      },
      "displayName": "ЖК «Жизнь на Плющихе»",
      "developer": null,
      "fullUrl": "https://zhk-zhizn-na-plyushcihe-i.cian.ru/"
     },
     "coordinates": {
      "lat": 55.735713,
      "lng": 37.572351
     },
     "districts": [
      {
       "locationId": 1,
       "parentId": 4,
       "fullName": "р-н Хамовники",
       "id": 21,
       "name": "Хамовники",
       "title": "р-н Хамовники",
       "geoType": "district",
       "type": "raion",
       "qs": "deal_type=sale&district%5B0%5D=21&engine_version=2&object_type%5B0%5D=1&offer_type=flat"
      },
      {
       "locationId": 1,
       "parentId": null,
       "fullName": "ЦАО",
       "id": 4,
       "name": "ЦАО",
       "title": "ЦАО",
       "geoType": "district",
       "type": "okrug",
       "qs": "deal_type=sale&district%5B0%5D=4&engine_version=2&object_type%5B0%5D=1&offer_type=flat"
      }
     ],
     "railways": [
      {
       "distance": 1,
       "time": 17,
       "id": 693,
       "name": "Москва (Киевский вокзал)",
       "geoType": "railway",
       "directionIds": [
        14
       ],
       "travelType": "byFoot",
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&railway%5B0%5D=693"
      },
      {
       "distance": 6,
       "time": 9,
       "id": 707,
       "name": "Тестовская",
       "geoType": "railway",
       "directionIds": [
        11
       ],
       "travelType": "byCar",
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&railway%5B0%5D=707"
      },
      {
       "distance": 5,
       "time": 10,
       "id": 690,
       "name": "Москва (Павелецкий вокзал)",
       "geoType": "railway",
       "directionIds": [
        17
       ],
       "travelType": "byCar",
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&railway%5B0%5D=690"
      }
     ],
     "userInput": "Россия, Москва, Погодинская улица, 2",
     "countryId": 138,
     "undergrounds": [
      {
       "lineColor": "CF0000",
       "time": 14,
       "releaseYear": null,
       "cianId": null,
       "lineId": 10,
       "transportType": "walk",
       "isDefault": true,
       "id": 143,
       "name": "Фрунзенская",
       "underConstruction": false,
       "qs": "deal_type=sale&engine_version=2&metro%5B0%5D=143&object_type%5B0%5D=1&offer_type=flat",
       "lineType": null
      },
      {
       "lineColor": "03238B",
       "time": 14,
       "releaseYear": null,
       "cianId": null,
       "lineId": 1,
       "transportType": "walk",
       "isDefault": false,
       "id": 46,
       "name": "Киевская",
       "underConstruction": false,
       "qs": "deal_type=sale&engine_version=2&metro%5B0%5D=46&object_type%5B0%5D=1&offer_type=flat",
       "lineType": null
      },
      {
       "lineColor": "800000",
       "time": 20,
       "releaseYear": null,
       "cianId": null,
       "lineId": 7,
       "transportType": "walk",
       "isDefault": false,
       "id": 86,
       "name": "Парк Культуры",
       "underConstruction": false,
       "qs": "deal_type=sale&engine_version=2&metro%5B0%5D=86&object_type%5B0%5D=1&offer_type=flat",
       "lineType": null
      }
     ],
     "address": [
      {
       "isFormingAddress": true,
       "fullName": "Москва",
       "shortName": "Москва",
       "id": 1,
       "name": "Москва",
       "locationTypeId": 1,
       "title": "Москва",
       "geoType": "location",
       "type": "location",
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&region=1"
      },
      {
       "isFormingAddress": null,
       "fullName": "ЦАО",
       "shortName": "ЦАО",
       "id": 4,
       "name": "ЦАО",
       "locationTypeId": null,
       "title": "ЦАО",
       "geoType": "district",
       "type": "okrug",
       "qs": "deal_type=sale&district%5B0%5D=4&engine_version=2&object_type%5B0%5D=1&offer_type=flat"
      },
      {
       "isFormingAddress": null,
       "fullName": "р-н Хамовники",
       "shortName": "р-н Хамовники",
       "id": 21,
       "name": "Хамовники",
       "locationTypeId": null,
       "title": "р-н Хамовники",
       "geoType": "district",
       "type": "raion",
       "qs": "deal_type=sale&district%5B0%5D=21&engine_version=2&object_type%5B0%5D=1&offer_type=flat"
      },
      {
       "isFormingAddress": null,
       "fullName": "м. Фрунзенская",
       "shortName": "м. Фрунзенская",
       "id": 143,
       "name": "Фрунзенская",
       "locationTypeId": null,
       "title": "м. Фрунзенская",
       "geoType": "underground",
       "type": "metro",
       "qs": "deal_type=sale&engine_version=2&metro%5B0%5D=143&object_type%5B0%5D=1&offer_type=flat"
      },
      {
       "isFormingAddress": true,
       "fullName": "Погодинская улица",
       "shortName": "Погодинская ул.",
       "id": 1838,
       "name": "Погодинская",
       "locationTypeId": null,
       "title": "Погодинская улица",
       "geoType": "street",
       "type": "street",
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&street%5B0%5D=1838"
      },
      {
       "isFormingAddress": true,
       "fullName": "2",
       "shortName": "2",
       "id": 6342882,
       "name": "2",
       "locationTypeId": null,
       "title": "2",
       "geoType": "house",
       "type": "house",
       "qs": "deal_type=sale&engine_version=2&house%5B0%5D=6342882&object_type%5B0%5D=1&offer_type=flat"
      }
     ],
     "sortedGeoIds": [
      {
       "type": "underground",
       "id": 143
      },
      {
       "type": "underground",
       "id": 46
      },
      {
       "type": "underground",
       "id": 86
      },
      {
       "type": "railway",
       "id": 693
      },
      {
       "type": "railway",
       "id": 707
      },
      {
       "type": "railway",
       "id": 690
      },
      {
       "type": "district",
       "id": 21
      },
      {
       "type": "district",
       "id": 4
      }
     ]
    },
    "isApartments": false,
    "isByHomeowner": false,
    "isUnique": true,
    "isRosreestrChecked": false,
    "offerFeatureLabels": [],
    "offerFeatureLabelsV2": [],
    "photos": [
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255453-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255453-4.jpg",
      "isDefault": true,
      "id": 2966255453,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255453-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255453-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966251477-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966251477-4.jpg",
      "isDefault": false,
      "id": 2966251477,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966251477-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966251477-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253089-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253089-4.jpg",
      "isDefault": false,
      "id": 2966253089,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253089-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253089-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253326-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253326-4.jpg",
      "isDefault": false,
      "id": 2966253326,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253326-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253326-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253608-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253608-4.jpg",
      "isDefault": false,
      "id": 2966253608,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253608-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253608-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253800-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253800-4.jpg",
      "isDefault": false,
      "id": 2966253800,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253800-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966253800-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966254711-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966254711-4.jpg",
      "isDefault": false,
      "id": 2966254711,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966254711-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966254711-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966254932-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966254932-4.jpg",
      "isDefault": false,
      "id": 2966254932,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966254932-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966254932-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255032-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255032-4.jpg",
      "isDefault": false,
      "id": 2966255032,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255032-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255032-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255118-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255118-4.jpg",
      "isDefault": false,
      "id": 2966255118,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255118-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255118-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255266-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255266-4.jpg",
      "isDefault": false,
      "id": 2966255266,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255266-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255266-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255554-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255554-4.jpg",
      "isDefault": false,
      "id": 2966255554,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255554-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966255554-1.jpg"
     },
     {
      "isLayout": true,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966275167-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966275167-4.jpg",
      "isDefault": false,
      "id": 2966275167,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966275167-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-pogodinskaya-ulica-2966275167-1.jpg"
     }
    ],
    "photoFeatureIcons": [],
    "promotion": {
     "isPerformanceVasPilot": false,
     "promotionDescription": "Топ + 5 040 ₽"
    },
    "bargainTerms": {
     "priceType": "all",
     "leaseType": null,
     "price": 275000000,
     "priceRur": 275000000,
     "currency": "rur",
     "paymentPeriod": null,
     "priceForWorkplace": null,
     "vatPrice": null,
     "saleType": null,
     "agentBonus": null,
     "bargainAllowed": null,
     "clientFee": null,
     "tax": null,
     "mortgageAllowed": true,
     "deposit": null,
     "leaseTermType": null,
     "tags": [],
     "utilitiesTerms": null,
     "vatType": null,
     "agentFee": null
    },
    "roomsCount": 3,
    "floorNumber": 4,
    "totalArea": "153.0",
    "building": {
     "buildYear": 2019,
     "accessType": null,
     "heatingType": null,
     "classType": null,
     "deadline": null,
     "floorsCount": 13,
     "passengerLiftsCount": 1,
     "parking": null,
     "materialType": "monolithBrick",
     "type": null,
     "cargoLiftsCount": 0
    },
    "fullUrl": "https://www.cian.ru/sale/flat/333989474/",
    "phones": [
     {
      "number": "9230757638",
      "countryCode": "7"
     }
    ],
    "user": {
     "cianUserId": "52290923",
     "isAgent": true,
     "accountType": "specialist",
     "agencyName": "Яна К.",
     "agentAvatarUrl": "https://www.cian.ru/api/get-avatar/?i=27797745&t=2&p=2&timestamp=1746281503",
     "experience": "2010",
     "agentModerationInfo": {
      "isUserIdentified": true,
      "isUserIdentifiedByDocuments": true,
      "qualityLevelInfo": {
       "hasVerifiedDocuments": true,
       "highResponsibility": false,
       "isBlocked": false,
       "isSuperAgent": false,
       "isSuperHost": false,
       "levelName": "Низкий уровень",
       "levelOrder": 1,
       "levelSystemName": "low",
       "showHighResponsibility": false,
       "showSuperAgent": false,
       "showSuperHost": false
      },
      "showUserIdentifiedByDocuments": true
     },
     "isChatsEnabled": true
    }
   },
   "files": [
    {
     "id": 2966255453,
     "isDefault": true,
     "full": "333989474-1.jpg",
     "mini": "333989474-1m.jpg"
    },
    {
     "id": 2966251477,
     "isDefault": false,
     "full": "333989474-2.jpg",
     "mini": "333989474-2m.jpg"
    },
    {
     "id": 2966253089,
     "isDefault": false,
     "full": "333989474-3.jpg",
     "mini": "333989474-3m.jpg"
    },
    {
     "id": 2966253326,
     "isDefault": false,
     "full": "333989474-4.jpg",
     "mini": "333989474-4m.jpg"
    },
    {
     "id": 2966253608,
     "isDefault": false,
     "full": "333989474-5.jpg",
     "mini": "333989474-5m.jpg"
    }
   ],
   "media": {
    "avatar": "333989474-avatar.jpg"
   }
  },
  {
   "source": "https://www.cian.ru/sale/flat/333347758/",
   "seenAt": "2026-10-06T21:38:45.836Z",
   "offer": {
    "category": "flatSale",
    "status": "published",
    "dealType": "sale",
    "offerType": "flat",
    "geo": {
     "address": [
      {
       "fullName": "Москва",
       "id": 1,
       "locationTypeId": 1,
       "name": "Москва",
       "shortName": "Москва",
       "type": "location",
       "url": "https://www.cian.ru/kupit-5-komnatnuyu-kvartiru/"
      },
      {
       "fullName": "ЗАО",
       "id": 11,
       "locationTypeId": -1,
       "name": "ЗАО",
       "shortName": "ЗАО",
       "type": "okrug",
       "url": "https://www.cian.ru/kupit-5-komnatnuyu-kvartiru-moskva-zao-0411/"
      },
      {
       "fullName": "район Тропарево-Никулино",
       "id": 122,
       "locationTypeId": -1,
       "name": "Тропарево-Никулино",
       "shortName": "р-н Тропарево-Никулино",
       "type": "raion",
       "url": "https://www.cian.ru/kupit-5-komnatnuyu-kvartiru-moskva-troparevo-nikulino-04122/"
      },
      {
       "fullName": "проспект Вернадского",
       "id": 775,
       "locationTypeId": -1,
       "name": "Вернадского",
       "shortName": "просп. Вернадского",
       "type": "street",
       "url": "https://www.cian.ru/kupit-5-komnatnuyu-kvartiru-moskva-prospekt-vernadskogo-02775/"
      },
      {
       "fullName": "105к4",
       "id": 949412,
       "locationTypeId": -1,
       "name": "105к4",
       "shortName": "105к4",
       "type": "house",
       "url": "https://www.cian.ru/cat.php?deal_type=sale&engine_version=2&house%5B0%5D=949412&offer_type=flat&room5=1"
      }
     ],
     "coordinates": {
      "lat": 55.663674,
      "lng": 37.486733
     },
     "highways": [],
     "railways": [
      {
       "id": 725,
       "directionIds": [
        14
       ],
       "distance": "3.0",
       "time": 43,
       "name": "Очаково I",
       "travelType": "byFoot"
      },
      {
       "id": 742,
       "directionIds": [
        14
       ],
       "distance": "4.0",
       "time": 59,
       "name": "Сколково",
       "travelType": "byFoot"
      },
      {
       "id": 725,
       "directionIds": [
        14
       ],
       "distance": "5.0",
       "time": 9,
       "name": "Очаково I",
       "travelType": "byCar"
      },
      {
       "id": 716,
       "directionIds": [
        14
       ],
       "distance": "5.0",
       "time": 11,
       "name": "Матвеевская",
       "travelType": "byCar"
      },
      {
       "id": 716,
       "directionIds": [
        14
       ],
       "distance": "5.0",
       "time": 68,
       "name": "Матвеевская",
       "travelType": "byFoot"
      },
      {
       "id": 742,
       "directionIds": [
        14
       ],
       "distance": "7.0",
       "time": 13,
       "name": "Сколково",
       "travelType": "byCar"
      }
     ],
     "undergrounds": [
      {
       "id": 156,
       "name": "Юго-Западная",
       "lineColor": "CF0000",
       "travelType": "walk",
       "travelTime": 4,
       "url": "https://www.cian.ru/kupit-5-komnatnuyu-kvartiru-moskva-metro-yugo-zapadnaya-156/",
       "underConstruction": false
      },
      {
       "id": 102,
       "name": "Проспект Вернадского",
       "lineColor": "CF0000",
       "travelType": "walk",
       "travelTime": 23,
       "url": "https://www.cian.ru/kupit-5-komnatnuyu-kvartiru-moskva-metro-prospekt-vernadskogo-102/",
       "underConstruction": false
      },
      {
       "id": 450,
       "name": "Проспект Вернадского",
       "lineColor": "7ACDCE",
       "travelType": "walk",
       "travelTime": 25,
       "url": "https://www.cian.ru/kupit-5-komnatnuyu-kvartiru-moskva-metro-prospekt-vernadskogo-450/",
       "underConstruction": false
      }
     ]
    },
    "id": 333347758,
    "objectGuid": "34cd10f6-0bd1-4547-81fd-c41dd7d6c79f",
    "cianId": 333347758,
    "userId": 139542939,
    "publishedUserId": 139542939,
    "cianUserId": 139542939,
    "isByHomeowner": false,
    "title": "Новый ремонт и мебель + паркинг.",
    "description": "Агентам не беспокоить. Приоритет покупателю паркинга, 20м - 3,99млн. Один собственник, с момента сдачи дома, без обременений.\nРЕМОНТ. В 2022г.  Проведена полная предпродажная реставрация. Стены выполнены из декоративной штукатурки Valsetin (Италия). Пол из керамогранитной плитки в бесшовном варианте. Для создания дизайнерского бесшовного рисунка, двух цветов, использовалась лазерная резка. Пол в спальнях из  дизайнерской, паркетной доски. \nМЕБЕЛЬ. Все, что Вы видите, остаётся в квартире. Вся корпусная мебель, кухня и люстры из Италии (2022г), состояние идеальное. Каменная столешница позволяет   резать и ставить раскаленную сковороду. Фасады корпусной мебели зелёной спальни выполнены из вулканической породы Везувия. Мягкая мебель, матрасы, белье, одеяла, все аксессуары никем не использовались и были куплены перед продажей квартиры. \nДВЕРИ. Стеклянные, раздвижные от итальянской фирмы Casalli,  в идеальном состоянии. Механизмы работают безупречно. Межкомнатные итальянские двери имеют увеличенную высоту.\nОСВЕЩЕНИЕ. Все комнаты имеют две пары проходных выключателей. Основной, яркий свет и второй, приглушенный (5-10% от основного). На фото приглушенный свет. В 3D-туре основной свет.\nТЕХНИКА. Техника премиальных фирм: Miele, Asko, Samsung, Harman kardon. Холодильник Libher с винный шкафом. \nКОНДИЦИОНИРОВАНИЕ. Канального скрытого типа, с подтяжкой очищенного воздуха. Скрытые решетки направлены на стены, что позволяет не чувствовать дуновение. Шума нет.  Зональное управление каждой комнатой. \nПОДОГРЕВ ПОЛА ВОДЯНОЙ. Сделан по проекту. 100%  площади. Подогревать можно, как центральным отоплением, так и электрическим нагревателем.\nЭЛЕКТРОМОНТАЖ. Выполнен в соответствии со всеми требованиями госпожнадзора и электропроектом. Электролаборатория провела замеры и испытания.\nСИГНАЛИЗАЦИЯ охранно-пожарная, подключена к полиции. Пожарная, дополнительно, выведена к диспетчеру дома. \nОТКЛЮЧЕНИЕ ВОДЫ. Под каждым источником воды установлен проводной датчик, при протечке, в стояках отключается подача.\nАКУСТИКА. В потолке каждой комнаты и санузлах по 2-4 потолочных колонки. Шаровидные динамики и сабвуфер в зоне телевизора. Аппаратура и кабели премиального качества. \nПОДЪЕЗД. Приветливый охранник знает всех. Лифты скоростные Shindler. Грузовые можно использовать индивидуально. Соседи доброжелательные. Входная дверь фирмы Ferrari с замком высокой защиты.\nТЕРРИТОРИЯ. Въезд через шлагбаум с камерой, распознавания номера. Пропуска на машины и гостей оформляются в приложении.\nТСЖ. Профессионально обслуживает и улучшает дом с территорию. Круглосуточная диспетчерская. Стоимость коммунальных платежей и кап. ремонта  30т.р.\nРЯДОМ. Лучшие ВУЗы и школы страны. Все известные супермаркеты, рестораны, банки, маркетплейсы. Торговые центры. Поликлиника, стоматология, спорт и фитнес клубы, СПА, парикмахерская. Современные детские площадки и лесопарк.",
    "photos": [
     {
      "id": 2952570486,
      "isDefault": true,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952570486-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952570486-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952570486-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952570486-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575603,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575603-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575603-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575603-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575603-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575668,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575668-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575668-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575668-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575668-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2951989627,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951989627-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951989627-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951989627-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951989627-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2951990033,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951990033-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951990033-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951990033-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951990033-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575599,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575599-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575599-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575599-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575599-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2951990502,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951990502-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951990502-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951990502-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951990502-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2951990747,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951990747-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951990747-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951990747-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951990747-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575622,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575622-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575622-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575622-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575622-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575601,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575601-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575601-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575601-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575601-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575523,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575523-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575523-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575523-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575523-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575721,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575721-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575721-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575721-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575721-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575421,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575421-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575421-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575421-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575421-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575537,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575537-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575537-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575537-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575537-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575477,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575477-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575477-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575477-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575477-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952374547,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952374547-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952374547-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952374547-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952374547-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952374562,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952374562-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952374562-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952374562-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952374562-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952384263,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952384263-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952384263-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952384263-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952384263-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575600,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575600-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575600-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575600-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575600-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575742,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575742-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575742-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575742-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575742-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575525,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575525-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575525-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575525-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575525-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575467,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575467-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575467-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575467-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575467-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952325259,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952325259-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952325259-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952325259-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952325259-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952325273,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952325273-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952325273-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952325273-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952325273-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575476,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575476-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575476-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575476-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575476-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952325260,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952325260-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952325260-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952325260-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952325260-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575526,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575526-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575526-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575526-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575526-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575680,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575680-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575680-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575680-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575680-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575602,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575602-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575602-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575602-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575602-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575745,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575745-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575745-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575745-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575745-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952390893,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952390893-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952390893-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952390893-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952390893-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575493,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575493-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575493-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575493-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575493-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575443,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575443-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575443-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575443-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575443-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575605,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575605-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575605-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575605-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575605-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952458627,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952458627-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952458627-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952458627-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952458627-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575604,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575604-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575604-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575604-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575604-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952398776,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952398776-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952398776-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952398776-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952398776-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575517,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575517-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575517-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575517-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575517-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575743,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575743-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575743-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575743-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575743-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575757,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575757-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575757-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575757-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575757-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952405046,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952405046-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952405046-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952405046-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952405046-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952405036,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952405036-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952405036-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952405036-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952405036-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575647,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575647-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575647-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575647-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575647-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575633,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575633-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575633-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575633-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575633-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952575679,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575679-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575679-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575679-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575679-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952300226,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952300226-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952300226-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952300226-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952300226-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2952300228,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952300228-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952300228-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952300228-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952300228-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2951962161,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951962161-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951962161-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951962161-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951962161-3.jpg",
      "isLayout": true,
      "isCianLayout": false
     }
    ],
    "phones": [
     {
      "countryCode": "+7",
      "number": "9390211045"
     }
    ],
    "publishTerms": {
     "terms": [
      {
       "services": [
        "auction"
       ],
       "days": 14,
       "type": "periodical"
      },
      {
       "services": [
        "top3"
       ],
       "days": 30,
       "type": "periodical",
       "tariffIdentificator": {
        "tariffId": 1296855,
        "tariffGridType": "packageTariff"
       }
      }
     ],
     "autoprolong": true
    },
    "flatType": "rooms",
    "roomType": "both",
    "isApartments": false,
    "totalArea": "180.0",
    "livingArea": "100.0",
    "kitchenArea": "14.0",
    "loggiasCount": 1,
    "balconiesCount": 0,
    "separateWcsCount": 0,
    "combinedWcsCount": 2,
    "repairType": "design",
    "hasFurniture": true,
    "land": {
     "area": "0.0"
    },
    "flags": {
     "isArchived": false,
     "isCommercialOwnershipVerified": false
    },
    "hasLift": true,
    "specialty": {
     "types": [],
     "additionalTypes": []
    },
    "isNeedHideExactAddress": false,
    "areaParts": [],
    "roomsCount": 5,
    "floorNumber": 9,
    "bargainTerms": {
     "price": 79900000,
     "priceType": "all",
     "currency": "rur",
     "mortgageAllowed": true,
     "saleType": "free",
     "includedOptions": [],
     "prices": {
      "rur": 79900000,
      "usd": 940765,
      "eur": 838099
     },
     "tags": []
    },
    "building": {
     "materialType": "monolith",
     "floorsCount": 33,
     "buildYear": 2007,
     "parking": {
      "type": "underground"
     },
     "hasGarbageChute": false,
     "ceilingHeight": "3.0",
     "totalArea": "180.0",
     "liftTypes": [],
     "cranageTypes": [],
     "passengerLiftsCount": 2,
     "cargoLiftsCount": 2,
     "houseMaterialType": "monolith"
    },
    "editDate": "2026-10-06T23:25:19.960445Z",
    "humanizedEditDate": "вчера, 23:25",
    "hasRamp": true,
    "isInCpd": false,
    "isInHiddenBase": false,
    "isObjectHidden": false,
    "isClosedVisibility": false,
    "videos": [
     {
      "id": "3e6b57d0-f54b-4aef-8e2d-230ed4d9743f",
      "url": "https://kinescope.io/embed/8H43JrQnN1o4T9JVYSFpSX",
      "type": "kinescope",
      "previewUrl": "https://kinescopecdn.net/f9f281e3-5528-474a-b760-2c5cecf2ce98/posters/fb3b6cdc-a632-4d67-a1b2-e70b95bd1fa3/md/01a03f1e-5968-74bb-bc4d-d1249b06d1de.jpg"
     }
    ],
    "demolishedInMoscowProgramm": false,
    "priceTotal": 79900000,
    "priceTotalRur": 79900000,
    "exportLinks": {
     "pdfUrl": "/export/pdf/sale/flat/333347758/",
     "docxUrl": "/export/docx/sale/flat/333347758/"
    },
    "passengerLiftsCount": 2,
    "cargoLiftsCount": 2,
    "added": "26 сен, 20:55",
    "valueAddedServices": {
     "isStandard": false,
     "isTop3": true,
     "isPremium": false
    },
    "promotion": {
     "isPerformanceVasPilot": false,
     "promotionDescription": "Топ + 4 000 ₽",
     "isCpcAuction": false
    },
    "categoriesIds": [
     1,
     100,
     110,
     111
    ],
    "publicationDate": 1787837161,
    "creationDate": "2026-08-27T16:26:01.627",
    "recoveryLink": "/razmestit-obyavlenie/333347758/",
    "trackingData": {
     "moId": 0,
     "oblId": 1,
     "cityId": 1,
     "fbRegion": "Москва",
     "fbCity": "Москва"
    },
    "editPhoto": "/realty/add2.aspx?id=333347758",
    "newEdit": "/razmestit-obyavlenie/?realty_id=333347758",
    "certificate": "https://www.cian.ru/newobjects/cian/certification/get?announcementId=333347758",
    "edit": "/realty/add1.aspx?id=333347758",
    "similarOffersLink": "",
    "similarOffersCount": 0,
    "buildersIds": [],
    "isImported": false,
    "userConfirmedFix": false,
    "timezone": 3,
    "isEnabledCallTracking": true,
    "callTrackingProvider": "mtt",
    "rosreestrCheck": {
     "status": "success"
    },
    "isRentByParts": false,
    "isDuplicate": false,
    "userTrust": "notInvolved",
    "userTrustLevel": "notInvolved",
    "showWarningMessage": false,
    "moderationInfo": {
     "showContactWarningMessage": false
    },
    "isUnique": false,
    "isUniqueCheckDate": "2026-10-06",
    "isCianPartner": false,
    "isIllegalConstruction": false,
    "isSoldFurnished": true,
    "amenities": [
     "noThresholdAtEntrance",
     "notSetEntranceDoor",
     "notSetBathroomAndToiletDoors",
     "notSetRoomsAndKitchenDoors"
    ],
    "externalOfferUrl": "",
    "cianLayouts": null,
    "newbuilding": {
     "id": 0,
     "isFromBuilder": false,
     "isFromDeveloper": false,
     "isFromLeadFactory": false,
     "isFromSeller": false,
     "isReliable": false,
     "isTariffPremium": false,
     "isPremium": false,
     "name": "",
     "newbuildingFeatures": null,
     "showJkReliableFlag": false
    }
   },
   "features": [
    {
     "title": "О квартире",
     "id": "aboutFlat",
     "features": [
      {
       "value": "Вторичка",
       "label": "Тип жилья"
      },
      {
       "value": "180 м²",
       "label": "Общая площадь"
      },
      {
       "value": "100 м²",
       "label": "Жилая площадь"
      },
      {
       "value": "14 м²",
       "label": "Площадь кухни"
      },
      {
       "value": "3 м",
       "label": "Высота потолков"
      },
      {
       "value": "2 совмещенных",
       "label": "Санузел"
      },
      {
       "value": "1 лоджия",
       "label": "Балкон/лоджия"
      },
      {
       "value": "Дизайнерский",
       "label": "Ремонт"
      },
      {
       "value": "Была",
       "label": "Перепланировка"
      },
      {
       "value": "Да",
       "label": "Продаётся с мебелью"
      }
     ]
    },
    {
     "title": "О доме",
     "id": "aboutBuilding",
     "features": [
      {
       "value": "2007",
       "label": "Год постройки"
      },
      {
       "value": "Индивидуальный проект",
       "label": "Строительная серия"
      },
      {
       "value": "2 пассажирских, 2 грузовых",
       "label": "Количество лифтов"
      },
      {
       "value": "Монолитный",
       "label": "Тип дома"
      },
      {
       "value": "Железобетонные",
       "label": "Тип перекрытий"
      },
      {
       "value": "4",
       "label": "Подъезды"
      },
      {
       "value": "Есть консьерж",
       "label": "О подъезде"
      },
      {
       "value": "Шлагбаум",
       "label": "Придомовая территория"
      },
      {
       "value": "Подземная",
       "label": "Парковка"
      },
      {
       "value": "Центральное",
       "label": "Отопление"
      },
      {
       "value": "Нет",
       "label": "Аварийность"
      }
     ]
    },
    {
     "title": "Юридические особенности",
     "id": "legal",
     "features": [
      {
       "value": "Нет",
       "label": "Несовершеннолетние собственники"
      },
      {
       "value": "Не использовался",
       "label": "Материнский капитал при покупке"
      }
     ]
    }
   ],
   "factoids": [
    {
     "title": "Общая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/size.svg",
     "value": "180 м²"
    },
    {
     "title": "Жилая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/plan.svg",
     "value": "100 м²"
    },
    {
     "title": "Площадь кухни",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/kitchen.svg",
     "value": "14 м²"
    },
    {
     "title": "Этаж",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/floor.svg",
     "value": "9 из 33"
    },
    {
     "title": "Год постройки",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/build_year.svg",
     "value": "2007"
    }
   ],
   "priceChanges": [
    {
     "changeTime": "2026-08-27T13:26:07.401116Z",
     "priceData": {
      "currency": "rur",
      "price": 79900000
     }
    }
   ],
   "bti": {
    "houseData": {
     "yearRelease": 2007,
     "houseMaterialType": "none",
     "floorMax": 33,
     "entrances": 4,
     "flatCount": 667,
     "isEmergency": false,
     "demolishedInMoscowProgramm": false,
     "houseHeatSupplyType": "central",
     "houseOverhaulFundType": "regionalOp",
     "houseGasSupplyType": "without",
     "houseOverlapType": "concrete",
     "lifts": 20,
     "seriesName": "Индивидуальный проект"
    }
   },
   "stats": {
    "totalViewsFormattedString": "4191 просмотр, 202 за сегодня"
   },
   "priceInfo": {
    "pricePerSquareValue": 443888
   },
   "serp": {
    "id": 333347758,
    "title": "Новый ремонт и мебель + паркинг.",
    "description": "Агентам не беспокоить. Приоритет покупателю паркинга, 20м - 3,99млн. Один собственник, с момента сдачи дома, без обременений.\nРЕМОНТ. В 2022г.  Проведена полная предпродажная реставрация. Стены выполнены из декоративной штукатурки Valsetin (Италия). Пол из керамогранитной плитки в бесшовном варианте. Для создания дизайнерского бесшовного рисунка, двух цветов, использовалась лазерная резка. Пол в спальнях из  дизайнерской, паркетной доски. \nМЕБЕЛЬ. Все, что Вы видите, остаётся в квартире. Вся корпусная мебель, кухня и люстры из Италии (2022г), состояние идеальное. Каменная столешница позволяет   резать и ставить раскаленную сковороду. Фасады корпусной мебели зелёной спальни выполнены из вулканической породы Везувия. Мягкая мебель, матрасы, белье, одеяла, все аксессуары никем не использовались и были куплены перед продажей квартиры. \nДВЕРИ. Стеклянные, раздвижные от итальянской фирмы Casalli,  в идеальном состоянии. Механизмы работают безупречно. Межкомнатные итальянские двери имеют увеличенную высоту.\nОСВЕЩЕНИЕ. Все комнаты имеют две пары проходных выключателей. Основной, яркий свет и второй, приглушенный (5-10% от основного). На фото приглушенный свет. В 3D-туре основной свет.\nТЕХНИКА. Техника премиальных фирм: Miele, Asko, Samsung, Harman kardon. Холодильник Libher с винный шкафом. \nКОНДИЦИОНИРОВАНИЕ. Канального скрытого типа, с подтяжкой очищенного воздуха. Скрытые решетки направлены на стены, что позволяет не чувствовать дуновение. Шума нет.  Зональное управление каждой комнатой. \nПОДОГРЕВ ПОЛА ВОДЯНОЙ. Сделан по проекту. 100%  площади. Подогревать можно, как центральным отоплением, так и электрическим нагревателем.\nЭЛЕКТРОМОНТАЖ. Выполнен в соответствии со всеми требованиями госпожнадзора и электропроектом. Электролаборатория провела замеры и испытания.\nСИГНАЛИЗАЦИЯ охранно-пожарная, подключена к полиции. Пожарная, дополнительно, выведена к диспетчеру дома. \nОТКЛЮЧЕНИЕ ВОДЫ. Под каждым источником воды установлен проводной датчик, при протечке, в стояках отключается подача.\nАКУСТИКА. В потолке каждой комнаты и санузлах по 2-4 потолочных колонки. Шаровидные динамики и сабвуфер в зоне телевизора. Аппаратура и кабели премиального качества. \nПОДЪЕЗД. Приветливый охранник знает всех. Лифты скоростные Shindler. Грузовые можно использовать индивидуально. Соседи доброжелательные. Входная дверь фирмы Ferrari с замком высокой защиты.\nТЕРРИТОРИЯ. Въезд через шлагбаум с камерой, распознавания номера. Пропуска на машины и гостей оформляются в приложении.\nТСЖ. Профессионально обслуживает и улучшает дом с территорию. Круглосуточная диспетчерская. Стоимость коммунальных платежей и кап. ремонта  30т.р.\nРЯДОМ. Лучшие ВУЗы и школы страны. Все известные супермаркеты, рестораны, банки, маркетплейсы. Торговые центры. Поликлиника, стоматология, спорт и фитнес клубы, СПА, парикмахерская. Современные детские площадки и лесопарк. Квартира вторичка в Москве.",
    "formattedFullPrice": "79 900 000 ₽",
    "formattedFullInfo": "5-комн.кв.  ·  180 м²  ·  9/33 этаж",
    "formattedAdditionalInfo": "Свободная продажа, возможна ипотека",
    "humanizedTimedelta": "вчера",
    "geo": {
     "jk": null,
     "buildingAddress": null,
     "undergrounds": [
      {
       "cianId": null,
       "time": 4,
       "id": 156,
       "releaseYear": null,
       "lineId": 10,
       "lineColor": "CF0000",
       "transportType": "walk",
       "underConstruction": false,
       "isDefault": true,
       "qs": "deal_type=sale&engine_version=2&metro%5B0%5D=156&object_type%5B0%5D=1&offer_type=flat",
       "name": "Юго-Западная",
       "lineType": null
      },
      {
       "cianId": null,
       "time": 5,
       "id": 450,
       "releaseYear": null,
       "lineId": 27,
       "lineColor": "7ACDCE",
       "transportType": "transport",
       "underConstruction": false,
       "isDefault": false,
       "qs": "deal_type=sale&engine_version=2&metro%5B0%5D=450&object_type%5B0%5D=1&offer_type=flat",
       "name": "Проспект Вернадского",
       "lineType": null
      },
      {
       "cianId": null,
       "time": 6,
       "id": 102,
       "releaseYear": null,
       "lineId": 10,
       "lineColor": "CF0000",
       "transportType": "transport",
       "underConstruction": false,
       "isDefault": false,
       "qs": "deal_type=sale&engine_version=2&metro%5B0%5D=102&object_type%5B0%5D=1&offer_type=flat",
       "name": "Проспект Вернадского",
       "lineType": null
      }
     ],
     "countryId": 138,
     "userInput": "Россия, Москва, проспект Вернадского, 105к4",
     "railways": [
      {
       "travelType": "byCar",
       "distance": 5,
       "time": 9,
       "id": 725,
       "geoType": "railway",
       "directionIds": [
        14
       ],
       "name": "Очаково I",
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&railway%5B0%5D=725"
      },
      {
       "travelType": "byCar",
       "distance": 5,
       "time": 11,
       "id": 716,
       "geoType": "railway",
       "directionIds": [
        14
       ],
       "name": "Матвеевская",
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&railway%5B0%5D=716"
      },
      {
       "travelType": "byCar",
       "distance": 7,
       "time": 13,
       "id": 742,
       "geoType": "railway",
       "directionIds": [
        14
       ],
       "name": "Сколково",
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&railway%5B0%5D=742"
      }
     ],
     "address": [
      {
       "shortName": "Москва",
       "id": 1,
       "type": "location",
       "title": "Москва",
       "isFormingAddress": true,
       "locationTypeId": 1,
       "fullName": "Москва",
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&region=1",
       "geoType": "location",
       "name": "Москва"
      },
      {
       "shortName": "ЗАО",
       "id": 11,
       "type": "okrug",
       "title": "ЗАО",
       "isFormingAddress": null,
       "locationTypeId": null,
       "fullName": "ЗАО",
       "qs": "deal_type=sale&district%5B0%5D=11&engine_version=2&object_type%5B0%5D=1&offer_type=flat",
       "geoType": "district",
       "name": "ЗАО"
      },
      {
       "shortName": "р-н Тропарево-Никулино",
       "id": 122,
       "type": "raion",
       "title": "р-н Тропарево-Никулино",
       "isFormingAddress": null,
       "locationTypeId": null,
       "fullName": "р-н Тропарево-Никулино",
       "qs": "deal_type=sale&district%5B0%5D=122&engine_version=2&object_type%5B0%5D=1&offer_type=flat",
       "geoType": "district",
       "name": "Тропарево-Никулино"
      },
      {
       "shortName": "м. Юго-Западная",
       "id": 156,
       "type": "metro",
       "title": "м. Юго-Западная",
       "isFormingAddress": null,
       "locationTypeId": null,
       "fullName": "м. Юго-Западная",
       "qs": "deal_type=sale&engine_version=2&metro%5B0%5D=156&object_type%5B0%5D=1&offer_type=flat",
       "geoType": "underground",
       "name": "Юго-Западная"
      },
      {
       "shortName": "просп. Вернадского",
       "id": 775,
       "type": "street",
       "title": "проспект Вернадского",
       "isFormingAddress": true,
       "locationTypeId": null,
       "fullName": "проспект Вернадского",
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&street%5B0%5D=775",
       "geoType": "street",
       "name": "Вернадского"
      },
      {
       "shortName": "105к4",
       "id": 949412,
       "type": "house",
       "title": "105к4",
       "isFormingAddress": true,
       "locationTypeId": null,
       "fullName": "105к4",
       "qs": "deal_type=sale&engine_version=2&house%5B0%5D=949412&object_type%5B0%5D=1&offer_type=flat",
       "geoType": "house",
       "name": "105к4"
      }
     ],
     "highways": [],
     "districts": [
      {
       "id": 122,
       "type": "raion",
       "title": "р-н Тропарево-Никулино",
       "locationId": 1,
       "parentId": 11,
       "fullName": "р-н Тропарево-Никулино",
       "qs": "deal_type=sale&district%5B0%5D=122&engine_version=2&object_type%5B0%5D=1&offer_type=flat",
       "geoType": "district",
       "name": "Тропарево-Никулино"
      },
      {
       "id": 11,
       "type": "okrug",
       "title": "ЗАО",
       "locationId": 1,
       "parentId": null,
       "fullName": "ЗАО",
       "qs": "deal_type=sale&district%5B0%5D=11&engine_version=2&object_type%5B0%5D=1&offer_type=flat",
       "geoType": "district",
       "name": "ЗАО"
      }
     ],
     "coordinates": {
      "lng": 37.486733,
      "lat": 55.663674
     },
     "sortedGeoIds": [
      {
       "type": "underground",
       "id": 156
      },
      {
       "type": "underground",
       "id": 450
      },
      {
       "type": "underground",
       "id": 102
      },
      {
       "type": "railway",
       "id": 725
      },
      {
       "type": "railway",
       "id": 716
      },
      {
       "type": "railway",
       "id": 742
      },
      {
       "type": "district",
       "id": 122
      },
      {
       "type": "district",
       "id": 11
      }
     ]
    },
    "isApartments": false,
    "isByHomeowner": false,
    "isUnique": false,
    "isSoldFurnished": true,
    "isRosreestrChecked": true,
    "offerFeatureLabels": [],
    "offerFeatureLabelsV2": [],
    "photos": [
     {
      "id": 2952570486,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952570486-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952570486-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952570486-3.jpg",
      "isDefault": true,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952570486-1.jpg"
     },
     {
      "id": 2952575603,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575603-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575603-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575603-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575603-1.jpg"
     },
     {
      "id": 2952575668,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575668-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575668-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575668-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575668-1.jpg"
     },
     {
      "id": 2951989627,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951989627-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951989627-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951989627-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951989627-1.jpg"
     },
     {
      "id": 2951990033,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951990033-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951990033-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951990033-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951990033-1.jpg"
     },
     {
      "id": 2952575599,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575599-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575599-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575599-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575599-1.jpg"
     },
     {
      "id": 2951990502,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951990502-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951990502-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951990502-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951990502-1.jpg"
     },
     {
      "id": 2951990747,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951990747-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951990747-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951990747-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951990747-1.jpg"
     },
     {
      "id": 2952575622,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575622-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575622-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575622-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575622-1.jpg"
     },
     {
      "id": 2952575601,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575601-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575601-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575601-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575601-1.jpg"
     },
     {
      "id": 2952575523,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575523-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575523-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575523-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575523-1.jpg"
     },
     {
      "id": 2952575721,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575721-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575721-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575721-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575721-1.jpg"
     },
     {
      "id": 2952575421,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575421-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575421-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575421-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575421-1.jpg"
     },
     {
      "id": 2952575537,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575537-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575537-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575537-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575537-1.jpg"
     },
     {
      "id": 2952575477,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575477-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575477-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575477-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575477-1.jpg"
     },
     {
      "id": 2952374547,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952374547-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952374547-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952374547-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952374547-1.jpg"
     },
     {
      "id": 2952374562,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952374562-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952374562-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952374562-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952374562-1.jpg"
     },
     {
      "id": 2952384263,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952384263-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952384263-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952384263-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952384263-1.jpg"
     },
     {
      "id": 2952575600,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575600-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575600-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575600-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575600-1.jpg"
     },
     {
      "id": 2952575742,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575742-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575742-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575742-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575742-1.jpg"
     },
     {
      "id": 2952575525,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575525-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575525-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575525-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575525-1.jpg"
     },
     {
      "id": 2952575467,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575467-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575467-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575467-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575467-1.jpg"
     },
     {
      "id": 2952325259,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952325259-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952325259-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952325259-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952325259-1.jpg"
     },
     {
      "id": 2952325273,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952325273-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952325273-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952325273-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952325273-1.jpg"
     },
     {
      "id": 2952575476,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575476-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575476-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575476-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575476-1.jpg"
     },
     {
      "id": 2952325260,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952325260-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952325260-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952325260-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952325260-1.jpg"
     },
     {
      "id": 2952575526,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575526-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575526-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575526-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575526-1.jpg"
     },
     {
      "id": 2952575680,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575680-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575680-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575680-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575680-1.jpg"
     },
     {
      "id": 2952575602,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575602-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575602-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575602-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575602-1.jpg"
     },
     {
      "id": 2952575745,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575745-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575745-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575745-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575745-1.jpg"
     },
     {
      "id": 2952390893,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952390893-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952390893-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952390893-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952390893-1.jpg"
     },
     {
      "id": 2952575493,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575493-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575493-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575493-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575493-1.jpg"
     },
     {
      "id": 2952575443,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575443-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575443-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575443-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575443-1.jpg"
     },
     {
      "id": 2952575605,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575605-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575605-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575605-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575605-1.jpg"
     },
     {
      "id": 2952458627,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952458627-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952458627-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952458627-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952458627-1.jpg"
     },
     {
      "id": 2952575604,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575604-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575604-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575604-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575604-1.jpg"
     },
     {
      "id": 2952398776,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952398776-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952398776-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952398776-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952398776-1.jpg"
     },
     {
      "id": 2952575517,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575517-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575517-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575517-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575517-1.jpg"
     },
     {
      "id": 2952575743,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575743-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575743-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575743-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575743-1.jpg"
     },
     {
      "id": 2952575757,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575757-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575757-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575757-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575757-1.jpg"
     },
     {
      "id": 2952405046,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952405046-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952405046-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952405046-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952405046-1.jpg"
     },
     {
      "id": 2952405036,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952405036-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952405036-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952405036-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952405036-1.jpg"
     },
     {
      "id": 2952575647,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575647-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575647-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575647-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575647-1.jpg"
     },
     {
      "id": 2952575633,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575633-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575633-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575633-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575633-1.jpg"
     },
     {
      "id": 2952575679,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575679-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575679-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575679-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952575679-1.jpg"
     },
     {
      "id": 2952300226,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952300226-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952300226-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952300226-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952300226-1.jpg"
     },
     {
      "id": 2952300228,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952300228-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952300228-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952300228-3.jpg",
      "isDefault": false,
      "isLayout": false,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2952300228-1.jpg"
     },
     {
      "id": 2951962161,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951962161-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951962161-2.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951962161-3.jpg",
      "isDefault": false,
      "isLayout": true,
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-prospekt-vernadskogo-2951962161-1.jpg"
     }
    ],
    "photoFeatureIcons": [
     {
      "type": "has3dTour",
      "text": "Объявление с 3D-туром",
      "link": "https://www.cian.ru/sale/flat/333347758/"
     },
     {
      "type": "hasVideo",
      "text": "Объявление с видео",
      "link": "https://www.cian.ru/sale/flat/333347758/"
     }
    ],
    "promotion": {
     "isPerformanceVasPilot": false,
     "promotionDescription": "Топ + 4 000 ₽"
    },
    "bargainTerms": {
     "tags": [],
     "currency": "rur",
     "priceForWorkplace": null,
     "priceType": "all",
     "leaseType": null,
     "paymentPeriod": null,
     "deposit": null,
     "agentBonus": null,
     "utilitiesTerms": null,
     "price": 79900000,
     "leaseTermType": null,
     "agentFee": null,
     "priceRur": 79900000,
     "vatPrice": null,
     "tax": null,
     "vatType": null,
     "mortgageAllowed": true,
     "bargainAllowed": null,
     "clientFee": null,
     "saleType": "free"
    },
    "roomsCount": 5,
    "floorNumber": 9,
    "totalArea": "180.0",
    "building": {
     "floorsCount": 33,
     "type": null,
     "cargoLiftsCount": 2,
     "buildYear": 2007,
     "deadline": null,
     "heatingType": null,
     "parking": {
      "currency": null,
      "purposeType": null,
      "type": "underground",
      "priceMonthly": null,
      "isAvailable": null,
      "locationType": null,
      "placesCount": null,
      "priceEntry": null,
      "isFree": null
     },
     "accessType": null,
     "materialType": "monolith",
     "passengerLiftsCount": 2,
     "classType": null
    },
    "fullUrl": "https://www.cian.ru/sale/flat/333347758/",
    "phones": [
     {
      "countryCode": "7",
      "number": "9390211045"
     }
    ],
    "user": {
     "cianUserId": "139542939",
     "isAgent": true,
     "accountType": "specialist",
     "agencyName": "Александр Г.",
     "agentModerationInfo": {
      "isUserIdentified": true,
      "isUserIdentifiedByDocuments": true,
      "qualityLevelInfo": {
       "hasVerifiedDocuments": true,
       "highResponsibility": false,
       "isBlocked": false,
       "isSuperAgent": false,
       "isSuperHost": false,
       "levelName": "Средний уровень",
       "levelOrder": 2,
       "levelSystemName": "medium",
       "showHighResponsibility": false,
       "showSuperAgent": false,
       "showSuperHost": false
      },
      "showUserIdentifiedByDocuments": true
     },
     "isChatsEnabled": true
    }
   },
   "files": [
    {
     "id": 2952570486,
     "isDefault": true,
     "full": "333347758-1.jpg",
     "mini": "333347758-1m.jpg"
    },
    {
     "id": 2952575603,
     "isDefault": false,
     "full": "333347758-2.jpg",
     "mini": "333347758-2m.jpg"
    },
    {
     "id": 2952575668,
     "isDefault": false,
     "full": "333347758-3.jpg",
     "mini": "333347758-3m.jpg"
    },
    {
     "id": 2951989627,
     "isDefault": false,
     "full": "333347758-4.jpg",
     "mini": "333347758-4m.jpg"
    },
    {
     "id": 2951990033,
     "isDefault": false,
     "full": "333347758-5.jpg",
     "mini": "333347758-5m.jpg"
    }
   ],
   "media": {}
  },
  {
   "source": "https://www.cian.ru/sale/flat/333253868/",
   "seenAt": "2026-10-06T21:38:49.176Z",
   "offer": {
    "category": "flatSale",
    "status": "published",
    "dealType": "sale",
    "offerType": "flat",
    "geo": {
     "address": [
      {
       "fullName": "Москва",
       "id": 1,
       "locationTypeId": 1,
       "name": "Москва",
       "shortName": "Москва",
       "type": "location",
       "url": "https://www.cian.ru/kupit-kvartiru/"
      },
      {
       "fullName": "ЦАО",
       "id": 4,
       "locationTypeId": -1,
       "name": "ЦАО",
       "shortName": "ЦАО",
       "type": "okrug",
       "url": "https://www.cian.ru/kupit-kvartiru-moskva-cao-044/"
      },
      {
       "fullName": "район Пресненский",
       "id": 18,
       "locationTypeId": -1,
       "name": "Пресненский",
       "shortName": "р-н Пресненский",
       "type": "raion",
       "url": "https://www.cian.ru/kupit-kvartiru-moskva-presnenskiy-0418/"
      },
      {
       "fullName": "улица Грузинский Вал",
       "id": 925,
       "locationTypeId": -1,
       "name": "Грузинский Вал",
       "shortName": "ул. Грузинский Вал",
       "type": "street",
       "url": "https://www.cian.ru/kupit-kvartiru-moskva-ulica-gruzinskiy-val-02925/"
      },
      {
       "fullName": "26С1",
       "id": 42877,
       "locationTypeId": -1,
       "name": "26С1",
       "shortName": "26С1",
       "type": "house",
       "url": "https://www.cian.ru/cat.php?deal_type=sale&engine_version=2&house%5B0%5D=42877&offer_type=flat"
      }
     ],
     "coordinates": {
      "lat": 55.774467,
      "lng": 37.581613
     },
     "highways": [],
     "railways": [
      {
       "id": 694,
       "directionIds": [
        11
       ],
       "distance": "1.0",
       "time": 3,
       "name": "Москва (Белорусский вокзал)",
       "travelType": "byCar"
      },
      {
       "id": 694,
       "directionIds": [
        11
       ],
       "distance": "1.0",
       "time": 10,
       "name": "Москва (Белорусский вокзал)",
       "travelType": "byFoot"
      },
      {
       "id": 689,
       "directionIds": [
        19
       ],
       "distance": "2.0",
       "time": 33,
       "name": "Москва (Савёловский вокзал)",
       "travelType": "byFoot"
      },
      {
       "id": 699,
       "directionIds": [
        11
       ],
       "distance": "2.0",
       "time": 35,
       "name": "Беговая",
       "travelType": "byFoot"
      },
      {
       "id": 699,
       "directionIds": [
        11
       ],
       "distance": "3.0",
       "time": 5,
       "name": "Беговая",
       "travelType": "byCar"
      },
      {
       "id": 689,
       "directionIds": [
        19
       ],
       "distance": "5.0",
       "time": 9,
       "name": "Москва (Савёловский вокзал)",
       "travelType": "byCar"
      }
     ],
     "undergrounds": [
      {
       "id": 15,
       "name": "Белорусская",
       "lineColor": "00701A",
       "travelType": "walk",
       "travelTime": 2,
       "url": "https://www.cian.ru/kupit-kvartiru-moskva-metro-belorusskaya-15/",
       "underConstruction": false
      },
      {
       "id": 514,
       "name": "Белорусская",
       "lineColor": "40B280",
       "travelType": "walk",
       "travelTime": 5,
       "url": "https://www.cian.ru/kupit-kvartiru-moskva-metro-belorusskaya-514/",
       "underConstruction": false,
       "lineType": "mcd4"
      },
      {
       "id": 68,
       "name": "Маяковская",
       "lineColor": "00701A",
       "travelType": "walk",
       "travelTime": 14,
       "url": "https://www.cian.ru/kupit-kvartiru-moskva-metro-mayakovskaya-68/",
       "underConstruction": false
      },
      {
       "id": 71,
       "name": "Менделеевская",
       "lineColor": "A2A5B5",
       "travelType": "walk",
       "travelTime": 20,
       "url": "https://www.cian.ru/kupit-kvartiru-moskva-metro-mendeleevskaya-71/",
       "underConstruction": false
      }
     ]
    },
    "id": 333253868,
    "objectGuid": "2868523f-46e4-4e96-b8fd-f486b7b76a43",
    "cianId": 333253868,
    "userId": 143255121,
    "publishedUserId": 143255121,
    "cianUserId": 143255121,
    "isByHomeowner": false,
    "title": "Квартира-студия, 26,1 м²/2 мин...",
    "description": "Сейчас действует специальное предложение для тех кто подойдет на просмотр с 20.09-20.10. Обязательно пишите или звоните. Запишу на просмотр \n\nПродам новые апартаменты. Один собственник. Документы готовы. На отдельном кадастре. \n\nВсё новое. Ремонт, мебель, техника. После покупки ничего докупать не нужно. Все фото настоящие. На просмотре вы увидите именно то, что на фотографиях.\n\n\n В 2 минутах от метро Белорусская.\n\nПодойдет если покупаете первую квартиру. Если нужна квартира в Москве для себя. Для студента тоже отличный вариант.\n\nДом после хорошего ремонта. Закрытый двор со шлагбаумом. Подъезд чистый.\n\n В квартире очень тихо. отличная шумоизоляция. Приятные соседи. \n\nПотолки 3,2 метра. За счет этого и двух окон квартира кажется просторнее.\n\nУстановлена вся техника. Кондиционер. Холодильник.  Стиральная машина. Водонагреватель. Есть кухня. Места для хранения. Спальное место.\n\nДо метро Белорусская около 2 минут пешком. Рядом Белая площадь, Депо, кафе, рестораны, магазины, фитнес.\n\nПишите или звоните. Покажу апартаменты в удобное время.",
    "photos": [
     {
      "id": 2950410021,
      "isDefault": true,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410021-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410021-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410021-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410021-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2950410022,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410022-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410022-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410022-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410022-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2950410027,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410027-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410027-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410027-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410027-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2961512548,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2961512548-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2961512548-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2961512548-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2961512548-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2950410028,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410028-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410028-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410028-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410028-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2950410029,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410029-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410029-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410029-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410029-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2950401652,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401652-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401652-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401652-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401652-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2950401690,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401690-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401690-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401690-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401690-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2950410015,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410015-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410015-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410015-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410015-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2950401631,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401631-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401631-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401631-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401631-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2950401658,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401658-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401658-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401658-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401658-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2950401653,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401653-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401653-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401653-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401653-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2950410017,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410017-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410017-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410017-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410017-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2950401639,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401639-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401639-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401639-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401639-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2950401632,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401632-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401632-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401632-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401632-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2950410031,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410031-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410031-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410031-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410031-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2950401633,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401633-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401633-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401633-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401633-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2950410030,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410030-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410030-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410030-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410030-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2950410034,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410034-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410034-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410034-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410034-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2950401691,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401691-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401691-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401691-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401691-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2975507712,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2975507712-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2975507712-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2975507712-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2975507712-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2950402660,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950402660-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950402660-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950402660-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950402660-3.jpg",
      "isLayout": true,
      "isCianLayout": false
     }
    ],
    "phones": [
     {
      "countryCode": "+7",
      "number": "9856337277"
     }
    ],
    "publishTerms": {
     "terms": [
      {
       "services": [
        "auction"
       ],
       "days": 7,
       "type": "periodical"
      },
      {
       "services": [
        "top3"
       ],
       "days": 30,
       "type": "periodical",
       "tariffIdentificator": {
        "tariffId": 1296848,
        "tariffGridType": "packageTariff"
       }
      }
     ],
     "autoprolong": true
    },
    "flatType": "studio",
    "roomType": "combined",
    "isApartments": true,
    "totalArea": "26.1",
    "livingArea": "14.0",
    "kitchenArea": "8.3",
    "loggiasCount": 0,
    "balconiesCount": 0,
    "windowsViewType": "yard",
    "separateWcsCount": 0,
    "combinedWcsCount": 1,
    "repairType": "design",
    "hasFurniture": true,
    "flags": {
     "isArchived": false,
     "isCommercialOwnershipVerified": false
    },
    "hasLift": false,
    "specialty": {
     "types": [],
     "additionalTypes": []
    },
    "isNeedHideExactAddress": false,
    "areaParts": [],
    "floorNumber": 1,
    "bargainTerms": {
     "price": 15399000,
     "priceType": "all",
     "currency": "rur",
     "mortgageAllowed": true,
     "saleType": "free",
     "includedOptions": [],
     "agentBonus": {
      "paymentType": "fixed",
      "value": 3,
      "currency": "rur"
     },
     "prices": {
      "rur": 15399000,
      "usd": 181313,
      "eur": 161526
     },
     "tags": []
    },
    "building": {
     "materialType": "brick",
     "floorsCount": 6,
     "buildYear": 1930,
     "parking": {
      "type": "ground"
     },
     "ceilingHeight": "3.2",
     "totalArea": "26.1",
     "liftTypes": [],
     "cranageTypes": [],
     "passengerLiftsCount": 0,
     "cargoLiftsCount": 0,
     "houseMaterialType": "brick"
    },
    "editDate": "2026-10-06T15:10:42.791498Z",
    "humanizedEditDate": "вчера, 15:10",
    "isInCpd": false,
    "isInHiddenBase": false,
    "isObjectHidden": false,
    "isClosedVisibility": false,
    "videos": [
     {
      "id": "5dac01c5f8aa6b1c7ad86a05712205a8",
      "url": "https://rutube.ru/play/embed/5dac01c5f8aa6b1c7ad86a05712205a8?referer=cian.ru",
      "type": "rutube",
      "previewUrl": "https://pic.rtbcdn.ru/video/2026-09-07/34/e9/34e9ffd8acea85485e4f66ac273b8513.jpg?size=l"
     }
    ],
    "demolishedInMoscowProgramm": false,
    "priceTotal": 15399000,
    "priceTotalRur": 15399000,
    "exportLinks": {
     "pdfUrl": "/export/pdf/sale/flat/333253868/",
     "docxUrl": "/export/docx/sale/flat/333253868/"
    },
    "passengerLiftsCount": 0,
    "cargoLiftsCount": 0,
    "added": "3 окт, 14:27",
    "valueAddedServices": {
     "isStandard": false,
     "isTop3": true,
     "isPremium": false
    },
    "promotion": {
     "isPerformanceVasPilot": false,
     "promotionDescription": "Топ + 3 960 ₽",
     "isCpcAuction": false
    },
    "categoriesIds": [
     1,
     100,
     110,
     111
    ],
    "publicationDate": 1787638997,
    "creationDate": "2026-08-25T09:23:17.947",
    "recoveryLink": "/razmestit-obyavlenie/333253868/",
    "trackingData": {
     "moId": 0,
     "oblId": 1,
     "cityId": 1,
     "fbRegion": "Москва",
     "fbCity": "Москва"
    },
    "editPhoto": "/realty/add2.aspx?id=333253868",
    "newEdit": "/razmestit-obyavlenie/?realty_id=333253868",
    "certificate": "https://www.cian.ru/newobjects/cian/certification/get?announcementId=333253868",
    "edit": "/realty/add1.aspx?id=333253868",
    "similarOffersLink": "",
    "similarOffersCount": 0,
    "buildersIds": [],
    "isImported": false,
    "userConfirmedFix": false,
    "timezone": 3,
    "isEnabledCallTracking": true,
    "callTrackingProvider": "mts",
    "rosreestrCheck": {
     "status": "success"
    },
    "isRentByParts": false,
    "isDuplicate": false,
    "userTrust": "notInvolved",
    "userTrustLevel": "notInvolved",
    "showWarningMessage": false,
    "moderationInfo": {
     "showContactWarningMessage": false
    },
    "isUnique": false,
    "isUniqueCheckDate": "2026-10-06",
    "isCianPartner": false,
    "isIllegalConstruction": false,
    "isSoldFurnished": true,
    "amenities": [
     "wideEntranceDoor",
     "extraWideBathroomAndToiletDoors",
     "extraWideRoomsAndKitchenDoors"
    ],
    "externalOfferUrl": "",
    "cianLayouts": null,
    "newbuilding": {
     "id": 0,
     "isFromBuilder": false,
     "isFromDeveloper": false,
     "isFromLeadFactory": false,
     "isFromSeller": false,
     "isReliable": false,
     "isTariffPremium": false,
     "isPremium": false,
     "name": "",
     "newbuildingFeatures": null,
     "showJkReliableFlag": false
    }
   },
   "features": [
    {
     "title": "О квартире",
     "id": "aboutFlat",
     "features": [
      {
       "value": "Вторичка / Апартаменты",
       "label": "Тип жилья"
      },
      {
       "value": "26,1 м²",
       "label": "Общая площадь"
      },
      {
       "value": "14 м²",
       "label": "Жилая площадь"
      },
      {
       "value": "8,3 м²",
       "label": "Площадь кухни"
      },
      {
       "value": "3,2 м",
       "label": "Высота потолков"
      },
      {
       "value": "1 совмещенный",
       "label": "Санузел"
      },
      {
       "value": "Во двор",
       "label": "Вид из окон"
      },
      {
       "value": "Дизайнерский",
       "label": "Ремонт"
      },
      {
       "value": "Не было",
       "label": "Перепланировка"
      },
      {
       "value": "Да",
       "label": "Продаётся с мебелью"
      }
     ]
    },
    {
     "title": "О доме",
     "id": "aboutBuilding",
     "features": [
      {
       "value": "1930",
       "label": "Год постройки"
      },
      {
       "value": "Индивидуальный проект",
       "label": "Строительная серия"
      },
      {
       "value": "Кирпичный",
       "label": "Тип дома"
      },
      {
       "value": "Деревянные",
       "label": "Тип перекрытий"
      },
      {
       "value": "8",
       "label": "Подъезды"
      },
      {
       "value": "Шлагбаум",
       "label": "Придомовая территория"
      },
      {
       "value": "Наземная",
       "label": "Парковка"
      },
      {
       "value": "Центральное",
       "label": "Отопление"
      },
      {
       "value": "Нет",
       "label": "Аварийность"
      },
      {
       "value": "Центральное",
       "label": "Газоснабжение"
      }
     ]
    },
    {
     "title": "Юридические особенности",
     "id": "legal",
     "features": [
      {
       "value": "Нет",
       "label": "Несовершеннолетние собственники"
      },
      {
       "value": "Не использовался",
       "label": "Материнский капитал при покупке"
      }
     ]
    }
   ],
   "factoids": [
    {
     "title": "Общая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/size.svg",
     "value": "26,1 м²"
    },
    {
     "title": "Жилая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/plan.svg",
     "value": "14 м²"
    },
    {
     "title": "Площадь кухни",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/kitchen.svg",
     "value": "8,3 м²"
    },
    {
     "title": "Этаж",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/floor.svg",
     "value": "1 из 6"
    },
    {
     "title": "Год постройки",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/build_year.svg",
     "value": "1930"
    }
   ],
   "priceChanges": [
    {
     "changeTime": "2026-08-25T06:23:20.843106Z",
     "priceData": {
      "currency": "rur",
      "price": 15399000
     }
    }
   ],
   "bti": {
    "houseData": {
     "yearRelease": 1930,
     "houseMaterialType": "none",
     "floorMax": 6,
     "entrances": 8,
     "flatCount": 118,
     "isEmergency": false,
     "demolishedInMoscowProgramm": false,
     "houseHeatSupplyType": "central",
     "houseOverhaulFundType": "regionalOp",
     "houseGasSupplyType": "central",
     "houseOverlapType": "wood",
     "lifts": 0,
     "seriesName": "Индивидуальный проект"
    }
   },
   "stats": {
    "totalViewsFormattedString": "3412 просмотров, 294 за сегодня"
   },
   "priceInfo": {
    "pricePerSquareValue": 590000
   },
   "serp": {
    "id": 333253868,
    "title": "Квартира-студия, 26,1 м²/2 мин...",
    "description": "Сейчас действует специальное предложение для тех кто подойдет на просмотр с 20.09-20.10. Обязательно пишите или звоните. Запишу на просмотр \n\nПродам новые апартаменты. Один собственник. Документы готовы. На отдельном кадастре. \n\nВсё новое. Ремонт, мебель, техника. После покупки ничего докупать не нужно. Все фото настоящие. На просмотре вы увидите именно то, что на фотографиях.\n\n\n В 2 минутах от метро Белорусская.\n\nПодойдет если покупаете первую квартиру. Если нужна квартира в Москве для себя. Для студента тоже отличный вариант.\n\nДом после хорошего ремонта. Закрытый двор со шлагбаумом. Подъезд чистый.\n\n В квартире очень тихо. отличная шумоизоляция. Приятные соседи. \n\nПотолки 3,2 метра. За счет этого и двух окон квартира кажется просторнее.\n\nУстановлена вся техника. Кондиционер. Холодильник.  Стиральная машина. Водонагреватель. Есть кухня. Места для хранения. Спальное место.\n\nДо метро Белорусская около 2 минут пешком. Рядом Белая площадь, Депо, кафе, рестораны, магазины, фитнес.\n\nПишите или звоните. Покажу апартаменты в удобное время. Продам квартиру вторичка в Москве.",
    "formattedFullPrice": "15 399 000 ₽",
    "formattedFullInfo": "Студия  ·  26,1 м²  ·  1/6 этаж",
    "formattedAdditionalInfo": "Свободная продажа, возможна ипотека",
    "humanizedTimedelta": "три дня назад",
    "geo": {
     "highways": [],
     "buildingAddress": null,
     "jk": null,
     "coordinates": {
      "lat": 55.774467,
      "lng": 37.581613
     },
     "districts": [
      {
       "locationId": 1,
       "parentId": 4,
       "fullName": "р-н Пресненский",
       "id": 18,
       "name": "Пресненский",
       "title": "р-н Пресненский",
       "geoType": "district",
       "type": "raion",
       "qs": "deal_type=sale&district%5B0%5D=18&engine_version=2&object_type%5B0%5D=1&offer_type=flat"
      },
      {
       "locationId": 1,
       "parentId": null,
       "fullName": "ЦАО",
       "id": 4,
       "name": "ЦАО",
       "title": "ЦАО",
       "geoType": "district",
       "type": "okrug",
       "qs": "deal_type=sale&district%5B0%5D=4&engine_version=2&object_type%5B0%5D=1&offer_type=flat"
      }
     ],
     "railways": [
      {
       "distance": 1,
       "time": 10,
       "id": 694,
       "name": "Москва (Белорусский вокзал)",
       "geoType": "railway",
       "directionIds": [
        11
       ],
       "travelType": "byFoot",
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&railway%5B0%5D=694"
      },
      {
       "distance": 3,
       "time": 5,
       "id": 699,
       "name": "Беговая",
       "geoType": "railway",
       "directionIds": [
        11
       ],
       "travelType": "byCar",
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&railway%5B0%5D=699"
      },
      {
       "distance": 5,
       "time": 9,
       "id": 689,
       "name": "Москва (Савёловский вокзал)",
       "geoType": "railway",
       "directionIds": [
        19
       ],
       "travelType": "byCar",
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&railway%5B0%5D=689"
      }
     ],
     "userInput": "Россия, Москва, улица Грузинский Вал, 26с1",
     "countryId": 138,
     "undergrounds": [
      {
       "lineColor": "00701A",
       "time": 2,
       "releaseYear": null,
       "cianId": null,
       "lineId": 3,
       "transportType": "walk",
       "isDefault": true,
       "id": 15,
       "name": "Белорусская",
       "underConstruction": false,
       "qs": "deal_type=sale&engine_version=2&metro%5B0%5D=15&object_type%5B0%5D=1&offer_type=flat",
       "lineType": null
      },
      {
       "lineColor": "40B280",
       "time": 5,
       "releaseYear": null,
       "cianId": null,
       "lineId": 34,
       "transportType": "walk",
       "isDefault": false,
       "id": 514,
       "name": "Белорусская",
       "underConstruction": false,
       "qs": "deal_type=sale&engine_version=2&metro%5B0%5D=514&object_type%5B0%5D=1&offer_type=flat",
       "lineType": "mcd4"
      },
      {
       "lineColor": "00701A",
       "time": 14,
       "releaseYear": null,
       "cianId": null,
       "lineId": 3,
       "transportType": "walk",
       "isDefault": false,
       "id": 68,
       "name": "Маяковская",
       "underConstruction": false,
       "qs": "deal_type=sale&engine_version=2&metro%5B0%5D=68&object_type%5B0%5D=1&offer_type=flat",
       "lineType": null
      },
      {
       "lineColor": "A2A5B5",
       "time": 20,
       "releaseYear": null,
       "cianId": null,
       "lineId": 9,
       "transportType": "walk",
       "isDefault": false,
       "id": 71,
       "name": "Менделеевская",
       "underConstruction": false,
       "qs": "deal_type=sale&engine_version=2&metro%5B0%5D=71&object_type%5B0%5D=1&offer_type=flat",
       "lineType": null
      }
     ],
     "address": [
      {
       "isFormingAddress": true,
       "fullName": "Москва",
       "shortName": "Москва",
       "id": 1,
       "name": "Москва",
       "locationTypeId": 1,
       "title": "Москва",
       "geoType": "location",
       "type": "location",
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&region=1"
      },
      {
       "isFormingAddress": null,
       "fullName": "ЦАО",
       "shortName": "ЦАО",
       "id": 4,
       "name": "ЦАО",
       "locationTypeId": null,
       "title": "ЦАО",
       "geoType": "district",
       "type": "okrug",
       "qs": "deal_type=sale&district%5B0%5D=4&engine_version=2&object_type%5B0%5D=1&offer_type=flat"
      },
      {
       "isFormingAddress": null,
       "fullName": "р-н Пресненский",
       "shortName": "р-н Пресненский",
       "id": 18,
       "name": "Пресненский",
       "locationTypeId": null,
       "title": "р-н Пресненский",
       "geoType": "district",
       "type": "raion",
       "qs": "deal_type=sale&district%5B0%5D=18&engine_version=2&object_type%5B0%5D=1&offer_type=flat"
      },
      {
       "isFormingAddress": null,
       "fullName": "м. Белорусская",
       "shortName": "м. Белорусская",
       "id": 15,
       "name": "Белорусская",
       "locationTypeId": null,
       "title": "м. Белорусская",
       "geoType": "underground",
       "type": "metro",
       "qs": "deal_type=sale&engine_version=2&metro%5B0%5D=15&object_type%5B0%5D=1&offer_type=flat"
      },
      {
       "isFormingAddress": true,
       "fullName": "улица Грузинский Вал",
       "shortName": "ул. Грузинский Вал",
       "id": 925,
       "name": "Грузинский Вал",
       "locationTypeId": null,
       "title": "улица Грузинский Вал",
       "geoType": "street",
       "type": "street",
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&street%5B0%5D=925"
      },
      {
       "isFormingAddress": true,
       "fullName": "26С1",
       "shortName": "26С1",
       "id": 42877,
       "name": "26С1",
       "locationTypeId": null,
       "title": "26С1",
       "geoType": "house",
       "type": "house",
       "qs": "deal_type=sale&engine_version=2&house%5B0%5D=42877&object_type%5B0%5D=1&offer_type=flat"
      }
     ],
     "sortedGeoIds": [
      {
       "type": "underground",
       "id": 15
      },
      {
       "type": "underground",
       "id": 514
      },
      {
       "type": "underground",
       "id": 68
      },
      {
       "type": "underground",
       "id": 71
      },
      {
       "type": "railway",
       "id": 694
      },
      {
       "type": "railway",
       "id": 699
      },
      {
       "type": "railway",
       "id": 689
      },
      {
       "type": "district",
       "id": 18
      },
      {
       "type": "district",
       "id": 4
      }
     ]
    },
    "isApartments": true,
    "isByHomeowner": false,
    "isUnique": false,
    "isSoldFurnished": true,
    "isRosreestrChecked": true,
    "offerFeatureLabels": [],
    "offerFeatureLabelsV2": [],
    "photos": [
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410021-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410021-4.jpg",
      "isDefault": true,
      "id": 2950410021,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410021-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410021-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410022-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410022-4.jpg",
      "isDefault": false,
      "id": 2950410022,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410022-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410022-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410027-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410027-4.jpg",
      "isDefault": false,
      "id": 2950410027,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410027-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410027-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2961512548-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2961512548-4.jpg",
      "isDefault": false,
      "id": 2961512548,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2961512548-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2961512548-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410028-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410028-4.jpg",
      "isDefault": false,
      "id": 2950410028,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410028-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410028-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410029-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410029-4.jpg",
      "isDefault": false,
      "id": 2950410029,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410029-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410029-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401652-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401652-4.jpg",
      "isDefault": false,
      "id": 2950401652,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401652-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401652-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401690-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401690-4.jpg",
      "isDefault": false,
      "id": 2950401690,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401690-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401690-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410015-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410015-4.jpg",
      "isDefault": false,
      "id": 2950410015,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410015-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410015-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401631-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401631-4.jpg",
      "isDefault": false,
      "id": 2950401631,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401631-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401631-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401658-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401658-4.jpg",
      "isDefault": false,
      "id": 2950401658,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401658-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401658-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401653-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401653-4.jpg",
      "isDefault": false,
      "id": 2950401653,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401653-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401653-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410017-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410017-4.jpg",
      "isDefault": false,
      "id": 2950410017,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410017-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410017-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401639-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401639-4.jpg",
      "isDefault": false,
      "id": 2950401639,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401639-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401639-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401632-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401632-4.jpg",
      "isDefault": false,
      "id": 2950401632,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401632-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401632-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410031-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410031-4.jpg",
      "isDefault": false,
      "id": 2950410031,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410031-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410031-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401633-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401633-4.jpg",
      "isDefault": false,
      "id": 2950401633,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401633-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401633-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410030-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410030-4.jpg",
      "isDefault": false,
      "id": 2950410030,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410030-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410030-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410034-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410034-4.jpg",
      "isDefault": false,
      "id": 2950410034,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410034-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950410034-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401691-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401691-4.jpg",
      "isDefault": false,
      "id": 2950401691,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401691-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950401691-1.jpg"
     },
     {
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2975507712-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2975507712-4.jpg",
      "isDefault": false,
      "id": 2975507712,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2975507712-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2975507712-1.jpg"
     },
     {
      "isLayout": true,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950402660-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950402660-4.jpg",
      "isDefault": false,
      "id": 2950402660,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950402660-2.jpg",
      "rotateDegree": null,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-gruzinskiy-val-2950402660-1.jpg"
     }
    ],
    "photoFeatureIcons": [
     {
      "type": "hasVideo",
      "text": "Объявление с видео",
      "link": "https://www.cian.ru/sale/flat/333253868/"
     }
    ],
    "promotion": {
     "isPerformanceVasPilot": false,
     "promotionDescription": "Топ + 3 960 ₽"
    },
    "bargainTerms": {
     "priceType": "all",
     "leaseType": null,
     "price": 15399000,
     "priceRur": 15399000,
     "currency": "rur",
     "paymentPeriod": null,
     "priceForWorkplace": null,
     "vatPrice": null,
     "saleType": "free",
     "agentBonus": {
      "value": 3,
      "currency": "rur",
      "paymentType": "fixed"
     },
     "bargainAllowed": null,
     "clientFee": null,
     "tax": null,
     "mortgageAllowed": true,
     "deposit": null,
     "leaseTermType": null,
     "tags": [],
     "utilitiesTerms": null,
     "vatType": null,
     "agentFee": null
    },
    "roomsCount": null,
    "floorNumber": 1,
    "totalArea": "26.1",
    "building": {
     "buildYear": 1930,
     "accessType": null,
     "heatingType": null,
     "classType": null,
     "deadline": null,
     "floorsCount": 6,
     "passengerLiftsCount": 0,
     "parking": {
      "locationType": null,
      "isAvailable": null,
      "placesCount": null,
      "isFree": null,
      "priceMonthly": null,
      "type": "ground",
      "priceEntry": null,
      "currency": null,
      "purposeType": null
     },
     "materialType": "brick",
     "type": null,
     "cargoLiftsCount": 0
    },
    "fullUrl": "https://www.cian.ru/sale/flat/333253868/",
    "phones": [
     {
      "number": "9856337277",
      "countryCode": "7"
     }
    ],
    "user": {
     "cianUserId": "143255121",
     "isAgent": true,
     "accountType": "specialist",
     "agentAvatarUrl": "https://www.cian.ru/api/get-avatar/?i=76592024&t=2&p=2&timestamp=1787686148",
     "agentModerationInfo": {
      "isUserIdentified": true,
      "isUserIdentifiedByDocuments": true,
      "qualityLevelInfo": {
       "hasVerifiedDocuments": true,
       "highResponsibility": false,
       "isBlocked": false,
       "isSuperAgent": false,
       "isSuperHost": false,
       "levelName": "Низкий уровень",
       "levelOrder": 1,
       "levelSystemName": "low",
       "showHighResponsibility": false,
       "showSuperAgent": false,
       "showSuperHost": false
      },
      "showUserIdentifiedByDocuments": true
     },
     "isChatsEnabled": true
    },
    "goodPrice": {
     "priceLabel": "Хорошая цена",
     "estimationRange": "13,5—16,5 млн ₽"
    }
   },
   "files": [
    {
     "id": 2950410021,
     "isDefault": true,
     "full": "333253868-1.jpg",
     "mini": "333253868-1m.jpg"
    },
    {
     "id": 2950410022,
     "isDefault": false,
     "full": "333253868-2.jpg",
     "mini": "333253868-2m.jpg"
    },
    {
     "id": 2950410027,
     "isDefault": false,
     "full": "333253868-3.jpg",
     "mini": "333253868-3m.jpg"
    },
    {
     "id": 2961512548,
     "isDefault": false,
     "full": "333253868-4.jpg",
     "mini": "333253868-4m.jpg"
    },
    {
     "id": 2950410028,
     "isDefault": false,
     "full": "333253868-5.jpg",
     "mini": "333253868-5m.jpg"
    }
   ],
   "media": {
    "avatar": "333253868-avatar.jpg"
   }
  },
  {
   "source": "https://www.cian.ru/sale/flat/328747534/",
   "seenAt": "2026-10-06T21:38:50.758Z",
   "offer": {
    "category": "flatSale",
    "status": "published",
    "dealType": "sale",
    "offerType": "flat",
    "geo": {
     "address": [
      {
       "fullName": "Москва",
       "id": 1,
       "locationTypeId": 1,
       "name": "Москва",
       "shortName": "Москва",
       "type": "location",
       "url": "https://www.cian.ru/kupit-3-komnatnuyu-kvartiru/"
      },
      {
       "fullName": "ЦАО",
       "id": 4,
       "locationTypeId": -1,
       "name": "ЦАО",
       "shortName": "ЦАО",
       "type": "okrug",
       "url": "https://www.cian.ru/kupit-3-komnatnuyu-kvartiru-moskva-cao-044/"
      },
      {
       "fullName": "район Таганский",
       "id": 19,
       "locationTypeId": -1,
       "name": "Таганский",
       "shortName": "р-н Таганский",
       "type": "raion",
       "url": "https://www.cian.ru/kupit-3-komnatnuyu-kvartiru-moskva-taganskiy-0419/"
      },
      {
       "fullName": "Славянская площадь",
       "id": 2101,
       "locationTypeId": -1,
       "name": "Славянская",
       "shortName": "Славянская пл.",
       "type": "street",
       "url": "https://www.cian.ru/kupit-3-komnatnuyu-kvartiru-moskva-slavyanskaya-ploshcad-022101/"
      },
      {
       "fullName": "2/5с1",
       "id": 10471291,
       "locationTypeId": -1,
       "name": "2/5с1",
       "shortName": "2/5с1",
       "type": "house",
       "url": "https://www.cian.ru/cat.php?deal_type=sale&engine_version=2&house%5B0%5D=10471291&offer_type=flat&room3=1"
      }
     ],
     "coordinates": {
      "lat": 55.752541,
      "lng": 37.635727
     },
     "highways": [],
     "jk": {
      "id": 1565486,
      "name": "LUMIN",
      "house": {
       "id": 3022278,
       "name": "Славянская, 2/5с1 (Дом 2/5с1)"
      },
      "gaGeo": {
       "moId": 0,
       "oblId": 1,
       "cityId": 1
      },
      "fullUrl": "https://www.cian.ru/zhiloy-kompleks-lumin-moskva-1565486/",
      "fullUrlTemplate": "{request_scheme}://zhk-lumin-i.{host}/",
      "webSiteUrl": "http://luminhouse.ru/"
     },
     "railways": [
      {
       "id": 687,
       "directionIds": [
        12,
        15
       ],
       "distance": "2.0",
       "time": 24,
       "name": "Москва (Курский вокзал)",
       "travelType": "byFoot"
      },
      {
       "id": 687,
       "directionIds": [
        12,
        15
       ],
       "distance": "3.0",
       "time": 6,
       "name": "Москва (Курский вокзал)",
       "travelType": "byCar"
      },
      {
       "id": 690,
       "directionIds": [
        17
       ],
       "distance": "3.0",
       "time": 39,
       "name": "Москва (Павелецкий вокзал)",
       "travelType": "byFoot"
      },
      {
       "id": 698,
       "directionIds": [
        12,
        15
       ],
       "distance": "3.0",
       "time": 6,
       "name": "Серп и молот",
       "travelType": "byCar"
      },
      {
       "id": 698,
       "directionIds": [
        12,
        15
       ],
       "distance": "3.0",
       "time": 42,
       "name": "Серп и молот",
       "travelType": "byFoot"
      },
      {
       "id": 690,
       "directionIds": [
        17
       ],
       "distance": "4.0",
       "time": 10,
       "name": "Москва (Павелецкий вокзал)",
       "travelType": "byCar"
      }
     ],
     "undergrounds": [
      {
       "id": 47,
       "name": "Китай-город",
       "lineColor": "FF7F00",
       "travelType": "walk",
       "travelTime": 2,
       "url": "https://www.cian.ru/kupit-3-komnatnuyu-kvartiru-moskva-metro-kitay-gorod-47/",
       "underConstruction": false
      },
      {
       "id": 64,
       "name": "Лубянка",
       "lineColor": "CF0000",
       "travelType": "walk",
       "travelTime": 12,
       "url": "https://www.cian.ru/kupit-3-komnatnuyu-kvartiru-moskva-metro-lubyanka-64/",
       "underConstruction": false
      },
      {
       "id": 96,
       "name": "Площадь Революции",
       "lineColor": "03238B",
       "travelType": "walk",
       "travelTime": 14,
       "url": "https://www.cian.ru/kupit-3-komnatnuyu-kvartiru-moskva-metro-ploshcad-revolyucii-96/",
       "underConstruction": false
      },
      {
       "id": 125,
       "name": "Театральная",
       "lineColor": "00701A",
       "travelType": "walk",
       "travelTime": 17,
       "url": "https://www.cian.ru/kupit-3-komnatnuyu-kvartiru-moskva-metro-teatralnaya-125/",
       "underConstruction": false
      },
      {
       "id": 84,
       "name": "Охотный ряд",
       "lineColor": "CF0000",
       "travelType": "walk",
       "travelTime": 17,
       "url": "https://www.cian.ru/kupit-3-komnatnuyu-kvartiru-moskva-metro-ohotnyy-ryad-84/",
       "underConstruction": false
      },
      {
       "id": 58,
       "name": "Кузнецкий мост",
       "lineColor": "94007C",
       "travelType": "walk",
       "travelTime": 17,
       "url": "https://www.cian.ru/kupit-3-komnatnuyu-kvartiru-moskva-metro-kuzneckiy-most-58/",
       "underConstruction": false
      }
     ]
    },
    "id": 328747534,
    "objectGuid": "e771e5b6-a1c2-4edf-88ad-795030c5fdb8",
    "cianId": 328747534,
    "userId": 140116723,
    "publishedUserId": 140116723,
    "cianUserId": 140116723,
    "isByHomeowner": false,
    "title": "Пентхаус с собственной террасой",
    "description": "Цена указана со скидкой. Апартаменты продаются без мебели\nРассрочка 0% на 12 месяцев при первоначальном взносе от 20%.\n\nПентхаус в клубном доме Lumin — в самом центре Москвы, в нескольких минутах пешком от парка Зарядье, Кремля и исторических улиц Китай-города.\n\nОбщая площадь пентхауса составляет 213,4 кв. м. Высота потолков — 3,6 м. Свободная планировка позволяет создать индивидуальное пространство под ваш образ жизни: просторную кухню-гостиную с дровяным камином, мастер-спальню с гардеробной и ванной комнатой, две дополнительные спальни, кабинет, постирочную и системы хранения.\n\nОсобое преимущество лота — собственная терраса площадью 36,9 кв. м. и видом на кафедральный собор Святых Петра и Павла. Это редкая возможность иметь собственную террасу в самом сердце города — для отдыха, приема гостей и неспешных вечеров на свежем воздухе.\n\nLumin — камерный клубный дом всего на 54 апартамента и 4 пентхауса. Здесь ценят пространство, спокойствие и возможность жить в центре города без ощущения большого жилого комплекса.\n\nВ клубном доме предусмотрен двухуровневый подземный паркинг, современные инженерные системы, круглосуточный сервис и безопасность.",
    "photos": [
     {
      "id": 2977588813,
      "isDefault": true,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588813-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588813-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588813-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588813-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2977588790,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588790-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588790-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588790-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588790-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2977593863,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977593863-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977593863-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977593863-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977593863-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2977593868,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977593868-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977593868-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977593868-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977593868-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2977588786,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588786-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588786-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588786-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588786-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2977588809,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588809-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588809-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588809-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588809-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2977593772,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977593772-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977593772-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977593772-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977593772-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2922662776,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922662776-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922662776-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922662776-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922662776-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2922663264,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663264-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663264-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663264-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663264-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2922663707,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663707-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663707-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663707-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663707-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2922663272,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663272-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663272-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663272-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663272-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2922664311,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922664311-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922664311-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922664311-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922664311-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2922663322,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663322-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663322-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663322-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663322-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2905005184,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2905005184-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2905005184-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2905005184-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2905005184-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2905005197,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2905005197-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2905005197-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2905005197-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2905005197-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2905006019,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2905006019-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2905006019-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2905006019-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2905006019-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2922676179,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676179-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676179-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676179-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676179-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2922676159,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676159-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676159-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676159-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676159-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2922676177,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676177-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676177-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676177-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676177-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2922667295,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922667295-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922667295-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922667295-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922667295-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2922668060,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922668060-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922668060-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922668060-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922668060-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2922668602,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922668602-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922668602-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922668602-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922668602-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2922676178,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676178-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676178-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676178-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676178-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2922670430,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922670430-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922670430-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922670430-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922670430-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2922676174,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676174-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676174-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676174-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676174-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2922667423,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922667423-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922667423-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922667423-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922667423-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2851495011,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2851495011-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2851495011-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2851495011-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2851495011-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2922675832,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922675832-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922675832-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922675832-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922675832-3.jpg",
      "isLayout": true,
      "isCianLayout": false
     }
    ],
    "phones": [
     {
      "countryCode": "+7",
      "number": "9856277323"
     }
    ],
    "publishTerms": {
     "terms": [
      {
       "services": [
        "auction"
       ],
       "days": 1,
       "type": "dailyLimited"
      },
      {
       "services": [
        "top3"
       ],
       "days": 30,
       "type": "periodical",
       "tariffIdentificator": {
        "tariffId": 1296852,
        "tariffGridType": "packageTariff"
       }
      }
     ],
     "autoprolong": true
    },
    "flatType": "rooms",
    "roomType": "both",
    "isApartments": true,
    "totalArea": "213.4",
    "livingArea": "79.4",
    "kitchenArea": "65.2",
    "loggiasCount": 0,
    "balconiesCount": 0,
    "separateWcsCount": 2,
    "combinedWcsCount": 2,
    "repairType": "no",
    "flags": {
     "isArchived": false,
     "isCommercialOwnershipVerified": false
    },
    "hasLift": true,
    "specialty": {
     "types": [],
     "additionalTypes": []
    },
    "isNeedHideExactAddress": false,
    "areaParts": [],
    "roomsCount": 3,
    "floorNumber": 8,
    "bargainTerms": {
     "price": 260348000,
     "priceType": "all",
     "currency": "rur",
     "mortgageAllowed": true,
     "saleType": "free",
     "includedOptions": [],
     "prices": {
      "rur": 260348000,
      "usd": 3065410,
      "eur": 2730879
     },
     "tags": []
    },
    "building": {
     "materialType": "monolithBrick",
     "floorsCount": 8,
     "buildYear": 2022,
     "parking": {
      "type": "underground"
     },
     "ceilingHeight": "3.6",
     "totalArea": "213.4",
     "liftTypes": [],
     "cranageTypes": [],
     "passengerLiftsCount": 2,
     "cargoLiftsCount": 2,
     "houseMaterialType": "monolithBrick"
    },
    "editDate": "2026-10-06T19:25:31.514800Z",
    "humanizedEditDate": "вчера, 19:25",
    "isInCpd": false,
    "isInHiddenBase": false,
    "isObjectHidden": false,
    "isClosedVisibility": false,
    "videos": [],
    "priceTotal": 260348000,
    "priceTotalRur": 260348000,
    "exportLinks": {
     "pdfUrl": "/export/pdf/sale/flat/328747534/",
     "docxUrl": "/export/docx/sale/flat/328747534/"
    },
    "passengerLiftsCount": 2,
    "cargoLiftsCount": 2,
    "added": "4 окт, 19:03",
    "valueAddedServices": {
     "isStandard": false,
     "isTop3": true,
     "isPremium": false
    },
    "promotion": {
     "isPerformanceVasPilot": false,
     "promotionDescription": "Топ + 3 600 ₽",
     "isCpcAuction": false
    },
    "categoriesIds": [
     1,
     100,
     110,
     111
    ],
    "publicationDate": 1775644317,
    "creationDate": "2026-04-08T13:31:57.403",
    "recoveryLink": "/razmestit-obyavlenie/328747534/",
    "isFromBuilder": false,
    "isFromSeller": false,
    "isFromLeadFactory": false,
    "trackingData": {
     "moId": 0,
     "oblId": 1,
     "cityId": 1,
     "fbRegion": "Москва",
     "fbCity": "Москва"
    },
    "editPhoto": "/realty/add2.aspx?id=328747534",
    "newEdit": "/razmestit-obyavlenie/?realty_id=328747534",
    "certificate": "https://www.cian.ru/newobjects/cian/certification/get?announcementId=328747534",
    "edit": "/realty/add1.aspx?id=328747534",
    "similarOffersLink": "",
    "similarOffersCount": 0,
    "buildersIds": [
     11087
    ],
    "builderId": 11087,
    "isImported": false,
    "userConfirmedFix": false,
    "newbuilding": {
     "id": 1565486,
     "name": "LUMIN (ЛЮМИН)",
     "house": {
      "isReliable": false,
      "isFinished": true,
      "finishDate": {
       "quarter": 4,
       "year": 2022
      },
      "id": 3022278,
      "name": "Славянская, 2/5с1 (Дом 2/5с1)"
     },
     "isFromDeveloper": false,
     "isFromBuilder": false,
     "isFromSeller": false,
     "isFromLeadFactory": false,
     "showJkReliableFlag": false,
     "isFichering": false,
     "isFicheringPlus": false,
     "isPremium": false,
     "newbuildingFeatures": {
      "imagesCount": 24,
      "firstImageUrl": "https://images.cdn-cian.ru/images/82/615/951/lumin-moskva-jk-1595162859-6.jpg",
      "videosCount": 0,
      "deadlineInfo": "Сдан"
     },
     "isReliable": false,
     "isTariffPremium": false
    },
    "timezone": 3,
    "isEnabledCallTracking": true,
    "callTrackingProvider": "mts",
    "rosreestrCheck": {
     "status": "fail"
    },
    "isRentByParts": false,
    "isDuplicate": false,
    "userTrust": "notInvolved",
    "userTrustLevel": "notInvolved",
    "showWarningMessage": false,
    "moderationInfo": {
     "showContactWarningMessage": false
    },
    "isUnique": false,
    "isUniqueCheckDate": "2026-10-06",
    "isCianPartner": false,
    "isIllegalConstruction": false,
    "amenities": [],
    "externalOfferUrl": "",
    "cianLayouts": null,
    "demolishedInMoscowProgramm": false
   },
   "features": [
    {
     "title": "О квартире",
     "id": "aboutFlat",
     "features": [
      {
       "value": "Вторичка / Апартаменты",
       "label": "Тип жилья"
      },
      {
       "value": "213,4 м²",
       "label": "Общая площадь"
      },
      {
       "value": "79,4 м²",
       "label": "Жилая площадь"
      },
      {
       "value": "65,2 м²",
       "label": "Площадь кухни"
      },
      {
       "value": "3,6 м",
       "label": "Высота потолков"
      },
      {
       "value": "2 совмещенных, 2 раздельных",
       "label": "Санузел"
      },
      {
       "value": "Без ремонта",
       "label": "Ремонт"
      },
      {
       "value": "Не было",
       "label": "Перепланировка"
      }
     ]
    },
    {
     "title": "О доме",
     "id": "aboutBuilding",
     "features": [
      {
       "value": "2 пассажирских, 2 грузовых",
       "label": "Количество лифтов"
      },
      {
       "value": "Монолитно-кирпичный",
       "label": "Тип дома"
      },
      {
       "value": "Подземная",
       "label": "Парковка"
      }
     ]
    },
    {
     "title": "Юридические особенности",
     "id": "legal",
     "features": [
      {
       "value": "Нет",
       "label": "Несовершеннолетние собственники"
      },
      {
       "value": "Не использовался",
       "label": "Материнский капитал при покупке"
      }
     ]
    }
   ],
   "factoids": [
    {
     "title": "Общая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/size.svg",
     "value": "213,4 м²"
    },
    {
     "title": "Жилая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/plan.svg",
     "value": "79,4 м²"
    },
    {
     "title": "Площадь кухни",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/kitchen.svg",
     "value": "65,2 м²"
    },
    {
     "title": "Этаж",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/floor.svg",
     "value": "8 из 8"
    },
    {
     "title": "Год постройки",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/build_year.svg",
     "value": "2022"
    }
   ],
   "priceChanges": [
    {
     "changeTime": "2026-08-10T11:02:23.886500Z",
     "priceData": {
      "currency": "rur",
      "price": 260348000
     }
    },
    {
     "changeTime": "2026-06-22T19:09:20.756054Z",
     "priceData": {
      "currency": "rur",
      "price": 249678000
     }
    },
    {
     "changeTime": "2026-04-08T10:32:00.904387Z",
     "priceData": {
      "currency": "rur",
      "price": 249464600
     }
    }
   ],
   "bti": null,
   "stats": {
    "totalViewsFormattedString": "1543 просмотра, 106 за сегодня"
   },
   "priceInfo": {
    "pricePerSquareValue": 1220000
   },
   "serp": {
    "id": 328747534,
    "title": "Пентхаус с собственной террасой",
    "description": "Цена указана со скидкой. Апартаменты продаются без мебели\nРассрочка 0% на 12 месяцев при первоначальном взносе от 20%.\n\nПентхаус в клубном доме Lumin — в самом центре Москвы, в нескольких минутах пешком от парка Зарядье, Кремля и исторических улиц Китай-города.\n\nОбщая площадь пентхауса составляет 213,4 кв. м. Высота потолков — 3,6 м. Свободная планировка позволяет создать индивидуальное пространство под ваш образ жизни: просторную кухню-гостиную с дровяным камином, мастер-спальню с гардеробной и ванной комнатой, две дополнительные спальни, кабинет, постирочную и системы хранения.\n\nОсобое преимущество лота — собственная терраса площадью 36,9 кв. м. и видом на кафедральный собор Святых Петра и Павла. Это редкая возможность иметь собственную террасу в самом сердце города — для отдыха, приема гостей и неспешных вечеров на свежем воздухе.\n\nLumin — камерный клубный дом всего на 54 апартамента и 4 пентхауса. Здесь ценят пространство, спокойствие и возможность жить в центре города без ощущения большого жилого комплекса.\n\nВ клубном доме предусмотрен двухуровневый подземный паркинг, современные инженерные системы, круглосуточный сервис и безопасность. Продам квартиру вторичка В Москве.",
    "formattedFullPrice": "260 348 000 ₽",
    "formattedFullInfo": "3-комн. апарт.  ·  213,4 м²  ·  8/8 этаж",
    "formattedAdditionalInfo": "Свободная продажа, возможна ипотека",
    "humanizedTimedelta": "вчера",
    "geo": {
     "coordinates": {
      "lat": 55.752541,
      "lng": 37.635727
     },
     "userInput": "Россия, Москва, Славянская площадь, 2/5с1",
     "jk": {
      "fullUrl": "https://zhk-lumin-i.cian.ru/",
      "webSiteUrl": "http://luminhouse.ru/",
      "house": {
       "id": 3022278,
       "name": "Славянская, 2/5с1 (Дом 2/5с1)"
      },
      "displayName": "ЖК «LUMIN»",
      "webSiteUrlUtm": "http://luminhouse.ru/?utm_source=cian&utm_medium=kartochka_cian&utm_campaign=1565486",
      "name": "LUMIN",
      "developer": null,
      "id": 1565486,
      "gaGeo": {
       "moId": 0,
       "cityId": 1,
       "oblId": 1
      }
     },
     "railways": [
      {
       "travelType": "byCar",
       "distance": 3,
       "geoType": "railway",
       "time": 6,
       "name": "Москва (Курский вокзал)",
       "id": 687,
       "directionIds": [
        12,
        15
       ],
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&railway%5B0%5D=687"
      },
      {
       "travelType": "byCar",
       "distance": 3,
       "geoType": "railway",
       "time": 6,
       "name": "Серп и молот",
       "id": 698,
       "directionIds": [
        12,
        15
       ],
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&railway%5B0%5D=698"
      },
      {
       "travelType": "byCar",
       "distance": 4,
       "geoType": "railway",
       "time": 10,
       "name": "Москва (Павелецкий вокзал)",
       "id": 690,
       "directionIds": [
        17
       ],
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&railway%5B0%5D=690"
      }
     ],
     "address": [
      {
       "fullName": "Москва",
       "type": "location",
       "isFormingAddress": true,
       "title": "Москва",
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&region=1",
       "geoType": "location",
       "shortName": "Москва",
       "locationTypeId": 1,
       "name": "Москва",
       "id": 1
      },
      {
       "fullName": "ЦАО",
       "type": "okrug",
       "isFormingAddress": null,
       "title": "ЦАО",
       "qs": "deal_type=sale&district%5B0%5D=4&engine_version=2&object_type%5B0%5D=1&offer_type=flat",
       "geoType": "district",
       "shortName": "ЦАО",
       "locationTypeId": null,
       "name": "ЦАО",
       "id": 4
      },
      {
       "fullName": "р-н Таганский",
       "type": "raion",
       "isFormingAddress": null,
       "title": "р-н Таганский",
       "qs": "deal_type=sale&district%5B0%5D=19&engine_version=2&object_type%5B0%5D=1&offer_type=flat",
       "geoType": "district",
       "shortName": "р-н Таганский",
       "locationTypeId": null,
       "name": "Таганский",
       "id": 19
      },
      {
       "fullName": "м. Китай-город",
       "type": "metro",
       "isFormingAddress": null,
       "title": "м. Китай-город",
       "qs": "deal_type=sale&engine_version=2&metro%5B0%5D=47&object_type%5B0%5D=1&offer_type=flat",
       "geoType": "underground",
       "shortName": "м. Китай-город",
       "locationTypeId": null,
       "name": "Китай-город",
       "id": 47
      },
      {
       "fullName": "Славянская площадь",
       "type": "street",
       "isFormingAddress": true,
       "title": "Славянская площадь",
       "qs": "deal_type=sale&engine_version=2&object_type%5B0%5D=1&offer_type=flat&street%5B0%5D=2101",
       "geoType": "street",
       "shortName": "Славянская пл.",
       "locationTypeId": null,
       "name": "Славянская",
       "id": 2101
      },
      {
       "fullName": "2/5с1",
       "type": "house",
       "isFormingAddress": true,
       "title": "2/5с1",
       "qs": "deal_type=sale&engine_version=2&house%5B0%5D=10471291&object_type%5B0%5D=1&offer_type=flat",
       "geoType": "house",
       "shortName": "2/5с1",
       "locationTypeId": null,
       "name": "2/5с1",
       "id": 10471291
      }
     ],
     "countryId": 138,
     "buildingAddress": null,
     "highways": [],
     "undergrounds": [
      {
       "lineId": 5,
       "releaseYear": null,
       "qs": "deal_type=sale&engine_version=2&metro%5B0%5D=47&object_type%5B0%5D=1&offer_type=flat",
       "transportType": "walk",
       "isDefault": true,
       "lineColor": "FF7F00",
       "time": 2,
       "name": "Китай-город",
       "id": 47,
       "cianId": null,
       "underConstruction": false,
       "lineType": null
      },
      {
       "lineId": 10,
       "releaseYear": null,
       "qs": "deal_type=sale&engine_version=2&metro%5B0%5D=64&object_type%5B0%5D=1&offer_type=flat",
       "transportType": "walk",
       "isDefault": false,
       "lineColor": "CF0000",
       "time": 12,
       "name": "Лубянка",
       "id": 64,
       "cianId": null,
       "underConstruction": false,
       "lineType": null
      },
      {
       "lineId": 1,
       "releaseYear": null,
       "qs": "deal_type=sale&engine_version=2&metro%5B0%5D=96&object_type%5B0%5D=1&offer_type=flat",
       "transportType": "walk",
       "isDefault": false,
       "lineColor": "03238B",
       "time": 14,
       "name": "Площадь Революции",
       "id": 96,
       "cianId": null,
       "underConstruction": false,
       "lineType": null
      },
      {
       "lineId": 3,
       "releaseYear": null,
       "qs": "deal_type=sale&engine_version=2&metro%5B0%5D=125&object_type%5B0%5D=1&offer_type=flat",
       "transportType": "walk",
       "isDefault": false,
       "lineColor": "00701A",
       "time": 17,
       "name": "Театральная",
       "id": 125,
       "cianId": null,
       "underConstruction": false,
       "lineType": null
      },
      {
       "lineId": 10,
       "releaseYear": null,
       "qs": "deal_type=sale&engine_version=2&metro%5B0%5D=84&object_type%5B0%5D=1&offer_type=flat",
       "transportType": "walk",
       "isDefault": false,
       "lineColor": "CF0000",
       "time": 17,
       "name": "Охотный ряд",
       "id": 84,
       "cianId": null,
       "underConstruction": false,
       "lineType": null
      },
      {
       "lineId": 11,
       "releaseYear": null,
       "qs": "deal_type=sale&engine_version=2&metro%5B0%5D=58&object_type%5B0%5D=1&offer_type=flat",
       "transportType": "walk",
       "isDefault": false,
       "lineColor": "94007C",
       "time": 17,
       "name": "Кузнецкий мост",
       "id": 58,
       "cianId": null,
       "underConstruction": false,
       "lineType": null
      }
     ],
     "districts": [
      {
       "fullName": "р-н Таганский",
       "parentId": 4,
       "type": "raion",
       "title": "р-н Таганский",
       "qs": "deal_type=sale&district%5B0%5D=19&engine_version=2&object_type%5B0%5D=1&offer_type=flat",
       "geoType": "district",
       "name": "Таганский",
       "id": 19,
       "locationId": 1
      },
      {
       "fullName": "ЦАО",
       "parentId": null,
       "type": "okrug",
       "title": "ЦАО",
       "qs": "deal_type=sale&district%5B0%5D=4&engine_version=2&object_type%5B0%5D=1&offer_type=flat",
       "geoType": "district",
       "name": "ЦАО",
       "id": 4,
       "locationId": 1
      }
     ],
     "sortedGeoIds": [
      {
       "type": "underground",
       "id": 47
      },
      {
       "type": "underground",
       "id": 64
      },
      {
       "type": "underground",
       "id": 96
      },
      {
       "type": "underground",
       "id": 125
      },
      {
       "type": "underground",
       "id": 84
      },
      {
       "type": "underground",
       "id": 58
      },
      {
       "type": "railway",
       "id": 687
      },
      {
       "type": "railway",
       "id": 698
      },
      {
       "type": "railway",
       "id": 690
      },
      {
       "type": "district",
       "id": 19
      },
      {
       "type": "district",
       "id": 4
      }
     ]
    },
    "isApartments": true,
    "isByHomeowner": false,
    "isUnique": false,
    "isRosreestrChecked": false,
    "offerFeatureLabels": [],
    "offerFeatureLabelsV2": [],
    "photos": [
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588813-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588813-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588813-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": true,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588813-2.jpg",
      "id": 2977588813
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588790-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588790-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588790-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588790-2.jpg",
      "id": 2977588790
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977593863-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977593863-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977593863-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977593863-2.jpg",
      "id": 2977593863
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977593868-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977593868-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977593868-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977593868-2.jpg",
      "id": 2977593868
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588786-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588786-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588786-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588786-2.jpg",
      "id": 2977588786
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588809-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588809-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588809-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977588809-2.jpg",
      "id": 2977588809
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977593772-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977593772-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977593772-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2977593772-2.jpg",
      "id": 2977593772
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922662776-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922662776-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922662776-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922662776-2.jpg",
      "id": 2922662776
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663264-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663264-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663264-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663264-2.jpg",
      "id": 2922663264
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663707-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663707-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663707-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663707-2.jpg",
      "id": 2922663707
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663272-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663272-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663272-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663272-2.jpg",
      "id": 2922663272
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922664311-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922664311-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922664311-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922664311-2.jpg",
      "id": 2922664311
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663322-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663322-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663322-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922663322-2.jpg",
      "id": 2922663322
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2905005184-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2905005184-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2905005184-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2905005184-2.jpg",
      "id": 2905005184
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2905005197-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2905005197-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2905005197-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2905005197-2.jpg",
      "id": 2905005197
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2905006019-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2905006019-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2905006019-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2905006019-2.jpg",
      "id": 2905006019
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676179-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676179-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676179-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676179-2.jpg",
      "id": 2922676179
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676159-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676159-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676159-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676159-2.jpg",
      "id": 2922676159
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676177-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676177-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676177-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676177-2.jpg",
      "id": 2922676177
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922667295-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922667295-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922667295-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922667295-2.jpg",
      "id": 2922667295
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922668060-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922668060-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922668060-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922668060-2.jpg",
      "id": 2922668060
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922668602-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922668602-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922668602-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922668602-2.jpg",
      "id": 2922668602
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676178-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676178-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676178-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676178-2.jpg",
      "id": 2922676178
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922670430-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922670430-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922670430-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922670430-2.jpg",
      "id": 2922670430
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676174-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676174-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676174-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922676174-2.jpg",
      "id": 2922676174
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922667423-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922667423-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922667423-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922667423-2.jpg",
      "id": 2922667423
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2851495011-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2851495011-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2851495011-4.jpg",
      "isLayout": false,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2851495011-2.jpg",
      "id": 2851495011
     },
     {
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922675832-1.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922675832-3.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922675832-4.jpg",
      "isLayout": true,
      "rotateDegree": null,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-slavyanskaya-ploshcad-2922675832-2.jpg",
      "id": 2922675832
     }
    ],
    "photoFeatureIcons": [
     {
      "type": "has3dTour",
      "text": "Объявление с 3D-туром",
      "link": "https://www.cian.ru/sale/flat/328747534/"
     }
    ],
    "promotion": {
     "isPerformanceVasPilot": false,
     "promotionDescription": "Топ + 3 600 ₽"
    },
    "bargainTerms": {
     "leaseType": null,
     "priceType": "all",
     "vatType": null,
     "mortgageAllowed": true,
     "bargainAllowed": null,
     "tags": [],
     "priceRur": 260348000,
     "agentBonus": null,
     "paymentPeriod": null,
     "utilitiesTerms": null,
     "currency": "rur",
     "tax": null,
     "priceForWorkplace": null,
     "clientFee": null,
     "leaseTermType": null,
     "saleType": "free",
     "vatPrice": null,
     "agentFee": null,
     "price": 260348000,
     "deposit": null
    },
    "roomsCount": 3,
    "floorNumber": 8,
    "totalArea": "213.4",
    "building": {
     "classType": null,
     "type": null,
     "floorsCount": 8,
     "passengerLiftsCount": 2,
     "deadline": null,
     "buildYear": 2022,
     "materialType": "monolithBrick",
     "cargoLiftsCount": 2,
     "heatingType": null,
     "parking": {
      "isAvailable": null,
      "placesCount": null,
      "type": "underground",
      "locationType": null,
      "currency": null,
      "purposeType": null,
      "priceMonthly": null,
      "priceEntry": null,
      "isFree": null
     },
     "accessType": null
    },
    "fullUrl": "https://www.cian.ru/sale/flat/328747534/",
    "phones": [
     {
      "number": "9856277323",
      "countryCode": "7"
     }
    ],
    "user": {
     "cianUserId": "140116723",
     "isAgent": true,
     "accountType": "agency",
     "agencyName": "H R E",
     "companyName": "H R E",
     "agentAvatarUrl": "https://www.cian.ru/api/get-avatar/?i=74878871&t=2&p=2&timestamp=1776221700",
     "agentModerationInfo": {
      "isUserIdentified": true,
      "isUserIdentifiedByDocuments": true,
      "qualityLevelInfo": {
       "hasVerifiedDocuments": true,
       "highResponsibility": false,
       "isBlocked": false,
       "isSuperAgent": false,
       "isSuperHost": false,
       "levelName": "Средний уровень",
       "levelOrder": 2,
       "levelSystemName": "medium",
       "showHighResponsibility": false,
       "showSuperAgent": false,
       "showSuperHost": false
      },
      "showUserIdentifiedByDocuments": true
     },
     "isChatsEnabled": true
    }
   },
   "files": [
    {
     "id": 2977588813,
     "isDefault": true,
     "full": "328747534-1.jpg",
     "mini": "328747534-1m.jpg"
    },
    {
     "id": 2977588790,
     "isDefault": false,
     "full": "328747534-2.jpg",
     "mini": "328747534-2m.jpg"
    },
    {
     "id": 2977593863,
     "isDefault": false,
     "full": "328747534-3.jpg",
     "mini": "328747534-3m.jpg"
    },
    {
     "id": 2977593868,
     "isDefault": false,
     "full": "328747534-4.jpg",
     "mini": "328747534-4m.jpg"
    },
    {
     "id": 2977588786,
     "isDefault": false,
     "full": "328747534-5.jpg",
     "mini": "328747534-5m.jpg"
    }
   ],
   "media": {
    "avatar": "328747534-avatar.jpg"
   }
  }
 ]
};
if (typeof module !== "undefined") module.exports = MOCK_DATASET;
