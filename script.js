const container = document.querySelector(".imagcontainer")
const imgList = ["1", "2", "3", "4"]
const btn = document.querySelectorAll(".btn")

let index=0;
btn.forEach((button)=>{
    button.addEventListener("click",()=>{
        console.log("clicked")
        if(button.classList.contains("btnleft")){
            console.log("left")
            index--;
            if(index<0){
                index=imgList.length-1;
                console.log("index<0")
            }
            container.style.background = `url("./${imgList[index]}.jpg")`
            container.style.backgroundSize = `contain`
        } else {

            index++;
            if(index==imgList.length){
                index=0;
            }
            container.style.background = `url("./${imgList[index]}.jpg")`
            container.style.backgroundSize = `contain`
        }
    })
})