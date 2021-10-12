var x=(function(){
 
    var time =null;
    var i=0;
    function setDelay(m){
        time=setTimeout(echo,m);
    }
    function echo(){
    
    console.log(arguments[i]);
       i+=1; 

    }
    
    return{
        setDelay:setDelay,
        echo:echo
    };


})();
x.echo("this","ela","go");
x.setDelay(5000);