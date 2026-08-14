const karstieDzerieni = [
    {
        title: "Melna kafija",
        titleEn: "Black coffee",
        price: "2,60",
        group: "Kafija / Coffee",
    },
    {
        title: "Kafija ar pienu",
        titleEn: "Coffee with milk",
        group: "Kafija / Coffee",
        variants: [
            {
                label: "L",
                price: "2,90"
            },
            {
                label: "XL",
                price: "3,50"
            },
        ],
    },
    {
        title: "Espresso",
        group: "Kafija / Coffee",
        variants: [
            {
                label: "Single",
                price: "2,90"
            },
            {
                label: "Double",
                price: "4,60"
            },
        ],
    },
    {
        title: "Cappuccino",
        group: "Kafija / Coffee",
        variants: [
            {
                label: "L",
                price: "3,90"
            },
            {
                label: "XL",
                price: "4,50"
            },
        ],
    },
    {
        title: "Cafe Latte",
        price: "4,40",
        group: "Kafija / Coffee",
    },
    {
        title: "Bezkofeīna kafija",
        titleEn: "Decaff",
        price: "3,20",
        group: "Kafija / Coffee",
    },
    {
        title: "Kakao",
        titleEn: "Hot Chocolate",
        price: "2,90",
    },
    {
        title: "Beramās tējas",
        titleEn: "Loose teas",
        description: "jautāt viesmīlim / ask the waiter",
        variants: [
            {
                label: "0,4 l",
                price: "3,60"
            },
            {
                label: "0,6 l",
                price: "4,20"
            },
        ],
    },
    {
        title: "Tēja ar augļiem un grenadīna sīrupu",
        titleEn: "Tea with fruits and grenadine syrup",
        price: "4,50",
        group: "Svaigās tējas",
    },
    {
        title: "Svaigu piparmētru tēja",
        titleEn: "Fresh mint tea",
        price: "4,50",
        group: "Svaigās tējas",
    },
    {
        title: "Ingvera tēja ar medu un citronu (pasniegta tējkannā)",
        titleEn: "Ginger tea with honey and lemon (served in a teapot)",
        price: "4,50",
        group: "Svaigās tējas",
    },
];

const bezalkoholiskieDzerieni = [
    {
        title: "Lielbāta",
        description: "gāzēts, negāzēts / carbonated, still",
        group: "Minerālūdens / Mineral Water",
        variants: [
            {
                label: "0,33 l",
                price: "2,10"
            },
            {
                label: "0,75 l",
                price: "3,80"
            },
        ],
    },
    {
        title: "Borjomi",
        group: "Minerālūdens / Mineral Water",
        variants: [
            {
                label: "0,33 l",
                price: "2,60"
            }
        ],
    },
    {
        title: "Galda ūdens",
        group: "Minerālūdens / Mineral Water",
        variants: [{
            label: "1 l",
            price: "3,50"
        }],
    },
    {
        title: "Sulas",
        titleEn: "Juices",
        variants: [{
            label: "0,3 l",
            price: "2,50"
        }],
    },
    {
        title: "Apelsīnu",
        titleEn: "Orange",
        group: "Svaigi spiestas sulas / Freshly squeezed juices",
        variants: [{
            label: "0,3 l",
            price: "4,90"
        }],
    },
    {
        title: "Greipfrūtu",
        titleEn: "Grapefruit",
        group: "Svaigi spiestas sulas / Freshly squeezed juices",
        variants: [{
            label: "0,3 l",
            price: "4,90"
        }],
    },
    {
        title: "Ābolu",
        titleEn: "Apple",
        group: "Svaigi spiestas sulas / Freshly squeezed juices",
        variants: [{
            label: "0,3 l",
            price: "4,90"
        }],
    },
    {
        title: "Burkānu",
        titleEn: "Carrot",
        group: "Svaigi spiestas sulas / Freshly squeezed juices",
        variants: [{
            label: "0,3 l",
            price: "4,90"
        }],
    },
    {
        title: "Coca Cola, Sprite, Fanta",
        group: "Limonādes / Lemonades",
        variants: [
            {
                label: "0,3 l",
                price: "2,50"
            },
            {
                label: "0,5 l",
                price: "3,50"
            },
        ],
    },
    {
        title: "Coca Cola Zero",
        description: "pudele / bottle",
        group: "Limonādes / Lemonades",
        variants: [{
            label: "0,25 l",
            price: "3,50"
        }],
    },
    {
        title: "Tonic",
        group: "Limonādes / Lemonades",
        variants: [{
            label: "0,3 l",
            price: "3,50"
        }],
    },
    {
        title: "Rāmkalnu limonādes",
        group: "Limonādes / Lemonades",
        variants: [{
            label: "0,33 l",
            price: "3,20"
        }],
    },
    {
        title: "Kvass",
        variants: [
            {
                label: "0,3 l",
                price: "2,50"
            },
            {
                label: "0,5 l",
                price: "3,00"
            },
        ],
    },
];

