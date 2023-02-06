

class preloader1 {
  constructor(options){


    this.count= 0;

     //preload.js targets the div and h1 class;

    this.preloader = document.createElement("div");
    this.progress = document.createElement("div");
    this.progressTitle = document.createElement("h1");
    this.preloader.className = "preloader";
    this.progress.className = "progress";
    this.progressTitle.className = "progressTitle";
    this.preloader.appendChild(this.progress);
    this.preloader.appendChild(this.progressTitle);
    document.body.appendChild(this.preloader);
    document.body.insertBefore(this.preloader, document.body.children[0]);




    //preload.js styles passing in the parameters

    this.FONTSIZE = options.FontSize;
    this.FONTCOLOR = options.FontColor;
    this.PRELOADER_BACKGROUND = options.PreloaderBackground;
    this.PROGRESS_BACKGROUND = options.ProgressBackground;

    this.progressTitle.style.fontSize = this.FONTSIZE;
    this.progressTitle.style.color = this.FONTCOLOR;
    this.preloader.style.backgroundColor  = this.PRELOADER_BACKGROUND;
    this.progress.style.backgroundColor  = this.PROGRESS_BACKGROUND;




    //methods or functions.
   
    this.animate();
   
   
  }


  animate(){

    this.progressTitle.textContent =  this.count;
    document.documentElement.style.setProperty("--progressWidth", this.count + "%" );

    if(this.count <= 100){

        this.count +=1;

    }else{


        this.progress.style.height="0px";
        this.progress.style.transition="all ease 0.6s";
        this.progressTitle.style.opacity="0";
        this.progressTitle.style.transform=`translateY(-80px)`
        this.progressTitle.style.transition="all ease 1s";
        this.progressTitle.style.transitionDelay="0.2s";
       
       
    }

    requestAnimationFrame(this.animate.bind(this))

  }
  
}

new preloader1({
    FontSize:"250px",
    FontColor:"#020001",
    PreloaderBackground:'#e93826',
    ProgressBackground:"#020001",
});
