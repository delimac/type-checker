const sentenceTag = document.querySelector(`input[type="text"]`)
const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector("span.typesize-output")
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

// when user adjusts type size slider, update the text indicator next to it and 
// change the outputTag's font size
typesizeTag.addEventListener("input", function () {
  outputTag.style.fontSize = this.value + "px"
  typesizeOutput.innerHTML = this.value + "px"
})
