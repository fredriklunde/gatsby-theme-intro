import { graphql } from "gatsby"
import { string } from "prop-types"

export const EducationType = {
  institution: string.isRequired,
  period: string,
  degree: string,
  url: string,
}

export const query = graphql`
  fragment EducationFragment on EducationYaml {
    institution
    period
    degree
    url
  }
`
