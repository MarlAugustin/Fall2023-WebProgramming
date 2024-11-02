const canvas = document.getElementById("mycanvas");
const sound_good = document.getElementById("sound_succes");
const sound_bad = document.getElementById("sound_failure");

const ctx = canvas.getContext("2d");
ctx.background = "blue";
const img = new Image();
img.src = "Images/Starman.png";
const img_trap = new Image();
img_trap.src = "Images/SpinyShell.png";
totalPoints = 0;

if(totalPoints <= 100)
{
    setInterval(drawImage, 800);
}
if(totalPoints > 100 && totalPoints <= 500)
{
    setInterval(drawImage, 600);
}
if(totalPoints > 500 && totalPoints <= 1000)
{
    setInterval(drawImage, 400);
}

let x = 0;
let y = 0;
let isImgTrap = false;
function drawImage() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "30px Comic Sans MS";
    ctx.fillText("Score: " +totalPoints, 400,25);
    ctx.textAlign = "center";
    x = Math.floor(Math.random() * 600);
    y = Math.floor(Math.random() * 500);
    rand = Math.floor(Math.random() * 10);
    if (rand < 7) {
        isImgTrap = false;
        ctx.drawImage(img, x, y, 200, 200);
    } else {
        isImgTrap = true;
        ctx.drawImage(img_trap, x, y, 200, 200);
    }
}

function mousedown(event) {
    if(event.clientX <= x + 200 && event.clientX >= x && event.clientY <= y + 200 && event.clientY >= y)
        {
            if(isImgTrap == false)
            {
                totalPoints += 50;
                sound_good.play();
            }
            else if(isImgTrap == true)
            {
                totalPoints -= 100;
                sound_bad.play();
            }
    
        }
}