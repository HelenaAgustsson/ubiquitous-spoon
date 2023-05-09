import * as React from 'react'
import { player } from './player.module.css'
import {GatsbyImage, getImage } from 'gatsby-plugin-image'

const Player =({name, imageSRC, imageAlt, children})=> {
    return (
        <div className={player}>
            <GatsbyImage image={getImage(imageSRC)} alt={imageAlt} />
            <p>{name}</p>
        </div>
    )
}

export default Player