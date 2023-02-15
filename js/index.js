// const ColorAnalysis = require("./color-analysis.js")

// const colors = ["#ffffff", "#000000", "#ff0000"]
// const dominantColorScheme = "monochromatic"
// const hasTextures = false

// const analysis = new ColorAnalysis(colors, dominantColorScheme, hasTextures)
// console.log("analysis", analysis)

// const imageUrl =
//   "https://images.unsplash.com/photo-1556740732-6a0f7b0b2a9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
// const colorAnalysis = new ColorAnalysis(imageUrl)
// colorAnalysis
//   .getDominantColorScheme()
//   .then(colors => {
//     console.log("Dominant color scheme:", colors)
//   })
//   .catch(error => {
//     console.error(error)
//   })

// console.log("colorAnalysis", colorAnalysis)

const imageUpload = document.querySelector("#image-upload")
const imagePreview = document.querySelector("#image-preview")
console.log("imageUpload", imageUpload)
imageUpload.addEventListener("change", event => {
  console.log("event", event)
  const imageUrl = URL.createObjectURL(event.target.files[0])
  saveImageToLocalStorage(imageUrl)
  imagePreview.src = imageUrl
  imagePreview.onload = () => {
    URL.revokeObjectURL(imageUrl)
  }
})
