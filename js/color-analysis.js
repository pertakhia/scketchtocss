const Color = require("color")

class ColorAnalysis {
  constructor(colors, hasTextures, imageUrl) {
    this.colors = colors
    this.dominantColorScheme = this.getDominantColorScheme()
    this.hasTextures = hasTextures
    this.imageUrl = imageUrl
    this.canvas = document.createElement("canvas")
    this.context = this.canvas.getContext("2d")
    this.image = new Image()
  }

  getDominantColorScheme() {
    return new Promise((resolve, reject) => {
      this.image.onload = () => {
        this.canvas.width = this.image.width
        this.canvas.height = this.image.height
        this.context.drawImage(
          this.image,
          0,
          0,
          this.canvas.width,
          this.canvas.height
        )

        const imageData = this.context.getImageData(
          0,
          0,
          this.canvas.width,
          this.canvas.height
        )
        const pixels = imageData.data
        const pixelCount = pixels.length / 4

        const colorCounts = {}
        for (let i = 0; i < pixelCount; i++) {
          const red = pixels[i * 4]
          const green = pixels[i * 4 + 1]
          const blue = pixels[i * 4 + 2]
          const alpha = pixels[i * 4 + 3]

          if (alpha === 0) {
            continue // Ignore transparent pixels
          }

          const color = `${red},${green},${blue}`
          colorCounts[color] = (colorCounts[color] || 0) + 1
        }

        const colors = Object.keys(colorCounts)
        let dominantColorCount = 0
        let dominantColorScheme = []

        // Loop through each color to find the most dominant ones
        colors.forEach(color => {
          const count = colorCounts[color]
          if (count > dominantColorCount) {
            dominantColorCount = count
            dominantColorScheme = [color]
          } else if (count === dominantColorCount) {
            dominantColorScheme.push(color)
          }
        })

        resolve(dominantColorScheme)
      }

      this.image.onerror = error => {
        reject(error)
      }

      this.image.src = this.imageUrl
    })
  }

  checkForTextures() {
    // implementation goes here
  }
}

module.exports = ColorAnalysis
