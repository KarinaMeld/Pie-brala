const uzkodas = [
    {
        title: "Ķiploku grauzdiņi",
        price: "6,90",
        description: "pasniegti ar čili mērci un parmezāna sieru",
        allergens: [1, 3, 7],
    },
    {
        title: "Frī kartupeļi",
        price: "4,90",
        description: "ar majonēzi vai tomātu mērci, vai silto siera mērci pēc izvēles",
        allergens: [3, 7],
    },
    {
        title: "Kartupeļu pankūkas",
        price: "8,90",
        description: "ar brūkleņu ievārījumu un skābo krējumu",
        allergens: [3, 7],
    },
    {
        title: "Kartupeļu pankūkas",
        price: "13,90",
        description: "pasniegtas ar mazsālīta laša rozītēm",
        allergens: [1, 3, 4, 7],
    },
    {
        title: "Buffalo pikantie vistas spārniņi",
        description: "ar dor blue mērci, pasniegti ar paprikas, burkānu salmiņiem un sezama sēklām",
        variants: [
            {
                label: "8 gab.",
                price: "8,90"
            },
            {
                label: "12 gab.",
                price: "10,90"
            },
            {
                label: "24 gab.",
                price: "15,90"
            },
        ],
        allergens: [7, 9, 11, 12],
    },
    {
        title: "Mīdijas baltvīna mērcē",
        price: "11,90",
        description: "",
        allergens: [7, 9, 14],
    },
    {
        title: "Vārīti vēži diļļu marinādē",
        price: "14,00",
        description: "ar svaigu citronu",
        allergens: [2],
    },
    {
        title: "Alus uzkodu plate",
        price: "18,90",
        description: "ķiploku grauzdiņi, buffalo spārniņi, pavasara rullīši, cepts mocarellas siers, kalmāru gredzeni un čili mērce",
        allergens: [1, 2, 3, 7, 12],
    },
];

const salati = [
    {
        title: "Cēzara salāti",
        description: "ar grauzdiņiem, ķiršu tomātiem, mūsu īpašo mērci, pasniegti pēc izvēles",
        variants: [
            {
                label: "ar bekonu",
                price: "9,90"
            },
            {
                label:
                    "ar grilētu vistas fileju",
                price: "10,90"
            },
            {
                label: "ar tīģergarnelēm",
                price: "11,90",
                allergens: [2]
            },
        ],
        allergens: [1, 3, 4, 7, 9, 10],
    },
    {
        title: "Avokado-mazsālīta laša salāti",
        price: "11,90",
        description: "pasniegti ar silto siera tortilju",
        allergens: [4, 9, 10],
    },
    {
        title: "Veselīgie cepta laša salāti",
        price: "11,90",
        description: "ar marinētiem sīpoliem",
        allergens: [4, 9, 10],
    },
    {
        title: "Kazas siera buche salāti",
        price: "12,90",
        description: "ar svaigām zemenēm, grauzdētām mandelēm, kaltētām dzērvenēm un čia sēklām",
        allergens: [7, 8, 10],
    },
    {
        title: "Karstie baklažānu salāti",
        price: "12,90",
        description: "ar grilētu vistas fileju, apelsīnu filejām, sezam sēklām un terjaki mērci",
        allergens: [3, 6, 7],
    },
];

const pinsas = [
    {
        title: "Pinsa ar sieru un oregano",
        price: "10,90",
        description: "",
        allergens: [1, 3, 7, 8],
    },
    {
        title: "Pinsa ar čorizo desu un peperoni pipariem",
        price: "11,90",
        description: "",
        allergens: [1, 3, 7, 12],
    },
    {
        title: "Pinsa “Pie Brāļa”",
        price: "12,90",
        description: "ar vistas gaļu, cūkgaļu, sieru, šampinjoniem, karamelizētiem sīpoliem, balzamiko karameli un oregano",
        allergens: [1, 3, 7, 12],
    },
];

const zupas = [
    {
        title: "Soļanka",
        price: "7,90",
        description: "ar olīvām, svaigiem zaļumiem, skābo krējumu un citronu",
        allergens: [7, 9],
    },
    {
        title: "Tomātu krēmzupa",
        price: "7,90",
        description: "ar mocarellas sieru un bazilika pesto mērci",
        allergens: [7, 8],
    },
    {
        title: "Jūras velšu zupa “Pie Brāļa” gaumē",
        price: "9,90",
        description: "",
        allergens: [2, 4],
    },
];

const pastas = [
    {
        title: "Tagliatelle ar vistas fileju",
        price: "11,90",
        description: "pasniegta ar dārzeņiem, parmezāna sieru kokosriekstu mērcē",
        allergens: [1, 3, 7, 12],
    },
    {
        title: "Tagliatelle ar jūras veltēm",
        price: "11,90",
        description: "ar dārzeņiem baltvīna mērcē un trifeļu eļļu",
        allergens: [1, 2, 3, 4, 7, 14],
    },
    {
        title: "Tagliatelle ar tīģergarnelēm",
        price: "11,90",
        description: "pasniegta krējuma mērcē ar ciedru riekstiem",
        allergens: [1, 2, 3, 4, 7, 14],
    },
];

