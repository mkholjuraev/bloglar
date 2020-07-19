/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        <strong>{author.name}</strong> ({author.summary}) tomonidan yozilgan. Tibbiyyotga aloqam bo'lmasada eng so'ngi ingliz tilidagi koronavirusga oid ilmiy tadqiqotlarni o'zbek tilida xalqimizga qo'limdan kelganicha yetkazishni xarakat qilaman. 
        {` \n`}
        <a href={`https://www.linkedin.com/in/muslimjon-kholjuraev-458879143/`}>
          Men xaqimda ma'lumotni ushbu LinkedIn profilidan olishingiz mumkin. 
        </a>
      </p>
    </div>
  )
}

export default Bio
