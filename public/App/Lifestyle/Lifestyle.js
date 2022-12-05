const rowItems = document.querySelectorAll('.row_item1');
const rowBottomCenter= document.querySelector('.row_bottom--center');
const left = document.querySelector('.row_img21');
const right = document.querySelector('.row_img22');

function make_slide(amountSlideAppear){
    const widthItemAndMargin = rowBottomCenter.offsetWidth/amountSlideAppear;

    console.log(widthItemAndMargin)
    let widthAllItem = widthItemAndMargin * rowItems.length;
    rowBottomCenter.style.width = `$(widthAllItem)px)`;

    rowItems.forEach(element => {
        element.style.marginRight = '40px';
        element.style.marginLeft = '40px'
        element.style.width = '$(widthItemAndMargin - 80)px';
    });

    //Button slide

    let count = 0;
    let spacing = widthAllItem - 2*widthItemAndMargin * amountSlideAppear;
    rowBottomCenter.style.transform = `translateX(0px)`;
    console.log(rowBottomCenter)
    right.addEventListener('click', function(){
        count += widthItemAndMargin; 
        if (count > spacing) {
            count = 0;
        };
        rowItems.forEach(item => {
            item.style.transform = `translateX(${-count}px)`;
        })
        // console.log(count)
    });

    left.addEventListener('click', function(){
        // console.log(rowItems)
        count -= widthItemAndMargin; 
        if (count < -spacing) {
            count = 0;
        }     
        rowItems.forEach(item => {
            item.style.transform = `translateX(${-count}px)`;
        })
        console.log(count)
    });
}

make_slide(2)