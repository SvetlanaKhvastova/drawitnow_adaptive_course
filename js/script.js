const btn__burger = document.querySelector("#btnBurger"),
  btn__close = document.querySelector("#btnClose"),
  header = document.querySelector("#header"),
  nav = $(".nav")

btn__burger.addEventListener("click", () => {
  header.classList.add("menu_open")

  btn__close.addEventListener("click", () => {
    header.classList.replace("menu_open", "header")
  })
})

$(document).ready(function () {
  nav.on("click", "a", function (event) {
    event.preventDefault()

    let id = $(this).attr("href"),
      top = $(id).offset().top - 10

    if (header.classList.contains("menu_open")) {
      header.classList.remove("menu_open")
    }

    $("body,html").animate({ scrollTop: top }, 1000)
  })
})
