import styled from 'styled-components'

export default ({ characterImage, characterSFX, characterName, className }) =>
  <div className={className}>
    <img src={characterImage} />
    <audio src={characterSFX} />
    <p>
      {characterName}
    </p>
  </div>
