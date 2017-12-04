let template = document.querySelector('#tmpl');
let search = document.querySelector('#search');
let units = document.querySelectorAll('.ui.compact.segment');
let searchClear = document.querySelector('.close.link.icon');

const cutText = text => {
    if (text.length > 20) {
        return text.slice(0,18) + '...';
    }
    return text;
};


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
        };
       const imgId = b.email.replace(/[^a-z]/gi,'');
       
        // $( '.' + imgId ).tooltip({
        //     delay: { "show": 500, "hide": 100 },
        //     title:`<img src="${b.img || sexImg}">`,
        //     html:true,
        // }); 
            return a + 
    `
        <div class="card transition hidden" style="display: inline-block !important;">
            <div class="content">
            
           <a class="ui image big label clip">
                <img src=${b.img || sexImg} class="${imgId}">
                <span class="clip span_name" title="${b.name}">${cutText(b.name)}</span>
                
                </a>
                <!-- <var class="published" title="${b.birthday}">${b.birthday}</var> -->
        
                        <br>
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

const toggleClass = (context, delClass, addClass) => {
    context.classList.remove(delClass);
    context.classList.add(addClass)
};
fetch("users.json")
  .then(response => {
    console.log(response.headers.get("Content-Type")); // application/json; charset=utf-8
    if (response.status) return response.json();
  })
  .then(users => {
    units.forEach(unit => (unit.onmousedown = unit.onselectstart = function() {
          return false;
        }));
    units.forEach(unit_item => unit_item.addEventListener("click", () => {
        unitsClear();
        toggleClass(unit_item, "grey", "green");

        search.blur();
        let unit_ = unit_item.dataset.subunit;

        if (unit_item.querySelector("span").innerText !== "Административные") {
          unit_item.style.paddingBottom = "0px";
        } else {
          unit_item.style.paddingBottom = "11px";
        }

        const span = document.createElement("span");
        span.className = "floating ui purple label";

        if (unit_ === "Показать все") {
          span.innerHTML = users.length;
          printUsers(users);
          search.value = "";
          // toggleClass(unit_item, 'grey', 'green');
        } else {
          span.innerHTML = users.filter(user => (user.unit ? user.unit.includes(unit_) : false)).length;
          printUsers(users.filter(user => (user.unit ? user.unit.includes(unit_) : false)));
        }
        unit_item.appendChild(span);
      }));
    search.addEventListener("focus", () => {
      unitsClear();
      units.forEach(unit => {
        toggleClass(unit, "green", "grey");
      });
      printUsers(users);
    });
    search.addEventListener("keyup", () => {
      printUsers(users.filter(user => {
          const name = user.name.toLowerCase();
          const email = user.email.toLowerCase();
          const searchVal = search.value.toLowerCase();
          return name.includes(searchVal) || email.includes(searchVal);
        }));
    });
    searchClear.addEventListener("click", () => {
      search.value = "";
      printUsers(users);
    });

    printUsers(users);

  })
  .catch(alert);



// mt
document.querySelector('.units :first-child').style.marginTop = "14px";
document.querySelector('.units :first-child').style.paddingBottom = "11px";


// $(document)
// .ready(function() {
// users.forEach(user => {
//     const imgId = user.email.replace(/[^a-z]/gi,'');
//     console.log('.' + imgId );
//      $( '.' + imgId ).tooltip({
//          delay: { "show": 500, "hide": 100 },
//          title:`<img src="${user.img || ''}">`,
//          html:true,
//      }); 
// });
// //this works
//     $('.fade-down')
//     .transition('bounce')
//   ;
// //this doesn't
//     var self = this;
//     $('.fade-down').hover( function() {
//     self.transition("bounce");
//     })
// })
// ;