const bezalkoholiskieKokteili = [
    {
        title: "Bezalkoholiskais Mojito",
        price: "7,00",
        description: "laims, piparmētras, brūnais cukurs, Sprite vai gāzēts ūdens",
    },
    {
        title: "Bezalkoholiskais Hugo spritz",
        price: "7,00",
        description: "plūškoka sīrups, sprite, gāzēts ūdens, laims, piparmētras",
    },
    {
        title: "Bezalkoholiskais Aperol spritz",
        price: "7,00",
        description: "Aperol spritz sīrups, sprite, gāzēts ūdens, apelsīns",
    },
    {
        title: "Ledus tēja",
        price: "4,50",
        description: "tēja, sīrups, augļi",
    },
    {
        title: "Ledus kafija",
        price: "4,50",
        description: "kafija, piens, brūnais cukurs, sīrupi, ledus",
    },
    {
        title: "Saldējuma kokteilis",
        price: "6,50",
        description: "zemeņu, plūmju, persiku vai dzērveņu",
    },
];

const alusUnSidrs = [
    {
        title: "“Brālis” gaišais nefiltrētais",
        group: "Lejamais alus",
        variants: [
            {
                label: "0,3 l",
                price: "3,40"
            },
            {
                label: "0,5 l",
                price: "4,20"
            },
        ],
    },
    {
        title: "“Brālis” tumšais nefiltrētais",
        group: "Lejamais alus",
        variants: [
            {
                label: "0,3 l",
                price: "3,40"
            },
            {
                label: "0,5 l",
                price: "4,20"
            },
        ],
    },
    {
        title: "Užavas gaišais",
        group: "Pudeļu alus",
        variants: [{
            label: "0,5 l",
            price: "4,50"
        }],
    },
    {
        title: "Valmiermuižas",
        group: "Pudeļu alus",
        variants: [{
            label: "0,5 l",
            price: "4,90"
        }],
    },
    {
        title: "Warsteiner bezalkoholiskais",
        group: "Pudeļu alus",
        variants: [{
            label: "0,33 l",
            price: "3,40"
        }],
    },
    {
        title: "Sidrs",
        description: "jautāt viesmīlim",
        variants: [{
            label: "0,3 l",
            price: "4,90"
        }],
    },
];

