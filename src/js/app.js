

class preloader1 {
  constructor(options){


    this.count= 0;

    this.lastTime = 0;
    this.frameDelay = 1000; 

     //preload.js targets the div and h1 class;

    this.preloader = document.createElement("div");
    this.progress = document.createElement("div");
    this.progressTitle = document.createElement("h1");
    this.content =  document.querySelector('.container h1')
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
    document.documentElement.style.setProperty("--progressWidth", this.count + '%');

    if(this.count < 100){

      this.count +=1;

    }else{


      new Promise((resolve,reject)=>{
        if (this.progress) {
          setTimeout(()=>{
            this.progress.style.height=0;

            resolve()

          },100)
        }
      }).then(()=>{


        this.progress.style.transition="all ease 0.6s";
        this.progress.style.transitionDelay = '0.3s'


        this.progressTitle.style.opacity="0";
        this.progressTitle.style.transform=`translateY(-80px)`
        this.progressTitle.style.transition="all ease 0.8s";
        this.progressTitle.style.transitionDelay="0.6s";
        this.preloader.style.height = 0;
        this.preloader.style.transitionDelay="0.6s";
        this.content.style.transform=`translateY(0)`
        this.content.style.opacity = 1


      })


       
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
