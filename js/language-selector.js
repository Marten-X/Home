let language = document.querySelectorAll(".change-lang");
let languageNav = document.querySelectorAll(".change-lang-nav");

const mySelect = document.getElementById('language');

const initialValue = mySelect.value;
console.log('Initial value:', initialValue); 

let ceb = [
    "BALAY",
    "mahitungod sa",
    "MGA KAASAN",
    "KONTAK",
    "Nagtinguha nga tigdesinyo sa Web",
    "Hello, Ako si Marten",
    'Dili ka kinahanglan nga layo. Aron moadto sa layo.',
    'Mahitungod Kanako',
    'Ako usa ka madasigon nga Full-Stack Developer nga adunay 1 ka tuig nga kasinatian, nga nag-uswag gikan sa usa ka Junior Developer sa usa ka tech firm ngadto sa usa ka Lead Engineer. Ang akong kinauyokan nga pilosopiya mao ang pagdugtong sa cutting-edge nga teknolohiya sa praktikal nga mga tumong sa negosyo.',
    'Akong Kahanas ug Kahanas',
    'Pagsulbad sa Suliran ug Pag-debug',
    'Kolaborasyon sa Team ug Komunikasyon',
    'Padayon nga Pagkat-on',
    'Pagdumala sa Oras ug Organisasyon',
    "KONTAK",
    'Ngalan:',
    'Isumite'
    ];
let cebNav = [
    "BALAY",
    "mahitungod sa",
    "MGA KAASAN",
    "KONTAK"
    ]
let eng = [ 
    'HOMe',
    'ABOUT',
    'SKILLS',
    'CONTACT',
    'Aspiring Web designer',
    'Hello,My name is Marten',
    "You don't have far to go. To go far.",
    'About Me',
    'I am a passionate Full-Stack Developer with 1 years of experience, evolving from a Junior Developer at a tech firm to a Lead Engineer. My core philosophy is bridging cutting-edge technology with practical business goals.',
    'My Skills & Expertise',
    'Problem-Solving & Debugging',
    'Team Collaboration & Communication',
    'Continuous Learning',
    'Time Management & Organization',
    'Contact',
    'Name:',
    'Submit'
    ];
let engNav = [ 
    'HOMe',
    'ABOUT',
    'SKILLS',
    'CONTACT'
    ]

let fil = [
    'BAHAY',
    'TUNGKOL SA',
    'kasanayan',
    'contact',
    'Naghahangad na Web designer',
    'Hello, Ang pangalan ko ay Marten',
    'wala kang kailangang puntahan. Upang pumunta sa malayo.',
    'Tungkol sa Akin',
    'Isa akong masigasig na Full-Stack Developer na may 1 taong karanasan, na umuunlad mula sa isang Junior Developer sa isang tech firm hanggang sa isang Lead Engineer. Ang aking pangunahing pilosopiya ay pinagsasama ang makabagong teknolohiya sa mga praktikal na layunin sa negosyo.',
    'Aking Mga Kasanayan at Dalubhasa',
    'Paglutas ng Problema at Pag-debug',
    'Kolaborasyon at Komunikasyon ng Koponan',
    'Patuloy na Pag-aaral',
    'Pamamahala ng Oras at Organisasyon',
    'contact',
    'Pangalan:',
    'Isumite'
    ];
let filNav = [
    'BAHAY',
    'TUNGKOL SA',
    'kasanayan',
    'contact'
    ]


mySelect.addEventListener('change', (event) => {
  const selectedValue = event.target.value;
  console.log('New selected value:', selectedValue);
    if (selectedValue == 'English'){
        for(let i=0;i<language.length;i++) {
        language[i].innerText = eng[i];
    }
    for(let i=0;i<languageNav.length;i++) {
        languageNav[i].innerText = engNav[i];
    }} else if (selectedValue == 'Cebuano'){
        for(let i=0;i<language.length;i++) {
        language[i].innerText = ceb[i];
    }
    for(let i=0;i<languageNav.length;i++) {
        languageNav[i].innerText = cebNav[i];
    }}
    else if (selectedValue == 'Filipino'){
        for(let i=0;i<language.length;i++) {
        language[i].innerText = fil[i];
    }
    for(let i=0;i<languageNav.length;i++) {
        languageNav[i].innerText = fil[i];
    }}
    else {console.log("something went wrong");}
});
console.log(language.length,fil.length,eng.length,eng.length);
