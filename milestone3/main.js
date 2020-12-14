$(document).ready(function () {

    // icone come da milestone 1
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
   
     // colori come da milestone 2
     const container = document.querySelector('.icons');
     const blue = 'blue';
     const orange = 'orange';
     const purple = 'purple';
   
     //aggiungiamo dei colori come da milestone 2

     const colorsArray = myIcons.map(element =>{
         
        switch (true) { // PROVATO CON UNO SWITCH CASE INVECE DI UN IF ELSE.
             case element.family === 'animali':
                var color = blue;
                break;
             case element.family === 'vegetables':
                var color = orange;
                 break;
             case element.family === 'user':
                var color = purple;
                 break;
         }
        // if (element.family === 'animali'){
        //     var color = blue;
        // } else if (element.family === 'vegetables'){
        //     var color = orange;
        // }else {
        //     var color = purple;
        // }

        const newColorsArray = {...element, color: color};
        
        return newColorsArray;
    });

     //inseriamo le icone nel container come da milestone 2
   
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
   
     
     //estrapoliamo i tipi di icone
     const select = $('#type');
     
     //aggiungiamo i tipi alla select
     select.append('<option value="animali">Animali</option>');
     select.append('<option value="vegetables">Vegetables</option>');
     select.append('<option value="user">Users</option>');
     //al change mostriamo solo le icone filtrate
     


     /* JQUERY VERSION */
     select.change(function(){

        const choice = $('#type option:selected').val(); 

        const newFilterArray = colorsArray.filter( i => i.family === choice);

        $('div.icons').empty(); // JQUERY VERSION
        
        print(newFilterArray, container);

        if (choice == 'all'){
            print(colorsArray, container);
        }
     });

     /* VANILLA JAVASCRIPT */
    //  const elementSelection = document.getElementById('type');

    //  elementSelection.addEventListener('change', event => {

    //     const choice = $('#type option:selected').val();

    //     const newFilterArray = colorsArray.filter( i => i.family === choice);

    //     container.innerHTML = '';

    //     print(newFilterArray, container);

    //     if (choice == 'all'){
    //         print(colorsArray, container);
    //     }
         
    //  })
     //mostriamo come passare un parametro a change e contemporaneamente destrutturiamo
   
   
   
   /* ---- FUNCTIONS ----*/
   
});