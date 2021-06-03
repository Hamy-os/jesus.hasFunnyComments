const messages = ["https://beta.iodine.gg/2hf79.png", "https://beta.iodine.gg/c0h38.png", "https://beta.iodine.gg/107g7.png", 
"https://beta.iodine.gg/fjcib.png", "https://beta.iodine.gg/cj024.png", "https://beta.iodine.gg/a4g6f.png", "https://beta.iodine.gg/0ie74.png", 
"https://beta.iodine.gg/bijhi.png", "https://beta.iodine.gg/jaa4b.png", "https://beta.iodine.gg/3f916.png", "https://i.iodine.gg/c4if0.png", 
"https://i.iodine.gg/5fh77.png", "https://i.iodine.gg/jigca.png", "https://i.iodine.gg/44534.png", "https://i.iodine.gg/2fh40.png", 
"https://i.iodine.gg/i9j60.png", "https://i.iodine.gg/2iac5.png", "https://i.iodine.gg/hc042.png", "https://i.iodine.gg/6j75h.png",
"https://i.iodine.gg/6ed46.png", "https://i.iodine.gg/70g7a.png", "https://i.iodine.gg/ahaa3.png", "https://i.iodine.gg/fi039.png", 
"https://i.iodine.gg/cfe63.png", "https://i.iodine.gg/53c3h.png", "https://i.iodine.gg/i4i4e.png", "https://i.iodine.gg/ef1g0.png",
"https://i.iodine.gg/1gb07.png", "https://i.iodine.gg/ie4c6.png", "https://i.iodine.gg/bb2cd.png", "https://i.iodine.gg/b46h8.png",
 "https://i.iodine.gg/0f2gf.png", "https://i.iodine.gg/4f49c.png", "https://i.iodine.gg/98h4b.png", "https://i.iodine.gg/947gj.png",
 "https://jeez.iodine.gg/348b7.png", "https://jeez.iodine.gg/252ha.png", "https://jeez.iodine.gg/2740b.png", "https://jeez.iodine.gg/b5c1c.png"
 "https://jeez.iodine.gg/9j890.png",
                 ] //contribute here <3

$(() => {
    messages.forEach((msg, idx) => {
        $(".slideshow-container").prepend(`
        <div class="slide fade">
        <img src="${msg}" style="width:100%">
      </div>`)
      $(".dots").append(`<span class="dot" id="${idx}"></span>`)
    })
    let slideIndex = 0;
    currentSlide(1)
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }  
    function showSlides(n) {
      let i;
      let slides = $(".slide")
      let dots = $(".dot")
      if (n > slides.length) slideIndex = 1
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          $(slides[i]).hide()
      }
      for (i = 0; i < dots.length; i++) {
          $(dots[i]).removeClass("active")
      }
        $(slides[slideIndex - 1]).css("display", "block")
        $(dots[slideIndex - 1]).addClass("active")
    }
    $(".dot").click(el => {
        const id = $(el.target).attr("id")
        currentSlide(id)
    })
    $(".prev").click(() => {
        plusSlides(-1)
    })
    $(".next").click(() => {
        plusSlides(1)
    });
    document.onkeydown = ({key}) => {
      if (key == "ArrowRight" || key == "d") {
        plusSlides(1)
      } else if (key == "ArrowLeft" || key == "a") {
        plusSlides(-1) 
      } else if (key == "ArrowDown" || key == "s") {
        location.replace("https://indraisaweeb.com") //requested by indra
      }
    }

    function recursiveAnimateTitle(string) {
        let firstLetter = string[0];
        let title = document.querySelector('title');
        title.innerHTML += firstLetter;
        if (string.length > 1) {
          setTimeout(function() {
            recursiveAnimateTitle(string.substring(1));
          }, 100);
        }
      }
      
      function animateTitle(string) {
        document.querySelector('title').innerHTML = "";
        recursiveAnimateTitle(string);
      }
      
      animateTitle('Hamy is a virgin & a skid too');
    
})
