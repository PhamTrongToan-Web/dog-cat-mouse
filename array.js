var names = ['Toan', 'Tram', 'Toan', 'Tram'];

var appearName = names.reduce(function(acc,cur){
    if(cur in acc){
        acc[cur]++;
    }else{
        acc[cur] = 1;
    }

    return acc;
}, {})

console.log(appearName);