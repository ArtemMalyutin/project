// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
//подразумевается, что если пользователь не указал явно все граници диапозона а только одну
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// [подходящие курсы для каждого варианта фильтра]
filterByPrice(requiredRange1)


function filterByPrice(range) {
    //преобразовываем диапозон значений заданный пользователем для удобной работы с ним
    if (range[0] === null) { range[0] = 0}
    if (range[1] === null) { range[1] = Infinity}
    //проходим по всем объектам в courses
    for (let i = 0; i < courses.length; i++) {
        //проверяем, чтобы у курсов был диапозон цен (от и до)
        if(typeof courses[i].prices[0] === 'number'  && typeof courses[i].prices[1] === 'number'){
            //если диапозон задан, проверяем имеются ли курсы в подходящей пользователю ценовой категории
            if (!(range[0] > courses[i].prices[1] || range[1] < courses[i].prices[0])) {
                //если курсы имеются, то выводим название курсов в консоль
            console.log(courses[i].name)
            }
            //иначе, если у курсов нет стоимости или стоимоть определена одним единственным значением
        }else{
            courses[i].prices.forEach((item)=>{
                if(item != null){
                    //если у курсов имеется стоимость
                    // проверяем находится ли она в подходящей пользователю ценовой категории
                    if(item >= range[0] && item <= range[1]){
                        //выводим название курсов в консоль
                        console.log(courses[i].name)}
                        }
                    })
                }
            }
        }



