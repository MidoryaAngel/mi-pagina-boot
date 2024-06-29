const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app,{
    loop: true,
    delay:75
});
   
typewriter
.typeString('El valle de la tecnología')
.pauseFor(200)
.start();