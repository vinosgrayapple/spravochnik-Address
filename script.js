let template = document.querySelector('#tmpl');
let search = document.querySelector('#search');
let units = document.querySelectorAll('.ui.compact.segment');
users = [
    {
        name: "Олег Качур",
        email: "o.kachur@artwinery.com.ua",
        position: "Директор",
        unit: "Административные",
        img: "images/avatar/large/kachur.jpg",
        birthday: "01.04.1983"
    },
    {
        name: "Игорь Толкачев",
        email: "igor.tolkachov@artwinery.com.ua",
        position: "Директор",
        unit: "Административные",
        img: "images/avatar/large/steve.jpg",
        birthday: "15.01.1971"
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
units.forEach(unit_item => unit_item.addEventListener('click',() => {
    unit_item.classList.toggle('green');
    unit_item.classList.toggle('grey');
    let unit_ = unit_item.dataset.unit;
    const inHTML = users.filter(user => user.unit.includes(unit_))
        .reduce((a,b) =>  {
            return a + 
    `
        <div class="card">
            <div class="content">
                <img class="right floated mini ui image" src=${b.img || "images/avatar/large/man.png"}>
                    <div class="header">
                         ${b.name}
                    </div>
                <div class="meta">
                    ${b.position || "&nbsp;"}
                </div>
                    <div class="description">
                        <a href="mailto:${b.email}">${b.email}</a>
                    </div>
            </div>
        </div>
    `
    },'');
    template.innerHTML = inHTML;
}));
search.addEventListener('focus', () => {
    units.forEach(unit=>{
        unit.classList.remove('green')
        unit.classList.add('grey');
    });
});
search.addEventListener('keyup', () => {
     const inHTML = users.filter(user => 
    {
       const name = user.name.toLowerCase();
       const email = user.email.toLowerCase();
       const searchVal = search.value.toLowerCase(); 
       return name.includes(searchVal) || email.includes(searchVal);
    }).reduce((a,b) =>  {
        return a + 
        `
        <div class="card">
        <div class="content">
          <img class="right floated mini ui image" src=${b.img || "images/avatar/large/man.png"}>
          <div class="header">
          ${b.name}
          </div>
          <div class="meta">
          ${b.position || "&nbsp;"}
          </div>
          <div class="description">
          <a href="mailto:${b.email}">${b.email}</a>
          </div>
        </div>
      </div>
        `
    },'');
    template.innerHTML = inHTML;
});
const inHTML = users.reduce((a,b) => {
    return a + 
    `
    <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src=${b.img || "images/avatar/large/man.png"}>
      <div class="header">
      ${b.name}
      </div>
      <div class="meta">
      ${b.position || "&nbsp;"}
      </div>   
      <div class="description">
      <a href="mailto:${b.email}">${b.email}</a>
      </div>
    </div>
  </div>
    `
},'');

template.innerHTML = inHTML;
