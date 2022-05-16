const zucchine = [
    {
        varietà : "varietà 1",
        peso : 7,
        lunghezza : 10,
    },
    
    {
        varietà : "varietà 2",
        peso : 5,
        lunghezza : 15,
    },
    
    {
        varietà : "varietà 3",
        peso : 3,
        lunghezza : 18,
    },
    
    {
        varietà : "varietà 4",
        peso : 8,
        lunghezza : 13,
    },
    
    {
        varietà : "varietà 5",
        peso : 2,
        lunghezza : 10,
    },
    
    {
        varietà : "varietà 6",
        peso : 20,
        lunghezza : 10,
    },
    
    {
        varietà : "varietà 7",
        peso : 12,
        lunghezza : 10,
    },
    
    {
        varietà : "varietà 8",
        peso : 5,
        lunghezza : 15,
    },
    
    {
        varietà : "varietà 9",
        peso : 9,
        lunghezza : 14,
    },
    
    {
        varietà : "varietà 10",
        peso : 12,
        lunghezza : 20,
    },
]

const array1 = [];
const array2 = [];

for(let i=0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza < 15 ) {
        array1.push(zucchine[i])
    }
    else {
        array2.push(zucchine[i])
    }
}

console.log("Primo Array");
for (let i=0; i < array1.length; i++) {
    console.log(array1[i].varietà)
}

console.log("Secondo Array");
for (let i=0; i < array2.length; i++) {
    console.log(array2[i].varietà)
}