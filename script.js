let template = document.querySelector('#tmpl');
let search = document.querySelector('#search');

users = [
    {
        name: "Олег Качур",
        email: "o.kachur@artwinery.com.ua",
        position: "Директор*",
        img: "/images/avatar/large/steve.jpg"
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
    // console.log('<li class="">' + b.name + '<br>' +'<a href="mailto:'+ b.email + '">' + b.email + '</a>' +'</li>')
    const inHTML = users.filter(user => 
    {
       const name = user.name.toLowerCase();
       const email = user.email.toLowerCase();
       const searchVal = search.value.toLowerCase(); 
    return name.includes(searchVal)||email.includes(searchVal);

    }).reduce((a,b) =>  {
        return a + 
        `
        <div class="card">
        <div class="content">
          <img class="right floated mini ui image" src=${b.img||"/images/avatar/large/man.png"}>
          <div class="header">
          ${b.name}
          </div>
          <div class="meta">
          ${b.position}
          </div>
          <div class="description">
          <a href="mailto:${b.email}">${b.email}</a>
          </div>
        </div>
      </div>
        `
        
        // '<li>' + b.name + '<br>' + b.email + '</li>'
    
    },'');
    template.innerHTML = inHTML;
});
const inHTML = users.reduce((a,b) => {
    return a + 
    `
    <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src=${b.img||"/images/avatar/large/man.png"}>
      <div class="header">
      ${b.name}
      </div>
      <div class="meta">
      ${b.position}
      </div>
      <div class="description">
      <a href="mailto:${b.email}">${b.email}</a>
      </div>
    </div>
  </div>
    `
    
    // '<li>' + b.name + '<br>' + b.email + '</li>'

},'');

template.innerHTML = inHTML;