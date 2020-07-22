import { slides as firstDeck } from './first-deck.mdx'
import { slides as themes } from './themes.mdx'
import { slides as errors } from './errors.mdx'
import { slides as steps } from './steps.mdx'
import { slides as compilation } from './code-surfer-compilation.mdx'

export const slides = [
  ...firstDeck,
  ...themes,
  ...errors,
  ...compilation,
  ...steps,
]