const stiprieDzerieni = [
    {
        title: "Martini Bianco",
        volume: "100 ml",
        price: "4,50",
        group: "Vermuts / Vermouth"
    },
    {
        title: "Martini Rosso",
        volume: "100 ml",
        price: "4,50",
        group: "Vermuts / Vermouth"
    },
    {
        title: "Martini Extra Dry",
        volume: "100 ml",
        price: "4,50",
        group: "Vermuts / Vermouth"
    },
    {
        title: "Martini Rossato",
        volume: "100 ml",
        price: "4,50",
        group: "Vermuts / Vermouth"
    },
    {
        title: "Campari",
        volume: "100 ml",
        price: "4,50",
        group: "Vermuts / Vermouth"
    },

    {
        title: "Bailey’s",
        volume: "50 ml",
        price: "4,00",
        group: "Liķieris / Liqueur"
    },
    {
        title: "Cointreau",
        volume: "50 ml",
        price: "4,50",
        group: "Liķieris / Liqueur"
    },
    {
        title: "Malibu",
        volume: "50 ml",
        price: "4,50",
        group: "Liķieris / Liqueur"
    },
    {
        title: "Sambuca",
        volume: "50 ml",
        price: "4,50",
        group: "Liķieris / Liqueur"
    },
    {
        title: "Amaretto",
        volume: "50 ml",
        price: "4,50",
        group: "Liķieris / Liqueur"
    },
    {
        title: "Kahlua",
        volume: "50 ml",
        price: "4,50",
        group: "Liķieris / Liqueur"
    },
    {
        title: "Southern Comfort",
        volume: "50 ml",
        price: "5,00",
        group: "Liķieris / Liqueur"
    },
    {
        title: "Drambuie",
        volume: "50 ml",
        price: "4,50",
        group: "Liķieris / Liqueur"
    },
    {
        title: "Galliano",
        volume: "50 ml",
        price: "4,50",
        group: "Liķieris / Liqueur"
    },
    {
        title: "Absinthe",
        volume: "50 ml",
        price: "5,50",
        group: "Liķieris / Liqueur"
    },
    {
        title: "Grappa",
        volume: "50 ml",
        price: "5,50",
        group: "Liķieris / Liqueur"
    },

    {
        title: "Rīgas Melnais balzāms",
        volume: "50 ml",
        price: "3,50",
        group: "Balzāms / Balsam"
    },
    {
        title: "Rīgas Melnais balzāms upeņu",
        volume: "50 ml",
        price: "3,50",
        group: "Balzāms / Balsam" },
    {
        title: "Jagermeister",
        volume: "50 ml",
        price: "4,00",
        group: "Balzāms / Balsam"
    },

    {
        title: "Moskovskaya",
        volume: "50 ml",
        price: "3,00",
        group: "Degvīns / Vodka"
    },
    {
        title: "Finlandia",
        volume: "50 ml",
        price: "4,00",
        group: "Degvīns / Vodka"
    },
    {
        title: "Finlandia Cranberry",
        volume: "50 ml",
        price: "4,00",
        group: "Degvīns / Vodka"
    },
    {
        title: "Absolut",
        volume: "50 ml",
        price: "4,40",
        group: "Degvīns / Vodka"
    },

    {
        title: "Beefeater",
        volume: "50 ml",
        price: "4,50",
        group: "Džins / Gin"
    },
    {
        title: "Bombay Sapphire",
        volume: "50 ml",
        price: "6,50",
        group: "Džins / Gin"
    },

    {
        title: "Tequila Silver",
        volume: "50 ml",
        price: "4,50",
        group: "Tekila / Tequila"
    },
    {
        title: "Tequila Gold",
        volume: "50 ml",
        price: "4,50",
        group: "Tekila / Tequila"
    },

    {
        title: "Jim Beam",
        volume: "50 ml",
        price: "4,50",
        group: "Viskijs / Whisky"
    },
    {
        title: "Jack Daniel’s",
        volume: "50 ml",
        price: "6,50",
        group: "Viskijs / Whisky"
    },
    {
        title: "Jameson",
        volume: "50 ml",
        price: "4,50",
        group: "Viskijs / Whisky" },
    {
        title: "Tullamore Dew",
        volume: "50 ml",
        price: "4,50",
        group: "Viskijs / Whisky"
    },
    {
        title: "Bushmills",
        volume: "50 ml",
        price: "5,00",
        group: "Viskijs / Whisky"
    },
    {
        title: "Bushmills Black Bush",
        volume: "50 ml",
        price: "5,00",
        group: "Viskijs / Whisky"
    },
    {
        title: "Ballantines Finest",
        volume: "50 ml",
        price: "4,50",
        group: "Viskijs / Whisky"
    },
    {
        title: "J.W. Red Label",
        volume: "50 ml",
        price: "4,50",
        group: "Viskijs / Whisky"
    },
    {
        title: "J.W. Black Label",
        volume: "50 ml",
        price: "6,90",
        group: "Viskijs / Whisky"
    },
    {
        title: "Chivas Regal",
        volume: "50 ml",
        price: "8,50",
        group: "Viskijs / Whisky"
    },
    {
        title: "Glenfiddich 12 Years Old",
        volume: "50 ml",
        price: "9,00",
        group: "Viskijs / Whisky"
    },
    {
        title: "Lagavulin 16 Years Old",
        volume: "50 ml",
        price: "9,00",
        group: "Viskijs / Whisky"
    },
    {
        title: "Macallan 12 Years Old",
        volume: "50 ml",
        price: "9,00",
        group: "Viskijs / Whisky"
    },

    {
        title: "Bacardi",
        volume: "50 ml",
        price: "4,50",
        group: "Rums / Rum"
    },
    {
        title: "Bacardi Black",
        volume: "50 ml",
        price: "4,50",
        group: "Rums / Rum"
    },
    {
        title: "Captain Morgan Original Spiced Gold",
        volume: "50 ml",
        price: "4,50",
        group: "Rums / Rum"
    },
    {
        title: "Captain Morgan Black",
        volume: "50 ml",
        price: "4,50",
        group: "Rums / Rum"
    },
    {
        title: "Cachaca",
        volume: "50 ml",
        price: "4,50",
        group: "Rums / Rum"
    },

    {
        title: "Metaxa 7*",
        volume: "50 ml",
        price: "5,00",
        group: "Brendijs / Brandy"
    },
    {
        title: "Ararat 5 Year Old",
        volume: "50 ml",
        price: "5,00",
        group: "Brendijs / Brandy"
    },
    {
        title: "Calvados Fine Magloiret",
        volume: "50 ml",
        price: "5,50",
        group: "Brendijs / Brandy"
    },

    {
        title: "Hennessy V.S.",
        volume: "50 ml",
        price: "6,90",
        group: "Konjaks / Cognac"
    },
    {
        title: "Hennessy V.S.O.P",
        volume: "50 ml",
        price: "9,90",
        group: "Konjaks / Cognac"
    },
    {
        title: "Hennessy X.O.",
        volume: "50 ml",
        price: "20,00",
        group: "Konjaks / Cognac"
    },
    {
        title: "Remy Martin V.S.O.P.",
        volume: "50 ml",
        price: "9,90",
        group: "Konjaks / Cognac"
    },
    {
        title: "Martell V.S.O.P.",
        volume: "50 ml",
        price: "9,90",
        group: "Konjaks / Cognac"
    },
];

