let gallery_btn = document.getElementById('gallery_btn')
let gallery_section = document.getElementById('gallery_section')
gallery_btn.onclick = function(){
    console.log(gallery_section.style.display)
    console.log(typeof(gallery_section.style.display))
    if (gallery_section.style.display==''){
        let confirmation=confirm("Are you sure you want to View gallery images?")
        if (confirmation){
            gallery_section.style.display='block'
            gallery_btn.innerHTML='Hide Gallery'
        }
    }
    else{
        let confirmation=confirm("Are you sure you want to hide gallery images?")
        if(confirmation){
            gallery_section.style.display=''
            gallery_btn.innerHTML='View Gallery'
        }
    }
};