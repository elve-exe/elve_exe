<div class="index">

    <div class="content-wrapper">
        <div class="logo-container">
        <a href="/"><img src="/Logo.png" alt=""></a>
        
        </div>

        <div class="text-box">
            <h1>Hi! My name is Elvina! <br> I like to develop games and make art :)</h1>
        </div>
    </div>	
    
</div>


<div class="image-rows">
    <div class="image-row-1" data-sveltekit-preload-data>
        <a href="/work#DigitalArt" class="image-box">
            <img src="/character.png" alt="This should show art :,)">
            <img src="/Witch break.png" alt="This should show art :,)">
            <img src="/wolf.png" alt="This should show art :,)">
            <h4 class="overlay-text">Digital Art</h4>
        </a>
    </div>

    <div class="image-row-1" data-sveltekit-preload-data>
        <a href="/work#game-development" class="image-box">
            <img src="/game.png" alt="This should show art :,)">
            <img src="/plant.png" alt="This should show art :,)">
            <img src="/paintingg.jpg" alt="This should show art :,)">
            <h4 class="overlay-text">Game Development</h4>
        </a>
    </div>

    <div class="image-row-1" data-sveltekit-preload-data>
        <a href="/work#3D" class="image-box">   
            <img src="/3dclose.png" alt="This should show art :,)">
            <img src="/book.png" alt="This should show art :,)">
            <img src="/creature.png" alt="This should show art :,)">
            <h4 class="overlay-text">3D Modelling</h4>
        </a>
    </div>
</div>



<!-- -----------CSS--------- -->

<style>

.index {
        text-align: center;
        display: block;
    }

/* glowy text */

.text-box{
    text-shadow: 0 0 5px #ffefef, 
                 0 0 10px #ffefef, 
                 0 0 15px #ffefef, 
                 0 0 20px #ffefef, 
                 0 0 35px #ffefef, 
                 0 0 40px #ffefef, 
                 0 0 50px #ffefef, 
                 0 0 75px #ffefef;
                
}   

.text-box{
    animation: flicker 5s infinite;
}



.image-rows{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image-row-1{
        display: flex;
        justify-content: center;
        gap: 20px;
        padding: 4%;
        max-width: 85%;
    }
 

.image-box img{
    border-radius: 5px;
    height: 40vh;
    width: auto;
    flex: 1 1 auto;
    object-fit: contain;
}
.overlay-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(255, 255, 255);
    text-shadow: 0 0 5px #ffffff, 0 0 6px #000000, 0 0 15px #ffefef, 0 0 20px black, 0 0 35px black, 0 0 50px black;
    font-size: 4em;
    text-align: center;
    background: none;
    margin: 0;
    z-index: 2;
}

.image-box:hover:before {
    opacity: 1;
}

.image-box:hover {
    opacity: 1;
    transform: translateY(0px);
   
}
.image-box:hover .overlay-text{
    /* opacity: 0; */
    transition: 0.5s;
    text-shadow: 0 0 5px #ffffff, 
                 0 0 10px #575757, 
                 0 0 15px #ffefef, 
                 0 0 20px #ffefef, 
                 0 0 35px #ffefef, 
                 0 0 40px #ffefef, 
                 0 0 50px #ffefef, 
                 0 0 75px #ffefef;
    animation: text-flicker 2s;
}

.image-box:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.6); 
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
}

@media (min-width: 320px) and (max-width: 1000px){

    .image-box{
        height: auto;
        overflow: hidden;
    }

    .image-box img{
        width: 100%;
        object-fit: cover;
    }


}

</style>

