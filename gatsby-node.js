function conditionalCreateNodeField({ node, createNodeField }) {
  if (node.internal.type == 'SitePage') {
    // define a field on certain pages
    if (node.path == '/page-a/') {
      createNodeField({
        node,
        name: 'foo',
        value: 'bar a',
      })
    }
  }
}

function unconditionalCreateNodeField({ node, createNodeField }) {
  if (node.internal.type == 'SitePage') {
    // define a field on all pages
    createNodeField({
      node,
      name: 'foo',
      value: 'bar',
    })
  }
}

exports.onCreateNode = async ({ node, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  conditionalCreateNodeField({ node, createNodeField }) // throws GraphQL Error

  // unconditionalCreateNodeField({ node, createNodeField }) // no error
}
