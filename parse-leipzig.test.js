import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { parseLeipzig } from './parse-leipzig.js'

Deno.test("parseLeipzigGlossing - no clitics or infixes", () => {
  let input = { form: "gato-s", gloss: "cat-PL" };
  let expected = [
    { form: "gato", gloss: "cat" },
    { form: "s", gloss: "PL" },
  ];
  assertEquals(parseLeipzigGlossing(input), expected);
});

Deno.test("parseLeipzigGlossing - with clitics", () => {
  let input = { form: "me-lo=dijo", gloss: "1SG-it=say" };
  let expected = [
    { form: "me", gloss: "1SG" },
    { form: "lo", gloss: "it" },
    { form: "dijo", gloss: "say" },
  ];
  assertEquals(parseLeipzigGlossing(input), expected);
});

Deno.test("parseLeipzigGlossing - with infixes", () => {
  let input = { form: "ab<om>i-na", gloss: "love<inf>-1SG" };
  let expected = [
    { form: "ab", gloss: "love" },
    { form: "om", gloss: "inf" },
    { form: "i", gloss: "1SG" },
    { form: "na", gloss: "" },
  ];
  assertEquals(parseLeipzigGlossing(input), expected);
});
