const somaarray = () =>{
    const packs1 = [ 
        { dimensions: 295200 },
        { dimensions: 247500 },
        { dimensions: 247500 },
        { dimensions: 123750 },
        { dimensions: 79200 },
        { dimensions: 8400 },
        { dimensions: 5000 } 
      ]
      const packs2 = [ 
        { dimensions: 295200 },
        { dimensions: 247500 },
        { dimensions: 247500 },
        { dimensions: 123750 },
        { dimensions: 79200 },
        { dimensions: 8400 },
        { dimensions: 5000 } 
      ]
      let remainingPacks = []
      let summedResults = []

      for(let i=0; i< packs1.length; i++){
        for(let j=0; j< packs2.length; j++){
          if(i != j){
            if((packs1[i].dimensions + packs2[j].dimensions)<296296){
              summedResults.push((packs1[i].dimensions + packs2[j].dimensions))
              packs2.splice(j,1)
              break
            }
            remainingPacks.push(packs1[i].dimensions)            
          }
          
        }
      }
      console.log('Remancentes = '+ remainingPacks)
      console.log('Somados ='+ summedResults)

}

somaarray()

