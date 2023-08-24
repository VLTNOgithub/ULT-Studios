const leftSide = document.getElementById("left-side");
const fancyText = document.querySelector(".fancy-text");
const special = document.querySelector(".special");

const handleOnMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 100;

    const keyframes = {
        width: `${x}%`
    };

    leftSide.animate(keyframes, {
        duration: 800,
        fill: "forwards"
    });
};

document.onmousemove = (e) => handleOnMove(e);

document.ontouchmove = (e) => handleOnMove(e.touches[0]);

document.addEventListener("DOMContentLoaded", () => {  
    document.getElementByClassName("btn-6")
      .addEventListener('mouseenter', (e) => {
              let parentOffset = this.offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
              this.find('span').css({top:relY, left:relX});
      })
      .addEventListener('mouseout', (e) => {
              let parentOffset = this.offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
          this.find('span').css({top:relY, left:relX});
      });
  });
