$(document).ready(function(){

let $boundary= $(".boundary");
let $maze = $("#maze");
let $status = $("#status");
let $start = $("#start");
let $end= $("#end");


$boundary.mouseover(function(){
    
    loseGame();
}
);


let loseGame =function(){

    // if(!$boundary.hasClass("youlose")){
    //     $boundary.addClass("youlose");
    //     if($boundary.hasClass("started")){
    //         $boundary.removeClass("started")
    //          changeStatus("you lose the game!!!!!");
    //     }

        
        
    // }

   
    if($boundary.hasClass("started")){
        $boundary.addClass("youlose");
        changeStatus("you lose the game!!!!!");
        $boundary.removeClass("started");
    }


    

   

}

$end.mouseenter(function(){
   
   
        if($boundary.hasClass("started")){
            
            changeStatus("you win the game ! and press S to start the game");
            $boundary.removeClass("started"); 
        }
    

})

$maze.mouseleave(function(){

   
    if(!$boundary.hasClass("youlose")){
        if($boundary.hasClass("started")){
            loseGame();
        }
    }


})

$start.click(function(){

    // if($boundary.hasClass("youlose")){
    //     $boundary.removeClass("youlose")
    //     if(!$boundary.hasClass("started")){
    //         $boundary.addClass("started")
    //     }

    // }
    $boundary.addClass("started");
    $boundary.removeClass("youlose");
    changeStatus("game started");
   

})

let changeStatus = function(text){
    $status.text(text); 
}

})