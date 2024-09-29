document.getElementsByClassName("fixed-size-image").addEventListener("mouseover",function(event) {
    let cid=getElementsByClassName("fixed-size-image");
    cid.innerHTML('<h4 class="view" style="position:relative;display:inline-block;">VIEW</h4>')

})
document.getElementsByClassName("fixed-size-image").addEventListener("mouseout",function(event) {
    let cid=getElementsByClassName("fixed-size-image");
    cid.innerHTML('')
})