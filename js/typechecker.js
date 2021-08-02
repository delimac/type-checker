const sentenceTag = document.querySelector(`input[type="text"]`)
const outputTag = document.querySelector("textarea.output")
const originalText = outputTag.value

// when user types in sentenceTag, update outputTag accordingly
// if there is no value, restore original text
sentenceTag.addEventListener("keyup", function () {
  if (this.value) {
    outputTag.innerHTML = this.value
  } else {
    outputTag.innerHTML = originalText
  }
})

// when user types in outputTag, update sentenceTag accordingly
outputTag.addEventListener("keyup", function () {
  sentenceTag.value = this.value
})