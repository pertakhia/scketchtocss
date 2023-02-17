import ColorAnalysis from "./color-analysis.js"
const colorContainr = document.querySelector(".dominant_color__container")

let imageUrl = ""

const imageUpload = document.querySelector("#image-upload")
const imagePreview = document.querySelector("#image-preview")
console.log("imageUpload", imageUpload)
imageUpload.addEventListener("change", event => {
  console.log("event", event)
  imageUrl = URL.createObjectURL(event.target.files[0])
  imagePreview.src = imageUrl
  imagePreview.onload = () => {
    URL.revokeObjectURL(imageUrl)
  }

  const colorAnalysis = new ColorAnalysis(imageUrl)
  colorAnalysis
    .getDominantColorScheme()
    .then(colors => {
      console.log("Dominant color scheme:", colors)
      let convertColors = `rgb(${colors})`

      console.log("convertColors", convertColors)
      colorContainr.style.backgroundColor = convertColors
    })
    .catch(error => {
      console.error(error)
    })
})
