import React from 'react';
import { graphql } from 'gatsby';

function TestPreview(props){

    console.log(props.data)
    const composePageData = props.data.allContentfulTestPreview.nodes[0]
console.log(composePageData);

    return (
        <div>
            <h1>{composePageData.title}</h1>
            <p>{composePageData.description.description}</p>
        </div>
    )
}


export default TestPreview;

export const pageQuery = graphql `
query testPreviewPage {
    allContentfulTestPreview {
        nodes {
            compose__page {
                title
                content {
                ... on ContentfulTestPreview {
                    id
                    name
                    title
                    description {
                    description
                    }
                }
                }
            }
            title
            description {
                description
            }
        }
    }
}
`;