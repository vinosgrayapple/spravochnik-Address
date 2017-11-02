let template = document.querySelector('#tmpl');
let search = document.querySelector('#search');

users = [
    {
        name: "Коля",
        email: "vasya@gmail.com"
    },
    {
        name: "Федя",
        email: "fedya@gmail.com"
    },
    {
        name: "Вася",
        email: "kolya@gmail.com"
    },{
        name: "Вася",
        email: "kolya@gmail.com"
    },
    {
        name: "коля",
        email: "kolya@gmail.com"
    },
    {
        name: "Вася",
        email: "kolya@gmail.com"
    },
    {
        name: "Вася",
        email: "kolya@gmail.com"
    },{
        name: "Вася",
        email: "kolya@gmail.com"
    },
    {
        name: "Вася",
        email: "kolya@gmail.com"
    },
    {
        name: "Вася",
        email: "kolya@gmail.com"
    },
    {
        name: "Вася",
        email: "kolya@gmail.com"
    },{
        name: "Вася",
        email: "kolya@gmail.com"
    },
    {
        name: "Вася",
        email: "kolya@gmail.com"
    },
    {
        name: "Вася",
        email: "kolya@gmail.com"
    },
    {
        name: "Вася",
        email: "kolya@gmail.com"
    },{
        name: "Вася",
        email: "kolya@gmail.com"
    }
];
search.addEventListener('keyup', () => {
    // console.log('hi');
    const inHTML = users.filter(user => 
    {
       const name = user.name.toLowerCase();
       const email = user.email.toLowerCase();
       const searchVal = search.value.toLowerCase(); 
    return name.includes(searchVal)||email.includes(searchVal);
    }).reduce((a,b) => a + '<li>' + b.name + '<br>' + b.email + '</li>','');
    template.innerHTML = inHTML;
});
const inHTML = users.reduce((a,b) => a + '<li>' + b.name + '<br>' + b.email + '</li>','');

template.innerHTML = inHTML;