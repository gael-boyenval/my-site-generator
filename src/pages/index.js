import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => (
    <div>
        <h1>{data.site.siteMetadata.title}</h1>
        <div>
            <p>
                From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
                    You and Your Research
                </a>”.
            </p>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div>
                    <Link
                        to={node.fields.slug}
                        css={{ textDecoration: `none`, color: `inherit` }}
                    >
                        <h3>
                            {node.frontmatter.title}{' '}
                            <span color="#BBB">— {node.frontmatter.date}</span>
                        </h3>
                        <p>{node.excerpt}</p>
                    </Link>
                </div>
            ))}
        </div>
    </div>
)

export const query = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`
