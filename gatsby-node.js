// define a field on certain pages
function conditionalCreateNodeField({ node, createNodeField }) {
  if (node.path == '/page-a/') {
    createNodeField({
      node,
      name: 'foo',
      value: 'bar a',
    })
  }
}

// define a field on all pages
function unconditionalCreateNodeField({ node, createNodeField }) {
  createNodeField({
    node,
    name: 'foo',
    value: 'bar',
  })
}

exports.onCreateNode = async ({ node, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type == 'SitePage') {
    conditionalCreateNodeField({ node, createNodeField }) // throws GraphQL Error
    // unconditionalCreateNodeField({ node, createNodeField }) // no error
  }
}
