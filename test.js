// import "isomorphic-fetch";
const url='https://randomuser.me/api/?results=100';
    // dataType: 'json',
    // success: function(data) {
    //   console.log(data);
    fetch(url).then(function(response) {
        var contentType = response.headers.get("content-type");
        if(contentType && contentType.includes("application/json")) {
          return response.json();
        }
        throw new TypeError("Oops, we haven't got JSON!");
      })
      .then(function(json) { 
          console.log('------------------------------------');
          console.log(json.results[0].picture);
          console.log('------------------------------------');
       })
      .catch(function(error) { console.log(error); });