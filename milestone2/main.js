$(document).ready(function () {
    // Qui le icone che abbiamo definito nella milestone 1
    class icon {
        constructor (name,prefix,type,family) {
            this.name = name;
            this.prefix = prefix;
            this.type = type;
            this.family = family;
        }
    }
  
    const myIcons = [
        new icon('cat','fas','fa-cat','animali'),
        new icon('dog','fas','fa-dog','animali'),
        new icon('hippo','fas','fa-hippo','animali'),
        new icon('crow','fas','fa-crow','animali'),
        new icon('horse','fas','fa-horse','animali'),
        new icon('carrot','fa','fa-carrot','vegetables'),
        new icon('pepper-hot','fas','fa-pepper-hot','vegetables'),
        new icon('robot','fas','fa-robot','user'),
        new icon('user-secret','fas','fa-user-secret','user'),
        new icon('user','fas','fa-users','user'),
        new icon('user-astronaut','fas','fa-user-astronaut','user'),
    ];
    // definiamo dei colori per le icone (blue, orange, purple)
    const container = document.querySelector('.icons');
    const blue = 'blue';
    const orange = 'orange';
    const purple = 'purple';
  
    //aggiungiamo dei colori usando una funzione
  
    const colorsArray = myIcons.map(element =>{
        if (element.family === 'animali'){
            var color = blue;
        } else if (element.family === 'vegetables'){
            var color = orange;
        }else {
            var color = purple;
        }

        const newColorsArray = {...element, color: color}
        
        return newColorsArray;
    });
    
    console.log(colorsArray);
    //inseriamo le icone colorate nel container
  
    print(colorsArray, container);

  function print(array, selector){
      array.forEach(element => {
          const {name,prefix,type,color} = element;
          selector.innerHTML += `<div>
          <i class="${prefix} ${type}" style="color:${color}"></i>
          <div class="title">${name}</div>
        </div>`;
      });
  }

  });
  