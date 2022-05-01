class Case
{
    id;
    value;
    constructor(id, value)
    {
        this.id=id;
        this.value = value;
    }

    get id()
    {
        return this.id;
    }
    set id(id)
    {
        this.id = id;
    }
    get value()
    {
        return this.value;
    }
    set value(value)
    {
        this.value = value;
    }

}

//loop until game is over 
//when a case is opened change its visibility to hidden and display its onclick
//