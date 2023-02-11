let parseLeipzig = word => {
  let form = word.form
  let gloss = word.gloss

  let formMorphemes = form.split(/[-=]/)
  let glossMorphemes = gloss.split(/[-=]/)
  let warning = document.querySelector("#warning")
  if (formMorphemes.length > glossMorphemes.length) {
    // tell user that there is a mismatch
    warning.innerHTML = 
      `
      <div id="warning">You have more morphemes in your form than in your gloss! Check to make sure it's even</div>
      `
  }
  else {
    if (formMorphemes.length < glossMorphemes.length) {
      // tell user that there is a mismatch
      warning.innerHTML =
        `
        <div id="warning">You have more morphemes in your gloss than in your form! Check to make sure it's even</div>
        `
    }
    else {
      warning.innerHTML = ``
    }
  }
  let morphemes = formMorphemes.map((formMorpheme, i) => {
    const morpheme = {
      form: formMorpheme,
      gloss: glossMorphemes[i],
    }
    return morpheme
  })

  return morphemes
}

export { parseLeipzig }
