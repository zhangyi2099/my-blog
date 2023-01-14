import React from "react"
import { Themed } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      This is <Themed.a href="https://yiitex.com/">YIITEX's</Themed.a> Blog.
      {` `}
  
      <br />
      Yes, it is.
    </>
  )
}
