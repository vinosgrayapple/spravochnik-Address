let template = document.querySelector('#tmpl');
let search = document.querySelector('#search');
let units = document.querySelectorAll('.ui.compact.segment');
let searchClear = document.querySelector('.close.link.icon');


searchClear.addEventListener('click', () => {
    search.value=""
    printUsers(users);
});

const unitsClear = () => {
    units.forEach(item => {
        toggleClass(item, 'green', 'grey');
       if ( item.querySelector('span.label') !== null) {
        item.querySelector('span.label').remove();        
       }
            // item.querySelector('span.label').remove();
            // console.log(item.querySelector('span'));
            if (item.querySelector('span').innerText !== "Административные") {
                item.style.paddingBottom = "14px";
            } else {
                item.style.paddingBottom = "11px";
            }
            // item.style.paddingBottom = "14px";
    });
};
const printUsers = (arr) => {
    
    template.innerHTML =  arr.reduce((a,b) =>  {
        const sexImg = b.gender === "woman" ? "images/avatar/large/woman.png" : "images/avatar/large/man.png";
        const iconCall = (text) => {
           if (b.internalPhone)
                return text;
                return '';
        }
        
            return a + 
    `
        <div class="card transition hidden" style="display: inline-block !important;">
            <div class="content">
                <a class="ui image big label">
                <img src=${b.img || sexImg}>
                ${b.name}
                </a>
                
                <div class="meta">
                    ${b.position || "&nbsp;"}
                </div>

                    <div class="description">
                    <a class="ui ${iconCall('label')}">
                    <i  class="call ${iconCall('icon')}"></i>
                    ${b.internalPhone  || "&nbsp;"}
                  </a>
                    <br>
                    <a href="mailto:${b.email}">${b.email}</a>
                    </div>
            </div>
        </div>
    `
    },'');
    // <i class="call ${iconCall()}">${b.internalPhone  || "&nbsp;"}</i>
    $('.card')
    // .transition('horizontal flip', '500ms');
    .transition({
      animation : 'slide down',
      reverse   : 'auto', 
      interval  : 50
    })
  ;
};
// <a href="mailto:${b.email}">${b.email}</a>
const toggleClass = (context, delClass, addClass) => {
    context.classList.remove(delClass);
    context.classList.add(addClass)
};
users = [
    {
        name: "Олег Качур",
        email: "o.kachur@artwinery.com.ua",
        internalPhone: "5-65",
        position: "Директор",
        unit: "Административные",
        department:"",
        gender: "man",
        img: "images/avatar/large/kachur.jpg",
        birthday: "01.04.1983"
    },
    {
        name: "Игорь Толкачев",
        email: "igor.tolkachov@artwinery.com.ua",
        internalPhone: "",
        position: "Директор",
        unit: "Административные",
        department:"",
        gender: "man",
        img: "images/avatar/large/steve.jpg",
        birthday: "15.01.1971"
    },
    {
        name: "Виктория Малеваная",
        email: "v.malovana@artwinery.com.ua",
        internalPhone: "",
        position: "Директор",
        unit: "Административные",
        department:"",
        gender: "woman",
        img: "",
        birthday: ""
    },{
        name: "Денис Ермаков",
        email: "d.yermakov@artwinery.com.ua",
        internalPhone: "",
        position: "Начальник отдела ОМТСиТЛ",
        unit: "Вспомогательные",
        department:"ОМТСиТЛ",
        gender: "man",
        img: "",
        birthday: ""
    },
    {
        name: "Максим Герасименко",
        email: "m.gerasimenko@artwinery.com.ua",
        internalPhone: "",
        position: "Начальник отдела продаж",
        unit: "Сбытовые",
        department:"",
        gender: "man",
        img: "",
        birthday: ""
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
units.forEach(unit => unit.onmousedown = unit.onselectstart = function() {
    return false;
});
units.forEach(unit_item => unit_item.addEventListener('click',() => {
    unitsClear();
    toggleClass(unit_item, 'grey', 'green');
    
    search.blur();
    let unit_ = unit_item.dataset.subunit;
    
    if (unit_item.querySelector('span').innerText !== "Административные") {
        unit_item.style.paddingBottom = "0px";
    } else {
        unit_item.style.paddingBottom = "11px";
    }

    const span = document.createElement('span');
    span.className = "floating ui purple label";
    
    
    
    if (unit_ === "Показать все") {
        span.innerHTML = users.length;
        printUsers(users);
        
        // toggleClass(unit_item, 'grey', 'green'); 
    } else {
        span.innerHTML = users.filter(user => user.unit ?  user.unit.includes(unit_) : false).length;
         printUsers(users.filter(user => user.unit ?  user.unit.includes(unit_) : false));
    }
    unit_item.appendChild(span);
   
}));
search.addEventListener('focus', () => {
    unitsClear();
    units.forEach(unit=>{
        toggleClass(unit,'green', 'grey');
    });
    printUsers(users);
});
search.addEventListener('keyup', () => {
    printUsers(users.filter(user => 
    {
       const name = user.name.toLowerCase();
       const email = user.email.toLowerCase();
       const searchVal = search.value.toLowerCase(); 
       return name.includes(searchVal) || email.includes(searchVal);
    }));
});
printUsers(users);

// mt
document.querySelector('.units :first-child').style.marginTop = "14px";
document.querySelector('.units :first-child').style.paddingBottom = "11px";