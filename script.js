let template = document.querySelector('#tmpl');
let search = document.querySelector('#search');

users = [
    {
        name: "Олег Александрович Качур",
        email: "o.kachur@artwinery.com.ua"
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
        <div class="ui card">
        <a class="image" href="#">
          <img src="/images/avatar/large/steve.jpg">
        </a>
        <div class="content">
          <a class="header" href="#">${b.name}</a>
          <div class="meta">
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
    <div class="ui card">
    <a class="image" href="#">
      <img src="/images/avatar/large/man.png">
    </a>
    <div class="content">
      <a class="header" href="#">${b.name}</a>
      <div class="meta">
        <a>${b.email}</a>
      </div>
    </div>
  </div>
    `
    
    // '<li>' + b.name + '<br>' + b.email + '</li>'

},'');

template.innerHTML = inHTML;