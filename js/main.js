$(".nav-item").on("click", (event) => {
    console.log(event.target)
    let linkUrl = $(event.target).data("contentUrl");
    loadContent(linkUrl);
})

const loadContent = (contentUrl) => {
    $("#content-wrapper").load(contentUrl,() => {
        console.log("archivo actualizado")
    })
}