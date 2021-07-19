import React from 'react';
import { graphql } from 'gatsby';

function TestPreview(props){

    console.log(props.data)

    return <div>
        testPreview page
    </div>
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