import { map } from 'ramda'
import styled from 'styled-components'

export default ({
  actions: { openDriverPanel, selectDriver },
  data: { allCharacters = [] },
  className
}) =>
  <div
    className={className}
    onClick={() => {
      openDriverPanel({ selectedDriver: id }), openDriverPanel()
    }}
  >
    <img src={image.url} />
    <audio src={characterSFX.url} />
    <p>
      {characterName}
    </p>
  </div>