const kokteili = [
    {
        title: "Hugo Spritz",
        price: "8,50",
        description: "prosecco, pūškoku ziedu sīrups, gāzēts ūdens, ābols, laims, piparmētras",
        group: "Top",
    },
    {
        title: "Aperol Spritz",
        price: "8,50",
        description: "prosecco, Aperol, gāzēts ūdens, apelsīns",
        group: "Top",
    },
    {
        title: "Bloody Mary",
        price: "7,90",
        description: "vodka, tomātu sula, citronu sula, garšvielas",
        group: "Nemirstīgā klasika / Neverending classic",
    },
    {
        title: "Gin Fizz",
        price: "8,50",
        description: "džins, citronu sula, olas baltums, pūdercukurs, gāzēts ūdens",
        group: "Nemirstīgā klasika / Neverending classic",
    },
    {
        title: "Long Island Iced Tea",
        price: "11,00",
        description: "vodka, rums, džins, tekila, Cointreau, citronu sula, laims, Coca Cola",
        group: "Nemirstīgā klasika / Neverending classic",
    },
    {
        title: "Tequila Sunrise",
        price: "8,50",
        description: "tekila, apelsīnu sula, grenadīna sīrups",
        group: "Nemirstīgā klasika / Neverending classic",
    },
    {
        title: "Pina Colada",
        price: "11,00",
        description: "rums, Malibu, ananāsu sula, saldējums, kokosriekstu sīrups",
        group: "Nemirstīgā klasika / Neverending classic",
    },
    {
        title: "Mai Tai",
        price: "8,90",
        description: "rums, Cointreau, Amaretto, ananāsu sula, grenadīna sīrups",
        group: "Nemirstīgā klasika / Neverending classic",
    },
    {
        title: "Caipiroshka",
        price: "7,90",
        description: "vodka, laims, brūnais cukurs",
        group: "Kokteiļi ar laimu / Cocktails with lime",
    },
    {
        title: "Mojito",
        price: "9,50",
        description: "rums, laims, piparmētras, brūnais cukurs, Sprite vai gāzēts ūdens",
        group: "Kokteiļi ar laimu / Cocktails with lime",
    },
    {
        title: "Riga Coffe",
        price: "7,50",
        description: "Rīgas Balzāms, kafija, brūnais cukurs, salds krējums, kanēlis",
        group: "Karstie kokteiļi / Hot cocktails",
    },
    {
        title: "Irish Coffe",
        price: "7,90",
        description: "īru viskijs, kafija, brūnais cukurs, salds krējums, kanēlis",
        group: "Karstie kokteiļi / Hot cocktails",
    },
    {
        title: "Karstais balzāms",
        price: "7,50",
        description: "Rīgas Balzāms, upeņu sula, krustnagliņas, kanēlis",
        group: "Karstie kokteiļi / Hot cocktails",
    },
    {
        title: "Amaretto Coffe",
        price: "8,00",
        description: "Amaretto, kafija, brūnais cukurs, salds krējums, kanēlis",
        group: "Karstie kokteiļi / Hot cocktails",
    },
    {
        title: "Groks",
        price: "7,50",
        description: "rums, melnā tēja, citrons, apelsīns, medus, garšvielas",
        group: "Karstie kokteiļi / Hot cocktails",
    },
    {
        title: "Karstais viskijs",
        price: "7,50",
        description: "viskijs, ābolu sula, citrons, apelsīns, medus, garšvielas",
        group: "Karstie kokteiļi / Hot cocktails",
    },
    {
        title: "Karstvīns",
        price: "7,50",
        description: "vīns, brūnais cukurs, sīrups, kanēlis, krustnagliņas",
        group: "Karstie kokteiļi / Hot cocktails",
    },
    {
        title: "Saule dvēselē",
        price: "7,50",
        description: "Martini, apelsīnu sula, citrons, grenadīns",
        group: "Karstie kokteiļi / Hot cocktails",
    },
];

const notes = {
    vini: "Par vīnu pieejamību un cenām jautāt viesmīlim / Ask the waiter about the availability and prices of wines",
    kafija: "Kafijas ar alkoholu, kā arī ledus tēju, ledus kafiju meklējiet kokteiļu sadaļā!",
};

export {
    karstieDzerieni,
    bezalkoholiskieDzerieni,
    bezalkoholiskieKokteili,
    alusUnSidrs,
    stiprieDzerieni,
    kokteili,
    notes,
};