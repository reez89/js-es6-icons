
    // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family 
  
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

 console.log(myIcons);
    // Semezioniamo il container icons
  const container = document.querySelector('.icons');
    //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
  print(myIcons, container);

  function print(array, selector){
      array.forEach(element => {
          const {name,prefix,type} = element;
          selector.innerHTML += `<div>
          <i class="${prefix} ${type}" style="color:blue"></i>
          <div class="title">${name}</div>
        </div>`;
      });
  }

  
  
  /* ---- FUNCTIONS ----*/
  // Creiamo una funzione per iterare nell'array e che appenda al container le icone.
  // tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
  // tip: il template literal ci puo aiutare con il markup