const pamatedieni = [
    {
        title: "Vistas šašliks",
        price: "14,90",
        description: "pasniegts ar frī kartupeļiem, svaigu dārzeņu salātiem, marinētiem sīpoliem un tomātu mērci",
        allergens: [10, 12],
    },
    {
        title: "“Pie Brāļa” iecienītā grilētā vistas fileja mango marinādē",
        price: "14,90",
        description: "ar pašmāju frī kartupeļiem un svaigu dārzeņu salātiem",
        allergens: [7],
    },
    {
        title: "Cūkgaļas šašliks",
        price: "14,90",
        description: "pasniegts ar frī kartupeļiem, svaigu dārzeņu salātiem, marinētiem sīpoliem un tomātu mērci",
        allergens: [12],
    },
    {
        title: "Cūkgaļas karbonāde ar kauliņu",
        price: "14,90",
        description: "ar grilētiem sezonas dārzeņiem, kartupeļu-spinātu biezeni un zaļo pipargraudu mērci",
        allergens: [7, 10, 12],
    },
    {
        title: "Pašmāju gaumē gatavotas cūkgaļas ribiņas",
        price: "17,90",
        description: "pasniegtas ar kartupeļiem mundierī, marinētiem sīpoliem, grilētu kukurūzu un krēmīgo čili-mārrutku mērci",
        allergens: [7, 8, 10],
    },
    {
        title: "Latviešu gaumē pagatavots cūkgaļas stilbiņš",
        price: "25,90",
        description: "ar svaigiem dārzeņiem, pašmāju frī kartupeļiem un krēmīgo čilī-mārrutku mērci (2 personām)",
        allergens: [7, 10, 12],
    },
    {
        title: "Krāsnī cepta zandarta fileja",
        price: "14,90",
        description: "ar grilētiem sezonas dārzeņiem, grilētu kukurūzu un baltvīna-trifeļu mērci",
        allergens: [4, 7],
    },
    {
        title: "Krāsnī cepta laša steiks",
        price: "17,90",
        description: "ar grilētiem sezonas dārzeņiem, grilētu kukurūzu un baltvīna-trifeļu mērci",
        allergens: [4, 7],
    },
    {
        title: "Grilētas tīģergarneles",
        price: "19,90",
        description: "ar grilētiem sezonas dārzeņiem, grilētu kukurūzu un baltvīna mērci",
        allergens: [2, 7],
    },
    {
        title: "Pīles krūtiņa",
        price: "17,90",
        description: "ar grilētiem sezonas dārzeņiem, grilētu kukurūzu un zaļo pipargraudu mērci",
        allergens: [7],
    },
    {
        title: "Teļa vaigi",
        price: "19,90",
        description: "ar grilētiem sezonas dārzeņiem, kartupeļu-siera gratine un sarkanvīna mērci",
        allergens: [7, 12],
    },
    {
        title: "Ribeye steiks",
        price: "24,90",
        description: "ar grilētiem sezonas dārzeņiem, krāsnī ceptu siera kartupeli un sarkanvīna mērci",
        allergens: [7, 12],
    },
    {
        title: "Liellopa filejas steiks",
        price: "27,90",
        description: "ar grilētiem sezonas dārzeņiem, krāsnī ceptu siera kartupeli un sarkanvīna mērci",
        allergens: [7, 12],
    },
];

const burgeri = [
    {
        title: "Plucinātas cūkgaļas burgers",
        price: "11,90",
        description: "brioš burgera maizīte ar čedra sieru, mājas kartupeļiem frī un tomātu mērci",
        allergens: [1, 3, 7, 12],
    },
    {
        title: "Grilētas vistas filejas burgers",
        price: "12,90",
        description: "brioš burgera maizītē ar čedra sieru, kraukšķīgu bekonu, mājas kartupeļiem frī un tomātu mērci",
        allergens: [1, 3, 7, 12],
    },
    {
        title: "Black Angus liellopa burgers",
        price: "13,90",
        description: "brioš burgera maizītē ar čedra sieru, kraukšķīgu bekonu, mājas kartupeļiem frī un tomātu mērci",
        allergens: [1, 3, 7, 12],
    },
];

const deserti = [
    {
        title: "Pašu gatavota saldējumu izlase",
        price: "6,90",
        description: "šokolādes, vaniļas, zemeņu, 3 bumbiņas",
        allergens: [7],
    },
    {
        title: "“Pie Brāļa” gardā ķiršu-marcipāna strūdele",
        price: "7,90",
        description: "ar vaniļas saldējumu",
        allergens: [1, 3, 7],
    },
    {
        title: "Crème brûlée",
        price: "7,90",
        description: "",
        allergens: [7],
    },
    {
        title: "Gardi, gardā “Pie Brāļa” siera kūka",
        price: "8,90",
        description: "ar šokolādes mērci un sezonas ogām",
        allergens: [1, 3, 7],
    },
    {
        title: "Šokolādes fondants",
        price: "8,90",
        description: "ar vaniļas saldējumu",
        allergens: [1, 3, 7],
    },
];

const notes = {
    pinsas: "Aizraujoši jauna pieredze - romiešu pica ar 72h fermentētu mīklu",
    serviceCharge: "Kompānijām sākot no 8 personām, par apkalpošanu 10% klāt pie rēķina.",
};

export {
    uzkodas,
    salati,
    pinsas,
    zupas,
    pastas,
    pamatedieni,
    burgeri,
    deserti,
    notes,
};