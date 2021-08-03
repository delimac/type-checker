const sentenceTag = document.querySelector(`input[type="text"]`)

const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector("span.typesize-output")

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput = document.querySelector("span.lineheight-output")

const italicTag = document.querySelector(`input[name="italic"]`)

const outputTag = document.querySelector("textarea.output")
const originalText = outputTag.value

// when user types in sentenceTag, update outputTag accordingly
// if there is no value, restore original text
sentenceTag.addEventListener("keyup", function () {
  // "this" refers to sentenceTag
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
  // "this" here refers to typesizeTag
  outputTag.style.fontSize = this.value + "px"
  typesizeOutput.innerHTML = this.value + "px"
})

lineheightTag.addEventListener("input", function () {
  // "this" here refers to lineheightTag
  outputTag.style.lineHeight = this.value
  lineheightOutput.innerHTML = this.value
})

// when user changes the italic checkbox, update font style to either
// normal or italic
italicTag.addEventListener("change", function() {
  if (this.checked) {
    outputTag.style.fontStyle = "italic"
  } else {
    outputTag.style.fontStyle = "normal"
  }
})