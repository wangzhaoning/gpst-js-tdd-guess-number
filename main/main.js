// Write your cade below:
module.exports =function main(input,random) {
    var Anum=0;
    var Bnum=0;
    var num=0;
    if(input==="")
    {
        return "0A0B";
    }
    for(let i=0;i<input.length;i++)
    {
        if(input.charAt(i)===random.charAt(i))
        {
            Anum++;
        }
    }
    for(let i=0;i<input.length;i++)
    {
        var b=false;
        for(let j=0;j<input.length;j++)
        {
            if(input.charAt(i)===random.charAt(j))
            {
                b=true;
            }
        }
        if(b===true)
        {
            num++;
        }
    }
    Bnum=num-Anum;
    return Anum+"A"+Bnum+"B";
};

