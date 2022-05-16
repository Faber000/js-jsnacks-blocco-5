const zucchine = [
    {
        peso : 7,
        lunghezza : 10,
    },
    
    {
        peso : 5,
        lunghezza : 15,
    },
    
    {
        peso : 3,
        lunghezza : 18,
    },
    
    {
        peso : 8,
        lunghezza : 13,
    },
    
    {
        peso : 2,
        lunghezza : 10,
    },
    
    {
        peso : 20,
        lunghezza : 10,
    },
    
    {
        peso : 12,
        lunghezza : 10,
    },
    
    {
        peso : 5,
        lunghezza : 15,
    },
    
    {
        peso : 9,
        lunghezza : 14,
    },
    
    {
        peso : 12,
        lunghezza : 20,
    },
]

let somma=0;
for(let i=0; i < zucchine.length; i++) {
    somma += zucchine[i].peso;
}

alert("la somma è "+somma);