const messages = ["https://beta.iodine.gg/2hf79.png", "https://beta.iodine.gg/c0h38.png", "https://beta.iodine.gg/107g7.png", 
"https://beta.iodine.gg/fjcib.png", "https://beta.iodine.gg/cj024.png", "https://beta.iodine.gg/a4g6f.png", "https://beta.iodine.gg/0ie74.png", 
"https://beta.iodine.gg/bijhi.png", "https://beta.iodine.gg/jaa4b.png", "https://beta.iodine.gg/3f916.png", "https://i.iodine.gg/c4if0.png", 
"https://i.iodine.gg/5fh77.png", "https://i.iodine.gg/jigca.png", "https://i.iodine.gg/44534.png", "https://i.iodine.gg/2fh40.png", 
"https://i.iodine.gg/i9j60.png", "https://i.iodine.gg/2iac5.png", "https://i.iodine.gg/hc042.png", "https://i.iodine.gg/6j75h.png",
"https://i.iodine.gg/6ed46.png", "https://i.iodine.gg/70g7a.png"] //contribute here <3

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
