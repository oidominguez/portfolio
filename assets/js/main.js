// Filter Galery Box

let list = document.querySelectorAll('.list');
let productBox = document.querySelectorAll('.productBox');

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
for(let j = 0; j<list.length; j++){
    list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for( let k = 0; k<productBox.length; k++){
            productBox[k].classList.remove('active');
            productBox[k].classList.add('hide');

            if(productBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                productBox[k].classList.remove('hide');
                productBox[k].classList.add('active');
            }
        }
    })
}