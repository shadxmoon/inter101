'use strict'
const tooltips = document.querySelectorAll(".tooltip")
tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseover', onToolTipShow);
    tooltip.addEventListener('mouseleave', onToolTipHide);

})
function onToolTipShow (evt){
    evt.currentTarget.classList.toggle('tooltip-animated');
}
function onToolTipHide(evt){
    evt.currentTarget.classList.toggle('tooltip-animated');
}