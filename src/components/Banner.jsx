import { storyblokEditable } from '@storyblok/react'
import Image from 'next/image'

export default function Banner({ blok }) {
  return (
    <div className='banner' {...storyblokEditable(blok)}>
      <Image src={blok.asset?.filename} alt={blok.asset?.alt} fill />
    </div>
  )
}
