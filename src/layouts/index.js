import React from "react"
import Link from "gatsby-link"

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ data, children }) =>
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
        <header style={{ marginBottom: `1.5rem` }}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
          </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
              <ListLink to="/page2/">Page 2</ListLink>
              <ListLink to="/counter/">Counter</ListLink>
              <ListLink to="/my-files/">files</ListLink>
          </ul>
        </header>
        {children()}
  </div>


export const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`
