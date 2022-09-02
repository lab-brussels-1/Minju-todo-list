const root = document.getElementById("root");
const addItem = document.getElementById("addBtn");
addItem.addEventListener("click", addFunction);

function addFunction () {
    const input = document.getElementById("myInput").value;
   
    if(input != ""){
      postTodo();
    }
    }

      const postTodo=  async () => 
      {
          try
          {
              const input = document.getElementById("myInput").value;
              console.log("INPUT inisde",input)
              const res = await fetch("http://localhost:5000/todos",
              {
                  method: 'POST',
                  headers: 
                  {
                      'Accept': 'application/json',
                      'Content-type': 'application/json',
                  },
                  body : JSON.stringify({title : input , completed : false})
              });
          
              // CHECK RES
              if (res.status === 201)
              {
                  const data = await res.json();
                 // console.log("data",data)
                  const container = document.createElement('div')
                  container.classList.add('item');
                  const textLabel = document.createElement('p');
                  textLabel.textContent=input;
                  container.appendChild(textLabel);
                  root.append(container);     
                  return data;
              }
              else
              {
                  console.log(`Error while posting todo with status : ${res.status}`);
                  return false;
              }
          }
          catch(err)
          {
              console.error(err);
          }
          
      }
