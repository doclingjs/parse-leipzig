let parseLeipzigGlossing = word {
  let form = word.form
  let gloss = word.gloss

  let formMorphemes = form.split(/[-=]/)
  let glossMorphemes = gloss.split(/[-=]/)

  let morphemes = formMorphemes.map((formMorpheme, i) => {
    const morpheme = {
      form: formMorpheme,
      gloss: glossMorphemes[i],
    }
    return morpheme
  })
  
  return morphemes
}
