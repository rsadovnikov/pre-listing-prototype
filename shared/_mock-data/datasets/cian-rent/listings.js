/* Собрано tools/collect-rent.mjs. Публичная модель Циан; вручную не править. */
var MOCK_DATASET = {
 "collectedAt": "2026-10-19T11:52:07.233Z",
 "source": "https://www.cian.ru/cat.php?deal_type=rent&district%5B0%5D=5&engine_version=2&offer_type=flat&type=4&minprice=60000&maxprice=150000",
 "listings": [
  {
   "source": "https://www.cian.ru/rent/flat/334090116/",
   "seenAt": "2026-10-19T11:52:10.191Z",
   "offer": {
    "category": "flatRent",
    "status": "published",
    "dealType": "rent",
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
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru/"
      },
      {
       "fullName": "САО",
       "id": 5,
       "locationTypeId": -1,
       "name": "САО",
       "shortName": "САО",
       "type": "okrug",
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-sao-045/"
      },
      {
       "fullName": "район Беговой",
       "id": 24,
       "locationTypeId": -1,
       "name": "Беговой",
       "shortName": "р-н Беговой",
       "type": "raion",
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-begovoy-0424/"
      },
      {
       "fullName": "Ленинградский проспект",
       "id": 1348,
       "locationTypeId": -1,
       "name": "Ленинградский",
       "shortName": "Ленинградский просп.",
       "type": "street",
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-leningradskiy-prospekt-021348/"
      },
      {
       "fullName": "29к1",
       "id": 3844767,
       "locationTypeId": -1,
       "name": "29к1",
       "shortName": "29к1",
       "type": "house",
       "url": "https://www.cian.ru/cat.php?deal_type=rent&engine_version=2&house%5B0%5D=3844767&offer_type=flat&room1=1&type=4"
      }
     ],
     "coordinates": {
      "lat": 55.785169,
      "lng": 37.564033
     },
     "highways": [],
     "jk": {
      "id": 8122,
      "name": "Царская площадь",
      "house": {
       "id": 7716,
       "name": "Ленинградский, 29к1"
      },
      "gaGeo": {
       "moId": 0,
       "oblId": 1,
       "cityId": 1
      },
      "fullUrl": "https://www.cian.ru/zhiloy-kompleks-carskaya-ploshcad-moskva-8122/",
      "fullUrlTemplate": "{request_scheme}://zhk-carskaya-ploshcad-i.{host}/"
     },
     "railways": [
      {
       "id": 694,
       "directionIds": [
        11
       ],
       "distance": "1.0",
       "time": 2,
       "name": "Москва (Белорусский вокзал)",
       "travelType": "byCar"
      },
      {
       "id": 694,
       "directionIds": [
        11
       ],
       "distance": "1.0",
       "time": 22,
       "name": "Москва (Белорусский вокзал)",
       "travelType": "byFoot"
      },
      {
       "id": 699,
       "directionIds": [
        11
       ],
       "distance": "2.0",
       "time": 3,
       "name": "Беговая",
       "travelType": "byCar"
      },
      {
       "id": 699,
       "directionIds": [
        11
       ],
       "distance": "2.0",
       "time": 24,
       "name": "Беговая",
       "travelType": "byFoot"
      },
      {
       "id": 689,
       "directionIds": [
        19
       ],
       "distance": "2.0",
       "time": 30,
       "name": "Москва (Савёловский вокзал)",
       "travelType": "byFoot"
      },
      {
       "id": 689,
       "directionIds": [
        19
       ],
       "distance": "6.0",
       "time": 10,
       "name": "Москва (Савёловский вокзал)",
       "travelType": "byCar"
      }
     ],
     "undergrounds": [
      {
       "id": 36,
       "name": "Динамо",
       "lineColor": "00701A",
       "travelType": "walk",
       "travelTime": 6,
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-metro-dinamo-36/",
       "underConstruction": false
      },
      {
       "id": 350,
       "name": "Петровский Парк",
       "lineColor": "7ACDCE",
       "travelType": "walk",
       "travelTime": 11,
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-metro-petrovskiy-park-350/",
       "underConstruction": false
      },
      {
       "id": 15,
       "name": "Белорусская",
       "lineColor": "00701A",
       "travelType": "walk",
       "travelTime": 18,
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-metro-belorusskaya-15/",
       "underConstruction": false
      }
     ]
    },
    "id": 334090116,
    "objectGuid": "a7f21948-f80e-4b5e-8bcb-0042e51f653a",
    "cianId": 334090116,
    "userId": 107398974,
    "publishedUserId": 117832756,
    "cianUserId": 117832756,
    "title": "Впервые и без депозита!",
    "description": "Впервые сдаётся просторная 1комнатная квартира, без депозита!\nПодойдёт тем, кто ищет удобное, готовое к проживанию жильё с хорошим ремонтом и развитой инфраструктурой.\n\nИзолированная комната, совмещённый санузел, отдельная кухня, гардеробная и застеклённая лоджия, где можно организовать зону отдыха или рабочее место. Из окон и лоджии - вид во двор. Полы - паркет и плитка. В квартире есть всё необходимое для проживания:\n\n- кухонный гарнитур;\n- холодильник;\n- стиральная и посудомоечная машины;\n- микроволновая печь;\n- 2 кондиционера;\n- 2 телевизора;\n- интернет и Wi-Fi.\n\nУхоженный двор с детскими площадками и зелёной зоной.\nРядом - парк Динамо и Петровский парк. Вся необходимая инфраструктура в шаговой доступности. До м. Динамо - 5 минут пешком.\n\nСобственник рассматривает до трёх взрослых жильцов, возможно проживание с детьми старше 6 лет, без питомцев.\n\nПокажем квартиру в удобное для вас время: выбираете слот, забираете ключи и спокойно осматриваете её в комфортных условиях.\n\nЕсли всё понравится, оформим договор онлайн. Все платежи и чеки будут в личном кабинете, а сделка полностью защищена, без скрытых комиссий и неожиданных расходов.\nОплатить можно любым удобным способом, включая банковскую или кредитную карты. Мы остаёмся на связи на всех этапах аренды и поможем решить любые вопросы.",
    "photos": [
     {
      "id": 2968551915,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551915-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551915-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551915-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968551915-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968551917,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551917-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551917-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551917-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968551917-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968551919,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551919-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551919-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551919-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968551919-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968551921,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551921-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551921-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551921-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968551921-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968551924,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551924-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551924-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551924-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968551924-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968551928,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551928-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551928-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551928-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968551928-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968551933,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551933-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551933-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551933-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968551933-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968551940,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551940-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551940-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551940-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968551940-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968551942,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551942-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551942-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551942-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968551942-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968551944,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551944-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551944-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551944-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968551944-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968551948,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551948-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551948-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551948-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968551948-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968551951,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551951-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551951-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551951-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968551951-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968551960,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551960-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551960-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551960-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968551960-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968551964,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551964-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551964-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551964-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968551964-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968551978,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551978-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551978-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551978-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968551978-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968551981,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551981-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551981-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551981-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968551981-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968551982,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551982-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551982-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551982-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968551982-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968551991,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551991-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551991-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551991-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968551991-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968551994,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551994-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551994-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551994-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968551994-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968552001,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968552001-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968552001-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968552001-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968552001-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968552003,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968552003-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968552003-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968552003-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968552003-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968552006,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968552006-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968552006-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968552006-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968552006-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968552007,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968552007-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968552007-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968552007-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968552007-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968552009,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968552009-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968552009-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968552009-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968552009-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968552011,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968552011-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968552011-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968552011-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968552011-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2968552013,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968552013-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968552013-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968552013-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968552013-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     }
    ],
    "phones": [
     {
      "countryCode": "+7",
      "number": "9770986889"
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
        "tariffId": 1388876,
        "tariffGridType": "packageTariff"
       }
      }
     ],
     "autoprolong": true
    },
    "flatType": "rooms",
    "totalArea": "38.0",
    "livingArea": "14.0",
    "kitchenArea": "10.0",
    "allRoomsArea": "14",
    "loggiasCount": 1,
    "balconiesCount": 0,
    "windowsViewType": "yard",
    "separateWcsCount": 0,
    "combinedWcsCount": 1,
    "repairType": "euro",
    "hasPhone": false,
    "hasFridge": true,
    "hasDishwasher": true,
    "hasWasher": true,
    "hasFurniture": true,
    "hasKitchenFurniture": true,
    "hasConditioner": true,
    "hasTv": true,
    "hasInternet": true,
    "hasBathtub": false,
    "hasShower": true,
    "childrenAllowed": true,
    "petsAllowed": false,
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
    "roomsCount": 1,
    "floorNumber": 12,
    "bargainTerms": {
     "price": 126700,
     "priceType": "all",
     "currency": "rur",
     "paymentPeriod": "monthly",
     "leaseTermType": "longTerm",
     "prepayMonths": 1,
     "deposit": 0,
     "utilitiesTerms": {
      "includedInPrice": true,
      "price": 0
     },
     "includedOptions": [],
     "clientFee": 0,
     "agentFee": 100,
     "prices": {
      "rur": 126700,
      "usd": 1516,
      "eur": 1352
     },
     "utilitiesTermsPrices": {
      "rur": 0,
      "usd": 0,
      "eur": 0
     },
     "tags": []
    },
    "building": {
     "materialType": "panel",
     "floorsCount": 17,
     "buildYear": 2018,
     "parking": {
      "type": "ground"
     },
     "ceilingHeight": "2.4",
     "totalArea": "38.0",
     "liftTypes": [],
     "cranageTypes": [],
     "passengerLiftsCount": 1,
     "cargoLiftsCount": 1,
     "houseMaterialType": "panel"
    },
    "editDate": "2026-10-19T14:46:35.397000Z",
    "humanizedEditDate": "сегодня, 14:46",
    "isInHiddenBase": false,
    "isObjectHidden": false,
    "isClosedVisibility": false,
    "videos": [],
    "demolishedInMoscowProgramm": false,
    "exportLinks": {
     "pdfUrl": "/export/pdf/rent/flat/334090116/",
     "docxUrl": "/export/docx/rent/flat/334090116/"
    },
    "passengerLiftsCount": 1,
    "cargoLiftsCount": 1,
    "added": "сегодня, 14:46",
    "valueAddedServices": {
     "isStandard": false,
     "isTop3": true,
     "isPremium": false
    },
    "promotion": {
     "isPerformanceVasPilot": false,
     "promotionDescription": "Топ + 120 ₽",
     "isCpcAuction": false
    },
    "categoriesIds": [
     1000,
     1100,
     1110,
     1111
    ],
    "publicationDate": 1789835901,
    "creationDate": "2026-09-19T19:38:21.517",
    "recoveryLink": "/razmestit-obyavlenie/334090116/?isFromXML=1",
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
    "editPhoto": "/realty/add2.aspx?id=334090116&isFromXML=1",
    "newEdit": "/razmestit-obyavlenie/?realty_id=334090116&isFromXML=1",
    "certificate": "https://www.cian.ru/newobjects/cian/certification/get?announcementId=334090116",
    "edit": "/realty/add1.aspx?id=334090116&isFromXML=1",
    "similarOffersLink": "",
    "similarOffersCount": 0,
    "buildersIds": [
     6008
    ],
    "builderId": 6008,
    "isImported": true,
    "userConfirmedFix": false,
    "newbuilding": {
     "id": 8122,
     "name": "Царская площадь",
     "house": {
      "isReliable": false,
      "isFinished": true,
      "finishDate": {
       "quarter": 3,
       "year": 2019
      },
      "id": 7716,
      "name": "Ленинградский, 29к1"
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
      "imagesCount": 16,
      "firstImageUrl": "https://images.cdn-cian.ru/images/31/050/701/carskaya-ploshcad-moskva-jk-1070501366-6.jpg",
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
    "isUnique": false,
    "isUniqueCheckDate": "2026-10-18",
    "isCianPartner": false,
    "externalId": "407758",
    "isIllegalConstruction": false,
    "isNoFee": true,
    "amenities": [],
    "externalOfferUrl": "",
    "cianLayouts": [
     {
      "id": 2968569893,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968569893-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968569893-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968569893-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2968569893-3.jpg",
      "isLayout": true,
      "isCianLayout": true
     }
    ]
   },
   "features": [
    {
     "title": "О квартире",
     "id": "aboutFlat",
     "features": [
      {
       "value": "38 м²",
       "label": "Общая площадь"
      },
      {
       "value": "14 м²",
       "label": "Жилая площадь"
      },
      {
       "value": "10 м²",
       "label": "Площадь кухни"
      },
      {
       "value": "2,4 м",
       "label": "Высота потолков"
      },
      {
       "value": "1 совмещенный",
       "label": "Санузел"
      },
      {
       "value": "1 лоджия",
       "label": "Балкон/лоджия"
      },
      {
       "value": "Во двор",
       "label": "Вид из окон"
      },
      {
       "value": "Евроремонт",
       "label": "Ремонт"
      }
     ]
    },
    {
     "title": "О доме",
     "id": "aboutBuilding",
     "features": [
      {
       "value": "2018",
       "label": "Год постройки"
      },
      {
       "value": "1 пассажирский, 1 грузовой",
       "label": "Количество лифтов"
      },
      {
       "value": "Панельный",
       "label": "Тип дома"
      },
      {
       "value": "Железобетонные",
       "label": "Тип перекрытий"
      },
      {
       "value": "11",
       "label": "Подъезды"
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
      }
     ]
    }
   ],
   "factoids": [
    {
     "title": "Общая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/size.svg",
     "value": "38 м²"
    },
    {
     "title": "Жилая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/plan.svg",
     "value": "14 м²"
    },
    {
     "title": "Площадь кухни",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/kitchen.svg",
     "value": "10 м²"
    },
    {
     "title": "Этаж",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/floor.svg",
     "value": "12 из 17"
    },
    {
     "title": "Год постройки",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/build_year.svg",
     "value": "2018"
    }
   ],
   "priceChanges": [
    {
     "changeTime": "2026-10-19T11:46:28.601321Z",
     "priceData": {
      "currency": "rur",
      "price": 126700,
      "paymentPeriod": "monthly"
     }
    },
    {
     "changeTime": "2026-10-10T13:23:32.931114Z",
     "priceData": {
      "currency": "rur",
      "price": 129900,
      "paymentPeriod": "monthly"
     }
    },
    {
     "changeTime": "2026-09-29T16:03:00.772568Z",
     "priceData": {
      "currency": "rur",
      "price": 135100,
      "paymentPeriod": "monthly"
     }
    },
    {
     "changeTime": "2026-09-19T16:38:23.295927Z",
     "priceData": {
      "currency": "rur",
      "price": 139800,
      "paymentPeriod": "monthly"
     }
    }
   ],
   "bti": {
    "houseData": {
     "yearRelease": 2018,
     "houseMaterialType": "none",
     "floorMax": 18,
     "entrances": 11,
     "flatCount": 356,
     "isEmergency": false,
     "demolishedInMoscowProgramm": false,
     "houseHeatSupplyType": "central",
     "houseOverhaulFundType": "unknown",
     "houseGasSupplyType": "unknown",
     "houseOverlapType": "concrete",
     "lifts": 24
    }
   },
   "stats": {
    "totalViewsFormattedString": "515 просмотров, 9 за сегодня"
   },
   "priceInfo": null,
   "serp": {
    "id": 334090116,
    "category": "flatRent",
    "dealType": "rent",
    "bargainTerms": {
     "tax": null,
     "paymentPeriod": "monthly",
     "saleType": null,
     "utilitiesTerms": {
      "flowMetersNotIncludedInPrice": null,
      "includedInPrice": true,
      "price": 0
     },
     "vatType": null,
     "priceType": "all",
     "agentFee": 100,
     "priceForWorkplace": null,
     "tags": [],
     "leaseTermType": "longTerm",
     "mortgageAllowed": null,
     "clientFee": 0,
     "price": 126700,
     "agentBonus": null,
     "currency": "rur",
     "deposit": 0,
     "bargainAllowed": null,
     "priceRur": 126700,
     "vatPrice": null,
     "leaseType": null
    },
    "geo": {
     "countryId": 138,
     "address": [
      {
       "name": "Москва",
       "geoType": "location",
       "isFormingAddress": true,
       "type": "location",
       "fullName": "Москва",
       "locationTypeId": 1,
       "shortName": "Москва",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&region=1&type=4",
       "title": "Москва",
       "id": 1
      },
      {
       "name": "САО",
       "geoType": "district",
       "isFormingAddress": null,
       "type": "okrug",
       "fullName": "САО",
       "locationTypeId": null,
       "shortName": "САО",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=5&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "САО",
       "id": 5
      },
      {
       "name": "Беговой",
       "geoType": "district",
       "isFormingAddress": null,
       "type": "raion",
       "fullName": "р-н Беговой",
       "locationTypeId": null,
       "shortName": "р-н Беговой",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=24&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "р-н Беговой",
       "id": 24
      },
      {
       "name": "Динамо",
       "geoType": "underground",
       "isFormingAddress": null,
       "type": "metro",
       "fullName": "м. Динамо",
       "locationTypeId": null,
       "shortName": "м. Динамо",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=36&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "title": "м. Динамо",
       "id": 36
      },
      {
       "name": "Ленинградский",
       "geoType": "street",
       "isFormingAddress": true,
       "type": "street",
       "fullName": "Ленинградский проспект",
       "locationTypeId": null,
       "shortName": "Ленинградский просп.",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&street%5B0%5D=1348&type=4",
       "title": "Ленинградский проспект",
       "id": 1348
      },
      {
       "name": "29к1",
       "geoType": "house",
       "isFormingAddress": true,
       "type": "house",
       "fullName": "29к1",
       "locationTypeId": null,
       "shortName": "29к1",
       "qs": "currency=2&deal_type=rent&engine_version=2&house%5B0%5D=3844767&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "29к1",
       "id": 3844767
      }
     ],
     "jk": {
      "name": "Царская площадь",
      "developer": null,
      "fullUrl": "https://zhk-carskaya-ploshcad-i.cian.ru/",
      "webSiteUrl": null,
      "displayName": "ЖК «Царская площадь»",
      "house": {
       "name": "Ленинградский, 29к1",
       "id": 7716
      },
      "gaGeo": {
       "oblId": 1,
       "moId": 0,
       "cityId": 1
      },
      "webSiteUrlUtm": null,
      "id": 8122
     },
     "coordinates": {
      "lng": 37.564033,
      "lat": 55.785169
     },
     "buildingAddress": null,
     "userInput": "г Москва, пр-кт Ленинградский, д 29 к 1",
     "districts": [
      {
       "name": "Беговой",
       "geoType": "district",
       "parentId": 5,
       "type": "raion",
       "locationId": 1,
       "fullName": "р-н Беговой",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=24&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "р-н Беговой",
       "id": 24
      },
      {
       "name": "САО",
       "geoType": "district",
       "parentId": null,
       "type": "okrug",
       "locationId": 1,
       "fullName": "САО",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=5&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "САО",
       "id": 5
      }
     ],
     "highways": [],
     "railways": [
      {
       "name": "Москва (Белорусский вокзал)",
       "geoType": "railway",
       "travelType": "byCar",
       "directionIds": [
        11
       ],
       "distance": 1,
       "time": 2,
       "id": 694,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=694&type=4"
      },
      {
       "name": "Беговая",
       "geoType": "railway",
       "travelType": "byCar",
       "directionIds": [
        11
       ],
       "distance": 2,
       "time": 3,
       "id": 699,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=699&type=4"
      },
      {
       "name": "Москва (Савёловский вокзал)",
       "geoType": "railway",
       "travelType": "byCar",
       "directionIds": [
        19
       ],
       "distance": 6,
       "time": 10,
       "id": 689,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=689&type=4"
      }
     ],
     "undergrounds": [
      {
       "name": "Динамо",
       "releaseYear": null,
       "isDefault": true,
       "cianId": null,
       "transportType": "walk",
       "underConstruction": false,
       "lineColor": "00701A",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=36&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "time": 6,
       "lineId": 3,
       "id": 36,
       "lineType": null
      },
      {
       "name": "Петровский Парк",
       "releaseYear": null,
       "isDefault": null,
       "cianId": null,
       "transportType": "walk",
       "underConstruction": false,
       "lineColor": "7ACDCE",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=350&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "time": 11,
       "lineId": 27,
       "id": 350,
       "lineType": null
      },
      {
       "name": "Белорусская",
       "releaseYear": null,
       "isDefault": null,
       "cianId": null,
       "transportType": "walk",
       "underConstruction": false,
       "lineColor": "00701A",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=15&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "time": 18,
       "lineId": 3,
       "id": 15,
       "lineType": null
      }
     ],
     "sortedGeoIds": [
      {
       "type": "underground",
       "id": 36
      },
      {
       "type": "underground",
       "id": 350
      },
      {
       "type": "underground",
       "id": 15
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
       "id": 24
      },
      {
       "type": "district",
       "id": 5
      }
     ]
    },
    "building": {
     "parking": {
      "isAvailable": null,
      "type": "ground",
      "purposeType": null,
      "currency": null,
      "priceMonthly": null,
      "isFree": null,
      "priceEntry": null,
      "locationType": null,
      "placesCount": null
     },
     "type": null,
     "passengerLiftsCount": 1,
     "deadline": null,
     "heatingType": null,
     "materialType": "panel",
     "classType": null,
     "cargoLiftsCount": 1,
     "buildYear": 2018,
     "floorsCount": 17,
     "accessType": null
    },
    "roomsCount": 1,
    "totalArea": "38.0",
    "floorNumber": 12,
    "flatType": "rooms",
    "title": "Впервые и без депозита!",
    "description": "Впервые сдаётся просторная 1комнатная квартира, без депозита!\nПодойдёт тем, кто ищет удобное, готовое к проживанию жильё с хорошим ремонтом и развитой инфраструктурой.\n\nИзолированная комната, совмещённый санузел, отдельная кухня, гардеробная и застеклённая лоджия, где можно организовать зону отдыха или рабочее место. Из окон и лоджии - вид во двор. Полы - паркет и плитка. В квартире есть всё необходимое для проживания:\n\n- кухонный гарнитур;\n- холодильник;\n- стиральная и посудомоечная машины;\n- микроволновая печь;\n- 2 кондиционера;\n- 2 телевизора;\n- интернет и Wi-Fi.\n\nУхоженный двор с детскими площадками и зелёной зоной.\nРядом - парк Динамо и Петровский парк. Вся необходимая инфраструктура в шаговой доступности. До м. Динамо - 5 минут пешком.\n\nСобственник рассматривает до трёх взрослых жильцов, возможно проживание с детьми старше 6 лет, без питомцев.\n\nПокажем квартиру в удобное для вас время: выбираете слот, забираете ключи и спокойно осматриваете её в комфортных условиях.\n\nЕсли всё понравится, оформим договор онлайн. Все платежи и чеки будут в личном кабинете, а сделка полностью защищена, без скрытых комиссий и неожиданных расходов.\nОплатить можно любым удобным способом, включая банковскую или кредитную карты. Мы остаёмся на связи на всех этапах аренды и поможем решить любые вопросы.",
    "formattedFullPrice": "126 700 ₽/мес.",
    "formattedFullInfo": "1-комн.кв.  ·  38 м²  ·  12/17 этаж",
    "formattedAdditionalInfo": "Без депозита, без комиссии(agent_fee), предоплата 1 месяц, на длительный срок",
    "photos": [
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551915-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551915-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968551915-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551915-2.jpg",
      "id": 2968551915
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968569893-1.jpg",
      "isLayout": true,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968569893-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968569893-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968569893-2.jpg",
      "id": 2968569893
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551917-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551917-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968551917-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551917-2.jpg",
      "id": 2968551917
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551919-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551919-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968551919-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551919-2.jpg",
      "id": 2968551919
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551921-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551921-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968551921-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551921-2.jpg",
      "id": 2968551921
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551924-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551924-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968551924-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551924-2.jpg",
      "id": 2968551924
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551928-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551928-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968551928-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551928-2.jpg",
      "id": 2968551928
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551933-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551933-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968551933-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551933-2.jpg",
      "id": 2968551933
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551940-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551940-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968551940-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551940-2.jpg",
      "id": 2968551940
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551942-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551942-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968551942-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551942-2.jpg",
      "id": 2968551942
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551944-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551944-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968551944-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551944-2.jpg",
      "id": 2968551944
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551948-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551948-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968551948-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551948-2.jpg",
      "id": 2968551948
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551951-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551951-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968551951-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551951-2.jpg",
      "id": 2968551951
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551960-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551960-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968551960-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551960-2.jpg",
      "id": 2968551960
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551964-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551964-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968551964-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551964-2.jpg",
      "id": 2968551964
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551978-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551978-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968551978-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551978-2.jpg",
      "id": 2968551978
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551981-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551981-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968551981-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551981-2.jpg",
      "id": 2968551981
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551982-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551982-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968551982-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551982-2.jpg",
      "id": 2968551982
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551991-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551991-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968551991-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551991-2.jpg",
      "id": 2968551991
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968551994-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968551994-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968551994-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968551994-2.jpg",
      "id": 2968551994
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968552001-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968552001-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968552001-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968552001-2.jpg",
      "id": 2968552001
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968552003-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968552003-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968552003-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968552003-2.jpg",
      "id": 2968552003
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968552006-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968552006-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968552006-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968552006-2.jpg",
      "id": 2968552006
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968552007-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968552007-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968552007-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968552007-2.jpg",
      "id": 2968552007
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968552009-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968552009-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968552009-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968552009-2.jpg",
      "id": 2968552009
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968552011-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968552011-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968552011-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968552011-2.jpg",
      "id": 2968552011
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2968552013-1.jpg",
      "isLayout": false,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2968552013-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2968552013-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2968552013-2.jpg",
      "id": 2968552013
     }
    ]
   },
   "files": [
    {
     "id": 2968551915,
     "isDefault": false,
     "full": "334090116-1.webp",
     "mini": "334090116-1m.webp"
    },
    {
     "id": 2968551917,
     "isDefault": false,
     "full": "334090116-2.webp",
     "mini": "334090116-2m.webp"
    },
    {
     "id": 2968551919,
     "isDefault": false,
     "full": "334090116-3.webp",
     "mini": "334090116-3m.webp"
    },
    {
     "id": 2968551921,
     "isDefault": false,
     "full": "334090116-4.webp",
     "mini": "334090116-4m.webp"
    },
    {
     "id": 2968551924,
     "isDefault": false,
     "full": "334090116-5.webp",
     "mini": "334090116-5m.webp"
    }
   ]
  },
  {
   "source": "https://www.cian.ru/rent/flat/335003449/",
   "seenAt": "2026-10-19T11:52:11.577Z",
   "offer": {
    "category": "flatRent",
    "status": "published",
    "dealType": "rent",
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
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru/"
      },
      {
       "fullName": "САО",
       "id": 5,
       "locationTypeId": -1,
       "name": "САО",
       "shortName": "САО",
       "type": "okrug",
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-sao-045/"
      },
      {
       "fullName": "район Аэропорт",
       "id": 23,
       "locationTypeId": -1,
       "name": "Аэропорт",
       "shortName": "р-н Аэропорт",
       "type": "raion",
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-aeroport-0423/"
      },
      {
       "fullName": "Ленинградский проспект",
       "id": 1348,
       "locationTypeId": -1,
       "name": "Ленинградский",
       "shortName": "Ленинградский просп.",
       "type": "street",
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-leningradskiy-prospekt-021348/"
      },
      {
       "fullName": "36с36",
       "id": 5609878,
       "locationTypeId": -1,
       "name": "36с36",
       "shortName": "36с36",
       "type": "house",
       "url": "https://www.cian.ru/cat.php?deal_type=rent&engine_version=2&house%5B0%5D=5609878&offer_type=flat&room1=1&type=4"
      }
     ],
     "coordinates": {
      "lat": 55.788895,
      "lng": 37.568803
     },
     "highways": [],
     "jk": {
      "id": 5535,
      "name": "ВТБ Арена парк",
      "house": {
       "id": 551,
       "name": "Ленинградский, 36с36"
      },
      "gaGeo": {
       "moId": 0,
       "oblId": 1,
       "cityId": 1
      },
      "fullUrl": "https://www.cian.ru/zhiloy-kompleks-vtb-arena-park-moskva-5535/",
      "fullUrlTemplate": "{request_scheme}://zhk-vtb-arena-park-i.{host}/",
      "webSiteUrl": "https://arena-park.ru/"
     },
     "railways": [
      {
       "id": 689,
       "directionIds": [
        19
       ],
       "distance": "1.0",
       "time": 22,
       "name": "Москва (Савёловский вокзал)",
       "travelType": "byFoot"
      },
      {
       "id": 694,
       "directionIds": [
        11
       ],
       "distance": "2.0",
       "time": 27,
       "name": "Москва (Белорусский вокзал)",
       "travelType": "byFoot"
      },
      {
       "id": 714,
       "directionIds": [
        18
       ],
       "distance": "2.0",
       "time": 29,
       "name": "Гражданская",
       "travelType": "byFoot"
      },
      {
       "id": 694,
       "directionIds": [
        11
       ],
       "distance": "3.0",
       "time": 7,
       "name": "Москва (Белорусский вокзал)",
       "travelType": "byCar"
      },
      {
       "id": 714,
       "directionIds": [
        18
       ],
       "distance": "4.0",
       "time": 8,
       "name": "Гражданская",
       "travelType": "byCar"
      },
      {
       "id": 689,
       "directionIds": [
        19
       ],
       "distance": "5.0",
       "time": 8,
       "name": "Москва (Савёловский вокзал)",
       "travelType": "byCar"
      }
     ],
     "undergrounds": [
      {
       "id": 36,
       "name": "Динамо",
       "lineColor": "00701A",
       "travelType": "walk",
       "travelTime": 8,
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-metro-dinamo-36/",
       "underConstruction": false
      },
      {
       "id": 350,
       "name": "Петровский Парк",
       "lineColor": "7ACDCE",
       "travelType": "walk",
       "travelTime": 11,
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-metro-petrovskiy-park-350/",
       "underConstruction": false
      },
      {
       "id": 451,
       "name": "Савёловская",
       "lineColor": "7ACDCE",
       "travelType": "walk",
       "travelTime": 16,
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-metro-savelovskaya-451/",
       "underConstruction": false
      },
      {
       "id": 110,
       "name": "Савёловская",
       "lineColor": "A2A5B5",
       "travelType": "walk",
       "travelTime": 19,
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-metro-savelovskaya-110/",
       "underConstruction": false
      }
     ]
    },
    "id": 335003449,
    "objectGuid": "762b4e0b-387f-485a-b7b0-56ce89bc34b4",
    "cianId": 335003449,
    "userId": 8080307,
    "publishedUserId": 136397990,
    "cianUserId": 136397990,
    "description": "Код объекта: 1939083.\n1-комнатная квартира без комиссии | Дизайнерский ремонт | 8 минут до м. Динамо\n\nСдаётся стильная 1-комнатная квартира 36 м² в современном апарт-комплексе, всего 8 минут пешком от метро Динамо.\nКвартира находится на 6 этаже 12-этажного монолитного дома (2019 г.) с высоким уровнем комфорта.\n\n Основные преимущества:\n— Высокие потолки 3,15 м — много воздуха, света и пространства\n— Дизайнерский ремонт — современный стиль, продуманный интерьер\n— Полностью укомплектована техникой: кондиционер, холодильник, телевизор, стиральная машина\n— Есть вся необходимая мебель для комфортного проживания\n— Совмещённый санузел с ванной — идеально для отдыха после рабочего дня\n\n О районе:\nДом расположен в одном из самых удобных районов города.\nВ пешей доступности:\n— магазины и супермаркеты\n— школы, сады, клиники\n— кафе и спортклубы\n— парк Петровский для прогулок и спорта\n\n Условия аренды:\n— Залог — 1 месяц\n— Подходит для 1—2 человек\n\n— Длительный срок аренды\n\n Записывайтесь на просмотр!\n\nКвартира с таким ремонтом и расположением без комиссии — редкое предложение.\nГотов показать в удобное для вас время.",
    "photos": [
     {
      "id": 2986782364,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2986782364-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2986782364-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2986782364-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2986782364-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986782369,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2986782369-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2986782369-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2986782369-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2986782369-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986782393,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2986782393-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2986782393-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2986782393-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2986782393-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986782402,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2986782402-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2986782402-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2986782402-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2986782402-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986782413,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2986782413-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2986782413-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2986782413-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2986782413-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986782425,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2986782425-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2986782425-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2986782425-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2986782425-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986782440,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2986782440-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2986782440-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2986782440-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2986782440-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986782445,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2986782445-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2986782445-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2986782445-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2986782445-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986782461,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2986782461-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2986782461-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2986782461-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2986782461-3.jpg",
      "isCianLayout": false
     }
    ],
    "phones": [
     {
      "countryCode": "+7",
      "number": "9367085249"
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
        "tariffId": 1388882,
        "tariffGridType": "packageTariff"
       }
      }
     ],
     "autoprolong": true
    },
    "flatType": "rooms",
    "isApartments": false,
    "totalArea": "36.0",
    "livingArea": "15.0",
    "kitchenArea": "8.0",
    "windowsViewType": "street",
    "separateWcsCount": 0,
    "combinedWcsCount": 1,
    "repairType": "design",
    "hasFurniture": true,
    "childrenAllowed": true,
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
    "roomsCount": 1,
    "floorNumber": 6,
    "bargainTerms": {
     "price": 120000,
     "priceType": "all",
     "currency": "rur",
     "paymentPeriod": "monthly",
     "leaseTermType": "longTerm",
     "deposit": 120000,
     "utilitiesTerms": {
      "includedInPrice": true,
      "price": 0,
      "flowMetersNotIncludedInPrice": true
     },
     "includedOptions": [],
     "clientFee": 50,
     "agentFee": 50,
     "prices": {
      "rur": 120000,
      "usd": 1436,
      "eur": 1281
     },
     "depositPrices": {
      "rur": 120000,
      "usd": 1436,
      "eur": 1281
     },
     "utilitiesTermsPrices": {
      "rur": 0,
      "usd": 0,
      "eur": 0
     },
     "tags": []
    },
    "building": {
     "materialType": "monolith",
     "floorsCount": 12,
     "buildYear": 2019,
     "parking": {
      "type": "underground"
     },
     "totalArea": "36.0",
     "liftTypes": [],
     "cranageTypes": [],
     "houseMaterialType": "monolith"
    },
    "editDate": "2026-10-19T13:07:03.427000Z",
    "humanizedEditDate": "сегодня, 13:07",
    "isInHiddenBase": false,
    "isObjectHidden": false,
    "isClosedVisibility": false,
    "videos": [],
    "demolishedInMoscowProgramm": false,
    "exportLinks": {
     "pdfUrl": "/export/pdf/rent/flat/335003449/",
     "docxUrl": "/export/docx/rent/flat/335003449/"
    },
    "added": "сегодня, 13:07",
    "valueAddedServices": {
     "isStandard": false,
     "isTop3": true,
     "isPremium": false
    },
    "promotion": {
     "isPerformanceVasPilot": false,
     "promotionDescription": "Топ",
     "isCpcAuction": false
    },
    "categoriesIds": [
     1000,
     1100,
     1110,
     1111
    ],
    "publicationDate": 1792078274,
    "creationDate": "2026-10-15T18:31:14.183",
    "recoveryLink": "/razmestit-obyavlenie/335003449/?isFromXML=1",
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
    "editPhoto": "/realty/add2.aspx?id=335003449&isFromXML=1",
    "newEdit": "/razmestit-obyavlenie/?realty_id=335003449&isFromXML=1",
    "certificate": "https://www.cian.ru/newobjects/cian/certification/get?announcementId=335003449",
    "edit": "/realty/add1.aspx?id=335003449&isFromXML=1",
    "similarOffersLink": "",
    "similarOffersCount": 0,
    "buildersIds": [
     8223
    ],
    "builderId": 8223,
    "isImported": true,
    "userConfirmedFix": false,
    "newbuilding": {
     "id": 5535,
     "name": "ВТБ Арена парк",
     "house": {
      "isReliable": false,
      "isFinished": true,
      "finishDate": {
       "quarter": 3,
       "year": 2019
      },
      "id": 551,
      "name": "Ленинградский, 36с36"
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
      "imagesCount": 10,
      "firstImageUrl": "https://images.cdn-cian.ru/images/73/568/501/vtb-arena-park-moskva-jk-1058653760-6.jpg",
      "videosCount": 2,
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
    "userTrust": "notInvolved",
    "userTrustLevel": "notInvolved",
    "showWarningMessage": false,
    "moderationInfo": {
     "showContactWarningMessage": false
    },
    "isUnique": false,
    "isUniqueCheckDate": "2026-10-18",
    "isCianPartner": false,
    "externalId": "5630451322",
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
       "value": "36 м²",
       "label": "Общая площадь"
      },
      {
       "value": "15 м²",
       "label": "Жилая площадь"
      },
      {
       "value": "8 м²",
       "label": "Площадь кухни"
      },
      {
       "value": "1 совмещенный",
       "label": "Санузел"
      },
      {
       "value": "На улицу",
       "label": "Вид из окон"
      },
      {
       "value": "Дизайнерский",
       "label": "Ремонт"
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
       "value": "Монолитный",
       "label": "Тип дома"
      },
      {
       "value": "Нет информации",
       "label": "Тип перекрытий"
      },
      {
       "value": "Подземная",
       "label": "Парковка"
      },
      {
       "value": "Нет информации",
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
     "value": "36 м²"
    },
    {
     "title": "Жилая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/plan.svg",
     "value": "15 м²"
    },
    {
     "title": "Площадь кухни",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/kitchen.svg",
     "value": "8 м²"
    },
    {
     "title": "Этаж",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/floor.svg",
     "value": "6 из 12"
    },
    {
     "title": "Год постройки",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/build_year.svg",
     "value": "2019"
    }
   ],
   "priceChanges": [
    {
     "changeTime": "2026-10-15T15:31:14.540509Z",
     "priceData": {
      "currency": "rur",
      "price": 120000,
      "paymentPeriod": "monthly"
     }
    }
   ],
   "bti": {
    "houseData": {
     "yearRelease": 2019,
     "houseMaterialType": "monolith",
     "floorMax": 12,
     "isEmergency": false,
     "demolishedInMoscowProgramm": false,
     "houseHeatSupplyType": "none",
     "houseOverhaulFundType": "unknown",
     "houseGasSupplyType": "unknown",
     "houseOverlapType": "unknown"
    }
   },
   "stats": {
    "totalViewsFormattedString": "28 просмотров, нет за сегодня"
   },
   "priceInfo": null,
   "serp": {
    "id": 335003449,
    "category": "flatRent",
    "dealType": "rent",
    "bargainTerms": {
     "tax": null,
     "paymentPeriod": "monthly",
     "saleType": null,
     "utilitiesTerms": {
      "flowMetersNotIncludedInPrice": true,
      "includedInPrice": true,
      "price": 0
     },
     "vatType": null,
     "priceType": "all",
     "agentFee": 50,
     "priceForWorkplace": null,
     "tags": [],
     "leaseTermType": "longTerm",
     "mortgageAllowed": null,
     "clientFee": 50,
     "price": 120000,
     "agentBonus": null,
     "currency": "rur",
     "deposit": 120000,
     "bargainAllowed": null,
     "priceRur": 120000,
     "vatPrice": null,
     "leaseType": null
    },
    "geo": {
     "countryId": 138,
     "address": [
      {
       "name": "Москва",
       "geoType": "location",
       "isFormingAddress": true,
       "type": "location",
       "fullName": "Москва",
       "locationTypeId": 1,
       "shortName": "Москва",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&region=1&type=4",
       "title": "Москва",
       "id": 1
      },
      {
       "name": "САО",
       "geoType": "district",
       "isFormingAddress": null,
       "type": "okrug",
       "fullName": "САО",
       "locationTypeId": null,
       "shortName": "САО",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=5&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "САО",
       "id": 5
      },
      {
       "name": "Аэропорт",
       "geoType": "district",
       "isFormingAddress": null,
       "type": "raion",
       "fullName": "р-н Аэропорт",
       "locationTypeId": null,
       "shortName": "р-н Аэропорт",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=23&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "р-н Аэропорт",
       "id": 23
      },
      {
       "name": "Динамо",
       "geoType": "underground",
       "isFormingAddress": null,
       "type": "metro",
       "fullName": "м. Динамо",
       "locationTypeId": null,
       "shortName": "м. Динамо",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=36&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "title": "м. Динамо",
       "id": 36
      },
      {
       "name": "Ленинградский",
       "geoType": "street",
       "isFormingAddress": true,
       "type": "street",
       "fullName": "Ленинградский проспект",
       "locationTypeId": null,
       "shortName": "Ленинградский просп.",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&street%5B0%5D=1348&type=4",
       "title": "Ленинградский проспект",
       "id": 1348
      },
      {
       "name": "36с36",
       "geoType": "house",
       "isFormingAddress": true,
       "type": "house",
       "fullName": "36с36",
       "locationTypeId": null,
       "shortName": "36с36",
       "qs": "currency=2&deal_type=rent&engine_version=2&house%5B0%5D=5609878&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "36с36",
       "id": 5609878
      }
     ],
     "jk": {
      "name": "ВТБ Арена парк",
      "developer": null,
      "fullUrl": "https://zhk-vtb-arena-park-i.cian.ru/",
      "webSiteUrl": "https://arena-park.ru/",
      "displayName": "ЖК «ВТБ Арена парк»",
      "house": {
       "name": "Ленинградский, 36с36",
       "id": 551
      },
      "gaGeo": {
       "oblId": 1,
       "moId": 0,
       "cityId": 1
      },
      "webSiteUrlUtm": "https://arena-park.ru/?utm_source=cian&utm_medium=kartochka_cian&utm_campaign=5535",
      "id": 5535
     },
     "coordinates": {
      "lng": 37.568803,
      "lat": 55.788895
     },
     "buildingAddress": null,
     "userInput": "Россия, Москва, Ленинградский проспект, 36с36",
     "districts": [
      {
       "name": "Аэропорт",
       "geoType": "district",
       "parentId": 5,
       "type": "raion",
       "locationId": 1,
       "fullName": "р-н Аэропорт",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=23&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "р-н Аэропорт",
       "id": 23
      },
      {
       "name": "САО",
       "geoType": "district",
       "parentId": null,
       "type": "okrug",
       "locationId": 1,
       "fullName": "САО",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=5&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "САО",
       "id": 5
      }
     ],
     "highways": [],
     "railways": [
      {
       "name": "Москва (Белорусский вокзал)",
       "geoType": "railway",
       "travelType": "byCar",
       "directionIds": [
        11
       ],
       "distance": 3,
       "time": 7,
       "id": 694,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=694&type=4"
      },
      {
       "name": "Москва (Савёловский вокзал)",
       "geoType": "railway",
       "travelType": "byCar",
       "directionIds": [
        19
       ],
       "distance": 5,
       "time": 8,
       "id": 689,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=689&type=4"
      },
      {
       "name": "Гражданская",
       "geoType": "railway",
       "travelType": "byCar",
       "directionIds": [
        18
       ],
       "distance": 4,
       "time": 8,
       "id": 714,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=714&type=4"
      }
     ],
     "undergrounds": [
      {
       "name": "Динамо",
       "releaseYear": null,
       "isDefault": true,
       "cianId": null,
       "transportType": "walk",
       "underConstruction": false,
       "lineColor": "00701A",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=36&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "time": 8,
       "lineId": 3,
       "id": 36,
       "lineType": null
      },
      {
       "name": "Петровский Парк",
       "releaseYear": null,
       "isDefault": null,
       "cianId": null,
       "transportType": "walk",
       "underConstruction": false,
       "lineColor": "7ACDCE",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=350&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "time": 11,
       "lineId": 27,
       "id": 350,
       "lineType": null
      },
      {
       "name": "Савёловская",
       "releaseYear": null,
       "isDefault": null,
       "cianId": null,
       "transportType": "walk",
       "underConstruction": false,
       "lineColor": "7ACDCE",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=451&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "time": 16,
       "lineId": 27,
       "id": 451,
       "lineType": null
      },
      {
       "name": "Савёловская",
       "releaseYear": null,
       "isDefault": null,
       "cianId": null,
       "transportType": "walk",
       "underConstruction": false,
       "lineColor": "A2A5B5",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=110&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "time": 19,
       "lineId": 9,
       "id": 110,
       "lineType": null
      }
     ],
     "sortedGeoIds": [
      {
       "type": "underground",
       "id": 36
      },
      {
       "type": "underground",
       "id": 350
      },
      {
       "type": "underground",
       "id": 451
      },
      {
       "type": "underground",
       "id": 110
      },
      {
       "type": "railway",
       "id": 694
      },
      {
       "type": "railway",
       "id": 689
      },
      {
       "type": "railway",
       "id": 714
      },
      {
       "type": "district",
       "id": 23
      },
      {
       "type": "district",
       "id": 5
      }
     ]
    },
    "building": {
     "parking": {
      "isAvailable": null,
      "type": "underground",
      "purposeType": null,
      "currency": null,
      "priceMonthly": null,
      "isFree": null,
      "priceEntry": null,
      "locationType": null,
      "placesCount": null
     },
     "type": null,
     "passengerLiftsCount": null,
     "deadline": null,
     "heatingType": null,
     "materialType": "monolith",
     "classType": null,
     "cargoLiftsCount": null,
     "buildYear": 2019,
     "floorsCount": 12,
     "accessType": null
    },
    "roomsCount": 1,
    "totalArea": "36.0",
    "floorNumber": 6,
    "flatType": "rooms",
    "title": null,
    "description": "Код объекта: 1939083.\n1-комнатная квартира без комиссии | Дизайнерский ремонт | 8 минут до м. Динамо\n\nСдаётся стильная 1-комнатная квартира 36 м² в современном апарт-комплексе, всего 8 минут пешком от метро Динамо.\nКвартира находится на 6 этаже 12-этажного монолитного дома (2019 г.) с высоким уровнем комфорта.\n\n Основные преимущества:\n— Высокие потолки 3,15 м — много воздуха, света и пространства\n— Дизайнерский ремонт — современный стиль, продуманный интерьер\n— Полностью укомплектована техникой: кондиционер, холодильник, телевизор, стиральная машина\n— Есть вся необходимая мебель для комфортного проживания\n— Совмещённый санузел с ванной — идеально для отдыха после рабочего дня\n\n О районе:\nДом расположен в одном из самых удобных районов города.\nВ пешей доступности:\n— магазины и супермаркеты\n— школы, сады, клиники\n— кафе и спортклубы\n— парк Петровский для прогулок и спорта\n\n Условия аренды:\n— Залог — 1 месяц\n— Подходит для 1—2 человек\n\n— Длительный срок аренды\n\n Записывайтесь на просмотр!\n\nКвартира с таким ремонтом и расположением без комиссии — редкое предложение.\nГотов показать в удобное для вас время.",
    "formattedFullPrice": "120 000 ₽/мес.",
    "formattedFullInfo": "1-комн.кв.  ·  36 м²  ·  6/12 этаж",
    "formattedAdditionalInfo": "Залог 120 000 ₽, комиссия 50%(agent_fee), на длительный срок",
    "photos": [
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2986782364-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2986782364-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2986782364-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2986782364-2.jpg",
      "id": 2986782364
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2986782369-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2986782369-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2986782369-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2986782369-2.jpg",
      "id": 2986782369
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2986782393-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2986782393-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2986782393-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2986782393-2.jpg",
      "id": 2986782393
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2986782402-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2986782402-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2986782402-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2986782402-2.jpg",
      "id": 2986782402
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2986782413-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2986782413-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2986782413-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2986782413-2.jpg",
      "id": 2986782413
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2986782425-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2986782425-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2986782425-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2986782425-2.jpg",
      "id": 2986782425
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2986782440-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2986782440-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2986782440-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2986782440-2.jpg",
      "id": 2986782440
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2986782445-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2986782445-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2986782445-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2986782445-2.jpg",
      "id": 2986782445
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2986782461-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2986782461-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2986782461-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2986782461-2.jpg",
      "id": 2986782461
     }
    ]
   },
   "files": [
    {
     "id": 2986782364,
     "isDefault": false,
     "full": "335003449-1.webp",
     "mini": "335003449-1m.webp"
    },
    {
     "id": 2986782369,
     "isDefault": false,
     "full": "335003449-2.webp",
     "mini": "335003449-2m.webp"
    },
    {
     "id": 2986782393,
     "isDefault": false,
     "full": "335003449-3.webp",
     "mini": "335003449-3m.webp"
    },
    {
     "id": 2986782402,
     "isDefault": false,
     "full": "335003449-4.webp",
     "mini": "335003449-4m.webp"
    },
    {
     "id": 2986782413,
     "isDefault": false,
     "full": "335003449-5.webp",
     "mini": "335003449-5m.webp"
    }
   ]
  },
  {
   "source": "https://www.cian.ru/rent/flat/334132124/",
   "seenAt": "2026-10-19T11:52:13.185Z",
   "offer": {
    "category": "flatRent",
    "status": "published",
    "dealType": "rent",
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
       "url": "https://www.cian.ru/snyat-2-komnatnuyu-kvartiru/"
      },
      {
       "fullName": "САО",
       "id": 5,
       "locationTypeId": -1,
       "name": "САО",
       "shortName": "САО",
       "type": "okrug",
       "url": "https://www.cian.ru/snyat-2-komnatnuyu-kvartiru-moskva-sao-045/"
      },
      {
       "fullName": "район Беговой",
       "id": 24,
       "locationTypeId": -1,
       "name": "Беговой",
       "shortName": "р-н Беговой",
       "type": "raion",
       "url": "https://www.cian.ru/snyat-2-komnatnuyu-kvartiru-moskva-begovoy-0424/"
      },
      {
       "fullName": "улица 1-я Ямского Поля",
       "id": 2499,
       "locationTypeId": -1,
       "name": "1-я Ямского Поля",
       "shortName": "ул. 1-я Ямского Поля",
       "type": "street",
       "url": "https://www.cian.ru/snyat-2-komnatnuyu-kvartiru-moskva-ulica-1-ya-yamskogo-polya-022499/"
      },
      {
       "fullName": "1к1",
       "id": 11844123,
       "locationTypeId": -1,
       "name": "1к1",
       "shortName": "1к1",
       "type": "house",
       "url": "https://www.cian.ru/cat.php?deal_type=rent&engine_version=2&house%5B0%5D=11844123&offer_type=flat&room2=1&type=4"
      }
     ],
     "coordinates": {
      "lat": 55.779271,
      "lng": 37.581676
     },
     "highways": [],
     "jk": {
      "id": 2052,
      "name": "Слава",
      "house": {
       "id": 3562348,
       "name": "B1-B4"
      },
      "gaGeo": {
       "moId": 0,
       "oblId": 1,
       "cityId": 1
      },
      "fullUrl": "https://www.cian.ru/zhiloy-kompleks-slava-moskva-2052/",
      "fullUrlTemplate": "{request_scheme}://zhk-slava-i.{host}/",
      "webSiteUrl": "https://www.mr-group.ru/projects/zhk-slava/"
     },
     "railways": [
      {
       "id": 694,
       "directionIds": [
        11
       ],
       "distance": "1.0",
       "time": 1,
       "name": "Москва (Белорусский вокзал)",
       "travelType": "byCar"
      },
      {
       "id": 694,
       "directionIds": [
        11
       ],
       "distance": "1.0",
       "time": 7,
       "name": "Москва (Белорусский вокзал)",
       "travelType": "byFoot"
      },
      {
       "id": 689,
       "directionIds": [
        19
       ],
       "distance": "2.0",
       "time": 26,
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
       "distance": "4.0",
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
       "url": "https://www.cian.ru/snyat-2-komnatnuyu-kvartiru-moskva-metro-belorusskaya-15/",
       "underConstruction": false
      },
      {
       "id": 514,
       "name": "Белорусская",
       "lineColor": "40B280",
       "travelType": "walk",
       "travelTime": 4,
       "url": "https://www.cian.ru/snyat-2-komnatnuyu-kvartiru-moskva-metro-belorusskaya-514/",
       "underConstruction": false,
       "lineType": "mcd4"
      },
      {
       "id": 68,
       "name": "Маяковская",
       "lineColor": "00701A",
       "travelType": "walk",
       "travelTime": 15,
       "url": "https://www.cian.ru/snyat-2-komnatnuyu-kvartiru-moskva-metro-mayakovskaya-68/",
       "underConstruction": false
      },
      {
       "id": 71,
       "name": "Менделеевская",
       "lineColor": "A2A5B5",
       "travelType": "walk",
       "travelTime": 19,
       "url": "https://www.cian.ru/snyat-2-komnatnuyu-kvartiru-moskva-metro-mendeleevskaya-71/",
       "underConstruction": false
      }
     ]
    },
    "id": 334132124,
    "objectGuid": "35698cef-7ece-4160-a486-6c7b38f42186",
    "cianId": 334132124,
    "userId": 125297108,
    "publishedUserId": 125297108,
    "cianUserId": 125297108,
    "isByHomeowner": false,
    "description": "Сдаётся стильная и уютная двухкомнатная квартира с евроремонтом, расположенная на 12 этаже 20-этажного дома. Общая площадь апартаментов составляет 41 кв. м. Из окон открывается вид во двор, что обеспечивает тишину и спокойствие. До станции метро \"Белорусская\" можно добраться всего за 2 минуты пешком.\n\nКвартира оснащена всем необходимым для комфортного проживания. На кухне и в комнате есть вся необходимая мебель. Современная техника, включая кондиционер, холодильник, посудомоечную и стиральную машины, а также телевизор, делают жизнь здесь максимально удобной. В ванной комнате установлена душевая кабина. \n\nДом оснащен подземной парковкой, что позволит вам не беспокоиться о месте для автомобиля. В здании функционируют пассажирский и грузовой лифты, поэтому можно легко добираться до квартиры с любым багажом. Хорошая интернет-связь позволяет всегда оставаться на связи.\n\nВ шаговой доступности находятся школы, детские сады, клиники и магазины, что делает расположение квартиры особенно удобным для семей с детьми. Развитая инфраструктура района обеспечит вам комфортное проживание.\n\nПриглашаем вас на просмотр! Не упустите возможность арендовать эту замечательную квартиру в одном из самых удобных мест Москвы. Записывайтесь на просмотр уже сегодня!",
    "photos": [
     {
      "id": 2969606753,
      "isDefault": true,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606753-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606753-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606753-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606753-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2969606878,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606878-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606878-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606878-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606878-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2969606810,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606810-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606810-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606810-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606810-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2969614416,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969614416-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969614416-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969614416-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969614416-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2969606969,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606969-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606969-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606969-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606969-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2969606824,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606824-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606824-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606824-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606824-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2969606822,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606822-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606822-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606822-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606822-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2969606777,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606777-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606777-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606777-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606777-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2969614411,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969614411-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969614411-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969614411-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969614411-3.jpg",
      "isCianLayout": false
     }
    ],
    "phones": [
     {
      "countryCode": "+7",
      "number": "9895629379"
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
        "tariffId": 1388882,
        "tariffGridType": "packageTariff"
       }
      }
     ],
     "autoprolong": true
    },
    "flatType": "rooms",
    "roomType": "separate",
    "isApartments": true,
    "totalArea": "41.0",
    "loggiasCount": 0,
    "balconiesCount": 0,
    "windowsViewType": "yard",
    "separateWcsCount": 0,
    "combinedWcsCount": 1,
    "repairType": "euro",
    "hasPhone": false,
    "hasFridge": true,
    "hasDishwasher": true,
    "hasWasher": true,
    "hasFurniture": true,
    "hasKitchenFurniture": true,
    "hasConditioner": true,
    "hasTv": true,
    "hasInternet": true,
    "hasBathtub": false,
    "hasShower": true,
    "childrenAllowed": true,
    "petsAllowed": true,
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
    "roomsCount": 2,
    "floorNumber": 12,
    "bargainTerms": {
     "price": 145000,
     "priceType": "all",
     "currency": "rur",
     "paymentPeriod": "monthly",
     "leaseTermType": "longTerm",
     "prepayMonths": 1,
     "deposit": 180000,
     "utilitiesTerms": {
      "includedInPrice": true,
      "price": 0,
      "flowMetersNotIncludedInPrice": false
     },
     "includedOptions": [],
     "clientFee": 0,
     "agentFee": 0,
     "prices": {
      "rur": 145000,
      "usd": 1735,
      "eur": 1548
     },
     "depositPrices": {
      "rur": 180000,
      "usd": 2153,
      "eur": 1921
     },
     "utilitiesTermsPrices": {
      "rur": 0,
      "usd": 0,
      "eur": 0
     },
     "tags": []
    },
    "building": {
     "floorsCount": 20,
     "parking": {
      "type": "underground"
     },
     "totalArea": "41.0",
     "liftTypes": [],
     "cranageTypes": [],
     "passengerLiftsCount": 1,
     "cargoLiftsCount": 1
    },
    "editDate": "2026-10-19T12:13:00.847000Z",
    "humanizedEditDate": "сегодня, 12:13",
    "hasRamp": false,
    "isInHiddenBase": false,
    "isObjectHidden": false,
    "isClosedVisibility": false,
    "videos": [],
    "exportLinks": {
     "pdfUrl": "/export/pdf/rent/flat/334132124/",
     "docxUrl": "/export/docx/rent/flat/334132124/"
    },
    "passengerLiftsCount": 1,
    "cargoLiftsCount": 1,
    "added": "16 окт, 11:25",
    "valueAddedServices": {
     "isStandard": false,
     "isTop3": true,
     "isPremium": false
    },
    "promotion": {
     "isPerformanceVasPilot": false,
     "promotionDescription": "Топ",
     "isCpcAuction": false
    },
    "categoriesIds": [
     1000,
     1100,
     1110,
     1111
    ],
    "publicationDate": 1790001045,
    "creationDate": "2026-09-21T17:30:45.103",
    "recoveryLink": "/razmestit-obyavlenie/334132124/",
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
    "editPhoto": "/realty/add2.aspx?id=334132124",
    "newEdit": "/razmestit-obyavlenie/?realty_id=334132124",
    "certificate": "https://www.cian.ru/newobjects/cian/certification/get?announcementId=334132124",
    "edit": "/realty/add1.aspx?id=334132124",
    "similarOffersLink": "",
    "similarOffersCount": 0,
    "buildersIds": [
     6008,
     16317
    ],
    "isImported": false,
    "userConfirmedFix": false,
    "newbuilding": {
     "id": 2052,
     "name": "Слава",
     "house": {
      "isReliable": false,
      "isFinished": true,
      "finishDate": {
       "quarter": 2,
       "year": 2023
      },
      "id": 3562348,
      "name": "B1-B4"
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
      "imagesCount": 11,
      "firstImageUrl": "https://images.cdn-cian.ru/images/slava-moskva-jk-2970650595-6.jpg",
      "videosCount": 0,
      "deadlineInfo": "Сдача в 2 кв. 2027, есть сданные"
     },
     "isReliable": false,
     "isTariffPremium": false
    },
    "timezone": 3,
    "isEnabledCallTracking": true,
    "callTrackingProvider": "mts",
    "isRentByParts": false,
    "isDuplicate": false,
    "userTrust": "notInvolved",
    "userTrustLevel": "notInvolved",
    "showWarningMessage": false,
    "moderationInfo": {
     "showContactWarningMessage": false
    },
    "isUnique": false,
    "isUniqueCheckDate": "2026-10-18",
    "isCianPartner": false,
    "isIllegalConstruction": false,
    "isNoFee": true,
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
       "value": "Апартаменты",
       "label": "Тип жилья"
      },
      {
       "value": "41 м²",
       "label": "Общая площадь"
      },
      {
       "value": "Изолированная",
       "label": "Планировка"
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
       "value": "Евроремонт",
       "label": "Ремонт"
      }
     ]
    },
    {
     "title": "О доме",
     "id": "aboutBuilding",
     "features": [
      {
       "value": "1 пассажирский, 1 грузовой",
       "label": "Количество лифтов"
      },
      {
       "value": "Подземная",
       "label": "Парковка"
      }
     ]
    }
   ],
   "factoids": [
    {
     "title": "Общая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/size.svg",
     "value": "41 м²"
    },
    {
     "title": "Этаж",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/floor.svg",
     "value": "12 из 20"
    }
   ],
   "priceChanges": [
    {
     "changeTime": "2026-10-13T14:20:33.717172Z",
     "priceData": {
      "currency": "rur",
      "price": 145000,
      "paymentPeriod": "monthly"
     }
    },
    {
     "changeTime": "2026-10-13T14:20:02.303922Z",
     "priceData": {
      "currency": "rur",
      "price": 150000,
      "paymentPeriod": "monthly"
     }
    },
    {
     "changeTime": "2026-10-01T13:21:48.853049Z",
     "priceData": {
      "currency": "rur",
      "price": 160000,
      "paymentPeriod": "monthly"
     }
    },
    {
     "changeTime": "2026-09-26T10:26:38.339012Z",
     "priceData": {
      "currency": "rur",
      "price": 170000,
      "paymentPeriod": "monthly"
     }
    },
    {
     "changeTime": "2026-09-21T14:45:05.910228Z",
     "priceData": {
      "currency": "rur",
      "price": 180000,
      "paymentPeriod": "monthly"
     }
    }
   ],
   "bti": null,
   "stats": {
    "totalViewsFormattedString": "287 просмотров, 14 за сегодня"
   },
   "priceInfo": null,
   "serp": {
    "id": 334132124,
    "category": "flatRent",
    "dealType": "rent",
    "bargainTerms": {
     "priceRur": 145000,
     "vatPrice": null,
     "price": 145000,
     "deposit": 180000,
     "priceForWorkplace": null,
     "agentBonus": null,
     "priceType": "all",
     "utilitiesTerms": {
      "includedInPrice": true,
      "flowMetersNotIncludedInPrice": false,
      "price": 0
     },
     "clientFee": 0,
     "tags": [],
     "saleType": null,
     "agentFee": 0,
     "paymentPeriod": "monthly",
     "vatType": null,
     "leaseTermType": "longTerm",
     "currency": "rur",
     "tax": null,
     "bargainAllowed": null,
     "mortgageAllowed": null,
     "leaseType": null
    },
    "geo": {
     "address": [
      {
       "name": "Москва",
       "id": 1,
       "shortName": "Москва",
       "title": "Москва",
       "geoType": "location",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&region=1&type=4",
       "isFormingAddress": true,
       "fullName": "Москва",
       "locationTypeId": 1,
       "type": "location"
      },
      {
       "name": "САО",
       "id": 5,
       "shortName": "САО",
       "title": "САО",
       "geoType": "district",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=5&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "isFormingAddress": null,
       "fullName": "САО",
       "locationTypeId": null,
       "type": "okrug"
      },
      {
       "name": "Беговой",
       "id": 24,
       "shortName": "р-н Беговой",
       "title": "р-н Беговой",
       "geoType": "district",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=24&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "isFormingAddress": null,
       "fullName": "р-н Беговой",
       "locationTypeId": null,
       "type": "raion"
      },
      {
       "name": "Белорусская",
       "id": 15,
       "shortName": "м. Белорусская",
       "title": "м. Белорусская",
       "geoType": "underground",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=15&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "isFormingAddress": null,
       "fullName": "м. Белорусская",
       "locationTypeId": null,
       "type": "metro"
      },
      {
       "name": "1-я Ямского Поля",
       "id": 2499,
       "shortName": "ул. 1-я Ямского Поля",
       "title": "улица 1-я Ямского Поля",
       "geoType": "street",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&street%5B0%5D=2499&type=4",
       "isFormingAddress": true,
       "fullName": "улица 1-я Ямского Поля",
       "locationTypeId": null,
       "type": "street"
      },
      {
       "name": "1к1",
       "id": 11844123,
       "shortName": "1к1",
       "title": "1к1",
       "geoType": "house",
       "qs": "currency=2&deal_type=rent&engine_version=2&house%5B0%5D=11844123&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "isFormingAddress": true,
       "fullName": "1к1",
       "locationTypeId": null,
       "type": "house"
      }
     ],
     "countryId": 138,
     "districts": [
      {
       "parentId": 5,
       "name": "Беговой",
       "id": 24,
       "title": "р-н Беговой",
       "geoType": "district",
       "locationId": 1,
       "qs": "currency=2&deal_type=rent&district%5B0%5D=24&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "fullName": "р-н Беговой",
       "type": "raion"
      },
      {
       "parentId": null,
       "name": "САО",
       "id": 5,
       "title": "САО",
       "geoType": "district",
       "locationId": 1,
       "qs": "currency=2&deal_type=rent&district%5B0%5D=5&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "fullName": "САО",
       "type": "okrug"
      }
     ],
     "coordinates": {
      "lng": 37.581676,
      "lat": 55.779271
     },
     "highways": [],
     "railways": [
      {
       "name": "Москва (Белорусский вокзал)",
       "directionIds": [
        11
       ],
       "id": 694,
       "distance": 1,
       "time": 7,
       "geoType": "railway",
       "travelType": "byFoot",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=694&type=4"
      },
      {
       "name": "Беговая",
       "directionIds": [
        11
       ],
       "id": 699,
       "distance": 4,
       "time": 5,
       "geoType": "railway",
       "travelType": "byCar",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=699&type=4"
      },
      {
       "name": "Москва (Савёловский вокзал)",
       "directionIds": [
        19
       ],
       "id": 689,
       "distance": 5,
       "time": 9,
       "geoType": "railway",
       "travelType": "byCar",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=689&type=4"
      }
     ],
     "jk": {
      "name": "Слава",
      "id": 2052,
      "fullUrl": "https://zhk-slava-i.cian.ru/",
      "gaGeo": {
       "cityId": 1,
       "moId": 0,
       "oblId": 1
      },
      "webSiteUrl": "https://www.mr-group.ru/projects/zhk-slava/",
      "webSiteUrlUtm": "https://www.mr-group.ru/projects/zhk-slava/?utm_source=cian&utm_medium=kartochka_cian&utm_campaign=2052",
      "developer": null,
      "house": {
       "id": 3562348,
       "name": "B1-B4"
      },
      "displayName": "ЖК «Слава»"
     },
     "buildingAddress": null,
     "undergrounds": [
      {
       "underConstruction": false,
       "name": "Белорусская",
       "id": 15,
       "time": 2,
       "cianId": null,
       "lineColor": "00701A",
       "releaseYear": null,
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=15&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "transportType": "walk",
       "isDefault": true,
       "lineId": 3,
       "lineType": null
      },
      {
       "underConstruction": false,
       "name": "Белорусская",
       "id": 514,
       "time": 4,
       "cianId": null,
       "lineColor": "40B280",
       "releaseYear": null,
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=514&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "transportType": "walk",
       "isDefault": false,
       "lineId": 34,
       "lineType": "mcd4"
      },
      {
       "underConstruction": false,
       "name": "Маяковская",
       "id": 68,
       "time": 15,
       "cianId": null,
       "lineColor": "00701A",
       "releaseYear": null,
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=68&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "transportType": "walk",
       "isDefault": false,
       "lineId": 3,
       "lineType": null
      },
      {
       "underConstruction": false,
       "name": "Менделеевская",
       "id": 71,
       "time": 19,
       "cianId": null,
       "lineColor": "A2A5B5",
       "releaseYear": null,
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=71&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "transportType": "walk",
       "isDefault": false,
       "lineId": 9,
       "lineType": null
      }
     ],
     "userInput": "Россия, Москва, 1-я улица Ямского Поля, 1к1",
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
       "id": 24
      },
      {
       "type": "district",
       "id": 5
      }
     ]
    },
    "building": {
     "cargoLiftsCount": 1,
     "passengerLiftsCount": 1,
     "floorsCount": 20,
     "classType": null,
     "accessType": null,
     "heatingType": null,
     "deadline": null,
     "materialType": null,
     "parking": {
      "isFree": null,
      "locationType": null,
      "isAvailable": null,
      "placesCount": null,
      "priceEntry": null,
      "priceMonthly": null,
      "purposeType": null,
      "currency": null,
      "type": "underground"
     },
     "type": null,
     "buildYear": null
    },
    "roomsCount": 2,
    "totalArea": "41.0",
    "floorNumber": 12,
    "flatType": "rooms",
    "title": null,
    "description": "Сдаётся стильная и уютная двухкомнатная квартира с евроремонтом, расположенная на 12 этаже 20-этажного дома. Общая площадь апартаментов составляет 41 кв. м. Из окон открывается вид во двор, что обеспечивает тишину и спокойствие. До станции метро \"Белорусская\" можно добраться всего за 2 минуты пешком.\n\nКвартира оснащена всем необходимым для комфортного проживания. На кухне и в комнате есть вся необходимая мебель. Современная техника, включая кондиционер, холодильник, посудомоечную и стиральную машины, а также телевизор, делают жизнь здесь максимально удобной. В ванной комнате установлена душевая кабина. \n\nДом оснащен подземной парковкой, что позволит вам не беспокоиться о месте для автомобиля. В здании функционируют пассажирский и грузовой лифты, поэтому можно легко добираться до квартиры с любым багажом. Хорошая интернет-связь позволяет всегда оставаться на связи.\n\nВ шаговой доступности находятся школы, детские сады, клиники и магазины, что делает расположение квартиры особенно удобным для семей с детьми. Развитая инфраструктура района обеспечит вам комфортное проживание.\n\nПриглашаем вас на просмотр! Не упустите возможность арендовать эту замечательную квартиру в одном из самых удобных мест Москвы. Записывайтесь на просмотр уже сегодня!",
    "formattedFullPrice": "145 000 ₽/мес.",
    "formattedFullInfo": "2-комн. апарт.  ·  41 м²  ·  12/20 этаж",
    "formattedAdditionalInfo": "Залог 180 000 ₽, без комиссии, предоплата 1 месяц, на длительный срок",
    "photos": [
     {
      "rotateDegree": null,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606753-2.jpg",
      "id": 2969606753,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606753-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606753-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606753-3.jpg",
      "isLayout": null,
      "isDefault": true
     },
     {
      "rotateDegree": null,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606878-2.jpg",
      "id": 2969606878,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606878-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606878-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606878-3.jpg",
      "isLayout": null,
      "isDefault": false
     },
     {
      "rotateDegree": null,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606810-2.jpg",
      "id": 2969606810,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606810-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606810-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606810-3.jpg",
      "isLayout": null,
      "isDefault": false
     },
     {
      "rotateDegree": null,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969614416-2.jpg",
      "id": 2969614416,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969614416-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969614416-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969614416-3.jpg",
      "isLayout": null,
      "isDefault": false
     },
     {
      "rotateDegree": null,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606969-2.jpg",
      "id": 2969606969,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606969-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606969-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606969-3.jpg",
      "isLayout": null,
      "isDefault": false
     },
     {
      "rotateDegree": null,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606824-2.jpg",
      "id": 2969606824,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606824-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606824-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606824-3.jpg",
      "isLayout": null,
      "isDefault": false
     },
     {
      "rotateDegree": null,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606822-2.jpg",
      "id": 2969606822,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606822-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606822-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606822-3.jpg",
      "isLayout": null,
      "isDefault": false
     },
     {
      "rotateDegree": null,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606777-2.jpg",
      "id": 2969606777,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606777-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606777-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969606777-3.jpg",
      "isLayout": null,
      "isDefault": false
     },
     {
      "rotateDegree": null,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969614411-2.jpg",
      "id": 2969614411,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969614411-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969614411-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-ulica-1ya-yamskogo-polya-2969614411-3.jpg",
      "isLayout": null,
      "isDefault": false
     }
    ]
   },
   "files": [
    {
     "id": 2969606753,
     "isDefault": true,
     "full": "334132124-1.webp",
     "mini": "334132124-1m.webp"
    },
    {
     "id": 2969606878,
     "isDefault": false,
     "full": "334132124-2.webp",
     "mini": "334132124-2m.webp"
    },
    {
     "id": 2969606810,
     "isDefault": false,
     "full": "334132124-3.webp",
     "mini": "334132124-3m.webp"
    },
    {
     "id": 2969614416,
     "isDefault": false,
     "full": "334132124-4.webp",
     "mini": "334132124-4m.webp"
    },
    {
     "id": 2969606969,
     "isDefault": false,
     "full": "334132124-5.webp",
     "mini": "334132124-5m.webp"
    }
   ]
  },
  {
   "source": "https://www.cian.ru/rent/flat/334508336/",
   "seenAt": "2026-10-19T11:52:14.730Z",
   "offer": {
    "category": "flatRent",
    "status": "published",
    "dealType": "rent",
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
       "url": "https://www.cian.ru/snyat-2-komnatnuyu-kvartiru/"
      },
      {
       "fullName": "САО",
       "id": 5,
       "locationTypeId": -1,
       "name": "САО",
       "shortName": "САО",
       "type": "okrug",
       "url": "https://www.cian.ru/snyat-2-komnatnuyu-kvartiru-moskva-sao-045/"
      },
      {
       "fullName": "район Сокол",
       "id": 35,
       "locationTypeId": -1,
       "name": "Сокол",
       "shortName": "р-н Сокол",
       "type": "raion",
       "url": "https://www.cian.ru/snyat-2-komnatnuyu-kvartiru-moskva-sokol-0435/"
      },
      {
       "fullName": "Волоколамское шоссе",
       "id": 821,
       "locationTypeId": -1,
       "name": "Волоколамское",
       "shortName": "Волоколамское ш.",
       "type": "street",
       "url": "https://www.cian.ru/snyat-2-komnatnuyu-kvartiru-moskva-volokolamskoe-shosse-02821/"
      },
      {
       "fullName": "6",
       "id": 1692086,
       "locationTypeId": -1,
       "name": "6",
       "shortName": "6",
       "type": "house",
       "url": "https://www.cian.ru/cat.php?deal_type=rent&engine_version=2&house%5B0%5D=1692086&offer_type=flat&room2=1&type=4"
      }
     ],
     "coordinates": {
      "lat": 55.808306,
      "lng": 37.5008
     },
     "highways": [],
     "railways": [
      {
       "id": 731,
       "directionIds": [
        18
       ],
       "distance": "1.0",
       "time": 17,
       "name": "Ленинградская",
       "travelType": "byFoot"
      },
      {
       "id": 739,
       "directionIds": [
        18
       ],
       "distance": "1.0",
       "time": 2,
       "name": "Покровское-Стрешнево",
       "travelType": "byCar"
      },
      {
       "id": 739,
       "directionIds": [
        18
       ],
       "distance": "1.0",
       "time": 23,
       "name": "Покровское-Стрешнево",
       "travelType": "byFoot"
      },
      {
       "id": 731,
       "directionIds": [
        18
       ],
       "distance": "2.0",
       "time": 4,
       "name": "Ленинградская",
       "travelType": "byCar"
      },
      {
       "id": 722,
       "directionIds": [
        18
       ],
       "distance": "2.0",
       "time": 35,
       "name": "Красный Балтиец",
       "travelType": "byFoot"
      },
      {
       "id": 722,
       "directionIds": [
        18
       ],
       "distance": "3.0",
       "time": 6,
       "name": "Красный Балтиец",
       "travelType": "byCar"
      }
     ],
     "undergrounds": [
      {
       "id": 116,
       "name": "Сокол",
       "lineColor": "00701A",
       "travelType": "walk",
       "travelTime": 13,
       "url": "https://www.cian.ru/snyat-2-komnatnuyu-kvartiru-moskva-metro-sokol-116/",
       "underConstruction": false
      },
      {
       "id": 292,
       "name": "Стрешнево",
       "lineColor": "FA6F9E",
       "travelType": "walk",
       "travelTime": 14,
       "url": "https://www.cian.ru/snyat-2-komnatnuyu-kvartiru-moskva-stanciya-mck-streshnevo-292/",
       "underConstruction": false,
       "lineType": "mck"
      },
      {
       "id": 422,
       "name": "Стрешнево",
       "lineColor": "BD748F",
       "travelType": "walk",
       "travelTime": 17,
       "url": "https://www.cian.ru/snyat-2-komnatnuyu-kvartiru-moskva-metro-streshnevo-422/",
       "underConstruction": false,
       "lineType": "mcd2"
      },
      {
       "id": 30,
       "name": "Войковская",
       "lineColor": "00701A",
       "travelType": "walk",
       "travelTime": 19,
       "url": "https://www.cian.ru/snyat-2-komnatnuyu-kvartiru-moskva-metro-voykovskaya-30/",
       "underConstruction": false
      }
     ]
    },
    "id": 334508336,
    "objectGuid": "15542154-03dc-4c77-bedb-10dd10c2fa75",
    "cianId": 334508336,
    "userId": 3914321,
    "publishedUserId": 143970859,
    "cianUserId": 143970859,
    "title": "Квартира с гардеробной!",
    "description": "Id 68306. Эксклюзивное предложение: Дизайнерская квартира с гардеробной и панорамными видами в доме преподавателей МАИ. Расположенная в легендарном районе Сокол, эта квартира открывает уникальную возможность жить в центре Москвы, ежедневно любуясь живописными пейзажами знаменитого Поселка Художников. Идеальное место для вдохновляющих прогулок, не покидая мегаполис. \n\n   Особенности пространства: — Высота потолков 3.2 метра создает ощущение простора и свободы. Панорамное остекление и два французских балкона наполняют комнаты мягким естественным светом. Продуманная планировка включает просторную гардеробную комнату — систему хранения мечты. \n\n  Премиальная отделка: экологичные материалы, натуральный камень, немецкая премиальная сантехника и аксессуары KEUCO, теплые полы во всех зонах. Оснащение под ключ: Квартира полностью укомплектована техникой премиум-класса: посудомоечная, стиральная и сушильная машины. Современная мультимедиа и стильная корпусная мебель уже ждут нового владельца. \n\n   Требования к жильцам: Мы ищем ответственных и состоявшихся людей (до 2 человек). Предпочтение — пара без детей и домашних животных, с подтвержденным официальным доходом. Для нас важна тишина и бережное отношение к интерьеру.\n\n   Стоимость: 120 000 руб. в месяц, плюс счетчики, залог 1 месяц.",
    "photos": [
     {
      "id": 2981670934,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2981670934-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981670934-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981670934-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981670934-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2981670952,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2981670952-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981670952-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981670952-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981670952-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2981670983,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2981670983-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981670983-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981670983-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981670983-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2981670999,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2981670999-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981670999-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981670999-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981670999-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2981671042,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2981671042-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981671042-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981671042-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981671042-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2981671053,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2981671053-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981671053-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981671053-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981671053-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2981671105,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2981671105-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981671105-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981671105-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981671105-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2981671117,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2981671117-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981671117-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981671117-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981671117-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2981671168,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2981671168-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981671168-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981671168-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981671168-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2981671184,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2981671184-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981671184-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981671184-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981671184-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2981671218,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2981671218-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981671218-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981671218-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981671218-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2981671238,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2981671238-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981671238-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981671238-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981671238-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2981671268,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2981671268-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981671268-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981671268-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981671268-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2981671289,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2981671289-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981671289-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981671289-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981671289-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2981671366,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2981671366-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981671366-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981671366-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981671366-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2977298500,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2977298500-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2977298500-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2977298500-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2977298500-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2977298525,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2977298525-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2977298525-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2977298525-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2977298525-3.jpg",
      "isCianLayout": false
     }
    ],
    "phones": [
     {
      "countryCode": "+7",
      "number": "9153881047"
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
        "paid"
       ],
       "days": 30,
       "type": "periodical",
       "tariffIdentificator": {
        "tariffId": 12002617,
        "tariffGridType": "servicePackageGroup"
       }
      }
     ],
     "autoprolong": true
    },
    "flatType": "rooms",
    "totalArea": "40.0",
    "livingArea": "25.0",
    "kitchenArea": "10.0",
    "balconiesCount": 2,
    "windowsViewType": "street",
    "separateWcsCount": 1,
    "repairType": "design",
    "hasDishwasher": true,
    "hasWasher": true,
    "hasFurniture": true,
    "hasTv": true,
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
    "roomsCount": 2,
    "floorNumber": 11,
    "bargainTerms": {
     "price": 118000,
     "priceType": "all",
     "currency": "rur",
     "paymentPeriod": "monthly",
     "leaseTermType": "longTerm",
     "deposit": 120000,
     "utilitiesTerms": {
      "includedInPrice": true,
      "price": 0,
      "flowMetersNotIncludedInPrice": true
     },
     "includedOptions": [],
     "clientFee": 50,
     "agentFee": 50,
     "prices": {
      "rur": 118000,
      "usd": 1412,
      "eur": 1260
     },
     "depositPrices": {
      "rur": 120000,
      "usd": 1436,
      "eur": 1281
     },
     "utilitiesTermsPrices": {
      "rur": 0,
      "usd": 0,
      "eur": 0
     },
     "tags": []
    },
    "building": {
     "materialType": "brick",
     "floorsCount": 11,
     "buildYear": 1959,
     "hasGarbageChute": true,
     "ceilingHeight": "3.2",
     "totalArea": "40.0",
     "liftTypes": [],
     "cranageTypes": [],
     "passengerLiftsCount": 1,
     "houseMaterialType": "brick"
    },
    "editDate": "2026-10-19T13:26:39.148297Z",
    "humanizedEditDate": "сегодня, 13:26",
    "isInHiddenBase": false,
    "isObjectHidden": false,
    "isClosedVisibility": false,
    "videos": [],
    "demolishedInMoscowProgramm": false,
    "exportLinks": {
     "pdfUrl": "/export/pdf/rent/flat/334508336/",
     "docxUrl": "/export/docx/rent/flat/334508336/"
    },
    "passengerLiftsCount": 1,
    "added": "16 окт, 12:49",
    "valueAddedServices": {
     "isStandard": false,
     "isTop3": true,
     "isPremium": false
    },
    "promotion": {
     "isPerformanceVasPilot": false,
     "promotionDescription": "Топ",
     "isCpcAuction": false
    },
    "categoriesIds": [
     1000,
     1100,
     1110,
     1111
    ],
    "publicationDate": 1790932870,
    "creationDate": "2026-10-02T12:21:10.567",
    "recoveryLink": "/razmestit-obyavlenie/334508336/?isFromXML=1",
    "trackingData": {
     "moId": 0,
     "oblId": 1,
     "cityId": 1,
     "fbRegion": "Москва",
     "fbCity": "Москва"
    },
    "editPhoto": "/realty/add2.aspx?id=334508336&isFromXML=1",
    "newEdit": "/razmestit-obyavlenie/?realty_id=334508336&isFromXML=1",
    "certificate": "https://www.cian.ru/newobjects/cian/certification/get?announcementId=334508336",
    "edit": "/realty/add1.aspx?id=334508336&isFromXML=1",
    "similarOffersLink": "",
    "similarOffersCount": 0,
    "buildersIds": [],
    "isImported": true,
    "userConfirmedFix": false,
    "timezone": 3,
    "isEnabledCallTracking": true,
    "callTrackingProvider": "mts",
    "isRentByParts": false,
    "isDuplicate": false,
    "userTrust": "excluded",
    "userTrustLevel": "excluded",
    "showWarningMessage": false,
    "moderationInfo": {
     "showContactWarningMessage": false
    },
    "isUnique": true,
    "isUniqueCheckDate": "2026-10-18",
    "isCianPartner": false,
    "externalId": "68306",
    "isIllegalConstruction": false,
    "amenities": [],
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
       "value": "40 м²",
       "label": "Общая площадь"
      },
      {
       "value": "25 м²",
       "label": "Жилая площадь"
      },
      {
       "value": "10 м²",
       "label": "Площадь кухни"
      },
      {
       "value": "3,2 м",
       "label": "Высота потолков"
      },
      {
       "value": "1 раздельный",
       "label": "Санузел"
      },
      {
       "value": "2 балкона",
       "label": "Балкон/лоджия"
      },
      {
       "value": "На улицу",
       "label": "Вид из окон"
      },
      {
       "value": "Дизайнерский",
       "label": "Ремонт"
      }
     ]
    },
    {
     "title": "О доме",
     "id": "aboutBuilding",
     "features": [
      {
       "value": "1959",
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
       "value": "Кирпичный",
       "label": "Тип дома"
      },
      {
       "value": "Железобетонные",
       "label": "Тип перекрытий"
      },
      {
       "value": "6",
       "label": "Подъезды"
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
      },
      {
       "value": "Центральное",
       "label": "Газоснабжение"
      }
     ]
    }
   ],
   "factoids": [
    {
     "title": "Общая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/size.svg",
     "value": "40 м²"
    },
    {
     "title": "Жилая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/plan.svg",
     "value": "25 м²"
    },
    {
     "title": "Площадь кухни",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/kitchen.svg",
     "value": "10 м²"
    },
    {
     "title": "Этаж",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/floor.svg",
     "value": "11 из 11"
    },
    {
     "title": "Год постройки",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/build_year.svg",
     "value": "1959"
    }
   ],
   "priceChanges": [
    {
     "changeTime": "2026-10-09T12:30:37.361420Z",
     "priceData": {
      "currency": "rur",
      "price": 118000,
      "paymentPeriod": "monthly"
     }
    },
    {
     "changeTime": "2026-10-02T09:21:11.344859Z",
     "priceData": {
      "currency": "rur",
      "price": 120000,
      "paymentPeriod": "monthly"
     }
    }
   ],
   "bti": {
    "houseData": {
     "yearRelease": 1959,
     "houseMaterialType": "brick",
     "floorMax": 10,
     "entrances": 6,
     "flatCount": 261,
     "isEmergency": false,
     "demolishedInMoscowProgramm": false,
     "houseHeatSupplyType": "central",
     "houseOverhaulFundType": "regionalOp",
     "houseGasSupplyType": "central",
     "houseOverlapType": "concrete",
     "lifts": 12,
     "seriesName": "Индивидуальный проект"
    }
   },
   "stats": {
    "totalViewsFormattedString": "433 просмотра, 19 за сегодня"
   },
   "priceInfo": null,
   "serp": {
    "id": 334508336,
    "category": "flatRent",
    "dealType": "rent",
    "bargainTerms": {
     "leaseType": null,
     "utilitiesTerms": {
      "price": 0,
      "includedInPrice": true,
      "flowMetersNotIncludedInPrice": true
     },
     "vatPrice": null,
     "paymentPeriod": "monthly",
     "priceType": "all",
     "priceRur": 118000,
     "leaseTermType": "longTerm",
     "currency": "rur",
     "saleType": null,
     "tax": null,
     "deposit": 120000,
     "agentFee": 50,
     "mortgageAllowed": null,
     "tags": [],
     "vatType": null,
     "bargainAllowed": null,
     "agentBonus": null,
     "priceForWorkplace": null,
     "price": 118000,
     "clientFee": 50
    },
    "geo": {
     "userInput": "город Москва, Сокол район, шоссе Волоколамское, дом 6",
     "address": [
      {
       "geoType": "location",
       "shortName": "Москва",
       "id": 1,
       "name": "Москва",
       "type": "location",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&region=1&type=4",
       "title": "Москва",
       "fullName": "Москва",
       "isFormingAddress": true,
       "locationTypeId": 1
      },
      {
       "geoType": "district",
       "shortName": "САО",
       "id": 5,
       "name": "САО",
       "type": "okrug",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=5&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "САО",
       "fullName": "САО",
       "isFormingAddress": null,
       "locationTypeId": null
      },
      {
       "geoType": "district",
       "shortName": "р-н Сокол",
       "id": 35,
       "name": "Сокол",
       "type": "raion",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=35&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "р-н Сокол",
       "fullName": "р-н Сокол",
       "isFormingAddress": null,
       "locationTypeId": null
      },
      {
       "geoType": "underground",
       "shortName": "м. Сокол",
       "id": 116,
       "name": "Сокол",
       "type": "metro",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=116&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "title": "м. Сокол",
       "fullName": "м. Сокол",
       "isFormingAddress": null,
       "locationTypeId": null
      },
      {
       "geoType": "street",
       "shortName": "Волоколамское ш.",
       "id": 821,
       "name": "Волоколамское",
       "type": "street",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&street%5B0%5D=821&type=4",
       "title": "Волоколамское шоссе",
       "fullName": "Волоколамское шоссе",
       "isFormingAddress": true,
       "locationTypeId": null
      },
      {
       "geoType": "house",
       "shortName": "6",
       "id": 1692086,
       "name": "6",
       "type": "house",
       "qs": "currency=2&deal_type=rent&engine_version=2&house%5B0%5D=1692086&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "6",
       "fullName": "6",
       "isFormingAddress": true,
       "locationTypeId": null
      }
     ],
     "coordinates": {
      "lat": 55.808306,
      "lng": 37.5008
     },
     "countryId": 138,
     "highways": [],
     "districts": [
      {
       "geoType": "district",
       "id": 35,
       "name": "Сокол",
       "type": "raion",
       "locationId": 1,
       "title": "р-н Сокол",
       "fullName": "р-н Сокол",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=35&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "parentId": 5
      },
      {
       "geoType": "district",
       "id": 5,
       "name": "САО",
       "type": "okrug",
       "locationId": 1,
       "title": "САО",
       "fullName": "САО",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=5&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "parentId": null
      }
     ],
     "jk": null,
     "undergrounds": [
      {
       "lineColor": "00701A",
       "id": 116,
       "name": "Сокол",
       "lineId": 3,
       "cianId": null,
       "isDefault": true,
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=116&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "releaseYear": null,
       "underConstruction": false,
       "transportType": "walk",
       "time": 13,
       "lineType": null
      },
      {
       "lineColor": "FA6F9E",
       "id": 292,
       "name": "Стрешнево",
       "lineId": 22,
       "cianId": null,
       "isDefault": null,
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=292&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "releaseYear": null,
       "underConstruction": false,
       "transportType": "walk",
       "time": 14,
       "lineType": "mck"
      },
      {
       "lineColor": "BD748F",
       "id": 422,
       "name": "Стрешнево",
       "lineId": 32,
       "cianId": null,
       "isDefault": null,
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=422&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "releaseYear": null,
       "underConstruction": false,
       "transportType": "walk",
       "time": 17,
       "lineType": "mcd2"
      },
      {
       "lineColor": "00701A",
       "id": 30,
       "name": "Войковская",
       "lineId": 3,
       "cianId": null,
       "isDefault": null,
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=30&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "releaseYear": null,
       "underConstruction": false,
       "transportType": "walk",
       "time": 19,
       "lineType": null
      }
     ],
     "railways": [
      {
       "geoType": "railway",
       "id": 731,
       "name": "Ленинградская",
       "directionIds": [
        18
       ],
       "distance": 1,
       "travelType": "byFoot",
       "time": 17,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=731&type=4"
      },
      {
       "geoType": "railway",
       "id": 739,
       "name": "Покровское-Стрешнево",
       "directionIds": [
        18
       ],
       "distance": 1,
       "travelType": "byCar",
       "time": 2,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=739&type=4"
      },
      {
       "geoType": "railway",
       "id": 722,
       "name": "Красный Балтиец",
       "directionIds": [
        18
       ],
       "distance": 3,
       "travelType": "byCar",
       "time": 6,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=722&type=4"
      }
     ],
     "buildingAddress": null,
     "sortedGeoIds": [
      {
       "type": "underground",
       "id": 116
      },
      {
       "type": "underground",
       "id": 292
      },
      {
       "type": "underground",
       "id": 422
      },
      {
       "type": "underground",
       "id": 30
      },
      {
       "type": "railway",
       "id": 731
      },
      {
       "type": "railway",
       "id": 739
      },
      {
       "type": "railway",
       "id": 722
      },
      {
       "type": "district",
       "id": 35
      },
      {
       "type": "district",
       "id": 5
      }
     ]
    },
    "building": {
     "materialType": "brick",
     "heatingType": null,
     "parking": null,
     "floorsCount": 11,
     "classType": null,
     "deadline": null,
     "buildYear": 1959,
     "accessType": null,
     "passengerLiftsCount": 1,
     "type": null,
     "cargoLiftsCount": null
    },
    "roomsCount": 2,
    "totalArea": "40.0",
    "floorNumber": 11,
    "flatType": "rooms",
    "title": "Квартира с гардеробной!",
    "description": "Id 68306. Эксклюзивное предложение: Дизайнерская квартира с гардеробной и панорамными видами в доме преподавателей МАИ. Расположенная в легендарном районе Сокол, эта квартира открывает уникальную возможность жить в центре Москвы, ежедневно любуясь живописными пейзажами знаменитого Поселка Художников. Идеальное место для вдохновляющих прогулок, не покидая мегаполис. \n\n   Особенности пространства: — Высота потолков 3.2 метра создает ощущение простора и свободы. Панорамное остекление и два французских балкона наполняют комнаты мягким естественным светом. Продуманная планировка включает просторную гардеробную комнату — систему хранения мечты. \n\n  Премиальная отделка: экологичные материалы, натуральный камень, немецкая премиальная сантехника и аксессуары KEUCO, теплые полы во всех зонах. Оснащение под ключ: Квартира полностью укомплектована техникой премиум-класса: посудомоечная, стиральная и сушильная машины. Современная мультимедиа и стильная корпусная мебель уже ждут нового владельца. \n\n   Требования к жильцам: Мы ищем ответственных и состоявшихся людей (до 2 человек). Предпочтение — пара без детей и домашних животных, с подтвержденным официальным доходом. Для нас важна тишина и бережное отношение к интерьеру.\n\n   Стоимость: 120 000 руб. в месяц, плюс счетчики, залог 1 месяц.",
    "formattedFullPrice": "118 000 ₽/мес.",
    "formattedFullInfo": "2-комн.кв.  ·  40 м²  ·  11/11 этаж",
    "formattedAdditionalInfo": "Залог 120 000 ₽, комиссия 50%(agent_fee), на длительный срок",
    "photos": [
     {
      "isLayout": null,
      "id": 2981670934,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981670934-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2981670934-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981670934-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981670934-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2981670952,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981670952-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2981670952-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981670952-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981670952-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2981670983,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981670983-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2981670983-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981670983-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981670983-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2981670999,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981670999-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2981670999-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981670999-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981670999-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2981671042,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981671042-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2981671042-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981671042-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981671042-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2981671053,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981671053-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2981671053-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981671053-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981671053-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2981671105,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981671105-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2981671105-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981671105-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981671105-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2981671117,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981671117-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2981671117-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981671117-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981671117-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2981671168,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981671168-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2981671168-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981671168-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981671168-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2981671184,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981671184-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2981671184-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981671184-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981671184-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2981671218,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981671218-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2981671218-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981671218-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981671218-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2981671238,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981671238-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2981671238-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981671238-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981671238-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2981671268,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981671268-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2981671268-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981671268-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981671268-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2981671289,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981671289-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2981671289-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981671289-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981671289-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2981671366,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2981671366-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2981671366-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2981671366-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2981671366-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2977298500,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2977298500-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2977298500-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2977298500-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2977298500-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2977298525,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2977298525-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2977298525-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2977298525-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2977298525-3.jpg",
      "rotateDegree": null
     }
    ]
   },
   "files": [
    {
     "id": 2981670934,
     "isDefault": false,
     "full": "334508336-1.webp",
     "mini": "334508336-1m.webp"
    },
    {
     "id": 2981670952,
     "isDefault": false,
     "full": "334508336-2.webp",
     "mini": "334508336-2m.webp"
    },
    {
     "id": 2981670983,
     "isDefault": false,
     "full": "334508336-3.webp",
     "mini": "334508336-3m.webp"
    },
    {
     "id": 2981670999,
     "isDefault": false,
     "full": "334508336-4.webp",
     "mini": "334508336-4m.webp"
    },
    {
     "id": 2981671042,
     "isDefault": false,
     "full": "334508336-5.webp",
     "mini": "334508336-5m.webp"
    }
   ]
  },
  {
   "source": "https://www.cian.ru/rent/flat/335064892/",
   "seenAt": "2026-10-19T11:52:16.079Z",
   "offer": {
    "category": "flatRent",
    "status": "published",
    "dealType": "rent",
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
       "url": "https://www.cian.ru/snyat-kvartiru/"
      },
      {
       "fullName": "САО",
       "id": 5,
       "locationTypeId": -1,
       "name": "САО",
       "shortName": "САО",
       "type": "okrug",
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-sao-045/"
      },
      {
       "fullName": "район Головинский",
       "id": 28,
       "locationTypeId": -1,
       "name": "Головинский",
       "shortName": "р-н Головинский",
       "type": "raion",
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-golovinskiy-0428/"
      },
      {
       "fullName": "Кронштадтский бульвар",
       "id": 1293,
       "locationTypeId": -1,
       "name": "Кронштадтский",
       "shortName": "Кронштадтский бул.",
       "type": "street",
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-kronshtadtskiy-bulvar-021293/"
      },
      {
       "fullName": "9к6",
       "id": 13270570,
       "locationTypeId": -1,
       "name": "9к6",
       "shortName": "9к6",
       "type": "house",
       "url": "https://www.cian.ru/cat.php?deal_type=rent&engine_version=2&house%5B0%5D=13270570&offer_type=flat&type=4"
      }
     ],
     "coordinates": {
      "lat": 55.842934,
      "lng": 37.487784
     },
     "highways": [],
     "jk": {
      "id": 2251726,
      "name": "Кронштадтский 9",
      "house": {
       "id": 5871433,
       "name": "Корпус 1.2"
      },
      "gaGeo": {
       "moId": 0,
       "oblId": 1,
       "cityId": 1
      },
      "fullUrl": "https://www.cian.ru/zhiloy-kompleks-kronshtadtskiy-9-moskva-2251726/",
      "fullUrlTemplate": "{request_scheme}://zhk-kronshtadtskiy-9-i.{host}/"
     },
     "railways": [
      {
       "id": 752,
       "directionIds": [
        16
       ],
       "distance": "4.0",
       "time": 50,
       "name": "Ховрино",
       "travelType": "byFoot"
      },
      {
       "id": 741,
       "directionIds": [
        16
       ],
       "distance": "4.0",
       "time": 50,
       "name": "Моссельмаш",
       "travelType": "byFoot"
      },
      {
       "id": 731,
       "directionIds": [
        18
       ],
       "distance": "4.0",
       "time": 7,
       "name": "Ленинградская",
       "travelType": "byCar"
      },
      {
       "id": 731,
       "directionIds": [
        18
       ],
       "distance": "4.0",
       "time": 50,
       "name": "Ленинградская",
       "travelType": "byFoot"
      },
      {
       "id": 752,
       "directionIds": [
        16
       ],
       "distance": "6.0",
       "time": 10,
       "name": "Ховрино",
       "travelType": "byCar"
      },
      {
       "id": 741,
       "directionIds": [
        16
       ],
       "distance": "6.0",
       "time": 11,
       "name": "Моссельмаш",
       "travelType": "byCar"
      }
     ],
     "undergrounds": [
      {
       "id": 29,
       "name": "Водный стадион",
       "lineColor": "00701A",
       "travelType": "walk",
       "travelTime": 6,
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-metro-vodnyy-stadion-29/",
       "underConstruction": false
      },
      {
       "id": 106,
       "name": "Речной вокзал",
       "lineColor": "00701A",
       "travelType": "walk",
       "travelTime": 21,
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-metro-rechnoy-vokzal-106/",
       "underConstruction": false
      },
      {
       "id": 293,
       "name": "Балтийская",
       "lineColor": "FA6F9E",
       "travelType": "transport",
       "travelTime": 5,
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-stanciya-mck-baltiyskaya-293/",
       "underConstruction": false,
       "lineType": "mck"
      }
     ]
    },
    "id": 335064892,
    "objectGuid": "63e5efa3-3136-42cc-b84f-44404678630d",
    "cianId": 335064892,
    "userId": 3183086,
    "publishedUserId": 3183086,
    "cianUserId": 310373,
    "isByHomeowner": false,
    "description": "Шикарная видовая студия по адресу Кронштадский бульвар дом 9 корус 6. На срок от года.  \nНаходится на 10 этаже с прекрасным видом на Москву.\n До метро 3-5 минут от квартиры. 4 скоростных лифта, все всегда работают\nУстановленный современный стеклопакет хорошо изолирует звуки. С закрытым окном идеально тихо. \n \nГрамотная планировка и продуманный функционал:  \n- уютная комната с двуспальной кроватью (ортопедический матрас с шикарным мягким верхним слоем ), большой SMАRT TV прекрасно разместится при желании в рабочей зоне, вместительные шкафы доставят удовольствие любой девушке,  \n- удобная кухня укомплектована современной техникой (варочная панель, духовой шкаф , большой холодильник, микроволновка). \n\n- ванная  стиральная машина \n \nСдается семейной паре, либо одному человеку. КАТЕГОРИЧЕСКИ без животных и детей.  \nК стоимости аренды добавятся коммунальные платежи. \nСтоимость аренды  + по квитанции и счётчикам: вода, отопление , электричество , мусор, охрана обслуживание, видеонаблюдение. Предоплата за 1й месяц.  \nСтраховой возвратный депозит 70 000 руб. (разбивается на два месяца), юристу за показ квартиры и сопровождение 15тр\n\nВ шаговой доступности есть необходимая инфраструктура \nдля комфортного проживания семьи, имеются поликлиника, кафе и рестораны на любой вкус и кошелёк, множество магазинов, подземные и наземные паркинги (всегда есть где поставить машину), оборудованные спортивные площадки, в том числе закрытые площадки с доступом только жителей дома.  \nРайон продолжает развиваться.\n\nPS  Самым быстрым бонус: утюг, гладильная доска, сушилка и пылесос. всё дорогое и новое.",
    "photos": [
     {
      "id": 2987983501,
      "isDefault": true,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983501-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983501-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983501-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983501-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2987983497,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983497-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983497-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983497-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983497-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2987983496,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983496-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983496-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983496-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983496-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2987983500,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983500-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983500-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983500-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983500-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2987983499,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983499-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983499-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983499-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983499-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2987983498,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983498-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983498-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983498-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983498-3.jpg",
      "isCianLayout": false
     }
    ],
    "phones": [
     {
      "countryCode": "+7",
      "number": "9165717344"
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
        "tariffId": 1388803,
        "tariffGridType": "packageTariff"
       }
      }
     ],
     "autoprolong": true
    },
    "flatType": "studio",
    "isApartments": false,
    "totalArea": "27.0",
    "livingArea": "25.0",
    "loggiasCount": 0,
    "balconiesCount": 0,
    "windowsViewType": "street",
    "separateWcsCount": 0,
    "combinedWcsCount": 0,
    "hasPhone": false,
    "hasFridge": true,
    "hasDishwasher": true,
    "hasWasher": true,
    "hasFurniture": true,
    "hasKitchenFurniture": true,
    "hasConditioner": true,
    "hasTv": false,
    "hasInternet": true,
    "hasBathtub": false,
    "hasShower": true,
    "hasSecurity": true,
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
    "floorNumber": 10,
    "bargainTerms": {
     "price": 70000,
     "priceType": "all",
     "currency": "rur",
     "paymentPeriod": "monthly",
     "leaseTermType": "longTerm",
     "prepayMonths": 1,
     "deposit": 70000,
     "utilitiesTerms": {
      "includedInPrice": true,
      "price": 0,
      "flowMetersNotIncludedInPrice": true
     },
     "includedOptions": [],
     "clientFee": 0,
     "agentFee": 0,
     "prices": {
      "rur": 70000,
      "usd": 838,
      "eur": 747
     },
     "depositPrices": {
      "rur": 70000,
      "usd": 838,
      "eur": 747
     },
     "utilitiesTermsPrices": {
      "rur": 0,
      "usd": 0,
      "eur": 0
     },
     "tags": []
    },
    "building": {
     "floorsCount": 33,
     "buildYear": 2024,
     "parking": {
      "type": "multilevel"
     },
     "ceilingHeight": "3.1",
     "totalArea": "27.0",
     "liftTypes": [],
     "cranageTypes": [],
     "passengerLiftsCount": 4
    },
    "editDate": "2026-10-19T12:13:05.067744Z",
    "humanizedEditDate": "сегодня, 12:13",
    "isInHiddenBase": false,
    "isObjectHidden": false,
    "isClosedVisibility": false,
    "videos": [],
    "demolishedInMoscowProgramm": false,
    "exportLinks": {
     "pdfUrl": "/export/pdf/rent/flat/335064892/",
     "docxUrl": "/export/docx/rent/flat/335064892/"
    },
    "passengerLiftsCount": 4,
    "added": "вчера, 11:58",
    "valueAddedServices": {
     "isStandard": false,
     "isTop3": true,
     "isPremium": false
    },
    "promotion": {
     "isPerformanceVasPilot": false,
     "promotionDescription": "Топ",
     "isCpcAuction": false
    },
    "categoriesIds": [
     1000,
     1100,
     1110,
     1111
    ],
    "publicationDate": 1792309827,
    "creationDate": "2026-10-18T10:50:27.377",
    "recoveryLink": "/razmestit-obyavlenie/335064892/",
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
    "editPhoto": "/realty/add2.aspx?id=335064892",
    "newEdit": "/razmestit-obyavlenie/?realty_id=335064892",
    "certificate": "https://www.cian.ru/newobjects/cian/certification/get?announcementId=335064892",
    "edit": "/realty/add1.aspx?id=335064892",
    "similarOffersLink": "",
    "similarOffersCount": 0,
    "buildersIds": [
     9
    ],
    "builderId": 9,
    "isImported": false,
    "userConfirmedFix": false,
    "newbuilding": {
     "id": 2251726,
     "name": "Кронштадтский 9",
     "house": {
      "isReliable": false,
      "isFinished": true,
      "finishDate": {
       "quarter": 2,
       "year": 2024
      },
      "id": 5871433,
      "name": "Корпус 1.2"
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
      "imagesCount": 5,
      "firstImageUrl": "https://images.cdn-cian.ru/images/kronshtadtskiy-9-moskva-jk-2897918095-6.jpg",
      "videosCount": 3,
      "deadlineInfo": "Сдача в 1 кв. 2028, есть сданные"
     },
     "isReliable": false,
     "isTariffPremium": false
    },
    "timezone": 3,
    "isEnabledCallTracking": true,
    "callTrackingProvider": "mts",
    "isRentByParts": false,
    "isDuplicate": false,
    "userTrust": "notInvolved",
    "userTrustLevel": "notInvolved",
    "showWarningMessage": false,
    "moderationInfo": {
     "showContactWarningMessage": false
    },
    "isUnique": false,
    "isUniqueCheckDate": "2026-10-18",
    "isCianPartner": false,
    "isIllegalConstruction": false,
    "isNoFee": true,
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
       "value": "27 м²",
       "label": "Общая площадь"
      },
      {
       "value": "25 м²",
       "label": "Жилая площадь"
      },
      {
       "value": "3,1 м",
       "label": "Высота потолков"
      },
      {
       "value": "На улицу",
       "label": "Вид из окон"
      }
     ]
    },
    {
     "title": "О доме",
     "id": "aboutBuilding",
     "features": [
      {
       "value": "2024",
       "label": "Год постройки"
      },
      {
       "value": "4 пассажирских",
       "label": "Количество лифтов"
      },
      {
       "value": "Нет информации",
       "label": "Тип перекрытий"
      },
      {
       "value": "Многоуровневая",
       "label": "Парковка"
      },
      {
       "value": "Нет информации",
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
     "value": "27 м²"
    },
    {
     "title": "Жилая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/plan.svg",
     "value": "25 м²"
    },
    {
     "title": "Этаж",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/floor.svg",
     "value": "10 из 33"
    },
    {
     "title": "Год постройки",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/build_year.svg",
     "value": "2024"
    }
   ],
   "priceChanges": [
    {
     "changeTime": "2026-10-18T07:50:29.717926Z",
     "priceData": {
      "currency": "rur",
      "price": 70000,
      "paymentPeriod": "monthly"
     }
    }
   ],
   "bti": {
    "houseData": {
     "yearRelease": 2024,
     "houseMaterialType": "none",
     "isEmergency": false,
     "demolishedInMoscowProgramm": false,
     "houseHeatSupplyType": "none",
     "houseOverhaulFundType": "unknown",
     "houseGasSupplyType": "unknown",
     "houseOverlapType": "unknown"
    }
   },
   "stats": {
    "totalViewsFormattedString": "83 просмотра, 26 за сегодня"
   },
   "priceInfo": null,
   "serp": {
    "id": 335064892,
    "category": "flatRent",
    "dealType": "rent",
    "bargainTerms": {
     "priceRur": 70000,
     "vatPrice": null,
     "price": 70000,
     "deposit": 70000,
     "priceForWorkplace": null,
     "agentBonus": null,
     "priceType": "all",
     "utilitiesTerms": {
      "includedInPrice": true,
      "flowMetersNotIncludedInPrice": true,
      "price": 0
     },
     "clientFee": 0,
     "tags": [],
     "saleType": null,
     "agentFee": 0,
     "paymentPeriod": "monthly",
     "vatType": null,
     "leaseTermType": "longTerm",
     "currency": "rur",
     "tax": null,
     "bargainAllowed": null,
     "mortgageAllowed": null,
     "leaseType": null
    },
    "geo": {
     "address": [
      {
       "name": "Москва",
       "id": 1,
       "shortName": "Москва",
       "title": "Москва",
       "geoType": "location",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&region=1&type=4",
       "isFormingAddress": true,
       "fullName": "Москва",
       "locationTypeId": 1,
       "type": "location"
      },
      {
       "name": "САО",
       "id": 5,
       "shortName": "САО",
       "title": "САО",
       "geoType": "district",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=5&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "isFormingAddress": null,
       "fullName": "САО",
       "locationTypeId": null,
       "type": "okrug"
      },
      {
       "name": "Головинский",
       "id": 28,
       "shortName": "р-н Головинский",
       "title": "р-н Головинский",
       "geoType": "district",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=28&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "isFormingAddress": null,
       "fullName": "р-н Головинский",
       "locationTypeId": null,
       "type": "raion"
      },
      {
       "name": "Водный стадион",
       "id": 29,
       "shortName": "м. Водный стадион",
       "title": "м. Водный стадион",
       "geoType": "underground",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=29&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "isFormingAddress": null,
       "fullName": "м. Водный стадион",
       "locationTypeId": null,
       "type": "metro"
      },
      {
       "name": "Кронштадтский",
       "id": 1293,
       "shortName": "Кронштадтский бул.",
       "title": "Кронштадтский бульвар",
       "geoType": "street",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&street%5B0%5D=1293&type=4",
       "isFormingAddress": true,
       "fullName": "Кронштадтский бульвар",
       "locationTypeId": null,
       "type": "street"
      },
      {
       "name": "9к6",
       "id": 13270570,
       "shortName": "9к6",
       "title": "9к6",
       "geoType": "house",
       "qs": "currency=2&deal_type=rent&engine_version=2&house%5B0%5D=13270570&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "isFormingAddress": true,
       "fullName": "9к6",
       "locationTypeId": null,
       "type": "house"
      }
     ],
     "countryId": 138,
     "districts": [
      {
       "parentId": 5,
       "name": "Головинский",
       "id": 28,
       "title": "р-н Головинский",
       "geoType": "district",
       "locationId": 1,
       "qs": "currency=2&deal_type=rent&district%5B0%5D=28&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "fullName": "р-н Головинский",
       "type": "raion"
      },
      {
       "parentId": null,
       "name": "САО",
       "id": 5,
       "title": "САО",
       "geoType": "district",
       "locationId": 1,
       "qs": "currency=2&deal_type=rent&district%5B0%5D=5&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "fullName": "САО",
       "type": "okrug"
      }
     ],
     "coordinates": {
      "lng": 37.487784,
      "lat": 55.842934
     },
     "highways": [],
     "railways": [
      {
       "name": "Ленинградская",
       "directionIds": [
        18
       ],
       "id": 731,
       "distance": 4,
       "time": 7,
       "geoType": "railway",
       "travelType": "byCar",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=731&type=4"
      },
      {
       "name": "Ховрино",
       "directionIds": [
        16
       ],
       "id": 752,
       "distance": 6,
       "time": 10,
       "geoType": "railway",
       "travelType": "byCar",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=752&type=4"
      },
      {
       "name": "Моссельмаш",
       "directionIds": [
        16
       ],
       "id": 741,
       "distance": 6,
       "time": 11,
       "geoType": "railway",
       "travelType": "byCar",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=741&type=4"
      }
     ],
     "jk": {
      "name": "Кронштадтский 9",
      "id": 2251726,
      "fullUrl": "https://zhk-kronshtadtskiy-9-i.cian.ru/",
      "gaGeo": {
       "cityId": 1,
       "moId": 0,
       "oblId": 1
      },
      "webSiteUrl": null,
      "webSiteUrlUtm": null,
      "developer": null,
      "house": {
       "id": 5871433,
       "name": "Корпус 1.2"
      },
      "displayName": "ЖК «Кронштадтский 9»"
     },
     "buildingAddress": null,
     "undergrounds": [
      {
       "underConstruction": false,
       "name": "Водный стадион",
       "id": 29,
       "time": 6,
       "cianId": null,
       "lineColor": "00701A",
       "releaseYear": null,
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=29&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "transportType": "walk",
       "isDefault": true,
       "lineId": 3,
       "lineType": null
      },
      {
       "underConstruction": false,
       "name": "Балтийская",
       "id": 293,
       "time": 5,
       "cianId": null,
       "lineColor": "FA6F9E",
       "releaseYear": null,
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=293&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "transportType": "transport",
       "isDefault": false,
       "lineId": 22,
       "lineType": "mck"
      },
      {
       "underConstruction": false,
       "name": "Речной вокзал",
       "id": 106,
       "time": 9,
       "cianId": null,
       "lineColor": "00701A",
       "releaseYear": null,
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=106&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "transportType": "transport",
       "isDefault": false,
       "lineId": 3,
       "lineType": null
      }
     ],
     "userInput": "Россия, Москва, Кронштадтский бульвар, 9к6",
     "sortedGeoIds": [
      {
       "type": "underground",
       "id": 29
      },
      {
       "type": "underground",
       "id": 293
      },
      {
       "type": "underground",
       "id": 106
      },
      {
       "type": "railway",
       "id": 731
      },
      {
       "type": "railway",
       "id": 752
      },
      {
       "type": "railway",
       "id": 741
      },
      {
       "type": "district",
       "id": 28
      },
      {
       "type": "district",
       "id": 5
      }
     ]
    },
    "building": {
     "cargoLiftsCount": null,
     "passengerLiftsCount": 4,
     "floorsCount": 33,
     "classType": null,
     "accessType": null,
     "heatingType": null,
     "deadline": null,
     "materialType": null,
     "parking": {
      "isFree": null,
      "locationType": null,
      "isAvailable": null,
      "placesCount": null,
      "priceEntry": null,
      "priceMonthly": null,
      "purposeType": null,
      "currency": null,
      "type": "multilevel"
     },
     "type": null,
     "buildYear": 2024
    },
    "roomsCount": null,
    "totalArea": "27.0",
    "floorNumber": 10,
    "flatType": "studio",
    "title": null,
    "description": "Шикарная видовая студия по адресу Кронштадский бульвар дом 9 корус 6. На срок от года.  \nНаходится на 10 этаже с прекрасным видом на Москву.\n До метро 3-5 минут от квартиры. 4 скоростных лифта, все всегда работают\nУстановленный современный стеклопакет хорошо изолирует звуки. С закрытым окном идеально тихо. \n \nГрамотная планировка и продуманный функционал:  \n- уютная комната с двуспальной кроватью (ортопедический матрас с шикарным мягким верхним слоем ), большой SMАRT TV прекрасно разместится при желании в рабочей зоне, вместительные шкафы доставят удовольствие любой девушке,  \n- удобная кухня укомплектована современной техникой (варочная панель, духовой шкаф , большой холодильник, микроволновка). \n\n- ванная  стиральная машина \n \nСдается семейной паре, либо одному человеку. КАТЕГОРИЧЕСКИ без животных и детей.  \nК стоимости аренды добавятся коммунальные платежи. \nСтоимость аренды  + по квитанции и счётчикам: вода, отопление , электричество , мусор, охрана обслуживание, видеонаблюдение. Предоплата за 1й месяц.  \nСтраховой возвратный депозит 70 000 руб. (разбивается на два месяца), юристу за показ квартиры и сопровождение 15тр\n\nВ шаговой доступности есть необходимая инфраструктура \nдля комфортного проживания семьи, имеются поликлиника, кафе и рестораны на любой вкус и кошелёк, множество магазинов, подземные и наземные паркинги (всегда есть где поставить машину), оборудованные спортивные площадки, в том числе закрытые площадки с доступом только жителей дома.  \nРайон продолжает развиваться.\n\nPS  Самым быстрым бонус: утюг, гладильная доска, сушилка и пылесос. всё дорогое и новое.",
    "formattedFullPrice": "70 000 ₽/мес.",
    "formattedFullInfo": "Студия  ·  27 м²  ·  10/33 этаж",
    "formattedAdditionalInfo": "Залог 70 000 ₽, без комиссии, предоплата 1 месяц, на длительный срок",
    "photos": [
     {
      "rotateDegree": null,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983501-2.jpg",
      "id": 2987983501,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983501-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983501-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983501-3.jpg",
      "isLayout": null,
      "isDefault": true
     },
     {
      "rotateDegree": null,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983497-2.jpg",
      "id": 2987983497,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983497-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983497-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983497-3.jpg",
      "isLayout": null,
      "isDefault": false
     },
     {
      "rotateDegree": null,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983496-2.jpg",
      "id": 2987983496,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983496-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983496-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983496-3.jpg",
      "isLayout": null,
      "isDefault": false
     },
     {
      "rotateDegree": null,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983500-2.jpg",
      "id": 2987983500,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983500-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983500-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983500-3.jpg",
      "isLayout": null,
      "isDefault": false
     },
     {
      "rotateDegree": null,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983499-2.jpg",
      "id": 2987983499,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983499-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983499-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983499-3.jpg",
      "isLayout": null,
      "isDefault": false
     },
     {
      "rotateDegree": null,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983498-2.jpg",
      "id": 2987983498,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983498-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983498-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-kronshtadtskiy-bulvar-2987983498-3.jpg",
      "isLayout": null,
      "isDefault": false
     }
    ]
   },
   "files": [
    {
     "id": 2987983501,
     "isDefault": true,
     "full": "335064892-1.webp",
     "mini": "335064892-1m.webp"
    },
    {
     "id": 2987983497,
     "isDefault": false,
     "full": "335064892-2.webp",
     "mini": "335064892-2m.webp"
    },
    {
     "id": 2987983496,
     "isDefault": false,
     "full": "335064892-3.webp",
     "mini": "335064892-3m.webp"
    },
    {
     "id": 2987983500,
     "isDefault": false,
     "full": "335064892-4.webp",
     "mini": "335064892-4m.webp"
    },
    {
     "id": 2987983499,
     "isDefault": false,
     "full": "335064892-5.webp",
     "mini": "335064892-5m.webp"
    }
   ]
  },
  {
   "source": "https://www.cian.ru/rent/flat/332551809/",
   "seenAt": "2026-10-19T11:52:17.457Z",
   "offer": {
    "category": "flatRent",
    "status": "published",
    "dealType": "rent",
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
       "url": "https://www.cian.ru/snyat-kvartiru/"
      },
      {
       "fullName": "САО",
       "id": 5,
       "locationTypeId": -1,
       "name": "САО",
       "shortName": "САО",
       "type": "okrug",
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-sao-045/"
      },
      {
       "fullName": "район Беговой",
       "id": 24,
       "locationTypeId": -1,
       "name": "Беговой",
       "shortName": "р-н Беговой",
       "type": "raion",
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-begovoy-0424/"
      },
      {
       "fullName": "Ленинградский проспект",
       "id": 1348,
       "locationTypeId": -1,
       "name": "Ленинградский",
       "shortName": "Ленинградский просп.",
       "type": "street",
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-leningradskiy-prospekt-021348/"
      },
      {
       "fullName": "34А",
       "id": 11592365,
       "locationTypeId": -1,
       "name": "34А",
       "shortName": "34А",
       "type": "house",
       "url": "https://www.cian.ru/cat.php?deal_type=rent&engine_version=2&house%5B0%5D=11592365&offer_type=flat&type=4"
      }
     ],
     "coordinates": {
      "lat": 55.785275,
      "lng": 37.568147
     },
     "highways": [],
     "jk": {
      "id": 52705,
      "name": "Комплекс апартаментов Alcon Tower",
      "house": {
       "id": 580064,
       "name": "Ленинградский, 34А (34А)"
      },
      "gaGeo": {
       "moId": 0,
       "oblId": 1,
       "cityId": 1
      },
      "fullUrl": "https://www.cian.ru/zhiloy-kompleks-kompleks-apartamentov-alcon-tower-moskva-52705/",
      "fullUrlTemplate": "{request_scheme}://zhk-kompleks-apartamentov-alcon-tower-i.{host}/",
      "webSiteUrl": "https://www.alcontower.ru/"
     },
     "railways": [
      {
       "id": 694,
       "directionIds": [
        11
       ],
       "distance": "1.0",
       "time": 19,
       "name": "Москва (Белорусский вокзал)",
       "travelType": "byFoot"
      },
      {
       "id": 694,
       "directionIds": [
        11
       ],
       "distance": "2.0",
       "time": 5,
       "name": "Москва (Белорусский вокзал)",
       "travelType": "byCar"
      },
      {
       "id": 699,
       "directionIds": [
        11
       ],
       "distance": "2.0",
       "time": 24,
       "name": "Беговая",
       "travelType": "byFoot"
      },
      {
       "id": 689,
       "directionIds": [
        19
       ],
       "distance": "2.0",
       "time": 24,
       "name": "Москва (Савёловский вокзал)",
       "travelType": "byFoot"
      },
      {
       "id": 699,
       "directionIds": [
        11
       ],
       "distance": "3.0",
       "time": 4,
       "name": "Беговая",
       "travelType": "byCar"
      },
      {
       "id": 689,
       "directionIds": [
        19
       ],
       "distance": "5.0",
       "time": 7,
       "name": "Москва (Савёловский вокзал)",
       "travelType": "byCar"
      }
     ],
     "undergrounds": [
      {
       "id": 36,
       "name": "Динамо",
       "lineColor": "00701A",
       "travelType": "walk",
       "travelTime": 10,
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-metro-dinamo-36/",
       "underConstruction": false
      },
      {
       "id": 350,
       "name": "Петровский Парк",
       "lineColor": "7ACDCE",
       "travelType": "walk",
       "travelTime": 14,
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-metro-petrovskiy-park-350/",
       "underConstruction": false
      },
      {
       "id": 15,
       "name": "Белорусская",
       "lineColor": "00701A",
       "travelType": "walk",
       "travelTime": 15,
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-metro-belorusskaya-15/",
       "underConstruction": false
      },
      {
       "id": 514,
       "name": "Белорусская",
       "lineColor": "40B280",
       "travelType": "walk",
       "travelTime": 17,
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-metro-belorusskaya-514/",
       "underConstruction": false,
       "lineType": "mcd4"
      },
      {
       "id": 451,
       "name": "Савёловская",
       "lineColor": "7ACDCE",
       "travelType": "walk",
       "travelTime": 18,
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-metro-savelovskaya-451/",
       "underConstruction": false
      }
     ]
    },
    "id": 332551809,
    "objectGuid": "1bee2da7-e447-4c94-92dc-6a1351785589",
    "cianId": 332551809,
    "userId": 3914321,
    "publishedUserId": 133028512,
    "cianUserId": 133028512,
    "description": "Id 66274. Студия с дизайнерским ремонтом в аренду в Москве на Ленинградском проспекте\n\nЭто не просто квартира, а продуманное пространство для жизни или работы в одном из самых динамичных районов столицы. Студия площадью 26 кв. м расположена на 13 этаже современного монолитного комплекса Alcon Tower 2023 года постройки. Высота потолков 3,5 метра создает ощущение простора, которое редко встречается в компактном жилье, а панорамное окно с видом на улицу наполняет комнату естественным светом. Здесь нет ничего лишнего, только качественные материалы и эргономичная мебель, которая делает жизнь комфортной с первого дня.\n\nВнутри вас ждет полностью готовая к заселению студия. Зона отдыха с диваном, функциональная кухня с необходимой техникой, включая посудомоечную машину и холодильник, а также современный санузел с душевой кабиной. В квартире есть стиральная машина, кондиционер, телевизор и стабильный интернет. Продумана каждая деталь: от вместительных систем хранения до качественной фурнитуры. Это идеальный вариант для тех, кто ценит время и не хочет тратить его на обустройство быта. Теплые полы и шумоизоляция монолитного дома добавляют ощущение уюта и приватности.\n\nЖилой комплекс Alcon Tower отличается не только современной архитектурой, но и продуманной инфраструктурой. Подземный паркинг решает вопрос с автомобилем, а круглосуточная охрана и консьерж обеспечивают безопасность и спокойствие жильцов. В шаговой доступности находятся станции метро, остановки общественного транспорта, а также множество кафе, ресторанов, фитнес-клубов и деловых центров. Ленинградский проспект — это артерия города, которая позволяет быстро добраться до центра, аэропорта или области без лишних затрат времени.\n\n\nНе упустите шанс стать резидентом одного из самых комфортных комплексов района. Позвоните сегодня, чтобы записаться на просмотр и убедиться лично в безупречном состоянии этой квартиры. Аргументы в пользу выбора очевидны: свежий ремонт, полная меблировка и идеальная транспортная доступность. Сделайте шаг к своему комфорту прямо сейчас.",
    "photos": [
     {
      "id": 2985051143,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051143-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051143-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051143-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2985051143-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2985051137,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051137-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051137-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051137-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2985051137-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2985051158,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051158-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051158-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051158-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2985051158-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2985051169,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051169-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051169-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051169-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2985051169-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2985051176,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051176-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051176-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051176-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2985051176-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2985051206,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051206-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051206-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051206-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2985051206-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2985051211,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051211-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051211-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051211-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2985051211-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2985051230,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051230-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051230-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051230-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2985051230-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2985051232,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051232-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051232-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051232-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2985051232-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2985051246,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051246-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051246-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051246-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2985051246-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2985051248,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051248-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051248-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051248-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2985051248-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2985051257,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051257-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051257-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051257-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2985051257-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2985051265,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051265-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051265-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051265-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2985051265-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2985051274,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051274-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051274-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051274-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2985051274-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2985051298,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051298-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051298-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051298-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2985051298-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2985051303,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051303-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051303-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051303-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2985051303-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2985051321,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051321-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051321-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051321-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2985051321-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2985051329,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051329-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051329-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051329-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2985051329-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2985051347,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051347-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051347-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051347-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2985051347-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2935406008,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2935406008-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2935406008-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2935406008-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2935406008-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2935406009,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2935406009-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2935406009-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2935406009-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2935406009-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2935406013,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2935406013-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2935406013-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2935406013-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2935406013-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2935406020,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2935406020-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2935406020-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2935406020-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2935406020-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2935406022,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2935406022-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2935406022-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2935406022-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2935406022-3.jpg",
      "isCianLayout": false
     }
    ],
    "phones": [
     {
      "countryCode": "+7",
      "number": "9230702016"
     }
    ],
    "publishTerms": {
     "terms": [
      {
       "services": [
        "paid"
       ],
       "days": 30,
       "type": "periodical",
       "tariffIdentificator": {
        "tariffId": 12002617,
        "tariffGridType": "servicePackageGroup"
       }
      }
     ],
     "autoprolong": true
    },
    "flatType": "studio",
    "totalArea": "26.0",
    "livingArea": "13.0",
    "kitchenArea": "8.0",
    "allRoomsArea": "13",
    "windowsViewType": "street",
    "separateWcsCount": 1,
    "repairType": "design",
    "hasFridge": true,
    "hasDishwasher": true,
    "hasWasher": true,
    "hasFurniture": true,
    "hasKitchenFurniture": true,
    "hasConditioner": true,
    "hasTv": true,
    "hasInternet": true,
    "hasShower": true,
    "hasSecurity": true,
    "flags": {
     "isArchived": false,
     "isCommercialOwnershipVerified": false
    },
    "hasParking": true,
    "specialty": {
     "types": [],
     "additionalTypes": []
    },
    "isNeedHideExactAddress": false,
    "areaParts": [],
    "floorNumber": 13,
    "bargainTerms": {
     "price": 90000,
     "priceType": "all",
     "currency": "rur",
     "paymentPeriod": "monthly",
     "leaseTermType": "longTerm",
     "prepayMonths": 1,
     "deposit": 90000,
     "utilitiesTerms": {
      "includedInPrice": true,
      "price": 0,
      "flowMetersNotIncludedInPrice": true
     },
     "includedOptions": [],
     "clientFee": 50,
     "agentFee": 50,
     "prices": {
      "rur": 90000,
      "usd": 1077,
      "eur": 961
     },
     "depositPrices": {
      "rur": 90000,
      "usd": 1077,
      "eur": 961
     },
     "utilitiesTermsPrices": {
      "rur": 0,
      "usd": 0,
      "eur": 0
     },
     "tags": []
    },
    "building": {
     "materialType": "monolith",
     "floorsCount": 36,
     "buildYear": 2023,
     "parking": {
      "type": "underground"
     },
     "ceilingHeight": "3.5",
     "series": "Монолит",
     "totalArea": "26.0",
     "liftTypes": [],
     "cranageTypes": [],
     "passengerLiftsCount": 2,
     "cargoLiftsCount": 1,
     "houseMaterialType": "monolith"
    },
    "editDate": "2026-10-18T19:32:54.017000Z",
    "humanizedEditDate": "вчера, 19:32",
    "isInHiddenBase": false,
    "isObjectHidden": false,
    "isClosedVisibility": false,
    "videos": [],
    "exportLinks": {
     "pdfUrl": "/export/pdf/rent/flat/332551809/",
     "docxUrl": "/export/docx/rent/flat/332551809/"
    },
    "passengerLiftsCount": 2,
    "cargoLiftsCount": 1,
    "added": "вчера, 19:32",
    "valueAddedServices": {
     "isStandard": false,
     "isTop3": true,
     "isPremium": false
    },
    "promotion": {
     "isPerformanceVasPilot": false,
     "promotionDescription": "Топ",
     "isCpcAuction": false
    },
    "categoriesIds": [
     1000,
     1100,
     1110,
     1111
    ],
    "publicationDate": 1785688164,
    "creationDate": "2026-08-02T19:29:24.183",
    "recoveryLink": "/razmestit-obyavlenie/332551809/?isFromXML=1",
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
    "editPhoto": "/realty/add2.aspx?id=332551809&isFromXML=1",
    "newEdit": "/razmestit-obyavlenie/?realty_id=332551809&isFromXML=1",
    "certificate": "https://www.cian.ru/newobjects/cian/certification/get?announcementId=332551809",
    "edit": "/realty/add1.aspx?id=332551809&isFromXML=1",
    "similarOffersLink": "",
    "similarOffersCount": 0,
    "buildersIds": [
     14911
    ],
    "builderId": 14911,
    "isImported": true,
    "userConfirmedFix": false,
    "newbuilding": {
     "id": 52705,
     "name": "Комплекс апартаментов Alcon Tower (Алкон Тауэр)",
     "house": {
      "isReliable": false,
      "isFinished": true,
      "finishDate": {
       "quarter": 3,
       "year": 2023
      },
      "id": 580064,
      "name": "Ленинградский, 34А (34А)"
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
      "imagesCount": 15,
      "firstImageUrl": "https://images.cdn-cian.ru/images/6/065/128/kompleks-apartamentov-alcon-tower-moskva-jk-821560622-6.jpg",
      "videosCount": 0,
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
    "isUniqueCheckDate": "2026-10-18",
    "isCianPartner": false,
    "externalId": "66274",
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
       "value": "26 м²",
       "label": "Общая площадь"
      },
      {
       "value": "13 м²",
       "label": "Жилая площадь"
      },
      {
       "value": "8 м²",
       "label": "Площадь кухни"
      },
      {
       "value": "3,5 м",
       "label": "Высота потолков"
      },
      {
       "value": "1 раздельный",
       "label": "Санузел"
      },
      {
       "value": "На улицу",
       "label": "Вид из окон"
      },
      {
       "value": "Дизайнерский",
       "label": "Ремонт"
      }
     ]
    },
    {
     "title": "О доме",
     "id": "aboutBuilding",
     "features": [
      {
       "value": "2 пассажирских, 1 грузовой",
       "label": "Количество лифтов"
      },
      {
       "value": "Монолитный",
       "label": "Тип дома"
      },
      {
       "value": "Подземная",
       "label": "Парковка"
      }
     ]
    }
   ],
   "factoids": [
    {
     "title": "Общая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/size.svg",
     "value": "26 м²"
    },
    {
     "title": "Жилая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/plan.svg",
     "value": "13 м²"
    },
    {
     "title": "Площадь кухни",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/kitchen.svg",
     "value": "8 м²"
    },
    {
     "title": "Этаж",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/floor.svg",
     "value": "13 из 36"
    },
    {
     "title": "Год постройки",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/build_year.svg",
     "value": "2023"
    }
   ],
   "priceChanges": [
    {
     "changeTime": "2026-09-08T14:29:21.579985Z",
     "priceData": {
      "currency": "rur",
      "price": 90000,
      "paymentPeriod": "monthly"
     }
    },
    {
     "changeTime": "2026-08-23T14:09:00.605807Z",
     "priceData": {
      "currency": "rur",
      "price": 100000,
      "paymentPeriod": "monthly"
     }
    },
    {
     "changeTime": "2026-08-17T14:34:52.633418Z",
     "priceData": {
      "currency": "rur",
      "price": 110000,
      "paymentPeriod": "monthly"
     }
    },
    {
     "changeTime": "2026-08-07T14:21:21.588634Z",
     "priceData": {
      "currency": "rur",
      "price": 115000,
      "paymentPeriod": "monthly"
     }
    },
    {
     "changeTime": "2026-08-03T18:02:53.001853Z",
     "priceData": {
      "currency": "rur",
      "price": 120000,
      "paymentPeriod": "monthly"
     }
    },
    {
     "changeTime": "2026-08-02T16:29:25.121111Z",
     "priceData": {
      "currency": "rur",
      "price": 90000,
      "paymentPeriod": "monthly"
     }
    }
   ],
   "bti": null,
   "stats": {
    "totalViewsFormattedString": "652 просмотра, 19 за сегодня"
   },
   "priceInfo": null,
   "serp": {
    "id": 332551809,
    "category": "flatRent",
    "dealType": "rent",
    "bargainTerms": {
     "tax": null,
     "paymentPeriod": "monthly",
     "saleType": null,
     "utilitiesTerms": {
      "flowMetersNotIncludedInPrice": true,
      "includedInPrice": true,
      "price": 0
     },
     "vatType": null,
     "priceType": "all",
     "agentFee": 50,
     "priceForWorkplace": null,
     "tags": [],
     "leaseTermType": "longTerm",
     "mortgageAllowed": null,
     "clientFee": 50,
     "price": 90000,
     "agentBonus": null,
     "currency": "rur",
     "deposit": 90000,
     "bargainAllowed": null,
     "priceRur": 90000,
     "vatPrice": null,
     "leaseType": null
    },
    "geo": {
     "countryId": 138,
     "address": [
      {
       "name": "Москва",
       "geoType": "location",
       "isFormingAddress": true,
       "type": "location",
       "fullName": "Москва",
       "locationTypeId": 1,
       "shortName": "Москва",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&region=1&type=4",
       "title": "Москва",
       "id": 1
      },
      {
       "name": "САО",
       "geoType": "district",
       "isFormingAddress": null,
       "type": "okrug",
       "fullName": "САО",
       "locationTypeId": null,
       "shortName": "САО",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=5&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "САО",
       "id": 5
      },
      {
       "name": "Беговой",
       "geoType": "district",
       "isFormingAddress": null,
       "type": "raion",
       "fullName": "р-н Беговой",
       "locationTypeId": null,
       "shortName": "р-н Беговой",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=24&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "р-н Беговой",
       "id": 24
      },
      {
       "name": "Динамо",
       "geoType": "underground",
       "isFormingAddress": null,
       "type": "metro",
       "fullName": "м. Динамо",
       "locationTypeId": null,
       "shortName": "м. Динамо",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=36&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "title": "м. Динамо",
       "id": 36
      },
      {
       "name": "Ленинградский",
       "geoType": "street",
       "isFormingAddress": true,
       "type": "street",
       "fullName": "Ленинградский проспект",
       "locationTypeId": null,
       "shortName": "Ленинградский просп.",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&street%5B0%5D=1348&type=4",
       "title": "Ленинградский проспект",
       "id": 1348
      },
      {
       "name": "34А",
       "geoType": "house",
       "isFormingAddress": true,
       "type": "house",
       "fullName": "34А",
       "locationTypeId": null,
       "shortName": "34А",
       "qs": "currency=2&deal_type=rent&engine_version=2&house%5B0%5D=11592365&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "34А",
       "id": 11592365
      }
     ],
     "jk": {
      "name": "Комплекс апартаментов Alcon Tower",
      "developer": null,
      "fullUrl": "https://zhk-kompleks-apartamentov-alcon-tower-i.cian.ru/",
      "webSiteUrl": "https://www.alcontower.ru/",
      "displayName": "ЖК «Комплекс апартаментов Alcon Tower»",
      "house": {
       "name": "Ленинградский, 34А (34А)",
       "id": 580064
      },
      "gaGeo": {
       "oblId": 1,
       "moId": 0,
       "cityId": 1
      },
      "webSiteUrlUtm": "https://www.alcontower.ru/?utm_source=cian&utm_medium=kartochka_cian&utm_campaign=52705",
      "id": 52705
     },
     "coordinates": {
      "lng": 37.568147,
      "lat": 55.785275
     },
     "buildingAddress": null,
     "userInput": "город Москва, Беговой район, проспект Ленинградский, дом 34А",
     "districts": [
      {
       "name": "Беговой",
       "geoType": "district",
       "parentId": 5,
       "type": "raion",
       "locationId": 1,
       "fullName": "р-н Беговой",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=24&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "р-н Беговой",
       "id": 24
      },
      {
       "name": "САО",
       "geoType": "district",
       "parentId": null,
       "type": "okrug",
       "locationId": 1,
       "fullName": "САО",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=5&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "САО",
       "id": 5
      }
     ],
     "highways": [],
     "railways": [
      {
       "name": "Москва (Белорусский вокзал)",
       "geoType": "railway",
       "travelType": "byFoot",
       "directionIds": [
        11
       ],
       "distance": 1,
       "time": 19,
       "id": 694,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=694&type=4"
      },
      {
       "name": "Беговая",
       "geoType": "railway",
       "travelType": "byCar",
       "directionIds": [
        11
       ],
       "distance": 3,
       "time": 4,
       "id": 699,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=699&type=4"
      },
      {
       "name": "Москва (Савёловский вокзал)",
       "geoType": "railway",
       "travelType": "byCar",
       "directionIds": [
        19
       ],
       "distance": 5,
       "time": 7,
       "id": 689,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=689&type=4"
      }
     ],
     "undergrounds": [
      {
       "name": "Динамо",
       "releaseYear": null,
       "isDefault": true,
       "cianId": null,
       "transportType": "walk",
       "underConstruction": false,
       "lineColor": "00701A",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=36&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "time": 10,
       "lineId": 3,
       "id": 36,
       "lineType": null
      },
      {
       "name": "Петровский Парк",
       "releaseYear": null,
       "isDefault": null,
       "cianId": null,
       "transportType": "walk",
       "underConstruction": false,
       "lineColor": "7ACDCE",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=350&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "time": 14,
       "lineId": 27,
       "id": 350,
       "lineType": null
      },
      {
       "name": "Белорусская",
       "releaseYear": null,
       "isDefault": null,
       "cianId": null,
       "transportType": "walk",
       "underConstruction": false,
       "lineColor": "00701A",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=15&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "time": 15,
       "lineId": 3,
       "id": 15,
       "lineType": null
      },
      {
       "name": "Белорусская",
       "releaseYear": null,
       "isDefault": null,
       "cianId": null,
       "transportType": "walk",
       "underConstruction": false,
       "lineColor": "40B280",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=514&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "time": 17,
       "lineId": 34,
       "id": 514,
       "lineType": "mcd4"
      },
      {
       "name": "Савёловская",
       "releaseYear": null,
       "isDefault": null,
       "cianId": null,
       "transportType": "walk",
       "underConstruction": false,
       "lineColor": "7ACDCE",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=451&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "time": 18,
       "lineId": 27,
       "id": 451,
       "lineType": null
      }
     ],
     "sortedGeoIds": [
      {
       "type": "underground",
       "id": 36
      },
      {
       "type": "underground",
       "id": 350
      },
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
       "id": 451
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
       "id": 24
      },
      {
       "type": "district",
       "id": 5
      }
     ]
    },
    "building": {
     "parking": {
      "isAvailable": null,
      "type": "underground",
      "purposeType": null,
      "currency": null,
      "priceMonthly": null,
      "isFree": null,
      "priceEntry": null,
      "locationType": null,
      "placesCount": null
     },
     "type": null,
     "passengerLiftsCount": 2,
     "deadline": null,
     "heatingType": null,
     "materialType": "monolith",
     "classType": null,
     "cargoLiftsCount": 1,
     "buildYear": 2023,
     "floorsCount": 36,
     "accessType": null
    },
    "roomsCount": null,
    "totalArea": "26.0",
    "floorNumber": 13,
    "flatType": "studio",
    "title": null,
    "description": "Id 66274. Студия с дизайнерским ремонтом в аренду в Москве на Ленинградском проспекте\n\nЭто не просто квартира, а продуманное пространство для жизни или работы в одном из самых динамичных районов столицы. Студия площадью 26 кв. м расположена на 13 этаже современного монолитного комплекса Alcon Tower 2023 года постройки. Высота потолков 3,5 метра создает ощущение простора, которое редко встречается в компактном жилье, а панорамное окно с видом на улицу наполняет комнату естественным светом. Здесь нет ничего лишнего, только качественные материалы и эргономичная мебель, которая делает жизнь комфортной с первого дня.\n\nВнутри вас ждет полностью готовая к заселению студия. Зона отдыха с диваном, функциональная кухня с необходимой техникой, включая посудомоечную машину и холодильник, а также современный санузел с душевой кабиной. В квартире есть стиральная машина, кондиционер, телевизор и стабильный интернет. Продумана каждая деталь: от вместительных систем хранения до качественной фурнитуры. Это идеальный вариант для тех, кто ценит время и не хочет тратить его на обустройство быта. Теплые полы и шумоизоляция монолитного дома добавляют ощущение уюта и приватности.\n\nЖилой комплекс Alcon Tower отличается не только современной архитектурой, но и продуманной инфраструктурой. Подземный паркинг решает вопрос с автомобилем, а круглосуточная охрана и консьерж обеспечивают безопасность и спокойствие жильцов. В шаговой доступности находятся станции метро, остановки общественного транспорта, а также множество кафе, ресторанов, фитнес-клубов и деловых центров. Ленинградский проспект — это артерия города, которая позволяет быстро добраться до центра, аэропорта или области без лишних затрат времени.\n\n\nНе упустите шанс стать резидентом одного из самых комфортных комплексов района. Позвоните сегодня, чтобы записаться на просмотр и убедиться лично в безупречном состоянии этой квартиры. Аргументы в пользу выбора очевидны: свежий ремонт, полная меблировка и идеальная транспортная доступность. Сделайте шаг к своему комфорту прямо сейчас.",
    "formattedFullPrice": "90 000 ₽/мес.",
    "formattedFullInfo": "Студия  ·  26 м²  ·  13/36 этаж",
    "formattedAdditionalInfo": "Залог 90 000 ₽, комиссия 50%(agent_fee), предоплата 1 месяц, на длительный срок",
    "photos": [
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051143-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051143-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2985051143-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051143-2.jpg",
      "id": 2985051143
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051137-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051137-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2985051137-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051137-2.jpg",
      "id": 2985051137
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051158-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051158-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2985051158-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051158-2.jpg",
      "id": 2985051158
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051169-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051169-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2985051169-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051169-2.jpg",
      "id": 2985051169
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051176-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051176-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2985051176-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051176-2.jpg",
      "id": 2985051176
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051206-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051206-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2985051206-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051206-2.jpg",
      "id": 2985051206
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051211-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051211-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2985051211-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051211-2.jpg",
      "id": 2985051211
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051230-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051230-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2985051230-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051230-2.jpg",
      "id": 2985051230
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051232-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051232-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2985051232-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051232-2.jpg",
      "id": 2985051232
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051246-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051246-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2985051246-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051246-2.jpg",
      "id": 2985051246
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051248-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051248-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2985051248-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051248-2.jpg",
      "id": 2985051248
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051257-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051257-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2985051257-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051257-2.jpg",
      "id": 2985051257
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051265-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051265-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2985051265-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051265-2.jpg",
      "id": 2985051265
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051274-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051274-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2985051274-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051274-2.jpg",
      "id": 2985051274
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051298-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051298-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2985051298-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051298-2.jpg",
      "id": 2985051298
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051303-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051303-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2985051303-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051303-2.jpg",
      "id": 2985051303
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051321-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051321-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2985051321-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051321-2.jpg",
      "id": 2985051321
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051329-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051329-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2985051329-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051329-2.jpg",
      "id": 2985051329
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2985051347-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2985051347-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2985051347-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2985051347-2.jpg",
      "id": 2985051347
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2935406008-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2935406008-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2935406008-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2935406008-2.jpg",
      "id": 2935406008
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2935406009-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2935406009-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2935406009-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2935406009-2.jpg",
      "id": 2935406009
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2935406013-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2935406013-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2935406013-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2935406013-2.jpg",
      "id": 2935406013
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2935406020-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2935406020-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2935406020-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2935406020-2.jpg",
      "id": 2935406020
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2935406022-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2935406022-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2935406022-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2935406022-2.jpg",
      "id": 2935406022
     }
    ]
   },
   "files": [
    {
     "id": 2985051143,
     "isDefault": false,
     "full": "332551809-1.webp",
     "mini": "332551809-1m.webp"
    },
    {
     "id": 2985051137,
     "isDefault": false,
     "full": "332551809-2.webp",
     "mini": "332551809-2m.webp"
    },
    {
     "id": 2985051158,
     "isDefault": false,
     "full": "332551809-3.webp",
     "mini": "332551809-3m.webp"
    },
    {
     "id": 2985051169,
     "isDefault": false,
     "full": "332551809-4.webp",
     "mini": "332551809-4m.webp"
    },
    {
     "id": 2985051176,
     "isDefault": false,
     "full": "332551809-5.webp",
     "mini": "332551809-5m.webp"
    }
   ]
  },
  {
   "source": "https://www.cian.ru/rent/flat/331696530/",
   "seenAt": "2026-10-19T11:52:18.898Z",
   "offer": {
    "category": "flatRent",
    "status": "published",
    "dealType": "rent",
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
       "url": "https://www.cian.ru/snyat-2-komnatnuyu-kvartiru/"
      },
      {
       "fullName": "САО",
       "id": 5,
       "locationTypeId": -1,
       "name": "САО",
       "shortName": "САО",
       "type": "okrug",
       "url": "https://www.cian.ru/snyat-2-komnatnuyu-kvartiru-moskva-sao-045/"
      },
      {
       "fullName": "район Левобережный",
       "id": 32,
       "locationTypeId": -1,
       "name": "Левобережный",
       "shortName": "р-н Левобережный",
       "type": "raion",
       "url": "https://www.cian.ru/snyat-2-komnatnuyu-kvartiru-moskva-levoberezhnyy-0432/"
      },
      {
       "fullName": "Ленинградское шоссе",
       "id": 1349,
       "locationTypeId": -1,
       "name": "Ленинградское",
       "shortName": "Ленинградское ш.",
       "type": "street",
       "url": "https://www.cian.ru/snyat-2-komnatnuyu-kvartiru-moskva-leningradskoe-shosse-021349/"
      },
      {
       "fullName": "69к3",
       "id": 880252,
       "locationTypeId": -1,
       "name": "69к3",
       "shortName": "69к3",
       "type": "house",
       "url": "https://www.cian.ru/cat.php?deal_type=rent&engine_version=2&house%5B0%5D=880252&offer_type=flat&room2=1&type=4"
      }
     ],
     "coordinates": {
      "lat": 55.869445,
      "lng": 37.456657
     },
     "highways": [],
     "jk": {
      "id": 50400,
      "name": "Aquatoria",
      "gaGeo": {
       "moId": 0,
       "oblId": 1,
       "cityId": 1
      },
      "fullUrl": "https://www.cian.ru/zhiloy-kompleks-aquatoria-moskva-50400/",
      "fullUrlTemplate": "{request_scheme}://zhk-aquatoria-i.{host}/"
     },
     "railways": [
      {
       "id": 765,
       "directionIds": [
        16
       ],
       "distance": "2.0",
       "time": 34,
       "name": "Левобережная",
       "travelType": "byFoot"
      },
      {
       "id": 774,
       "directionIds": [
        16
       ],
       "distance": "3.0",
       "time": 43,
       "name": "Химки",
       "travelType": "byFoot"
      },
      {
       "id": 774,
       "directionIds": [
        16
       ],
       "distance": "4.0",
       "time": 7,
       "name": "Химки",
       "travelType": "byCar"
      },
      {
       "id": 752,
       "directionIds": [
        16
       ],
       "distance": "4.0",
       "time": 48,
       "name": "Ховрино",
       "travelType": "byFoot"
      },
      {
       "id": 765,
       "directionIds": [
        16
       ],
       "distance": "6.0",
       "time": 10,
       "name": "Левобережная",
       "travelType": "byCar"
      },
      {
       "id": 752,
       "directionIds": [
        16
       ],
       "distance": "6.0",
       "time": 10,
       "name": "Ховрино",
       "travelType": "byCar"
      }
     ],
     "undergrounds": [
      {
       "id": 369,
       "name": "Беломорская",
       "lineColor": "00701A",
       "travelType": "walk",
       "travelTime": 22,
       "url": "https://www.cian.ru/snyat-2-komnatnuyu-kvartiru-moskva-metro-belomorskaya-369/",
       "underConstruction": false
      },
      {
       "id": 106,
       "name": "Речной вокзал",
       "lineColor": "00701A",
       "travelType": "transport",
       "travelTime": 5,
       "url": "https://www.cian.ru/snyat-2-komnatnuyu-kvartiru-moskva-metro-rechnoy-vokzal-106/",
       "underConstruction": false
      },
      {
       "id": 349,
       "name": "Ховрино",
       "lineColor": "00701A",
       "travelType": "transport",
       "travelTime": 6,
       "url": "https://www.cian.ru/snyat-2-komnatnuyu-kvartiru-moskva-metro-hovrino-349/",
       "underConstruction": false
      }
     ]
    },
    "id": 331696530,
    "objectGuid": "cc8b8ce9-377c-424d-a858-5c26da08158c",
    "cianId": 331696530,
    "userId": 3914321,
    "publishedUserId": 131242194,
    "cianUserId": 131242194,
    "description": "Id 65300. Сдается ВИДОВАЯ 2х комнатная квартира в ЖК Бизнес класса\"Aquatoria\"\n\nО квартире:\n-просторная кухня-гостиная;\n-одна спальня;\n-два санузла;\n-водонагреватель работает через вайфай;\n-просторная прихожая;\n-гардеробная;\n-автоматические шторы;\n-кресло реклайнер;\n\nО комплексе:\nКомплекс занимает редкое для столичного жилья положение - у воды, на берегу реки, расположен в Левобережном районе Северного административного округа Москвы. До метро Беломорская 15 минут пешком. Имеет собственное благоустроенное пространство с закрытой территорией двора, плавно переходящей в прогулочную зону по набережной. Комплекс расположен на территории в 5 га. Имеется двухуровневый подземный паркинг. \n\nРассматриваем кандидатов на долгий срок, без животных.\nБолее подробную информацию можно узнать по телефону. Звоните, с удовольствием отвечу на Ваши вопросы. Показ заранее по договоренности!",
    "photos": [
     {
      "id": 2915872051,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872051-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872051-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872051-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872051-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2915872052,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872052-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872052-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872052-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872052-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2915872054,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872054-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872054-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872054-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872054-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2915872055,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872055-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872055-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872055-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872055-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2915872057,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872057-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872057-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872057-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872057-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2915872059,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872059-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872059-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872059-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872059-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2915872060,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872060-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872060-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872060-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872060-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2915872066,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872066-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872066-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872066-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872066-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2915872068,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872068-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872068-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872068-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872068-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2915872142,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872142-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872142-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872142-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872142-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2915872146,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872146-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872146-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872146-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872146-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2915872136,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872136-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872136-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872136-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872136-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2915872071,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872071-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872071-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872071-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872071-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2915872075,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872075-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872075-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872075-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872075-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2915872092,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872092-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872092-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872092-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872092-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2915872084,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872084-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872084-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872084-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872084-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2915872104,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872104-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872104-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872104-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872104-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2915872103,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872103-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872103-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872103-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872103-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2915872109,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872109-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872109-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872109-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872109-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2915872116,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872116-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872116-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872116-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872116-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2915872154,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872154-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872154-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872154-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872154-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2915872163,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872163-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872163-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872163-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872163-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2915872167,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872167-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872167-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872167-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872167-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2915872175,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872175-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872175-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872175-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872175-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2915872178,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2915872178-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872178-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872178-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872178-3.jpg",
      "isCianLayout": false
     }
    ],
    "phones": [
     {
      "countryCode": "+7",
      "number": "9390130215"
     }
    ],
    "publishTerms": {
     "terms": [
      {
       "services": [
        "top3"
       ],
       "days": 30,
       "type": "periodical",
       "tariffIdentificator": {
        "tariffId": 1388885,
        "tariffGridType": "packageTariff"
       }
      }
     ],
     "autoprolong": true
    },
    "flatType": "rooms",
    "totalArea": "65.0",
    "livingArea": "39.0",
    "kitchenArea": "8.0",
    "windowsViewType": "yard",
    "separateWcsCount": 1,
    "combinedWcsCount": 1,
    "repairType": "design",
    "hasFridge": true,
    "hasDishwasher": true,
    "hasWasher": true,
    "hasFurniture": true,
    "hasKitchenFurniture": true,
    "hasConditioner": true,
    "hasTv": true,
    "hasInternet": true,
    "hasBathtub": true,
    "childrenAllowed": true,
    "flags": {
     "isArchived": false,
     "isCommercialOwnershipVerified": false
    },
    "hasParking": true,
    "specialty": {
     "types": [],
     "additionalTypes": []
    },
    "isNeedHideExactAddress": false,
    "areaParts": [],
    "roomsCount": 2,
    "floorNumber": 5,
    "bargainTerms": {
     "price": 140000,
     "priceType": "all",
     "currency": "rur",
     "paymentPeriod": "monthly",
     "leaseTermType": "longTerm",
     "deposit": 140000,
     "utilitiesTerms": {
      "includedInPrice": true,
      "price": 0,
      "flowMetersNotIncludedInPrice": true
     },
     "includedOptions": [],
     "clientFee": 50,
     "agentFee": 50,
     "prices": {
      "rur": 140000,
      "usd": 1675,
      "eur": 1494
     },
     "depositPrices": {
      "rur": 140000,
      "usd": 1675,
      "eur": 1494
     },
     "utilitiesTermsPrices": {
      "rur": 0,
      "usd": 0,
      "eur": 0
     },
     "tags": []
    },
    "building": {
     "materialType": "monolith",
     "floorsCount": 20,
     "buildYear": 2021,
     "parking": {
      "type": "underground"
     },
     "ceilingHeight": "2.9",
     "totalArea": "65.0",
     "liftTypes": [],
     "cranageTypes": [],
     "passengerLiftsCount": 2,
     "cargoLiftsCount": 2,
     "houseMaterialType": "monolith"
    },
    "editDate": "2026-10-18T18:57:34.641091Z",
    "humanizedEditDate": "вчера, 18:57",
    "isInHiddenBase": false,
    "isObjectHidden": false,
    "isClosedVisibility": false,
    "videos": [],
    "demolishedInMoscowProgramm": false,
    "exportLinks": {
     "pdfUrl": "/export/pdf/rent/flat/331696530/",
     "docxUrl": "/export/docx/rent/flat/331696530/"
    },
    "passengerLiftsCount": 2,
    "cargoLiftsCount": 2,
    "added": "16 окт, 18:29",
    "valueAddedServices": {
     "isStandard": false,
     "isTop3": true,
     "isPremium": false
    },
    "promotion": {
     "isPerformanceVasPilot": false,
     "promotionDescription": "Топ",
     "isCpcAuction": false
    },
    "categoriesIds": [
     1000,
     1100,
     1110,
     1111
    ],
    "publicationDate": 1783178952,
    "creationDate": "2026-07-04T18:29:12.23",
    "recoveryLink": "/razmestit-obyavlenie/331696530/?isFromXML=1",
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
    "editPhoto": "/realty/add2.aspx?id=331696530&isFromXML=1",
    "newEdit": "/razmestit-obyavlenie/?realty_id=331696530&isFromXML=1",
    "certificate": "https://www.cian.ru/newobjects/cian/certification/get?announcementId=331696530",
    "edit": "/realty/add1.aspx?id=331696530&isFromXML=1",
    "similarOffersLink": "",
    "similarOffersCount": 0,
    "buildersIds": [
     14678
    ],
    "builderId": 14678,
    "isImported": true,
    "userConfirmedFix": false,
    "newbuilding": {
     "id": 50400,
     "name": "Aquatoria (Акватория)",
     "isFromDeveloper": false,
     "isFromBuilder": false,
     "isFromSeller": false,
     "isFromLeadFactory": false,
     "showJkReliableFlag": false,
     "isFichering": false,
     "isFicheringPlus": false,
     "isPremium": false,
     "newbuildingFeatures": {
      "imagesCount": 8,
      "firstImageUrl": "https://images.cdn-cian.ru/images/14/253/661/aquatoria-moskva-jk-1663524149-6.jpg",
      "videosCount": 3,
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
    "isUniqueCheckDate": "2026-10-18",
    "isCianPartner": false,
    "externalId": "65300",
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
       "value": "65 м²",
       "label": "Общая площадь"
      },
      {
       "value": "39 м²",
       "label": "Жилая площадь"
      },
      {
       "value": "8 м²",
       "label": "Площадь кухни"
      },
      {
       "value": "2,9 м",
       "label": "Высота потолков"
      },
      {
       "value": "1 совмещенный, 1 раздельный",
       "label": "Санузел"
      },
      {
       "value": "Во двор",
       "label": "Вид из окон"
      },
      {
       "value": "Дизайнерский",
       "label": "Ремонт"
      }
     ]
    },
    {
     "title": "О доме",
     "id": "aboutBuilding",
     "features": [
      {
       "value": "2023",
       "label": "Год постройки"
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
       "value": "Нет информации",
       "label": "Тип перекрытий"
      },
      {
       "value": "Подземная",
       "label": "Парковка"
      },
      {
       "value": "Нет информации",
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
     "value": "65 м²"
    },
    {
     "title": "Жилая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/plan.svg",
     "value": "39 м²"
    },
    {
     "title": "Площадь кухни",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/kitchen.svg",
     "value": "8 м²"
    },
    {
     "title": "Этаж",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/floor.svg",
     "value": "5 из 20"
    },
    {
     "title": "Год постройки",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/build_year.svg",
     "value": "2021"
    }
   ],
   "priceChanges": [
    {
     "changeTime": "2026-07-27T13:15:25.112940Z",
     "priceData": {
      "currency": "rur",
      "price": 140000,
      "paymentPeriod": "monthly"
     }
    },
    {
     "changeTime": "2026-07-04T15:29:13.104690Z",
     "priceData": {
      "currency": "rur",
      "price": 160000,
      "paymentPeriod": "monthly"
     }
    }
   ],
   "bti": {
    "houseData": {
     "yearRelease": 2023,
     "houseMaterialType": "none",
     "isEmergency": false,
     "demolishedInMoscowProgramm": false,
     "houseHeatSupplyType": "none",
     "houseOverhaulFundType": "unknown",
     "houseGasSupplyType": "unknown",
     "houseOverlapType": "unknown"
    }
   },
   "stats": {
    "totalViewsFormattedString": "589 просмотров, 16 за сегодня"
   },
   "priceInfo": null,
   "serp": {
    "id": 331696530,
    "category": "flatRent",
    "dealType": "rent",
    "bargainTerms": {
     "leaseType": null,
     "utilitiesTerms": {
      "price": 0,
      "includedInPrice": true,
      "flowMetersNotIncludedInPrice": true
     },
     "vatPrice": null,
     "paymentPeriod": "monthly",
     "priceType": "all",
     "priceRur": 140000,
     "leaseTermType": "longTerm",
     "currency": "rur",
     "saleType": null,
     "tax": null,
     "deposit": 140000,
     "agentFee": 50,
     "mortgageAllowed": null,
     "tags": [],
     "vatType": null,
     "bargainAllowed": null,
     "agentBonus": null,
     "priceForWorkplace": null,
     "price": 140000,
     "clientFee": 50
    },
    "geo": {
     "userInput": "Москва, жилой комплекс Акватория, В2",
     "address": [
      {
       "geoType": "location",
       "shortName": "Москва",
       "id": 1,
       "name": "Москва",
       "type": "location",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&region=1&type=4",
       "title": "Москва",
       "fullName": "Москва",
       "isFormingAddress": true,
       "locationTypeId": 1
      },
      {
       "geoType": "district",
       "shortName": "САО",
       "id": 5,
       "name": "САО",
       "type": "okrug",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=5&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "САО",
       "fullName": "САО",
       "isFormingAddress": null,
       "locationTypeId": null
      },
      {
       "geoType": "district",
       "shortName": "р-н Левобережный",
       "id": 32,
       "name": "Левобережный",
       "type": "raion",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=32&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "р-н Левобережный",
       "fullName": "р-н Левобережный",
       "isFormingAddress": null,
       "locationTypeId": null
      },
      {
       "geoType": "underground",
       "shortName": "м. Беломорская",
       "id": 369,
       "name": "Беломорская",
       "type": "metro",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=369&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "title": "м. Беломорская",
       "fullName": "м. Беломорская",
       "isFormingAddress": null,
       "locationTypeId": null
      },
      {
       "geoType": "street",
       "shortName": "Ленинградское ш.",
       "id": 1349,
       "name": "Ленинградское",
       "type": "street",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&street%5B0%5D=1349&type=4",
       "title": "Ленинградское шоссе",
       "fullName": "Ленинградское шоссе",
       "isFormingAddress": true,
       "locationTypeId": null
      },
      {
       "geoType": "house",
       "shortName": "69к3",
       "id": 880252,
       "name": "69к3",
       "type": "house",
       "qs": "currency=2&deal_type=rent&engine_version=2&house%5B0%5D=880252&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "69к3",
       "fullName": "69к3",
       "isFormingAddress": true,
       "locationTypeId": null
      }
     ],
     "coordinates": {
      "lat": 55.869445,
      "lng": 37.456657
     },
     "countryId": 138,
     "highways": [],
     "districts": [
      {
       "geoType": "district",
       "id": 32,
       "name": "Левобережный",
       "type": "raion",
       "locationId": 1,
       "title": "р-н Левобережный",
       "fullName": "р-н Левобережный",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=32&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "parentId": 5
      },
      {
       "geoType": "district",
       "id": 5,
       "name": "САО",
       "type": "okrug",
       "locationId": 1,
       "title": "САО",
       "fullName": "САО",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=5&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "parentId": null
      }
     ],
     "jk": {
      "webSiteUrlUtm": null,
      "displayName": "ЖК «Aquatoria»",
      "id": 50400,
      "name": "Aquatoria",
      "webSiteUrl": null,
      "gaGeo": {
       "moId": 0,
       "oblId": 1,
       "cityId": 1
      },
      "fullUrl": "https://zhk-aquatoria-i.cian.ru/",
      "house": null,
      "developer": null
     },
     "undergrounds": [
      {
       "lineColor": "00701A",
       "id": 369,
       "name": "Беломорская",
       "lineId": 3,
       "cianId": null,
       "isDefault": true,
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=369&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "releaseYear": null,
       "underConstruction": false,
       "transportType": "transport",
       "time": 4,
       "lineType": null
      },
      {
       "lineColor": "00701A",
       "id": 106,
       "name": "Речной вокзал",
       "lineId": 3,
       "cianId": null,
       "isDefault": null,
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=106&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "releaseYear": null,
       "underConstruction": false,
       "transportType": "transport",
       "time": 5,
       "lineType": null
      },
      {
       "lineColor": "00701A",
       "id": 349,
       "name": "Ховрино",
       "lineId": 3,
       "cianId": null,
       "isDefault": null,
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=349&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "releaseYear": null,
       "underConstruction": false,
       "transportType": "transport",
       "time": 6,
       "lineType": null
      }
     ],
     "railways": [
      {
       "geoType": "railway",
       "id": 774,
       "name": "Химки",
       "directionIds": [
        16
       ],
       "distance": 4,
       "travelType": "byCar",
       "time": 7,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=774&type=4"
      },
      {
       "geoType": "railway",
       "id": 765,
       "name": "Левобережная",
       "directionIds": [
        16
       ],
       "distance": 6,
       "travelType": "byCar",
       "time": 10,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=765&type=4"
      },
      {
       "geoType": "railway",
       "id": 752,
       "name": "Ховрино",
       "directionIds": [
        16
       ],
       "distance": 6,
       "travelType": "byCar",
       "time": 10,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=752&type=4"
      }
     ],
     "buildingAddress": null,
     "sortedGeoIds": [
      {
       "type": "underground",
       "id": 369
      },
      {
       "type": "underground",
       "id": 106
      },
      {
       "type": "underground",
       "id": 349
      },
      {
       "type": "railway",
       "id": 774
      },
      {
       "type": "railway",
       "id": 765
      },
      {
       "type": "railway",
       "id": 752
      },
      {
       "type": "district",
       "id": 32
      },
      {
       "type": "district",
       "id": 5
      }
     ]
    },
    "building": {
     "materialType": "monolith",
     "heatingType": null,
     "parking": {
      "priceMonthly": null,
      "placesCount": null,
      "isAvailable": null,
      "type": "underground",
      "currency": null,
      "priceEntry": null,
      "purposeType": null,
      "locationType": null,
      "isFree": null
     },
     "floorsCount": 20,
     "classType": null,
     "deadline": null,
     "buildYear": 2021,
     "accessType": null,
     "passengerLiftsCount": 2,
     "type": null,
     "cargoLiftsCount": 2
    },
    "roomsCount": 2,
    "totalArea": "65.0",
    "floorNumber": 5,
    "flatType": "rooms",
    "title": null,
    "description": "Id 65300. Сдается ВИДОВАЯ 2х комнатная квартира в ЖК Бизнес класса\"Aquatoria\"\n\nО квартире:\n-просторная кухня-гостиная;\n-одна спальня;\n-два санузла;\n-водонагреватель работает через вайфай;\n-просторная прихожая;\n-гардеробная;\n-автоматические шторы;\n-кресло реклайнер;\n\nО комплексе:\nКомплекс занимает редкое для столичного жилья положение - у воды, на берегу реки, расположен в Левобережном районе Северного административного округа Москвы. До метро Беломорская 15 минут пешком. Имеет собственное благоустроенное пространство с закрытой территорией двора, плавно переходящей в прогулочную зону по набережной. Комплекс расположен на территории в 5 га. Имеется двухуровневый подземный паркинг. \n\nРассматриваем кандидатов на долгий срок, без животных.\nБолее подробную информацию можно узнать по телефону. Звоните, с удовольствием отвечу на Ваши вопросы. Показ заранее по договоренности!",
    "formattedFullPrice": "140 000 ₽/мес.",
    "formattedFullInfo": "2-комн.кв.  ·  65 м²  ·  5/20 этаж",
    "formattedAdditionalInfo": "Залог 140 000 ₽, комиссия 50%(agent_fee), на длительный срок",
    "photos": [
     {
      "isLayout": null,
      "id": 2915872051,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872051-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872051-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872051-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872051-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2915872052,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872052-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872052-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872052-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872052-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2915872054,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872054-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872054-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872054-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872054-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2915872055,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872055-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872055-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872055-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872055-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2915872057,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872057-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872057-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872057-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872057-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2915872059,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872059-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872059-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872059-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872059-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2915872060,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872060-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872060-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872060-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872060-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2915872066,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872066-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872066-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872066-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872066-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2915872068,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872068-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872068-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872068-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872068-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2915872142,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872142-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872142-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872142-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872142-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2915872146,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872146-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872146-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872146-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872146-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2915872136,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872136-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872136-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872136-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872136-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2915872071,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872071-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872071-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872071-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872071-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2915872075,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872075-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872075-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872075-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872075-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2915872092,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872092-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872092-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872092-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872092-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2915872084,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872084-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872084-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872084-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872084-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2915872104,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872104-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872104-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872104-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872104-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2915872103,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872103-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872103-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872103-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872103-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2915872109,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872109-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872109-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872109-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872109-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2915872116,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872116-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872116-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872116-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872116-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2915872154,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872154-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872154-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872154-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872154-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2915872163,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872163-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872163-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872163-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872163-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2915872167,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872167-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872167-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872167-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872167-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2915872175,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872175-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872175-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872175-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872175-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2915872178,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2915872178-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2915872178-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2915872178-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2915872178-3.jpg",
      "rotateDegree": null
     }
    ]
   },
   "files": [
    {
     "id": 2915872051,
     "isDefault": false,
     "full": "331696530-1.webp",
     "mini": "331696530-1m.webp"
    },
    {
     "id": 2915872052,
     "isDefault": false,
     "full": "331696530-2.webp",
     "mini": "331696530-2m.webp"
    },
    {
     "id": 2915872054,
     "isDefault": false,
     "full": "331696530-3.webp",
     "mini": "331696530-3m.webp"
    },
    {
     "id": 2915872055,
     "isDefault": false,
     "full": "331696530-4.webp",
     "mini": "331696530-4m.webp"
    },
    {
     "id": 2915872057,
     "isDefault": false,
     "full": "331696530-5.webp",
     "mini": "331696530-5m.webp"
    }
   ]
  },
  {
   "source": "https://www.cian.ru/rent/flat/332018689/",
   "seenAt": "2026-10-19T11:52:20.508Z",
   "offer": {
    "category": "flatRent",
    "status": "published",
    "dealType": "rent",
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
       "url": "https://www.cian.ru/snyat-3-komnatnuyu-kvartiru/"
      },
      {
       "fullName": "САО",
       "id": 5,
       "locationTypeId": -1,
       "name": "САО",
       "shortName": "САО",
       "type": "okrug",
       "url": "https://www.cian.ru/snyat-3-komnatnuyu-kvartiru-moskva-sao-045/"
      },
      {
       "fullName": "район Аэропорт",
       "id": 23,
       "locationTypeId": -1,
       "name": "Аэропорт",
       "shortName": "р-н Аэропорт",
       "type": "raion",
       "url": "https://www.cian.ru/snyat-3-komnatnuyu-kvartiru-moskva-aeroport-0423/"
      },
      {
       "fullName": "3-й Балтийский переулок",
       "id": 647,
       "locationTypeId": -1,
       "name": "3-й Балтийский",
       "shortName": "3-й Балтийский пер.",
       "type": "street",
       "url": "https://www.cian.ru/snyat-3-komnatnuyu-kvartiru-moskva-3-y-baltiyskiy-pereulok-02647/"
      },
      {
       "fullName": "6К3",
       "id": 21016,
       "locationTypeId": -1,
       "name": "6К3",
       "shortName": "6К3",
       "type": "house",
       "url": "https://www.cian.ru/cat.php?deal_type=rent&engine_version=2&house%5B0%5D=21016&offer_type=flat&room3=1&type=4"
      }
     ],
     "coordinates": {
      "lat": 55.811553,
      "lng": 37.530346
     },
     "highways": [],
     "railways": [
      {
       "id": 722,
       "directionIds": [
        18
       ],
       "distance": "1.0",
       "time": 11,
       "name": "Красный Балтиец",
       "travelType": "byFoot"
      },
      {
       "id": 714,
       "directionIds": [
        18
       ],
       "distance": "1.0",
       "time": 22,
       "name": "Гражданская",
       "travelType": "byFoot"
      },
      {
       "id": 731,
       "directionIds": [
        18
       ],
       "distance": "2.0",
       "time": 30,
       "name": "Ленинградская",
       "travelType": "byFoot"
      },
      {
       "id": 731,
       "directionIds": [
        18
       ],
       "distance": "3.0",
       "time": 6,
       "name": "Ленинградская",
       "travelType": "byCar"
      },
      {
       "id": 722,
       "directionIds": [
        18
       ],
       "distance": "4.0",
       "time": 7,
       "name": "Красный Балтиец",
       "travelType": "byCar"
      },
      {
       "id": 714,
       "directionIds": [
        18
       ],
       "distance": "6.0",
       "time": 12,
       "name": "Гражданская",
       "travelType": "byCar"
      }
     ],
     "undergrounds": [
      {
       "id": 116,
       "name": "Сокол",
       "lineColor": "00701A",
       "travelType": "walk",
       "travelTime": 18,
       "url": "https://www.cian.ru/snyat-3-komnatnuyu-kvartiru-moskva-metro-sokol-116/",
       "underConstruction": false
      },
      {
       "id": 423,
       "name": "Красный Балтиец",
       "lineColor": "BD748F",
       "travelType": "walk",
       "travelTime": 5,
       "url": "https://www.cian.ru/snyat-3-komnatnuyu-kvartiru-moskva-metro-krasnyy-baltiec-423/",
       "underConstruction": false,
       "lineType": "mcd2"
      },
      {
       "id": 9,
       "name": "Аэропорт",
       "lineColor": "00701A",
       "travelType": "walk",
       "travelTime": 17,
       "url": "https://www.cian.ru/snyat-3-komnatnuyu-kvartiru-moskva-metro-aeroport-9/",
       "underConstruction": false
      },
      {
       "id": 424,
       "name": "Гражданская",
       "lineColor": "BD748F",
       "travelType": "walk",
       "travelTime": 20,
       "url": "https://www.cian.ru/snyat-3-komnatnuyu-kvartiru-moskva-metro-grazhdanskaya-424/",
       "underConstruction": false,
       "lineType": "mcd2"
      }
     ]
    },
    "id": 332018689,
    "objectGuid": "bf467a93-ca1d-453f-a1f0-e9590247c308",
    "cianId": 332018689,
    "userId": 745734,
    "publishedUserId": 45003666,
    "cianUserId": 45003666,
    "description": "ID 14886. \n\n\nПредлагается в аренду 3-комнатная квартира в доме, расположенном по адресу: 3-й Балтийский переулок д. 6, корп. 3. Ремонт квартиры выполнен в стиле современной классики. Удачная планировка квартиры:  кухня,  полностью укомплектована необходимой бытовой техникой; просторная гостиная; спальня полностью оснащена всем необходимым для комфорта. Комнату свободного назначения можно использовать как кабинет или гостевую комнату. Раздельный санузел (ванна) оборудован качественной европейской сантехникой. Имеется 1 балкон и 2 застекленные лоджии.  Установлено: кондиционирование, домофон, интернет. Все окна выходят на зеленый палисадник, рядом Тимирязевский парк и сквер с прудом. Дом расположен в пешей доступности от метро Аэропорт и Сокол, в 5 минутах от станции Красный Балтиец, откуда легко можно добраться до м. Курской, Дмитровской и Рижской. Транспортная доступность в центр - рядом Ленинградский проспект и Алабяно-Балтийский тоннель. Развитая инфраструктура района к Вашим услугам. Строго без животных. Предпочтительнее семья с ребенком от 6 лет.",
    "photos": [
     {
      "id": 2975434770,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2975434770-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2975434770-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2975434770-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2975434770-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2975434773,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2975434773-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2975434773-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2975434773-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2975434773-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2923182424,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2923182424-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182424-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182424-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182424-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2923182429,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2923182429-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182429-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182429-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182429-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2923182444,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2923182444-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182444-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182444-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182444-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2923182450,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2923182450-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182450-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182450-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182450-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2923182457,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2923182457-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182457-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182457-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182457-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2923182471,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2923182471-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182471-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182471-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182471-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2923182483,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2923182483-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182483-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182483-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182483-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2923182496,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2923182496-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182496-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182496-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182496-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2923182509,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2923182509-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182509-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182509-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182509-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2923182521,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2923182521-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182521-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182521-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182521-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2923182548,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2923182548-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182548-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182548-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182548-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2923182558,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2923182558-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182558-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182558-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182558-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2923182570,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2923182570-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182570-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182570-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182570-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2923182578,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2923182578-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182578-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182578-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182578-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2923182584,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2923182584-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182584-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182584-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182584-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2923182591,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2923182591-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182591-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182591-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182591-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2923182598,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2923182598-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182598-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182598-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182598-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2923182601,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2923182601-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182601-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182601-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182601-3.jpg",
      "isCianLayout": false
     }
    ],
    "phones": [
     {
      "countryCode": "+7",
      "number": "9339378134"
     },
     {
      "countryCode": "+7",
      "number": "9802809029"
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
        "tariffId": 1388879,
        "tariffGridType": "packageTariff"
       }
      }
     ],
     "autoprolong": true
    },
    "flatType": "rooms",
    "roomType": "separate",
    "totalArea": "90.0",
    "livingArea": "56.0",
    "kitchenArea": "12.0",
    "allRoomsArea": "22-19-15",
    "loggiasCount": 0,
    "balconiesCount": 0,
    "windowsViewType": "yard",
    "separateWcsCount": 2,
    "combinedWcsCount": 1,
    "repairType": "cosmetic",
    "hasPhone": true,
    "hasFridge": true,
    "hasDishwasher": false,
    "hasWasher": true,
    "hasFurniture": true,
    "hasKitchenFurniture": true,
    "hasConditioner": true,
    "hasTv": true,
    "hasInternet": false,
    "hasBathtub": true,
    "hasShower": false,
    "childrenAllowed": true,
    "petsAllowed": false,
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
    "floorNumber": 3,
    "bargainTerms": {
     "price": 115000,
     "priceType": "all",
     "currency": "rur",
     "paymentPeriod": "monthly",
     "leaseTermType": "longTerm",
     "prepayMonths": 1,
     "deposit": 115000,
     "utilitiesTerms": {
      "includedInPrice": true,
      "price": 0,
      "flowMetersNotIncludedInPrice": true
     },
     "includedOptions": [],
     "clientFee": 0,
     "agentFee": 0,
     "prices": {
      "rur": 115000,
      "usd": 1376,
      "eur": 1228
     },
     "depositPrices": {
      "rur": 115000,
      "usd": 1376,
      "eur": 1228
     },
     "utilitiesTermsPrices": {
      "rur": 0,
      "usd": 0,
      "eur": 0
     },
     "tags": []
    },
    "building": {
     "materialType": "panel",
     "floorsCount": 12,
     "totalArea": "90.0",
     "liftTypes": [],
     "cranageTypes": [],
     "passengerLiftsCount": 1,
     "cargoLiftsCount": 0,
     "houseMaterialType": "panel"
    },
    "editDate": "2026-10-19T12:40:25.785865Z",
    "humanizedEditDate": "сегодня, 12:40",
    "isInHiddenBase": false,
    "isObjectHidden": false,
    "isClosedVisibility": false,
    "videos": [],
    "demolishedInMoscowProgramm": false,
    "exportLinks": {
     "pdfUrl": "/export/pdf/rent/flat/332018689/",
     "docxUrl": "/export/docx/rent/flat/332018689/"
    },
    "passengerLiftsCount": 1,
    "cargoLiftsCount": 0,
    "added": "13 окт, 11:43",
    "valueAddedServices": {
     "isStandard": false,
     "isTop3": true,
     "isPremium": false
    },
    "promotion": {
     "isPerformanceVasPilot": false,
     "promotionDescription": "Топ",
     "isCpcAuction": false
    },
    "categoriesIds": [
     1000,
     1100,
     1110,
     1111
    ],
    "publicationDate": 1784104929,
    "creationDate": "2026-07-15T11:42:09.013",
    "recoveryLink": "/razmestit-obyavlenie/332018689/?isFromXML=1",
    "trackingData": {
     "moId": 0,
     "oblId": 1,
     "cityId": 1,
     "fbRegion": "Москва",
     "fbCity": "Москва"
    },
    "editPhoto": "/realty/add2.aspx?id=332018689&isFromXML=1",
    "newEdit": "/razmestit-obyavlenie/?realty_id=332018689&isFromXML=1",
    "certificate": "https://www.cian.ru/newobjects/cian/certification/get?announcementId=332018689",
    "edit": "/realty/add1.aspx?id=332018689&isFromXML=1",
    "similarOffersLink": "",
    "similarOffersCount": 0,
    "buildersIds": [],
    "isImported": true,
    "userConfirmedFix": false,
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
    "isUnique": false,
    "isUniqueCheckDate": "2026-10-18",
    "isCianPartner": false,
    "externalId": "14886",
    "isIllegalConstruction": false,
    "isNoFee": true,
    "amenities": [],
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
       "value": "90 м²",
       "label": "Общая площадь"
      },
      {
       "value": "56 м²",
       "label": "Жилая площадь"
      },
      {
       "value": "12 м²",
       "label": "Площадь кухни"
      },
      {
       "value": "Изолированная",
       "label": "Планировка"
      },
      {
       "value": "1 совмещенный, 2 раздельных",
       "label": "Санузел"
      },
      {
       "value": "Во двор",
       "label": "Вид из окон"
      },
      {
       "value": "Косметический",
       "label": "Ремонт"
      }
     ]
    },
    {
     "title": "О доме",
     "id": "aboutBuilding",
     "features": [
      {
       "value": "1998",
       "label": "Год постройки"
      },
      {
       "value": "П-46",
       "label": "Строительная серия"
      },
      {
       "value": "1 пассажирский",
       "label": "Количество лифтов"
      },
      {
       "value": "Панельный",
       "label": "Тип дома"
      },
      {
       "value": "Железобетонные",
       "label": "Тип перекрытий"
      },
      {
       "value": "2",
       "label": "Подъезды"
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
     "value": "90 м²"
    },
    {
     "title": "Жилая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/plan.svg",
     "value": "56 м²"
    },
    {
     "title": "Площадь кухни",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/kitchen.svg",
     "value": "12 м²"
    },
    {
     "title": "Этаж",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/floor.svg",
     "value": "3 из 12"
    }
   ],
   "priceChanges": [
    {
     "changeTime": "2026-10-06T13:16:50.256335Z",
     "priceData": {
      "currency": "rur",
      "price": 115000,
      "paymentPeriod": "monthly"
     }
    },
    {
     "changeTime": "2026-07-15T08:42:09.985789Z",
     "priceData": {
      "currency": "rur",
      "price": 120000,
      "paymentPeriod": "monthly"
     }
    }
   ],
   "bti": {
    "houseData": {
     "yearRelease": 1998,
     "houseMaterialType": "panel",
     "floorMax": 12,
     "entrances": 2,
     "flatCount": 83,
     "isEmergency": false,
     "demolishedInMoscowProgramm": false,
     "heatIndex": 8.66,
     "houseHeatSupplyType": "central",
     "houseOverhaulFundType": "specialRegionalOp",
     "houseGasSupplyType": "without",
     "houseOverlapType": "concrete",
     "lifts": 4,
     "seriesName": "П-46"
    }
   },
   "stats": {
    "totalViewsFormattedString": "1898 просмотров, 9 за сегодня"
   },
   "priceInfo": null,
   "serp": {
    "id": 332018689,
    "category": "flatRent",
    "dealType": "rent",
    "bargainTerms": {
     "leaseType": null,
     "utilitiesTerms": {
      "price": 0,
      "includedInPrice": true,
      "flowMetersNotIncludedInPrice": true
     },
     "vatPrice": null,
     "paymentPeriod": "monthly",
     "priceType": "all",
     "priceRur": 115000,
     "leaseTermType": "longTerm",
     "currency": "rur",
     "saleType": null,
     "tax": null,
     "deposit": 115000,
     "agentFee": 0,
     "mortgageAllowed": null,
     "tags": [],
     "vatType": null,
     "bargainAllowed": null,
     "agentBonus": null,
     "priceForWorkplace": null,
     "price": 115000,
     "clientFee": 0
    },
    "geo": {
     "userInput": "г Москва, Балтийский 3-й пер, 6к3",
     "address": [
      {
       "geoType": "location",
       "shortName": "Москва",
       "id": 1,
       "name": "Москва",
       "type": "location",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&region=1&type=4",
       "title": "Москва",
       "fullName": "Москва",
       "isFormingAddress": true,
       "locationTypeId": 1
      },
      {
       "geoType": "district",
       "shortName": "САО",
       "id": 5,
       "name": "САО",
       "type": "okrug",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=5&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "САО",
       "fullName": "САО",
       "isFormingAddress": null,
       "locationTypeId": null
      },
      {
       "geoType": "district",
       "shortName": "р-н Аэропорт",
       "id": 23,
       "name": "Аэропорт",
       "type": "raion",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=23&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "р-н Аэропорт",
       "fullName": "р-н Аэропорт",
       "isFormingAddress": null,
       "locationTypeId": null
      },
      {
       "geoType": "underground",
       "shortName": "м. Красный Балтиец",
       "id": 423,
       "name": "Красный Балтиец",
       "type": "metro",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=423&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "title": "м. Красный Балтиец",
       "fullName": "м. Красный Балтиец",
       "isFormingAddress": null,
       "locationTypeId": null
      },
      {
       "geoType": "street",
       "shortName": "3-й Балтийский пер.",
       "id": 647,
       "name": "3-й Балтийский",
       "type": "street",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&street%5B0%5D=647&type=4",
       "title": "3-й Балтийский переулок",
       "fullName": "3-й Балтийский переулок",
       "isFormingAddress": true,
       "locationTypeId": null
      },
      {
       "geoType": "house",
       "shortName": "6К3",
       "id": 21016,
       "name": "6К3",
       "type": "house",
       "qs": "currency=2&deal_type=rent&engine_version=2&house%5B0%5D=21016&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "6К3",
       "fullName": "6К3",
       "isFormingAddress": true,
       "locationTypeId": null
      }
     ],
     "coordinates": {
      "lat": 55.811553,
      "lng": 37.530346
     },
     "countryId": 138,
     "highways": [],
     "districts": [
      {
       "geoType": "district",
       "id": 23,
       "name": "Аэропорт",
       "type": "raion",
       "locationId": 1,
       "title": "р-н Аэропорт",
       "fullName": "р-н Аэропорт",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=23&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "parentId": 5
      },
      {
       "geoType": "district",
       "id": 5,
       "name": "САО",
       "type": "okrug",
       "locationId": 1,
       "title": "САО",
       "fullName": "САО",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=5&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "parentId": null
      }
     ],
     "jk": null,
     "undergrounds": [
      {
       "lineColor": "00701A",
       "id": 116,
       "name": "Сокол",
       "lineId": 3,
       "cianId": null,
       "isDefault": true,
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=116&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "releaseYear": null,
       "underConstruction": false,
       "transportType": "walk",
       "time": 18,
       "lineType": null
      },
      {
       "lineColor": "BD748F",
       "id": 423,
       "name": "Красный Балтиец",
       "lineId": 32,
       "cianId": null,
       "isDefault": null,
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=423&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "releaseYear": null,
       "underConstruction": false,
       "transportType": "walk",
       "time": 5,
       "lineType": "mcd2"
      },
      {
       "lineColor": "00701A",
       "id": 9,
       "name": "Аэропорт",
       "lineId": 3,
       "cianId": null,
       "isDefault": null,
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=9&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "releaseYear": null,
       "underConstruction": false,
       "transportType": "walk",
       "time": 17,
       "lineType": null
      },
      {
       "lineColor": "BD748F",
       "id": 424,
       "name": "Гражданская",
       "lineId": 32,
       "cianId": null,
       "isDefault": null,
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=424&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "releaseYear": null,
       "underConstruction": false,
       "transportType": "walk",
       "time": 20,
       "lineType": "mcd2"
      }
     ],
     "railways": [
      {
       "geoType": "railway",
       "id": 722,
       "name": "Красный Балтиец",
       "directionIds": [
        18
       ],
       "distance": 1,
       "travelType": "byFoot",
       "time": 11,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=722&type=4"
      },
      {
       "geoType": "railway",
       "id": 731,
       "name": "Ленинградская",
       "directionIds": [
        18
       ],
       "distance": 3,
       "travelType": "byCar",
       "time": 6,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=731&type=4"
      },
      {
       "geoType": "railway",
       "id": 714,
       "name": "Гражданская",
       "directionIds": [
        18
       ],
       "distance": 6,
       "travelType": "byCar",
       "time": 12,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=714&type=4"
      }
     ],
     "buildingAddress": null,
     "sortedGeoIds": [
      {
       "type": "underground",
       "id": 116
      },
      {
       "type": "underground",
       "id": 423
      },
      {
       "type": "underground",
       "id": 9
      },
      {
       "type": "underground",
       "id": 424
      },
      {
       "type": "railway",
       "id": 722
      },
      {
       "type": "railway",
       "id": 731
      },
      {
       "type": "railway",
       "id": 714
      },
      {
       "type": "district",
       "id": 23
      },
      {
       "type": "district",
       "id": 5
      }
     ]
    },
    "building": {
     "materialType": "panel",
     "heatingType": null,
     "parking": null,
     "floorsCount": 12,
     "classType": null,
     "deadline": null,
     "buildYear": null,
     "accessType": null,
     "passengerLiftsCount": 1,
     "type": null,
     "cargoLiftsCount": 0
    },
    "roomsCount": 3,
    "totalArea": "90.0",
    "floorNumber": 3,
    "flatType": "rooms",
    "title": null,
    "description": "ID 14886. \n\n\nПредлагается в аренду 3-комнатная квартира в доме, расположенном по адресу: 3-й Балтийский переулок д. 6, корп. 3. Ремонт квартиры выполнен в стиле современной классики. Удачная планировка квартиры:  кухня,  полностью укомплектована необходимой бытовой техникой; просторная гостиная; спальня полностью оснащена всем необходимым для комфорта. Комнату свободного назначения можно использовать как кабинет или гостевую комнату. Раздельный санузел (ванна) оборудован качественной европейской сантехникой. Имеется 1 балкон и 2 застекленные лоджии.  Установлено: кондиционирование, домофон, интернет. Все окна выходят на зеленый палисадник, рядом Тимирязевский парк и сквер с прудом. Дом расположен в пешей доступности от метро Аэропорт и Сокол, в 5 минутах от станции Красный Балтиец, откуда легко можно добраться до м. Курской, Дмитровской и Рижской. Транспортная доступность в центр - рядом Ленинградский проспект и Алабяно-Балтийский тоннель. Развитая инфраструктура района к Вашим услугам. Строго без животных. Предпочтительнее семья с ребенком от 6 лет.",
    "formattedFullPrice": "115 000 ₽/мес.",
    "formattedFullInfo": "3-комн.кв.  ·  90 м²  ·  3/12 этаж",
    "formattedAdditionalInfo": "Залог 115 000 ₽, без комиссии, предоплата 1 месяц, на длительный срок",
    "photos": [
     {
      "isLayout": null,
      "id": 2975434770,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2975434770-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2975434770-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2975434770-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2975434770-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2975434773,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2975434773-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2975434773-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2975434773-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2975434773-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2923182424,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182424-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2923182424-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182424-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182424-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2923182429,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182429-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2923182429-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182429-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182429-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2923182444,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182444-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2923182444-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182444-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182444-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2923182450,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182450-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2923182450-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182450-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182450-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2923182457,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182457-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2923182457-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182457-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182457-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2923182471,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182471-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2923182471-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182471-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182471-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2923182483,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182483-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2923182483-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182483-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182483-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2923182496,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182496-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2923182496-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182496-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182496-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2923182509,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182509-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2923182509-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182509-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182509-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2923182521,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182521-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2923182521-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182521-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182521-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2923182548,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182548-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2923182548-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182548-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182548-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2923182558,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182558-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2923182558-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182558-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182558-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2923182570,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182570-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2923182570-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182570-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182570-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2923182578,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182578-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2923182578-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182578-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182578-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2923182584,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182584-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2923182584-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182584-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182584-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2923182591,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182591-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2923182591-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182591-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182591-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2923182598,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182598-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2923182598-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182598-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182598-3.jpg",
      "rotateDegree": null
     },
     {
      "isLayout": null,
      "id": 2923182601,
      "isDefault": false,
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2923182601-2.jpg",
      "fullUrl": "https://images.cdn-cian.ru/images/2923182601-1.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2923182601-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2923182601-3.jpg",
      "rotateDegree": null
     }
    ]
   },
   "files": [
    {
     "id": 2975434770,
     "isDefault": false,
     "full": "332018689-1.webp",
     "mini": "332018689-1m.webp"
    },
    {
     "id": 2975434773,
     "isDefault": false,
     "full": "332018689-2.webp",
     "mini": "332018689-2m.webp"
    },
    {
     "id": 2923182424,
     "isDefault": false,
     "full": "332018689-3.webp",
     "mini": "332018689-3m.webp"
    },
    {
     "id": 2923182429,
     "isDefault": false,
     "full": "332018689-4.webp",
     "mini": "332018689-4m.webp"
    },
    {
     "id": 2923182444,
     "isDefault": false,
     "full": "332018689-5.webp",
     "mini": "332018689-5m.webp"
    }
   ]
  },
  {
   "source": "https://www.cian.ru/rent/flat/330668412/",
   "seenAt": "2026-10-19T11:52:21.993Z",
   "offer": {
    "category": "flatRent",
    "status": "published",
    "dealType": "rent",
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
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru/"
      },
      {
       "fullName": "САО",
       "id": 5,
       "locationTypeId": -1,
       "name": "САО",
       "shortName": "САО",
       "type": "okrug",
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-sao-045/"
      },
      {
       "fullName": "район Войковский",
       "id": 26,
       "locationTypeId": -1,
       "name": "Войковский",
       "shortName": "р-н Войковский",
       "type": "raion",
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-voykovskiy-0426/"
      },
      {
       "fullName": "улица Адмирала Макарова",
       "id": 1421,
       "locationTypeId": -1,
       "name": "Адмирала Макарова",
       "shortName": "ул. Адмирала Макарова",
       "type": "street",
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-ulica-admirala-makarova-021421/"
      },
      {
       "fullName": "6Ак1",
       "id": 844742,
       "locationTypeId": -1,
       "name": "6Ак1",
       "shortName": "6Ак1",
       "type": "house",
       "url": "https://www.cian.ru/cat.php?deal_type=rent&engine_version=2&house%5B0%5D=844742&offer_type=flat&room1=1&type=4"
      }
     ],
     "coordinates": {
      "lat": 55.836792,
      "lng": 37.491934
     },
     "highways": [],
     "jk": {
      "id": 7210,
      "name": "Невский",
      "house": {
       "id": 108188,
       "name": "Адмирала Макарова, 6Ак1 (Корпус 6)"
      },
      "gaGeo": {
       "moId": 0,
       "oblId": 1,
       "cityId": 1
      },
      "fullUrl": "https://www.cian.ru/zhiloy-kompleks-nevskiy-moskva-7210/",
      "fullUrlTemplate": "{request_scheme}://zhk-nevskiy-i.{host}/",
      "webSiteUrl": "https://new.krost.ru/projects/nevskij"
     },
     "railways": [
      {
       "id": 731,
       "directionIds": [
        18
       ],
       "distance": "2.0",
       "time": 33,
       "name": "Ленинградская",
       "travelType": "byFoot"
      },
      {
       "id": 731,
       "directionIds": [
        18
       ],
       "distance": "3.0",
       "time": 4,
       "name": "Ленинградская",
       "travelType": "byCar"
      },
      {
       "id": 739,
       "directionIds": [
        18
       ],
       "distance": "3.0",
       "time": 38,
       "name": "Покровское-Стрешнево",
       "travelType": "byFoot"
      },
      {
       "id": 722,
       "directionIds": [
        18
       ],
       "distance": "4.0",
       "time": 6,
       "name": "Красный Балтиец",
       "travelType": "byCar"
      },
      {
       "id": 722,
       "directionIds": [
        18
       ],
       "distance": "4.0",
       "time": 52,
       "name": "Красный Балтиец",
       "travelType": "byFoot"
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
       "id": 29,
       "name": "Водный стадион",
       "lineColor": "00701A",
       "travelType": "walk",
       "travelTime": 7,
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-metro-vodnyy-stadion-29/",
       "underConstruction": false
      },
      {
       "id": 293,
       "name": "Балтийская",
       "lineColor": "FA6F9E",
       "travelType": "walk",
       "travelTime": 18,
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-stanciya-mck-baltiyskaya-293/",
       "underConstruction": false,
       "lineType": "mck"
      },
      {
       "id": 30,
       "name": "Войковская",
       "lineColor": "00701A",
       "travelType": "transport",
       "travelTime": 5,
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-metro-voykovskaya-30/",
       "underConstruction": false
      }
     ]
    },
    "id": 330668412,
    "objectGuid": "39e1690a-63e2-4019-b337-88ad26a78ea8",
    "cianId": 330668412,
    "userId": 3914321,
    "publishedUserId": 131242194,
    "cianUserId": 131242194,
    "description": "Id 64243. Впервые сдается 1 комнатная квартира на длительный срок. ЖК бизнес-класса \"Невский\". В квартире выполнен качественный дизайнерский ремонт, есть вся необходимая техника для комфортной жизни.\n1) вся мебель встроенная: посудомоечная машина, стиральная машина, холодильник, микроволновка, духовка\n2) очень много мест для хранения\nШкафы высотой 3 метра, отдельное место под диваном.  \n3)сохранена высота потолков, высота потолков в чистовом варианте 2,9 дает ощущение большого пространства и воздушности в квартире. \n( Студентов и кандидатов с животными не рассматриваем! )\n\nРайон старой Москвы с развитой инфраструктурой, большим количеством школ, детских садов, парков, тц Водный и Метрополис в шаговой доступности, яхт-клуб.\nВ пешей доступности 4 парка: Дружба, Покровское -Стрешнево, Головинские пруды, новый Парк Северного речного вокзала.\nВ шаговой доступности от метро Водный стадион, МЦК Балтийская.\n\nРассматриваем арендаторов порядочных на длительный срок от года.\nЗвоните записывайтесь оперативный показ ключи на руках!",
    "photos": [
     {
      "id": 2892466991,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2892466991-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2892466991-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2892466991-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2892466991-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2892466997,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2892466997-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2892466997-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2892466997-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2892466997-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2892467005,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2892467005-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2892467005-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2892467005-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2892467005-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2892467039,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2892467039-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2892467039-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2892467039-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2892467039-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2892467042,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2892467042-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2892467042-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2892467042-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2892467042-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2892467033,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2892467033-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2892467033-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2892467033-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2892467033-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2892467014,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2892467014-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2892467014-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2892467014-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2892467014-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2892467026,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2892467026-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2892467026-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2892467026-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2892467026-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2892467049,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2892467049-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2892467049-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2892467049-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2892467049-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2892467054,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2892467054-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2892467054-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2892467054-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2892467054-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2892467062,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/2892467062-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2892467062-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2892467062-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/2892467062-3.jpg",
      "isCianLayout": false
     }
    ],
    "phones": [
     {
      "countryCode": "+7",
      "number": "9390130215"
     }
    ],
    "publishTerms": {
     "terms": [
      {
       "services": [
        "top3"
       ],
       "days": 30,
       "type": "periodical",
       "tariffIdentificator": {
        "tariffId": 1388876,
        "tariffGridType": "packageTariff"
       }
      }
     ],
     "autoprolong": true
    },
    "flatType": "rooms",
    "totalArea": "36.2",
    "livingArea": "20.0",
    "kitchenArea": "5.0",
    "windowsViewType": "yard",
    "combinedWcsCount": 1,
    "repairType": "design",
    "hasFridge": true,
    "hasDishwasher": true,
    "hasWasher": true,
    "hasFurniture": true,
    "hasKitchenFurniture": true,
    "hasTv": true,
    "hasInternet": true,
    "hasBathtub": true,
    "hasShower": true,
    "childrenAllowed": true,
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
    "roomsCount": 1,
    "floorNumber": 8,
    "bargainTerms": {
     "price": 105000,
     "priceType": "all",
     "currency": "rur",
     "paymentPeriod": "monthly",
     "leaseTermType": "longTerm",
     "deposit": 105000,
     "utilitiesTerms": {
      "includedInPrice": true,
      "price": 0,
      "flowMetersNotIncludedInPrice": true
     },
     "includedOptions": [],
     "clientFee": 50,
     "agentFee": 50,
     "prices": {
      "rur": 105000,
      "usd": 1256,
      "eur": 1121
     },
     "depositPrices": {
      "rur": 105000,
      "usd": 1256,
      "eur": 1121
     },
     "utilitiesTermsPrices": {
      "rur": 0,
      "usd": 0,
      "eur": 0
     },
     "tags": []
    },
    "building": {
     "materialType": "monolith",
     "floorsCount": 34,
     "buildYear": 2021,
     "parking": {
      "type": "underground"
     },
     "ceilingHeight": "2.9",
     "totalArea": "36.2",
     "liftTypes": [],
     "cranageTypes": [],
     "houseMaterialType": "monolith"
    },
    "editDate": "2026-10-18T18:57:16.628759Z",
    "humanizedEditDate": "вчера, 18:57",
    "isInHiddenBase": false,
    "isObjectHidden": false,
    "isClosedVisibility": false,
    "videos": [],
    "demolishedInMoscowProgramm": false,
    "exportLinks": {
     "pdfUrl": "/export/pdf/rent/flat/330668412/",
     "docxUrl": "/export/docx/rent/flat/330668412/"
    },
    "added": "16 окт, 18:29",
    "valueAddedServices": {
     "isStandard": false,
     "isTop3": true,
     "isPremium": false
    },
    "promotion": {
     "isPerformanceVasPilot": false,
     "promotionDescription": "Топ",
     "isCpcAuction": false
    },
    "categoriesIds": [
     1000,
     1100,
     1110,
     1111
    ],
    "publicationDate": 1780337131,
    "creationDate": "2026-06-01T21:05:31.457",
    "recoveryLink": "/razmestit-obyavlenie/330668412/?isFromXML=1",
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
    "editPhoto": "/realty/add2.aspx?id=330668412&isFromXML=1",
    "newEdit": "/razmestit-obyavlenie/?realty_id=330668412&isFromXML=1",
    "certificate": "https://www.cian.ru/newobjects/cian/certification/get?announcementId=330668412",
    "edit": "/realty/add1.aspx?id=330668412&isFromXML=1",
    "similarOffersLink": "",
    "similarOffersCount": 0,
    "buildersIds": [
     6117
    ],
    "builderId": 6117,
    "isImported": true,
    "userConfirmedFix": false,
    "newbuilding": {
     "id": 7210,
     "name": "Невский",
     "house": {
      "isReliable": false,
      "isFinished": true,
      "finishDate": {
       "quarter": 1,
       "year": 2023
      },
      "id": 108188,
      "name": "Адмирала Макарова, 6Ак1 (Корпус 6)"
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
      "imagesCount": 42,
      "firstImageUrl": "https://images.cdn-cian.ru/images/44/696/411/nevskiy-moskva-jk-1146964429-6.jpg",
      "videosCount": 2,
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
    "isUnique": false,
    "isUniqueCheckDate": "2026-10-18",
    "isCianPartner": false,
    "externalId": "64243",
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
       "value": "36,2 м²",
       "label": "Общая площадь"
      },
      {
       "value": "20 м²",
       "label": "Жилая площадь"
      },
      {
       "value": "5 м²",
       "label": "Площадь кухни"
      },
      {
       "value": "2,9 м",
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
      }
     ]
    },
    {
     "title": "О доме",
     "id": "aboutBuilding",
     "features": [
      {
       "value": "2023",
       "label": "Год постройки"
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
       "value": "1",
       "label": "Подъезды"
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
    }
   ],
   "factoids": [
    {
     "title": "Общая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/size.svg",
     "value": "36,2 м²"
    },
    {
     "title": "Жилая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/plan.svg",
     "value": "20 м²"
    },
    {
     "title": "Площадь кухни",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/kitchen.svg",
     "value": "5 м²"
    },
    {
     "title": "Этаж",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/floor.svg",
     "value": "8 из 34"
    },
    {
     "title": "Год постройки",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/build_year.svg",
     "value": "2021"
    }
   ],
   "priceChanges": [
    {
     "changeTime": "2026-09-15T17:16:44.649473Z",
     "priceData": {
      "currency": "rur",
      "price": 105000,
      "paymentPeriod": "monthly"
     }
    },
    {
     "changeTime": "2026-06-01T18:05:32.575854Z",
     "priceData": {
      "currency": "rur",
      "price": 110000,
      "paymentPeriod": "monthly"
     }
    }
   ],
   "bti": {
    "houseData": {
     "yearRelease": 2023,
     "houseMaterialType": "monolith",
     "floorMax": 34,
     "entrances": 1,
     "flatCount": 396,
     "isEmergency": false,
     "demolishedInMoscowProgramm": false,
     "houseHeatSupplyType": "central",
     "houseOverhaulFundType": "unknown",
     "houseGasSupplyType": "without",
     "houseOverlapType": "concrete",
     "lifts": 4
    }
   },
   "stats": {
    "totalViewsFormattedString": "544 просмотра, 14 за сегодня"
   },
   "priceInfo": null,
   "serp": {
    "id": 330668412,
    "category": "flatRent",
    "dealType": "rent",
    "bargainTerms": {
     "mortgageAllowed": null,
     "paymentPeriod": "monthly",
     "priceForWorkplace": null,
     "leaseTermType": "longTerm",
     "vatType": null,
     "currency": "rur",
     "clientFee": 50,
     "price": 105000,
     "tags": [],
     "priceRur": 105000,
     "deposit": 105000,
     "vatPrice": null,
     "leaseType": null,
     "agentBonus": null,
     "bargainAllowed": null,
     "priceType": "all",
     "agentFee": 50,
     "saleType": null,
     "tax": null,
     "utilitiesTerms": {
      "flowMetersNotIncludedInPrice": true,
      "includedInPrice": true,
      "price": 0
     }
    },
    "geo": {
     "buildingAddress": null,
     "countryId": 138,
     "undergrounds": [
      {
       "isDefault": true,
       "id": 29,
       "releaseYear": null,
       "cianId": null,
       "name": "Водный стадион",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=29&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "lineId": 3,
       "transportType": "walk",
       "time": 7,
       "lineColor": "00701A",
       "underConstruction": false,
       "lineType": null
      },
      {
       "isDefault": null,
       "id": 293,
       "releaseYear": null,
       "cianId": null,
       "name": "Балтийская",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=293&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "lineId": 22,
       "transportType": "walk",
       "time": 18,
       "lineColor": "FA6F9E",
       "underConstruction": false,
       "lineType": "mck"
      },
      {
       "isDefault": null,
       "id": 30,
       "releaseYear": null,
       "cianId": null,
       "name": "Войковская",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=30&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "lineId": 3,
       "transportType": "transport",
       "time": 5,
       "lineColor": "00701A",
       "underConstruction": false,
       "lineType": null
      }
     ],
     "highways": [],
     "districts": [
      {
       "geoType": "district",
       "type": "raion",
       "title": "р-н Войковский",
       "locationId": 1,
       "id": 26,
       "name": "Войковский",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=26&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "parentId": 5,
       "fullName": "р-н Войковский"
      },
      {
       "geoType": "district",
       "type": "okrug",
       "title": "САО",
       "locationId": 1,
       "id": 5,
       "name": "САО",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=5&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "parentId": null,
       "fullName": "САО"
      }
     ],
     "jk": {
      "displayName": "ЖК «Невский»",
      "id": 7210,
      "developer": null,
      "fullUrl": "https://zhk-nevskiy-i.cian.ru/",
      "name": "Невский",
      "webSiteUrl": "https://new.krost.ru/projects/nevskij",
      "gaGeo": {
       "oblId": 1,
       "moId": 0,
       "cityId": 1
      },
      "webSiteUrlUtm": "https://new.krost.ru/projects/nevskij?utm_source=cian&utm_medium=kartochka_cian&utm_campaign=7210",
      "house": {
       "id": 108188,
       "name": "Адмирала Макарова, 6Ак1 (Корпус 6)"
      }
     },
     "railways": [
      {
       "geoType": "railway",
       "directionIds": [
        18
       ],
       "id": 731,
       "name": "Ленинградская",
       "distance": 3,
       "travelType": "byCar",
       "time": 4,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=731&type=4"
      },
      {
       "geoType": "railway",
       "directionIds": [
        18
       ],
       "id": 722,
       "name": "Красный Балтиец",
       "distance": 4,
       "travelType": "byCar",
       "time": 6,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=722&type=4"
      },
      {
       "geoType": "railway",
       "directionIds": [
        18
       ],
       "id": 739,
       "name": "Покровское-Стрешнево",
       "distance": 6,
       "travelType": "byCar",
       "time": 8,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=739&type=4"
      }
     ],
     "coordinates": {
      "lat": 55.836792,
      "lng": 37.491934
     },
     "userInput": "Москва, улица Адмирала Макарова, 6Ак1",
     "address": [
      {
       "geoType": "location",
       "type": "location",
       "shortName": "Москва",
       "title": "Москва",
       "id": 1,
       "name": "Москва",
       "isFormingAddress": true,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&region=1&type=4",
       "locationTypeId": 1,
       "fullName": "Москва"
      },
      {
       "geoType": "district",
       "type": "okrug",
       "shortName": "САО",
       "title": "САО",
       "id": 5,
       "name": "САО",
       "isFormingAddress": null,
       "qs": "currency=2&deal_type=rent&district%5B0%5D=5&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "locationTypeId": null,
       "fullName": "САО"
      },
      {
       "geoType": "district",
       "type": "raion",
       "shortName": "р-н Войковский",
       "title": "р-н Войковский",
       "id": 26,
       "name": "Войковский",
       "isFormingAddress": null,
       "qs": "currency=2&deal_type=rent&district%5B0%5D=26&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "locationTypeId": null,
       "fullName": "р-н Войковский"
      },
      {
       "geoType": "underground",
       "type": "metro",
       "shortName": "м. Водный стадион",
       "title": "м. Водный стадион",
       "id": 29,
       "name": "Водный стадион",
       "isFormingAddress": null,
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=29&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "locationTypeId": null,
       "fullName": "м. Водный стадион"
      },
      {
       "geoType": "street",
       "type": "street",
       "shortName": "ул. Адмирала Макарова",
       "title": "улица Адмирала Макарова",
       "id": 1421,
       "name": "Адмирала Макарова",
       "isFormingAddress": true,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&street%5B0%5D=1421&type=4",
       "locationTypeId": null,
       "fullName": "улица Адмирала Макарова"
      },
      {
       "geoType": "house",
       "type": "house",
       "shortName": "6Ак1",
       "title": "6Ак1",
       "id": 844742,
       "name": "6Ак1",
       "isFormingAddress": true,
       "qs": "currency=2&deal_type=rent&engine_version=2&house%5B0%5D=844742&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "locationTypeId": null,
       "fullName": "6Ак1"
      }
     ],
     "sortedGeoIds": [
      {
       "type": "underground",
       "id": 29
      },
      {
       "type": "underground",
       "id": 293
      },
      {
       "type": "underground",
       "id": 30
      },
      {
       "type": "railway",
       "id": 731
      },
      {
       "type": "railway",
       "id": 722
      },
      {
       "type": "railway",
       "id": 739
      },
      {
       "type": "district",
       "id": 26
      },
      {
       "type": "district",
       "id": 5
      }
     ]
    },
    "building": {
     "deadline": null,
     "type": null,
     "parking": {
      "isAvailable": null,
      "type": "underground",
      "isFree": null,
      "priceMonthly": null,
      "priceEntry": null,
      "currency": null,
      "purposeType": null,
      "locationType": null,
      "placesCount": null
     },
     "accessType": null,
     "passengerLiftsCount": null,
     "materialType": "monolith",
     "heatingType": null,
     "classType": null,
     "floorsCount": 34,
     "buildYear": 2021,
     "cargoLiftsCount": null
    },
    "roomsCount": 1,
    "totalArea": "36.2",
    "floorNumber": 8,
    "flatType": "rooms",
    "title": null,
    "description": "Id 64243. Впервые сдается 1 комнатная квартира на длительный срок. ЖК бизнес-класса \"Невский\". В квартире выполнен качественный дизайнерский ремонт, есть вся необходимая техника для комфортной жизни.\n1) вся мебель встроенная: посудомоечная машина, стиральная машина, холодильник, микроволновка, духовка\n2) очень много мест для хранения\nШкафы высотой 3 метра, отдельное место под диваном.  \n3)сохранена высота потолков, высота потолков в чистовом варианте 2,9 дает ощущение большого пространства и воздушности в квартире. \n( Студентов и кандидатов с животными не рассматриваем! )\n\nРайон старой Москвы с развитой инфраструктурой, большим количеством школ, детских садов, парков, тц Водный и Метрополис в шаговой доступности, яхт-клуб.\nВ пешей доступности 4 парка: Дружба, Покровское -Стрешнево, Головинские пруды, новый Парк Северного речного вокзала.\nВ шаговой доступности от метро Водный стадион, МЦК Балтийская.\n\nРассматриваем арендаторов порядочных на длительный срок от года.\nЗвоните записывайтесь оперативный показ ключи на руках!",
    "formattedFullPrice": "105 000 ₽/мес.",
    "formattedFullInfo": "1-комн.кв.  ·  36,2 м²  ·  8/34 этаж",
    "formattedAdditionalInfo": "Залог 105 000 ₽, комиссия 50%(agent_fee), на длительный срок",
    "photos": [
     {
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2892466991-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2892466991-2.jpg",
      "isDefault": false,
      "id": 2892466991,
      "fullUrl": "https://images.cdn-cian.ru/images/2892466991-1.jpg",
      "rotateDegree": null,
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2892466991-3.jpg"
     },
     {
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2892466997-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2892466997-2.jpg",
      "isDefault": false,
      "id": 2892466997,
      "fullUrl": "https://images.cdn-cian.ru/images/2892466997-1.jpg",
      "rotateDegree": null,
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2892466997-3.jpg"
     },
     {
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2892467005-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2892467005-2.jpg",
      "isDefault": false,
      "id": 2892467005,
      "fullUrl": "https://images.cdn-cian.ru/images/2892467005-1.jpg",
      "rotateDegree": null,
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2892467005-3.jpg"
     },
     {
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2892467039-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2892467039-2.jpg",
      "isDefault": false,
      "id": 2892467039,
      "fullUrl": "https://images.cdn-cian.ru/images/2892467039-1.jpg",
      "rotateDegree": null,
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2892467039-3.jpg"
     },
     {
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2892467042-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2892467042-2.jpg",
      "isDefault": false,
      "id": 2892467042,
      "fullUrl": "https://images.cdn-cian.ru/images/2892467042-1.jpg",
      "rotateDegree": null,
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2892467042-3.jpg"
     },
     {
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2892467033-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2892467033-2.jpg",
      "isDefault": false,
      "id": 2892467033,
      "fullUrl": "https://images.cdn-cian.ru/images/2892467033-1.jpg",
      "rotateDegree": null,
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2892467033-3.jpg"
     },
     {
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2892467014-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2892467014-2.jpg",
      "isDefault": false,
      "id": 2892467014,
      "fullUrl": "https://images.cdn-cian.ru/images/2892467014-1.jpg",
      "rotateDegree": null,
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2892467014-3.jpg"
     },
     {
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2892467026-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2892467026-2.jpg",
      "isDefault": false,
      "id": 2892467026,
      "fullUrl": "https://images.cdn-cian.ru/images/2892467026-1.jpg",
      "rotateDegree": null,
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2892467026-3.jpg"
     },
     {
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2892467049-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2892467049-2.jpg",
      "isDefault": false,
      "id": 2892467049,
      "fullUrl": "https://images.cdn-cian.ru/images/2892467049-1.jpg",
      "rotateDegree": null,
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2892467049-3.jpg"
     },
     {
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2892467054-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2892467054-2.jpg",
      "isDefault": false,
      "id": 2892467054,
      "fullUrl": "https://images.cdn-cian.ru/images/2892467054-1.jpg",
      "rotateDegree": null,
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2892467054-3.jpg"
     },
     {
      "thumbnail2Url": "https://images.cdn-cian.ru/images/2892467062-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/2892467062-2.jpg",
      "isDefault": false,
      "id": 2892467062,
      "fullUrl": "https://images.cdn-cian.ru/images/2892467062-1.jpg",
      "rotateDegree": null,
      "isLayout": null,
      "miniUrl": "https://images.cdn-cian.ru/images/2892467062-3.jpg"
     }
    ]
   },
   "files": [
    {
     "id": 2892466991,
     "isDefault": false,
     "full": "330668412-1.webp",
     "mini": "330668412-1m.webp"
    },
    {
     "id": 2892466997,
     "isDefault": false,
     "full": "330668412-2.webp",
     "mini": "330668412-2m.webp"
    },
    {
     "id": 2892467005,
     "isDefault": false,
     "full": "330668412-3.webp",
     "mini": "330668412-3m.webp"
    },
    {
     "id": 2892467039,
     "isDefault": false,
     "full": "330668412-4.webp",
     "mini": "330668412-4m.webp"
    },
    {
     "id": 2892467042,
     "isDefault": false,
     "full": "330668412-5.webp",
     "mini": "330668412-5m.webp"
    }
   ]
  },
  {
   "source": "https://www.cian.ru/rent/flat/334969938/",
   "seenAt": "2026-10-19T11:52:26.205Z",
   "offer": {
    "category": "flatRent",
    "status": "published",
    "dealType": "rent",
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
       "url": "https://www.cian.ru/snyat-kvartiru/"
      },
      {
       "fullName": "САО",
       "id": 5,
       "locationTypeId": -1,
       "name": "САО",
       "shortName": "САО",
       "type": "okrug",
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-sao-045/"
      },
      {
       "fullName": "район Сокол",
       "id": 35,
       "locationTypeId": -1,
       "name": "Сокол",
       "shortName": "р-н Сокол",
       "type": "raion",
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-sokol-0435/"
      },
      {
       "fullName": "Балтийская улица",
       "id": 644,
       "locationTypeId": -1,
       "name": "Балтийская",
       "shortName": "Балтийская ул.",
       "type": "street",
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-baltiyskaya-ulica-02644/"
      },
      {
       "fullName": "15",
       "id": 1700653,
       "locationTypeId": -1,
       "name": "15",
       "shortName": "15",
       "type": "house",
       "url": "https://www.cian.ru/cat.php?deal_type=rent&engine_version=2&house%5B0%5D=1700653&offer_type=flat&type=4"
      }
     ],
     "coordinates": {
      "lat": 55.811063,
      "lng": 37.514652
     },
     "highways": [],
     "railways": [
      {
       "id": 722,
       "directionIds": [
        18
       ],
       "distance": "1.0",
       "time": 19,
       "name": "Красный Балтиец",
       "travelType": "byFoot"
      },
      {
       "id": 731,
       "directionIds": [
        18
       ],
       "distance": "2.0",
       "time": 3,
       "name": "Ленинградская",
       "travelType": "byCar"
      },
      {
       "id": 731,
       "directionIds": [
        18
       ],
       "distance": "2.0",
       "time": 24,
       "name": "Ленинградская",
       "travelType": "byFoot"
      },
      {
       "id": 714,
       "directionIds": [
        18
       ],
       "distance": "2.0",
       "time": 34,
       "name": "Гражданская",
       "travelType": "byFoot"
      },
      {
       "id": 722,
       "directionIds": [
        18
       ],
       "distance": "3.0",
       "time": 5,
       "name": "Красный Балтиец",
       "travelType": "byCar"
      },
      {
       "id": 714,
       "directionIds": [
        18
       ],
       "distance": "7.0",
       "time": 12,
       "name": "Гражданская",
       "travelType": "byCar"
      }
     ],
     "undergrounds": [
      {
       "id": 116,
       "name": "Сокол",
       "lineColor": "00701A",
       "travelType": "walk",
       "travelTime": 10,
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-metro-sokol-116/",
       "underConstruction": false
      },
      {
       "id": 423,
       "name": "Красный Балтиец",
       "lineColor": "BD748F",
       "travelType": "walk",
       "travelTime": 13,
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-metro-krasnyy-baltiec-423/",
       "underConstruction": false,
       "lineType": "mcd2"
      },
      {
       "id": 9,
       "name": "Аэропорт",
       "lineColor": "00701A",
       "travelType": "walk",
       "travelTime": 23,
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-metro-aeroport-9/",
       "underConstruction": false
      }
     ]
    },
    "id": 334969938,
    "objectGuid": "f18d0bf1-a8dd-4564-aec0-f25434666c00",
    "cianId": 334969938,
    "userId": 81831610,
    "publishedUserId": 81831610,
    "cianUserId": 81831610,
    "isByHomeowner": false,
    "description": "Предлагаем в аренду стильные апартаменты-студию площадью 28 кв. м на 11 этаже 14-этажного дома. Дом расположен в шаговой доступности от метро \"Сокол\" — всего 6-8 минут пешком. Идеальное решение для тех, кто ценит комфорт и удобство городской жизни.\n\nАпартаменты недавно прошли евроремонт, поэтому выглядят современно и свежо. В студии установлена вся необходимая техника: кондиционер, холодильник, телевизор, стиральная и посудомоечная машины. В комнате и на кухне есть мебель, поэтому можно сразу заезжать и жить. Просторный совмещенный санузел оборудован ванной.\n\n\nВокруг дома развитая инфраструктура: в шаговой доступности школы, детские сады, клиники и магазины. Это идеальное место для комфортного проживания в городе.\n\nМы предлагаем удобные условия аренды с возможностью долгосрочного проживания. Заинтересовались? Приезжайте посмотреть апартаменты вживую и убедиться в их уюте и удобстве. Звоните и записывайтесь на просмотр уже сегодня! Оперативный показ. Заселение день в день.",
    "photos": [
     {
      "id": 2986170265,
      "isDefault": true,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170265-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170265-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170265-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170265-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986170268,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170268-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170268-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170268-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170268-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986170244,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170244-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170244-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170244-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170244-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2988269561,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2988269561-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2988269561-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2988269561-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2988269561-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986170241,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170241-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170241-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170241-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170241-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986170239,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170239-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170239-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170239-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170239-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986170243,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170243-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170243-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170243-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170243-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986170234,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170234-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170234-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170234-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170234-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986170233,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170233-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170233-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170233-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170233-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986170235,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170235-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170235-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170235-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170235-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986170342,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170342-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170342-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170342-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170342-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986170339,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170339-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170339-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170339-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170339-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986170273,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170273-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170273-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170273-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170273-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986170274,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170274-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170274-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170274-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170274-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986170321,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170321-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170321-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170321-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170321-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986170324,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170324-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170324-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170324-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170324-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986170340,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170340-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170340-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170340-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170340-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986170276,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170276-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170276-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170276-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170276-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986170279,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170279-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170279-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170279-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170279-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2986170347,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170347-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170347-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170347-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170347-3.jpg",
      "isCianLayout": false
     }
    ],
    "phones": [
     {
      "countryCode": "+7",
      "number": "9804541962"
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
        "premium"
       ],
       "days": 30,
       "type": "periodical",
       "tariffIdentificator": {
        "tariffId": 1386102,
        "tariffGridType": "packageTariff"
       }
      }
     ],
     "autoprolong": true
    },
    "flatType": "studio",
    "roomType": "combined",
    "isApartments": true,
    "totalArea": "28.0",
    "loggiasCount": 0,
    "balconiesCount": 0,
    "separateWcsCount": 0,
    "combinedWcsCount": 1,
    "repairType": "euro",
    "hasPhone": true,
    "hasFridge": true,
    "hasDishwasher": true,
    "hasWasher": true,
    "hasFurniture": true,
    "hasKitchenFurniture": true,
    "hasConditioner": true,
    "hasTv": true,
    "hasInternet": true,
    "hasBathtub": true,
    "hasShower": false,
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
    "floorNumber": 11,
    "bargainTerms": {
     "price": 65000,
     "priceType": "all",
     "currency": "rur",
     "paymentPeriod": "monthly",
     "leaseTermType": "longTerm",
     "prepayMonths": 1,
     "deposit": 65000,
     "utilitiesTerms": {
      "includedInPrice": true,
      "price": 0,
      "flowMetersNotIncludedInPrice": true
     },
     "includedOptions": [],
     "clientFee": 45,
     "agentFee": 45,
     "prices": {
      "rur": 65000,
      "usd": 778,
      "eur": 694
     },
     "depositPrices": {
      "rur": 65000,
      "usd": 778,
      "eur": 694
     },
     "utilitiesTermsPrices": {
      "rur": 0,
      "usd": 0,
      "eur": 0
     },
     "tags": []
    },
    "building": {
     "floorsCount": 14,
     "totalArea": "28.0",
     "liftTypes": [],
     "cranageTypes": [],
     "passengerLiftsCount": 0,
     "cargoLiftsCount": 0
    },
    "editDate": "2026-10-18T20:26:35.894244Z",
    "humanizedEditDate": "вчера, 20:26",
    "isInHiddenBase": false,
    "isObjectHidden": false,
    "isClosedVisibility": false,
    "videos": [],
    "exportLinks": {
     "pdfUrl": "/export/pdf/rent/flat/334969938/",
     "docxUrl": "/export/docx/rent/flat/334969938/"
    },
    "passengerLiftsCount": 0,
    "cargoLiftsCount": 0,
    "added": "17 окт, 20:24",
    "valueAddedServices": {
     "isStandard": false,
     "isTop3": false,
     "isPremium": true
    },
    "promotion": {
     "isPerformanceVasPilot": false,
     "promotionDescription": "Премиум",
     "isCpcAuction": false
    },
    "categoriesIds": [
     1000,
     1100,
     1110,
     1111
    ],
    "publicationDate": 1791984782,
    "creationDate": "2026-10-14T16:33:02.887",
    "recoveryLink": "/razmestit-obyavlenie/334969938/",
    "trackingData": {
     "moId": 0,
     "oblId": 1,
     "cityId": 1,
     "fbRegion": "Москва",
     "fbCity": "Москва"
    },
    "editPhoto": "/realty/add2.aspx?id=334969938",
    "newEdit": "/razmestit-obyavlenie/?realty_id=334969938",
    "certificate": "https://www.cian.ru/newobjects/cian/certification/get?announcementId=334969938",
    "edit": "/realty/add1.aspx?id=334969938",
    "similarOffersLink": "",
    "similarOffersCount": 0,
    "buildersIds": [],
    "isImported": false,
    "userConfirmedFix": false,
    "timezone": 3,
    "isEnabledCallTracking": true,
    "callTrackingProvider": "mts",
    "isRentByParts": false,
    "isDuplicate": false,
    "userTrust": "notInvolved",
    "userTrustLevel": "notInvolved",
    "showWarningMessage": false,
    "moderationInfo": {
     "showContactWarningMessage": false
    },
    "isUnique": false,
    "isUniqueCheckDate": "2026-10-18",
    "isCianPartner": false,
    "isIllegalConstruction": false,
    "amenities": [],
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
    },
    "demolishedInMoscowProgramm": false
   },
   "features": [
    {
     "title": "О квартире",
     "id": "aboutFlat",
     "features": [
      {
       "value": "Апартаменты",
       "label": "Тип жилья"
      },
      {
       "value": "28 м²",
       "label": "Общая площадь"
      },
      {
       "value": "Смежная",
       "label": "Планировка"
      },
      {
       "value": "1 совмещенный",
       "label": "Санузел"
      },
      {
       "value": "Евроремонт",
       "label": "Ремонт"
      }
     ]
    }
   ],
   "factoids": [
    {
     "title": "Общая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/size.svg",
     "value": "28 м²"
    },
    {
     "title": "Этаж",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/floor.svg",
     "value": "11 из 14"
    }
   ],
   "priceChanges": [
    {
     "changeTime": "2026-10-17T17:20:08.996579Z",
     "priceData": {
      "currency": "rur",
      "price": 65000,
      "paymentPeriod": "monthly"
     }
    },
    {
     "changeTime": "2026-10-14T13:35:03.022803Z",
     "priceData": {
      "currency": "rur",
      "price": 70000,
      "paymentPeriod": "monthly"
     }
    }
   ],
   "bti": null,
   "stats": {
    "totalViewsFormattedString": "77 просмотров, 14 за сегодня"
   },
   "priceInfo": null,
   "serp": {
    "id": 334969938,
    "category": "flatRent",
    "dealType": "rent",
    "bargainTerms": {
     "tax": null,
     "paymentPeriod": "monthly",
     "saleType": null,
     "utilitiesTerms": {
      "flowMetersNotIncludedInPrice": true,
      "includedInPrice": true,
      "price": 0
     },
     "vatType": null,
     "priceType": "all",
     "agentFee": 45,
     "priceForWorkplace": null,
     "tags": [],
     "leaseTermType": "longTerm",
     "mortgageAllowed": null,
     "clientFee": 45,
     "price": 65000,
     "agentBonus": null,
     "currency": "rur",
     "deposit": 65000,
     "bargainAllowed": null,
     "priceRur": 65000,
     "vatPrice": null,
     "leaseType": null
    },
    "geo": {
     "countryId": 138,
     "address": [
      {
       "name": "Москва",
       "geoType": "location",
       "isFormingAddress": true,
       "type": "location",
       "fullName": "Москва",
       "locationTypeId": 1,
       "shortName": "Москва",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&region=1&type=4",
       "title": "Москва",
       "id": 1
      },
      {
       "name": "САО",
       "geoType": "district",
       "isFormingAddress": null,
       "type": "okrug",
       "fullName": "САО",
       "locationTypeId": null,
       "shortName": "САО",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=5&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "САО",
       "id": 5
      },
      {
       "name": "Сокол",
       "geoType": "district",
       "isFormingAddress": null,
       "type": "raion",
       "fullName": "р-н Сокол",
       "locationTypeId": null,
       "shortName": "р-н Сокол",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=35&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "р-н Сокол",
       "id": 35
      },
      {
       "name": "Сокол",
       "geoType": "underground",
       "isFormingAddress": null,
       "type": "metro",
       "fullName": "м. Сокол",
       "locationTypeId": null,
       "shortName": "м. Сокол",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=116&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "title": "м. Сокол",
       "id": 116
      },
      {
       "name": "Балтийская",
       "geoType": "street",
       "isFormingAddress": true,
       "type": "street",
       "fullName": "Балтийская улица",
       "locationTypeId": null,
       "shortName": "Балтийская ул.",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&street%5B0%5D=644&type=4",
       "title": "Балтийская улица",
       "id": 644
      },
      {
       "name": "15",
       "geoType": "house",
       "isFormingAddress": true,
       "type": "house",
       "fullName": "15",
       "locationTypeId": null,
       "shortName": "15",
       "qs": "currency=2&deal_type=rent&engine_version=2&house%5B0%5D=1700653&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "15",
       "id": 1700653
      }
     ],
     "jk": null,
     "coordinates": {
      "lng": 37.514652,
      "lat": 55.811063
     },
     "buildingAddress": null,
     "userInput": "Россия, Москва, Балтийская улица, 15",
     "districts": [
      {
       "name": "Сокол",
       "geoType": "district",
       "parentId": 5,
       "type": "raion",
       "locationId": 1,
       "fullName": "р-н Сокол",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=35&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "р-н Сокол",
       "id": 35
      },
      {
       "name": "САО",
       "geoType": "district",
       "parentId": null,
       "type": "okrug",
       "locationId": 1,
       "fullName": "САО",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=5&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "САО",
       "id": 5
      }
     ],
     "highways": [],
     "railways": [
      {
       "name": "Красный Балтиец",
       "geoType": "railway",
       "travelType": "byFoot",
       "directionIds": [
        18
       ],
       "distance": 1,
       "time": 19,
       "id": 722,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=722&type=4"
      },
      {
       "name": "Ленинградская",
       "geoType": "railway",
       "travelType": "byCar",
       "directionIds": [
        18
       ],
       "distance": 2,
       "time": 3,
       "id": 731,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=731&type=4"
      },
      {
       "name": "Гражданская",
       "geoType": "railway",
       "travelType": "byCar",
       "directionIds": [
        18
       ],
       "distance": 7,
       "time": 12,
       "id": 714,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=714&type=4"
      }
     ],
     "undergrounds": [
      {
       "name": "Сокол",
       "releaseYear": null,
       "isDefault": true,
       "cianId": null,
       "transportType": "walk",
       "underConstruction": false,
       "lineColor": "00701A",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=116&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "time": 10,
       "lineId": 3,
       "id": 116,
       "lineType": null
      },
      {
       "name": "Красный Балтиец",
       "releaseYear": null,
       "isDefault": false,
       "cianId": null,
       "transportType": "walk",
       "underConstruction": false,
       "lineColor": "BD748F",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=423&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "time": 13,
       "lineId": 32,
       "id": 423,
       "lineType": "mcd2"
      },
      {
       "name": "Аэропорт",
       "releaseYear": null,
       "isDefault": false,
       "cianId": null,
       "transportType": "transport",
       "underConstruction": false,
       "lineColor": "00701A",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=9&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "time": 6,
       "lineId": 3,
       "id": 9,
       "lineType": null
      }
     ],
     "sortedGeoIds": [
      {
       "type": "underground",
       "id": 116
      },
      {
       "type": "underground",
       "id": 423
      },
      {
       "type": "underground",
       "id": 9
      },
      {
       "type": "railway",
       "id": 722
      },
      {
       "type": "railway",
       "id": 731
      },
      {
       "type": "railway",
       "id": 714
      },
      {
       "type": "district",
       "id": 35
      },
      {
       "type": "district",
       "id": 5
      }
     ]
    },
    "building": {
     "parking": null,
     "type": null,
     "passengerLiftsCount": 0,
     "deadline": null,
     "heatingType": null,
     "materialType": null,
     "classType": null,
     "cargoLiftsCount": 0,
     "buildYear": null,
     "floorsCount": 14,
     "accessType": null
    },
    "roomsCount": null,
    "totalArea": "28.0",
    "floorNumber": 11,
    "flatType": "studio",
    "title": null,
    "description": "Предлагаем в аренду стильные апартаменты-студию площадью 28 кв. м на 11 этаже 14-этажного дома. Дом расположен в шаговой доступности от метро \"Сокол\" — всего 6-8 минут пешком. Идеальное решение для тех, кто ценит комфорт и удобство городской жизни.\n\nАпартаменты недавно прошли евроремонт, поэтому выглядят современно и свежо. В студии установлена вся необходимая техника: кондиционер, холодильник, телевизор, стиральная и посудомоечная машины. В комнате и на кухне есть мебель, поэтому можно сразу заезжать и жить. Просторный совмещенный санузел оборудован ванной.\n\n\nВокруг дома развитая инфраструктура: в шаговой доступности школы, детские сады, клиники и магазины. Это идеальное место для комфортного проживания в городе.\n\nМы предлагаем удобные условия аренды с возможностью долгосрочного проживания. Заинтересовались? Приезжайте посмотреть апартаменты вживую и убедиться в их уюте и удобстве. Звоните и записывайтесь на просмотр уже сегодня! Оперативный показ. Заселение день в день.",
    "formattedFullPrice": "65 000 ₽/мес.",
    "formattedFullInfo": "Студия  ·  28 м²  ·  11/14 этаж",
    "formattedAdditionalInfo": "Залог 65 000 ₽, комиссия 45%(agent_fee), предоплата 1 месяц, на длительный срок",
    "photos": [
     {
      "isDefault": true,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170265-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170265-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170265-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170265-2.jpg",
      "id": 2986170265
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170268-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170268-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170268-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170268-2.jpg",
      "id": 2986170268
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170244-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170244-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170244-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170244-2.jpg",
      "id": 2986170244
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2988269561-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2988269561-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2988269561-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2988269561-2.jpg",
      "id": 2988269561
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170241-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170241-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170241-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170241-2.jpg",
      "id": 2986170241
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170239-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170239-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170239-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170239-2.jpg",
      "id": 2986170239
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170243-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170243-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170243-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170243-2.jpg",
      "id": 2986170243
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170234-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170234-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170234-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170234-2.jpg",
      "id": 2986170234
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170233-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170233-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170233-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170233-2.jpg",
      "id": 2986170233
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170235-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170235-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170235-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170235-2.jpg",
      "id": 2986170235
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170342-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170342-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170342-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170342-2.jpg",
      "id": 2986170342
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170339-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170339-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170339-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170339-2.jpg",
      "id": 2986170339
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170273-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170273-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170273-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170273-2.jpg",
      "id": 2986170273
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170274-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170274-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170274-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170274-2.jpg",
      "id": 2986170274
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170321-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170321-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170321-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170321-2.jpg",
      "id": 2986170321
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170324-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170324-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170324-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170324-2.jpg",
      "id": 2986170324
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170340-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170340-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170340-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170340-2.jpg",
      "id": 2986170340
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170276-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170276-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170276-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170276-2.jpg",
      "id": 2986170276
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170279-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170279-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170279-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170279-2.jpg",
      "id": 2986170279
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170347-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170347-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170347-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-baltiyskaya-ulica-2986170347-2.jpg",
      "id": 2986170347
     }
    ]
   },
   "files": [
    {
     "id": 2986170265,
     "isDefault": true,
     "full": "334969938-1.webp",
     "mini": "334969938-1m.webp"
    },
    {
     "id": 2986170268,
     "isDefault": false,
     "full": "334969938-2.webp",
     "mini": "334969938-2m.webp"
    },
    {
     "id": 2986170244,
     "isDefault": false,
     "full": "334969938-3.webp",
     "mini": "334969938-3m.webp"
    },
    {
     "id": 2988269561,
     "isDefault": false,
     "full": "334969938-4.webp",
     "mini": "334969938-4m.webp"
    },
    {
     "id": 2986170241,
     "isDefault": false,
     "full": "334969938-5.webp",
     "mini": "334969938-5m.webp"
    }
   ]
  },
  {
   "source": "https://www.cian.ru/rent/flat/316502961/",
   "seenAt": "2026-10-19T11:52:27.777Z",
   "offer": {
    "category": "flatRent",
    "status": "published",
    "dealType": "rent",
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
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru/"
      },
      {
       "fullName": "САО",
       "id": 5,
       "locationTypeId": -1,
       "name": "САО",
       "shortName": "САО",
       "type": "okrug",
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-sao-045/"
      },
      {
       "fullName": "район Беговой",
       "id": 24,
       "locationTypeId": -1,
       "name": "Беговой",
       "shortName": "р-н Беговой",
       "type": "raion",
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-begovoy-0424/"
      },
      {
       "fullName": "Ленинградский проспект",
       "id": 1348,
       "locationTypeId": -1,
       "name": "Ленинградский",
       "shortName": "Ленинградский просп.",
       "type": "street",
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-leningradskiy-prospekt-021348/"
      },
      {
       "fullName": "29к1",
       "id": 3844767,
       "locationTypeId": -1,
       "name": "29к1",
       "shortName": "29к1",
       "type": "house",
       "url": "https://www.cian.ru/cat.php?deal_type=rent&engine_version=2&house%5B0%5D=3844767&offer_type=flat&room1=1&type=4"
      }
     ],
     "coordinates": {
      "lat": 55.785169,
      "lng": 37.564033
     },
     "highways": [],
     "jk": {
      "id": 8122,
      "name": "Царская площадь",
      "house": {
       "id": 7716,
       "name": "Ленинградский, 29к1"
      },
      "gaGeo": {
       "moId": 0,
       "oblId": 1,
       "cityId": 1
      },
      "fullUrl": "https://www.cian.ru/zhiloy-kompleks-carskaya-ploshcad-moskva-8122/",
      "fullUrlTemplate": "{request_scheme}://zhk-carskaya-ploshcad-i.{host}/"
     },
     "railways": [
      {
       "id": 694,
       "directionIds": [
        11
       ],
       "distance": "1.0",
       "time": 2,
       "name": "Москва (Белорусский вокзал)",
       "travelType": "byCar"
      },
      {
       "id": 694,
       "directionIds": [
        11
       ],
       "distance": "1.0",
       "time": 22,
       "name": "Москва (Белорусский вокзал)",
       "travelType": "byFoot"
      },
      {
       "id": 699,
       "directionIds": [
        11
       ],
       "distance": "2.0",
       "time": 3,
       "name": "Беговая",
       "travelType": "byCar"
      },
      {
       "id": 699,
       "directionIds": [
        11
       ],
       "distance": "2.0",
       "time": 24,
       "name": "Беговая",
       "travelType": "byFoot"
      },
      {
       "id": 689,
       "directionIds": [
        19
       ],
       "distance": "2.0",
       "time": 30,
       "name": "Москва (Савёловский вокзал)",
       "travelType": "byFoot"
      },
      {
       "id": 689,
       "directionIds": [
        19
       ],
       "distance": "6.0",
       "time": 10,
       "name": "Москва (Савёловский вокзал)",
       "travelType": "byCar"
      }
     ],
     "undergrounds": [
      {
       "id": 36,
       "name": "Динамо",
       "lineColor": "00701A",
       "travelType": "walk",
       "travelTime": 6,
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-metro-dinamo-36/",
       "underConstruction": false
      },
      {
       "id": 350,
       "name": "Петровский Парк",
       "lineColor": "7ACDCE",
       "travelType": "walk",
       "travelTime": 11,
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-metro-petrovskiy-park-350/",
       "underConstruction": false
      },
      {
       "id": 15,
       "name": "Белорусская",
       "lineColor": "00701A",
       "travelType": "walk",
       "travelTime": 18,
       "url": "https://www.cian.ru/snyat-1-komnatnuyu-kvartiru-moskva-metro-belorusskaya-15/",
       "underConstruction": false
      }
     ]
    },
    "id": 316502961,
    "objectGuid": "4ff7f8f0-50eb-4d5c-8cf2-98bef8c3800d",
    "cianId": 316502961,
    "userId": 52316761,
    "publishedUserId": 52316761,
    "cianUserId": 52316761,
    "isByHomeowner": false,
    "title": "Звоните! Показ Сегодня!",
    "description": "ЗВОНИТЕ, ПОКА ВАРИАНТ НЕ УШЕЛ! \nПросмотры и заселение возможны по договоренности! \nСдаётся ШИКАРНАЯ 1-комнатная квартира на ДЛИТЕЛЬНЫЙ СРОК!  Выполнен качественный ДИЗАЙНЕРСКИЙ ремонт, квартира оснащена всем необходимым для комфортного проживания:\n- кондиционер;\n- лоджия \n- теплые полы \n- стиральная машина;\n- посудомоечная машина;\n- духовой шкаф;\n- встроенная вытяжка;\n- холодильник.\n\n Полностью готова к проживанию, полностью укомплектована мебелью и техникой. Рассмотрим различный состав жильцов (обсуждается по телефону). Оперативный показ! Звоните! Спешите!\nПрезентабельные входные группы с отделкой мрамором и мебелью в холлах, лифтами Otis и 7-метровыми потолками. Территория комплекса закрыта для движения автомобилей, въезд в подземный паркинг строго через КПП. Круглосуточная охрана, 2-уровневый паркинг, красивый, внутренний двор, доступный только жителям дома. На территории комплекса расположены: фитнес-клуб Golds gym, ресторан высокой кухни Паризьен с фонтанами и летней верандой, красивые аллеи с качелями и зонами отдыха, площадка воркаута, детская площадка. Территория комплекса стала излюбленным местом для профессиональных фотосессий и киносъемок.",
    "photos": [
     {
      "id": 2459492806,
      "isDefault": true,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492806-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492806-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492806-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492806-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2459492808,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492808-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492808-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492808-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492808-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2459492821,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492821-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492821-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492821-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492821-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2459492819,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492819-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492819-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492819-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492819-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2459459884,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459459884-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459459884-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459459884-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459459884-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2459492826,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492826-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492826-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492826-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492826-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2459492825,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492825-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492825-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492825-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492825-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2459492801,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492801-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492801-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492801-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492801-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2459459890,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459459890-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459459890-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459459890-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459459890-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2459492820,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492820-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492820-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492820-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492820-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2459492807,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492807-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492807-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492807-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492807-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2459492824,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492824-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492824-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492824-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492824-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     },
     {
      "id": 2459492823,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492823-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492823-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492823-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492823-3.jpg",
      "isLayout": false,
      "isCianLayout": false
     }
    ],
    "phones": [
     {
      "countryCode": "+7",
      "number": "9684834928"
     },
     {
      "countryCode": "+7",
      "number": "9230722817"
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
        "paid"
       ],
       "days": 30,
       "type": "periodical",
       "tariffIdentificator": {
        "tariffId": 12023163,
        "tariffGridType": "servicePackageGroup"
       }
      }
     ],
     "autoprolong": true
    },
    "flatType": "rooms",
    "isApartments": false,
    "totalArea": "33.0",
    "loggiasCount": 1,
    "balconiesCount": 0,
    "separateWcsCount": 0,
    "combinedWcsCount": 1,
    "repairType": "design",
    "hasPhone": false,
    "hasFridge": true,
    "hasDishwasher": true,
    "hasWasher": true,
    "hasFurniture": true,
    "hasKitchenFurniture": true,
    "hasConditioner": true,
    "hasTv": true,
    "hasInternet": true,
    "hasBathtub": false,
    "hasShower": true,
    "childrenAllowed": true,
    "petsAllowed": true,
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
    "roomsCount": 1,
    "floorNumber": 5,
    "bargainTerms": {
     "price": 90000,
     "priceType": "all",
     "currency": "rur",
     "paymentPeriod": "monthly",
     "leaseTermType": "longTerm",
     "prepayMonths": 1,
     "deposit": 90000,
     "utilitiesTerms": {
      "includedInPrice": true,
      "price": 0,
      "flowMetersNotIncludedInPrice": true
     },
     "includedOptions": [],
     "clientFee": 50,
     "agentFee": 50,
     "prices": {
      "rur": 90000,
      "usd": 1077,
      "eur": 961
     },
     "depositPrices": {
      "rur": 90000,
      "usd": 1077,
      "eur": 961
     },
     "utilitiesTermsPrices": {
      "rur": 0,
      "usd": 0,
      "eur": 0
     },
     "tags": []
    },
    "building": {
     "floorsCount": 18,
     "parking": {
      "type": "underground"
     },
     "totalArea": "33.0",
     "liftTypes": [],
     "cranageTypes": [],
     "passengerLiftsCount": 1,
     "cargoLiftsCount": 1
    },
    "editDate": "2026-10-18T19:10:35.573850Z",
    "humanizedEditDate": "вчера, 19:10",
    "isInHiddenBase": false,
    "isObjectHidden": false,
    "isClosedVisibility": false,
    "videos": [],
    "demolishedInMoscowProgramm": false,
    "exportLinks": {
     "pdfUrl": "/export/pdf/rent/flat/316502961/",
     "docxUrl": "/export/docx/rent/flat/316502961/"
    },
    "passengerLiftsCount": 1,
    "cargoLiftsCount": 1,
    "added": "15 окт, 18:40",
    "valueAddedServices": {
     "isStandard": false,
     "isTop3": false,
     "isPremium": true
    },
    "promotion": {
     "isPerformanceVasPilot": false,
     "promotionDescription": "Премиум",
     "isCpcAuction": false
    },
    "categoriesIds": [
     1000,
     1100,
     1110,
     1111
    ],
    "publicationDate": 1745010811,
    "creationDate": "2025-04-19T00:13:31.803",
    "recoveryLink": "/razmestit-obyavlenie/316502961/",
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
    "editPhoto": "/realty/add2.aspx?id=316502961",
    "newEdit": "/razmestit-obyavlenie/?realty_id=316502961",
    "certificate": "https://www.cian.ru/newobjects/cian/certification/get?announcementId=316502961",
    "edit": "/realty/add1.aspx?id=316502961",
    "similarOffersLink": "",
    "similarOffersCount": 0,
    "buildersIds": [
     6008
    ],
    "builderId": 6008,
    "isImported": false,
    "userConfirmedFix": false,
    "newbuilding": {
     "id": 8122,
     "name": "Царская площадь",
     "house": {
      "isReliable": false,
      "isFinished": true,
      "finishDate": {
       "quarter": 3,
       "year": 2019
      },
      "id": 7716,
      "name": "Ленинградский, 29к1"
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
      "imagesCount": 16,
      "firstImageUrl": "https://images.cdn-cian.ru/images/31/050/701/carskaya-ploshcad-moskva-jk-1070501366-6.jpg",
      "videosCount": 1,
      "deadlineInfo": "Сдан"
     },
     "isReliable": false,
     "isTariffPremium": false
    },
    "timezone": 3,
    "isEnabledCallTracking": true,
    "callTrackingProvider": "beeline",
    "isRentByParts": false,
    "isDuplicate": false,
    "userTrust": "notInvolved",
    "userTrustLevel": "notInvolved",
    "showWarningMessage": false,
    "moderationInfo": {
     "showContactWarningMessage": false
    },
    "isUnique": false,
    "isUniqueCheckDate": "2026-10-18",
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
       "value": "33 м²",
       "label": "Общая площадь"
      },
      {
       "value": "1 совмещенный",
       "label": "Санузел"
      },
      {
       "value": "1 лоджия",
       "label": "Балкон/лоджия"
      },
      {
       "value": "Дизайнерский",
       "label": "Ремонт"
      }
     ]
    },
    {
     "title": "О доме",
     "id": "aboutBuilding",
     "features": [
      {
       "value": "2018",
       "label": "Год постройки"
      },
      {
       "value": "1 пассажирский, 1 грузовой",
       "label": "Количество лифтов"
      },
      {
       "value": "Железобетонные",
       "label": "Тип перекрытий"
      },
      {
       "value": "11",
       "label": "Подъезды"
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
    }
   ],
   "factoids": [
    {
     "title": "Общая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/size.svg",
     "value": "33 м²"
    },
    {
     "title": "Этаж",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/floor.svg",
     "value": "5 из 18"
    }
   ],
   "priceChanges": [
    {
     "changeTime": "2025-11-17T16:56:53.154606Z",
     "priceData": {
      "currency": "rur",
      "price": 90000,
      "paymentPeriod": "monthly"
     }
    },
    {
     "changeTime": "2025-11-07T12:14:44.597490Z",
     "priceData": {
      "currency": "rur",
      "price": 100000,
      "paymentPeriod": "monthly"
     }
    },
    {
     "changeTime": "2025-04-18T21:13:33.476930Z",
     "priceData": {
      "currency": "rur",
      "price": 90000,
      "paymentPeriod": "monthly"
     }
    }
   ],
   "bti": {
    "houseData": {
     "yearRelease": 2018,
     "houseMaterialType": "none",
     "floorMax": 18,
     "entrances": 11,
     "flatCount": 356,
     "isEmergency": false,
     "demolishedInMoscowProgramm": false,
     "houseHeatSupplyType": "central",
     "houseOverhaulFundType": "unknown",
     "houseGasSupplyType": "unknown",
     "houseOverlapType": "concrete",
     "lifts": 24
    }
   },
   "stats": {
    "totalViewsFormattedString": "3018 просмотров, 15 за сегодня"
   },
   "priceInfo": null,
   "serp": {
    "id": 316502961,
    "category": "flatRent",
    "dealType": "rent",
    "bargainTerms": {
     "mortgageAllowed": null,
     "paymentPeriod": "monthly",
     "priceForWorkplace": null,
     "leaseTermType": "longTerm",
     "vatType": null,
     "currency": "rur",
     "clientFee": 50,
     "price": 90000,
     "tags": [],
     "priceRur": 90000,
     "deposit": 90000,
     "vatPrice": null,
     "leaseType": null,
     "agentBonus": null,
     "bargainAllowed": null,
     "priceType": "all",
     "agentFee": 50,
     "saleType": null,
     "tax": null,
     "utilitiesTerms": {
      "flowMetersNotIncludedInPrice": true,
      "includedInPrice": true,
      "price": 0
     }
    },
    "geo": {
     "buildingAddress": null,
     "countryId": 138,
     "undergrounds": [
      {
       "isDefault": true,
       "id": 36,
       "releaseYear": null,
       "cianId": null,
       "name": "Динамо",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=36&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "lineId": 3,
       "transportType": "walk",
       "time": 6,
       "lineColor": "00701A",
       "underConstruction": false,
       "lineType": null
      },
      {
       "isDefault": false,
       "id": 350,
       "releaseYear": null,
       "cianId": null,
       "name": "Петровский Парк",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=350&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "lineId": 27,
       "transportType": "walk",
       "time": 11,
       "lineColor": "7ACDCE",
       "underConstruction": false,
       "lineType": null
      },
      {
       "isDefault": false,
       "id": 15,
       "releaseYear": null,
       "cianId": null,
       "name": "Белорусская",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=15&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "lineId": 3,
       "transportType": "walk",
       "time": 18,
       "lineColor": "00701A",
       "underConstruction": false,
       "lineType": null
      }
     ],
     "highways": [],
     "districts": [
      {
       "geoType": "district",
       "type": "raion",
       "title": "р-н Беговой",
       "locationId": 1,
       "id": 24,
       "name": "Беговой",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=24&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "parentId": 5,
       "fullName": "р-н Беговой"
      },
      {
       "geoType": "district",
       "type": "okrug",
       "title": "САО",
       "locationId": 1,
       "id": 5,
       "name": "САО",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=5&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "parentId": null,
       "fullName": "САО"
      }
     ],
     "jk": {
      "displayName": "ЖК «Царская площадь»",
      "id": 8122,
      "developer": null,
      "fullUrl": "https://zhk-carskaya-ploshcad-i.cian.ru/",
      "name": "Царская площадь",
      "webSiteUrl": null,
      "gaGeo": {
       "oblId": 1,
       "moId": 0,
       "cityId": 1
      },
      "webSiteUrlUtm": null,
      "house": {
       "id": 7716,
       "name": "Ленинградский, 29к1"
      }
     },
     "railways": [
      {
       "geoType": "railway",
       "directionIds": [
        11
       ],
       "id": 694,
       "name": "Москва (Белорусский вокзал)",
       "distance": 1,
       "travelType": "byCar",
       "time": 2,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=694&type=4"
      },
      {
       "geoType": "railway",
       "directionIds": [
        11
       ],
       "id": 699,
       "name": "Беговая",
       "distance": 2,
       "travelType": "byCar",
       "time": 3,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=699&type=4"
      },
      {
       "geoType": "railway",
       "directionIds": [
        19
       ],
       "id": 689,
       "name": "Москва (Савёловский вокзал)",
       "distance": 6,
       "travelType": "byCar",
       "time": 10,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=689&type=4"
      }
     ],
     "coordinates": {
      "lat": 55.785169,
      "lng": 37.564033
     },
     "userInput": "Россия, Москва, Ленинградский проспект, 29к1",
     "address": [
      {
       "geoType": "location",
       "type": "location",
       "shortName": "Москва",
       "title": "Москва",
       "id": 1,
       "name": "Москва",
       "isFormingAddress": true,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&region=1&type=4",
       "locationTypeId": 1,
       "fullName": "Москва"
      },
      {
       "geoType": "district",
       "type": "okrug",
       "shortName": "САО",
       "title": "САО",
       "id": 5,
       "name": "САО",
       "isFormingAddress": null,
       "qs": "currency=2&deal_type=rent&district%5B0%5D=5&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "locationTypeId": null,
       "fullName": "САО"
      },
      {
       "geoType": "district",
       "type": "raion",
       "shortName": "р-н Беговой",
       "title": "р-н Беговой",
       "id": 24,
       "name": "Беговой",
       "isFormingAddress": null,
       "qs": "currency=2&deal_type=rent&district%5B0%5D=24&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "locationTypeId": null,
       "fullName": "р-н Беговой"
      },
      {
       "geoType": "underground",
       "type": "metro",
       "shortName": "м. Динамо",
       "title": "м. Динамо",
       "id": 36,
       "name": "Динамо",
       "isFormingAddress": null,
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=36&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "locationTypeId": null,
       "fullName": "м. Динамо"
      },
      {
       "geoType": "street",
       "type": "street",
       "shortName": "Ленинградский просп.",
       "title": "Ленинградский проспект",
       "id": 1348,
       "name": "Ленинградский",
       "isFormingAddress": true,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&street%5B0%5D=1348&type=4",
       "locationTypeId": null,
       "fullName": "Ленинградский проспект"
      },
      {
       "geoType": "house",
       "type": "house",
       "shortName": "29к1",
       "title": "29к1",
       "id": 3844767,
       "name": "29к1",
       "isFormingAddress": true,
       "qs": "currency=2&deal_type=rent&engine_version=2&house%5B0%5D=3844767&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "locationTypeId": null,
       "fullName": "29к1"
      }
     ],
     "sortedGeoIds": [
      {
       "type": "underground",
       "id": 36
      },
      {
       "type": "underground",
       "id": 350
      },
      {
       "type": "underground",
       "id": 15
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
       "id": 24
      },
      {
       "type": "district",
       "id": 5
      }
     ]
    },
    "building": {
     "deadline": null,
     "type": null,
     "parking": {
      "isAvailable": null,
      "type": "underground",
      "isFree": null,
      "priceMonthly": null,
      "priceEntry": null,
      "currency": null,
      "purposeType": null,
      "locationType": null,
      "placesCount": null
     },
     "accessType": null,
     "passengerLiftsCount": 1,
     "materialType": null,
     "heatingType": null,
     "classType": null,
     "floorsCount": 18,
     "buildYear": null,
     "cargoLiftsCount": 1
    },
    "roomsCount": 1,
    "totalArea": "33.0",
    "floorNumber": 5,
    "flatType": "rooms",
    "title": "Звоните! Показ Сегодня!",
    "description": "ЗВОНИТЕ, ПОКА ВАРИАНТ НЕ УШЕЛ! \nПросмотры и заселение возможны по договоренности! \nСдаётся ШИКАРНАЯ 1-комнатная квартира на ДЛИТЕЛЬНЫЙ СРОК!  Выполнен качественный ДИЗАЙНЕРСКИЙ ремонт, квартира оснащена всем необходимым для комфортного проживания:\n- кондиционер;\n- лоджия \n- теплые полы \n- стиральная машина;\n- посудомоечная машина;\n- духовой шкаф;\n- встроенная вытяжка;\n- холодильник.\n\n Полностью готова к проживанию, полностью укомплектована мебелью и техникой. Рассмотрим различный состав жильцов (обсуждается по телефону). Оперативный показ! Звоните! Спешите!\nПрезентабельные входные группы с отделкой мрамором и мебелью в холлах, лифтами Otis и 7-метровыми потолками. Территория комплекса закрыта для движения автомобилей, въезд в подземный паркинг строго через КПП. Круглосуточная охрана, 2-уровневый паркинг, красивый, внутренний двор, доступный только жителям дома. На территории комплекса расположены: фитнес-клуб Golds gym, ресторан высокой кухни Паризьен с фонтанами и летней верандой, красивые аллеи с качелями и зонами отдыха, площадка воркаута, детская площадка. Территория комплекса стала излюбленным местом для профессиональных фотосессий и киносъемок.",
    "formattedFullPrice": "90 000 ₽/мес.",
    "formattedFullInfo": "1-комн.кв.  ·  33 м²  ·  5/18 этаж",
    "formattedAdditionalInfo": "Залог 90 000 ₽, комиссия 50%(agent_fee), предоплата 1 месяц, на длительный срок",
    "photos": [
     {
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492806-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492806-2.jpg",
      "isDefault": true,
      "id": 2459492806,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492806-1.jpg",
      "rotateDegree": null,
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492806-3.jpg"
     },
     {
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492808-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492808-2.jpg",
      "isDefault": false,
      "id": 2459492808,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492808-1.jpg",
      "rotateDegree": null,
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492808-3.jpg"
     },
     {
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492821-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492821-2.jpg",
      "isDefault": false,
      "id": 2459492821,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492821-1.jpg",
      "rotateDegree": null,
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492821-3.jpg"
     },
     {
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492819-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492819-2.jpg",
      "isDefault": false,
      "id": 2459492819,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492819-1.jpg",
      "rotateDegree": null,
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492819-3.jpg"
     },
     {
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459459884-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459459884-2.jpg",
      "isDefault": false,
      "id": 2459459884,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459459884-1.jpg",
      "rotateDegree": null,
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459459884-3.jpg"
     },
     {
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492826-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492826-2.jpg",
      "isDefault": false,
      "id": 2459492826,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492826-1.jpg",
      "rotateDegree": null,
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492826-3.jpg"
     },
     {
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492825-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492825-2.jpg",
      "isDefault": false,
      "id": 2459492825,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492825-1.jpg",
      "rotateDegree": null,
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492825-3.jpg"
     },
     {
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492801-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492801-2.jpg",
      "isDefault": false,
      "id": 2459492801,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492801-1.jpg",
      "rotateDegree": null,
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492801-3.jpg"
     },
     {
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459459890-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459459890-2.jpg",
      "isDefault": false,
      "id": 2459459890,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459459890-1.jpg",
      "rotateDegree": null,
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459459890-3.jpg"
     },
     {
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492820-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492820-2.jpg",
      "isDefault": false,
      "id": 2459492820,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492820-1.jpg",
      "rotateDegree": null,
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492820-3.jpg"
     },
     {
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492807-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492807-2.jpg",
      "isDefault": false,
      "id": 2459492807,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492807-1.jpg",
      "rotateDegree": null,
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492807-3.jpg"
     },
     {
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492824-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492824-2.jpg",
      "isDefault": false,
      "id": 2459492824,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492824-1.jpg",
      "rotateDegree": null,
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492824-3.jpg"
     },
     {
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492823-4.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492823-2.jpg",
      "isDefault": false,
      "id": 2459492823,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492823-1.jpg",
      "rotateDegree": null,
      "isLayout": false,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2459492823-3.jpg"
     }
    ]
   },
   "files": [
    {
     "id": 2459492806,
     "isDefault": true,
     "full": "316502961-1.webp",
     "mini": "316502961-1m.webp"
    },
    {
     "id": 2459492808,
     "isDefault": false,
     "full": "316502961-2.webp",
     "mini": "316502961-2m.webp"
    },
    {
     "id": 2459492821,
     "isDefault": false,
     "full": "316502961-3.webp",
     "mini": "316502961-3m.webp"
    },
    {
     "id": 2459492819,
     "isDefault": false,
     "full": "316502961-4.webp",
     "mini": "316502961-4m.webp"
    },
    {
     "id": 2459459884,
     "isDefault": false,
     "full": "316502961-5.webp",
     "mini": "316502961-5m.webp"
    }
   ]
  },
  {
   "source": "https://www.cian.ru/rent/flat/334853410/",
   "seenAt": "2026-10-19T11:52:30.071Z",
   "offer": {
    "category": "flatRent",
    "status": "published",
    "dealType": "rent",
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
       "url": "https://www.cian.ru/snyat-kvartiru/"
      },
      {
       "fullName": "САО",
       "id": 5,
       "locationTypeId": -1,
       "name": "САО",
       "shortName": "САО",
       "type": "okrug",
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-sao-045/"
      },
      {
       "fullName": "район Беговой",
       "id": 24,
       "locationTypeId": -1,
       "name": "Беговой",
       "shortName": "р-н Беговой",
       "type": "raion",
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-begovoy-0424/"
      },
      {
       "fullName": "Ленинградский проспект",
       "id": 1348,
       "locationTypeId": -1,
       "name": "Ленинградский",
       "shortName": "Ленинградский просп.",
       "type": "street",
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-leningradskiy-prospekt-021348/"
      },
      {
       "fullName": "29к4",
       "id": 5673870,
       "locationTypeId": -1,
       "name": "29к4",
       "shortName": "29к4",
       "type": "house",
       "url": "https://www.cian.ru/cat.php?deal_type=rent&engine_version=2&house%5B0%5D=5673870&offer_type=flat&type=4"
      }
     ],
     "coordinates": {
      "lat": 55.78525,
      "lng": 37.560395
     },
     "highways": [],
     "jk": {
      "id": 8122,
      "name": "Царская площадь",
      "house": {
       "id": 7714,
       "name": "Ленинградский, 29к4"
      },
      "gaGeo": {
       "moId": 0,
       "oblId": 1,
       "cityId": 1
      },
      "fullUrl": "https://www.cian.ru/zhiloy-kompleks-carskaya-ploshcad-moskva-8122/",
      "fullUrlTemplate": "{request_scheme}://zhk-carskaya-ploshcad-i.{host}/"
     },
     "railways": [
      {
       "id": 694,
       "directionIds": [
        11
       ],
       "distance": "1.0",
       "time": 2,
       "name": "Москва (Белорусский вокзал)",
       "travelType": "byCar"
      },
      {
       "id": 699,
       "directionIds": [
        11
       ],
       "distance": "1.0",
       "time": 23,
       "name": "Беговая",
       "travelType": "byFoot"
      },
      {
       "id": 694,
       "directionIds": [
        11
       ],
       "distance": "2.0",
       "time": 25,
       "name": "Москва (Белорусский вокзал)",
       "travelType": "byFoot"
      },
      {
       "id": 699,
       "directionIds": [
        11
       ],
       "distance": "2.0",
       "time": 3,
       "name": "Беговая",
       "travelType": "byCar"
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
       "id": 689,
       "directionIds": [
        19
       ],
       "distance": "7.0",
       "time": 11,
       "name": "Москва (Савёловский вокзал)",
       "travelType": "byCar"
      }
     ],
     "undergrounds": [
      {
       "id": 36,
       "name": "Динамо",
       "lineColor": "00701A",
       "travelType": "walk",
       "travelTime": 5,
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-metro-dinamo-36/",
       "underConstruction": false
      },
      {
       "id": 350,
       "name": "Петровский Парк",
       "lineColor": "7ACDCE",
       "travelType": "walk",
       "travelTime": 10,
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-metro-petrovskiy-park-350/",
       "underConstruction": false
      },
      {
       "id": 15,
       "name": "Белорусская",
       "lineColor": "00701A",
       "travelType": "walk",
       "travelTime": 21,
       "url": "https://www.cian.ru/snyat-kvartiru-moskva-metro-belorusskaya-15/",
       "underConstruction": false
      }
     ]
    },
    "id": 334853410,
    "objectGuid": "90fb6269-4bf8-47c7-bdf0-3a47982925c2",
    "cianId": 334853410,
    "userId": 127194318,
    "publishedUserId": 127194318,
    "cianUserId": 127194318,
    "isByHomeowner": false,
    "title": "Все включено!Без доп.платы за КУ",
    "description": "Студия для современной и активной тебя!\n\nПродуманная планировка и стильный ремонт. Пространство организовано так, чтобы каждый квадратный метр работал на твой комфорт.\n\nВсё необходимое для жизни, включая удобную кровать, кондиционер, посудомоечную машину. Тебе не придётся ничего докупать — можно заезжать сразу.\n\nЛокация ТОП. Отсюда удобно строить день вокруг центра Москвы: метро Динамо и Петровский парк находятся рядом, Ленинградский проспект даёт прямой маршрут к Белорусской и центру, ТТК — быстрый доступ в другие районы.\n\nСам комплекс — не отдельный дом, а сформированный квартал с благоустроенной территорией, пешеходными маршрутами, кафе, магазинами и сервисами. Можно выйти из дома за кофе, встретиться с друзьями или решить бытовые вопросы, не планируя отдельную поездку.\n\nЕсли твой главный дефицит — время, у этой студии правильный адрес ))\n\nВ стоимость аренды входит ВСЯ коммуналка и интернет. Дополнительно НИЧЕГО оплачивать не нужно!\n\nВозможно заселение в день просмотра.\n\nНе упусти шанс жить в комфортном пространстве с премиальной инфраструктурой и отличной транспортной доступностью. \n\nЗвони или пиши —  организую оперативный показ!",
    "photos": [
     {
      "id": 2984065938,
      "isDefault": true,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065938-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065938-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065938-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065938-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2984065939,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065939-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065939-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065939-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065939-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2984067865,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984067865-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984067865-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984067865-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984067865-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2984065946,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065946-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065946-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065946-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065946-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2984065936,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065936-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065936-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065936-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065936-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2984065926,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065926-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065926-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065926-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065926-3.jpg",
      "isCianLayout": false
     },
     {
      "id": 2984065928,
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065928-1.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065928-2.jpg",
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065928-4.jpg",
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065928-3.jpg",
      "isCianLayout": false
     }
    ],
    "phones": [
     {
      "countryCode": "+7",
      "number": "9892075856"
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
        "premium"
       ],
       "days": 30,
       "type": "periodical",
       "tariffIdentificator": {
        "tariffId": 1386021,
        "tariffGridType": "packageTariff"
       }
      }
     ],
     "autoprolong": false
    },
    "flatType": "studio",
    "isApartments": true,
    "isPenthouse": false,
    "totalArea": "33.0",
    "livingArea": "17.0",
    "kitchenArea": "5.0",
    "loggiasCount": 0,
    "balconiesCount": 0,
    "separateWcsCount": 0,
    "combinedWcsCount": 1,
    "repairType": "design",
    "hasPhone": false,
    "hasFridge": true,
    "hasDishwasher": true,
    "hasWasher": true,
    "hasFurniture": true,
    "hasKitchenFurniture": true,
    "hasConditioner": true,
    "hasTv": true,
    "hasInternet": true,
    "hasBathtub": false,
    "hasShower": true,
    "childrenAllowed": false,
    "petsAllowed": false,
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
    "floorNumber": 3,
    "bargainTerms": {
     "price": 100000,
     "priceType": "all",
     "currency": "rur",
     "paymentPeriod": "monthly",
     "leaseTermType": "longTerm",
     "prepayMonths": 1,
     "deposit": 100000,
     "utilitiesTerms": {
      "includedInPrice": true,
      "price": 0,
      "flowMetersNotIncludedInPrice": false
     },
     "includedOptions": [],
     "clientFee": 40,
     "agentFee": 0,
     "prices": {
      "rur": 100000,
      "usd": 1196,
      "eur": 1068
     },
     "depositPrices": {
      "rur": 100000,
      "usd": 1196,
      "eur": 1068
     },
     "utilitiesTermsPrices": {
      "rur": 0,
      "usd": 0,
      "eur": 0
     },
     "tags": []
    },
    "building": {
     "materialType": "monolith",
     "floorsCount": 13,
     "buildYear": 2019,
     "ceilingHeight": "3.1",
     "totalArea": "33.0",
     "liftTypes": [],
     "cranageTypes": [],
     "passengerLiftsCount": 1,
     "cargoLiftsCount": 1,
     "houseMaterialType": "monolith"
    },
    "editDate": "2026-10-19T09:47:02.643000Z",
    "humanizedEditDate": "сегодня, 09:47",
    "isInHiddenBase": false,
    "isObjectHidden": false,
    "isClosedVisibility": false,
    "videos": [],
    "demolishedInMoscowProgramm": false,
    "exportLinks": {
     "pdfUrl": "/export/pdf/rent/flat/334853410/",
     "docxUrl": "/export/docx/rent/flat/334853410/"
    },
    "passengerLiftsCount": 1,
    "cargoLiftsCount": 1,
    "added": "сегодня, 09:47",
    "valueAddedServices": {
     "isStandard": false,
     "isTop3": false,
     "isPremium": true
    },
    "promotion": {
     "isPerformanceVasPilot": false,
     "promotionDescription": "Премиум",
     "isCpcAuction": false
    },
    "categoriesIds": [
     1000,
     1100,
     1110,
     1111
    ],
    "publicationDate": 1791576010,
    "creationDate": "2026-10-09T23:00:10.343",
    "recoveryLink": "/razmestit-obyavlenie/334853410/",
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
    "editPhoto": "/realty/add2.aspx?id=334853410",
    "newEdit": "/razmestit-obyavlenie/?realty_id=334853410",
    "certificate": "https://www.cian.ru/newobjects/cian/certification/get?announcementId=334853410",
    "edit": "/realty/add1.aspx?id=334853410",
    "similarOffersLink": "",
    "similarOffersCount": 0,
    "buildersIds": [
     6008
    ],
    "builderId": 6008,
    "isImported": false,
    "userConfirmedFix": false,
    "newbuilding": {
     "id": 8122,
     "name": "Царская площадь",
     "house": {
      "isReliable": false,
      "isFinished": true,
      "finishDate": {
       "quarter": 4,
       "year": 2019
      },
      "id": 7714,
      "name": "Ленинградский, 29к4"
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
      "imagesCount": 16,
      "firstImageUrl": "https://images.cdn-cian.ru/images/31/050/701/carskaya-ploshcad-moskva-jk-1070501366-6.jpg",
      "videosCount": 1,
      "deadlineInfo": "Сдан"
     },
     "isReliable": false,
     "isTariffPremium": false
    },
    "timezone": 3,
    "isEnabledCallTracking": true,
    "callTrackingProvider": "mts",
    "isRentByParts": false,
    "isDuplicate": false,
    "userTrust": "notInvolved",
    "userTrustLevel": "notInvolved",
    "showWarningMessage": false,
    "moderationInfo": {
     "showContactWarningMessage": false
    },
    "isUnique": false,
    "isUniqueCheckDate": "2026-10-18",
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
       "value": "Апартаменты",
       "label": "Тип жилья"
      },
      {
       "value": "33 м²",
       "label": "Общая площадь"
      },
      {
       "value": "17 м²",
       "label": "Жилая площадь"
      },
      {
       "value": "5 м²",
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
       "value": "Дизайнерский",
       "label": "Ремонт"
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
       "value": "1 пассажирский, 1 грузовой",
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
       "value": "10",
       "label": "Подъезды"
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
     "value": "33 м²"
    },
    {
     "title": "Жилая площадь",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/plan.svg",
     "value": "17 м²"
    },
    {
     "title": "Площадь кухни",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/kitchen.svg",
     "value": "5 м²"
    },
    {
     "title": "Этаж",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/floor.svg",
     "value": "3 из 13"
    },
    {
     "title": "Год постройки",
     "icon": "https://images.cdn-cian.ru/imgmobile/icons/offer_card/build_year.svg",
     "value": "2019"
    }
   ],
   "priceChanges": [
    {
     "changeTime": "2026-10-15T07:00:33.223151Z",
     "priceData": {
      "currency": "rur",
      "price": 100000,
      "paymentPeriod": "monthly"
     }
    },
    {
     "changeTime": "2026-10-12T19:12:11.437507Z",
     "priceData": {
      "currency": "rur",
      "price": 102000,
      "paymentPeriod": "monthly"
     }
    },
    {
     "changeTime": "2026-10-10T06:57:52.113797Z",
     "priceData": {
      "currency": "rur",
      "price": 105000,
      "paymentPeriod": "monthly"
     }
    }
   ],
   "bti": {
    "houseData": {
     "yearRelease": 2019,
     "houseMaterialType": "monolith",
     "entrances": 10,
     "flatCount": 417,
     "isEmergency": false,
     "demolishedInMoscowProgramm": false,
     "houseHeatSupplyType": "central",
     "houseOverhaulFundType": "unknown",
     "houseGasSupplyType": "unknown",
     "houseOverlapType": "concrete",
     "lifts": 20
    }
   },
   "stats": {
    "totalViewsFormattedString": "269 просмотров, 13 за сегодня"
   },
   "priceInfo": null,
   "serp": {
    "id": 334853410,
    "category": "flatRent",
    "dealType": "rent",
    "bargainTerms": {
     "tax": null,
     "paymentPeriod": "monthly",
     "saleType": null,
     "utilitiesTerms": {
      "flowMetersNotIncludedInPrice": false,
      "includedInPrice": true,
      "price": 0
     },
     "vatType": null,
     "priceType": "all",
     "agentFee": 0,
     "priceForWorkplace": null,
     "tags": [],
     "leaseTermType": "longTerm",
     "mortgageAllowed": null,
     "clientFee": 40,
     "price": 100000,
     "agentBonus": null,
     "currency": "rur",
     "deposit": 100000,
     "bargainAllowed": null,
     "priceRur": 100000,
     "vatPrice": null,
     "leaseType": null
    },
    "geo": {
     "countryId": 138,
     "address": [
      {
       "name": "Москва",
       "geoType": "location",
       "isFormingAddress": true,
       "type": "location",
       "fullName": "Москва",
       "locationTypeId": 1,
       "shortName": "Москва",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&region=1&type=4",
       "title": "Москва",
       "id": 1
      },
      {
       "name": "САО",
       "geoType": "district",
       "isFormingAddress": null,
       "type": "okrug",
       "fullName": "САО",
       "locationTypeId": null,
       "shortName": "САО",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=5&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "САО",
       "id": 5
      },
      {
       "name": "Беговой",
       "geoType": "district",
       "isFormingAddress": null,
       "type": "raion",
       "fullName": "р-н Беговой",
       "locationTypeId": null,
       "shortName": "р-н Беговой",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=24&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "р-н Беговой",
       "id": 24
      },
      {
       "name": "Динамо",
       "geoType": "underground",
       "isFormingAddress": null,
       "type": "metro",
       "fullName": "м. Динамо",
       "locationTypeId": null,
       "shortName": "м. Динамо",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=36&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "title": "м. Динамо",
       "id": 36
      },
      {
       "name": "Ленинградский",
       "geoType": "street",
       "isFormingAddress": true,
       "type": "street",
       "fullName": "Ленинградский проспект",
       "locationTypeId": null,
       "shortName": "Ленинградский просп.",
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&street%5B0%5D=1348&type=4",
       "title": "Ленинградский проспект",
       "id": 1348
      },
      {
       "name": "29к4",
       "geoType": "house",
       "isFormingAddress": true,
       "type": "house",
       "fullName": "29к4",
       "locationTypeId": null,
       "shortName": "29к4",
       "qs": "currency=2&deal_type=rent&engine_version=2&house%5B0%5D=5673870&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "29к4",
       "id": 5673870
      }
     ],
     "jk": {
      "name": "Царская площадь",
      "developer": null,
      "fullUrl": "https://zhk-carskaya-ploshcad-i.cian.ru/",
      "webSiteUrl": null,
      "displayName": "ЖК «Царская площадь»",
      "house": {
       "name": "Ленинградский, 29к4",
       "id": 7714
      },
      "gaGeo": {
       "oblId": 1,
       "moId": 0,
       "cityId": 1
      },
      "webSiteUrlUtm": null,
      "id": 8122
     },
     "coordinates": {
      "lng": 37.560395,
      "lat": 55.78525
     },
     "buildingAddress": null,
     "userInput": "Россия, Москва, Ленинградский проспект, 29к4",
     "districts": [
      {
       "name": "Беговой",
       "geoType": "district",
       "parentId": 5,
       "type": "raion",
       "locationId": 1,
       "fullName": "р-н Беговой",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=24&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "р-н Беговой",
       "id": 24
      },
      {
       "name": "САО",
       "geoType": "district",
       "parentId": null,
       "type": "okrug",
       "locationId": 1,
       "fullName": "САО",
       "qs": "currency=2&deal_type=rent&district%5B0%5D=5&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&type=4",
       "title": "САО",
       "id": 5
      }
     ],
     "highways": [],
     "railways": [
      {
       "name": "Москва (Белорусский вокзал)",
       "geoType": "railway",
       "travelType": "byCar",
       "directionIds": [
        11
       ],
       "distance": 1,
       "time": 2,
       "id": 694,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=694&type=4"
      },
      {
       "name": "Беговая",
       "geoType": "railway",
       "travelType": "byCar",
       "directionIds": [
        11
       ],
       "distance": 2,
       "time": 3,
       "id": 699,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=699&type=4"
      },
      {
       "name": "Москва (Савёловский вокзал)",
       "geoType": "railway",
       "travelType": "byCar",
       "directionIds": [
        19
       ],
       "distance": 7,
       "time": 11,
       "id": 689,
       "qs": "currency=2&deal_type=rent&engine_version=2&maxprice=150000&minprice=60000&offer_type=flat&railway%5B0%5D=689&type=4"
      }
     ],
     "undergrounds": [
      {
       "name": "Динамо",
       "releaseYear": null,
       "isDefault": true,
       "cianId": null,
       "transportType": "walk",
       "underConstruction": false,
       "lineColor": "00701A",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=36&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "time": 5,
       "lineId": 3,
       "id": 36,
       "lineType": null
      },
      {
       "name": "Петровский Парк",
       "releaseYear": null,
       "isDefault": false,
       "cianId": null,
       "transportType": "walk",
       "underConstruction": false,
       "lineColor": "7ACDCE",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=350&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "time": 10,
       "lineId": 27,
       "id": 350,
       "lineType": null
      },
      {
       "name": "Белорусская",
       "releaseYear": null,
       "isDefault": false,
       "cianId": null,
       "transportType": "transport",
       "underConstruction": false,
       "lineColor": "00701A",
       "qs": "currency=2&deal_type=rent&engine_version=2&foot_min=25&maxprice=150000&metro%5B0%5D=15&minprice=60000&offer_type=flat&only_foot=2&type=4",
       "time": 4,
       "lineId": 3,
       "id": 15,
       "lineType": null
      }
     ],
     "sortedGeoIds": [
      {
       "type": "underground",
       "id": 36
      },
      {
       "type": "underground",
       "id": 350
      },
      {
       "type": "underground",
       "id": 15
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
       "id": 24
      },
      {
       "type": "district",
       "id": 5
      }
     ]
    },
    "building": {
     "parking": null,
     "type": null,
     "passengerLiftsCount": 1,
     "deadline": null,
     "heatingType": null,
     "materialType": "monolith",
     "classType": null,
     "cargoLiftsCount": 1,
     "buildYear": 2019,
     "floorsCount": 13,
     "accessType": null
    },
    "roomsCount": null,
    "totalArea": "33.0",
    "floorNumber": 3,
    "flatType": "studio",
    "title": "Все включено!Без доп.платы за КУ",
    "description": "Студия для современной и активной тебя!\n\nПродуманная планировка и стильный ремонт. Пространство организовано так, чтобы каждый квадратный метр работал на твой комфорт.\n\nВсё необходимое для жизни, включая удобную кровать, кондиционер, посудомоечную машину. Тебе не придётся ничего докупать — можно заезжать сразу.\n\nЛокация ТОП. Отсюда удобно строить день вокруг центра Москвы: метро Динамо и Петровский парк находятся рядом, Ленинградский проспект даёт прямой маршрут к Белорусской и центру, ТТК — быстрый доступ в другие районы.\n\nСам комплекс — не отдельный дом, а сформированный квартал с благоустроенной территорией, пешеходными маршрутами, кафе, магазинами и сервисами. Можно выйти из дома за кофе, встретиться с друзьями или решить бытовые вопросы, не планируя отдельную поездку.\n\nЕсли твой главный дефицит — время, у этой студии правильный адрес ))\n\nВ стоимость аренды входит ВСЯ коммуналка и интернет. Дополнительно НИЧЕГО оплачивать не нужно!\n\nВозможно заселение в день просмотра.\n\nНе упусти шанс жить в комфортном пространстве с премиальной инфраструктурой и отличной транспортной доступностью. \n\nЗвони или пиши —  организую оперативный показ!",
    "formattedFullPrice": "100 000 ₽/мес.",
    "formattedFullInfo": "Апарт-студия  ·  33 м²  ·  3/13 этаж",
    "formattedAdditionalInfo": "Залог 100 000 ₽, комиссия 40%, предоплата 1 месяц, на длительный срок",
    "photos": [
     {
      "isDefault": true,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065938-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065938-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065938-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065938-2.jpg",
      "id": 2984065938
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065939-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065939-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065939-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065939-2.jpg",
      "id": 2984065939
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984067865-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984067865-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984067865-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984067865-2.jpg",
      "id": 2984067865
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065946-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065946-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065946-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065946-2.jpg",
      "id": 2984065946
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065936-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065936-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065936-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065936-2.jpg",
      "id": 2984065936
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065926-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065926-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065926-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065926-2.jpg",
      "id": 2984065926
     },
     {
      "isDefault": false,
      "fullUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065928-1.jpg",
      "isLayout": null,
      "thumbnail2Url": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065928-4.jpg",
      "rotateDegree": null,
      "miniUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065928-3.jpg",
      "thumbnailUrl": "https://images.cdn-cian.ru/images/kvartira-moskva-leningradskiy-prospekt-2984065928-2.jpg",
      "id": 2984065928
     }
    ]
   },
   "files": [
    {
     "id": 2984065938,
     "isDefault": true,
     "full": "334853410-1.webp",
     "mini": "334853410-1m.webp"
    },
    {
     "id": 2984065939,
     "isDefault": false,
     "full": "334853410-2.webp",
     "mini": "334853410-2m.webp"
    },
    {
     "id": 2984067865,
     "isDefault": false,
     "full": "334853410-3.webp",
     "mini": "334853410-3m.webp"
    },
    {
     "id": 2984065946,
     "isDefault": false,
     "full": "334853410-4.webp",
     "mini": "334853410-4m.webp"
    },
    {
     "id": 2984065936,
     "isDefault": false,
     "full": "334853410-5.webp",
     "mini": "334853410-5m.webp"
    }
   ]
  }
 ],
 "totalOffers": 2039
};
if (typeof module !== "undefined") module.exports = MOCK_DATASET;
