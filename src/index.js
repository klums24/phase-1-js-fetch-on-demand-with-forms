const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault(); //prevent page from refreshing when "form" is submitted
      const input = document.querySelector("input#searchByID");

      console.log(input.value);

      //setup fetch
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
          //store the 2 elements we retrieved with const "title" and const "summary"
          //Title and summary are located inside "section" tags with id "movieDetails" 
          //so path is "section#movieDetails"
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");

          //change contents of 2 elements we just created ("title", "summary")
          title.innerText = data.title;
          summary.innerText = data.summary;
          
        })
         
    });

    
  };
  
  document.addEventListener("DOMContentLoaded", init);
