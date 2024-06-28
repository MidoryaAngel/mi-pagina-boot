const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app,{
    loop: true,
    delay:75
});
   
Typewriter
.typeSrtring('El valle de la tecnologia')
.pauseFor(200)
.start();