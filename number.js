var x=10
   for(i=0;i<x;i++)
            console.log(i)
    for(j=0;j<x;j++)
     {
        if(j%2==0)
            console.log(j)
      }
    for(z=0;z<x;z++)
    {
        if(z%2==1)
            console.log(z)
    }
    
    
    //for in loop example
    var person={name:"jyothi",lastName:"pala",age:26}
    let k
    for(k in person)
    {
        console.log(person)
    }
    
    
    
    //for/of loop example
    let name=["kim","song","hyun"]
    for(x of name)
    {
        console.log(name)
    }
    