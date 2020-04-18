class Love
{
    constructor(jyothi)
    {
        this.lovename=jyothi
    }
    display()
    {
    return "i love " +this.lovename;
    }
}
class Care extends Love
{
    constructor(jyothi,akash)
    {
        super(jyothi)
        this.carename=akash;
    }
    show()
    {
        return this.display()+ "i love"+this.carename;
    }

}
mycare=new Care("akash","jyothi")
console.log(mycare.show())