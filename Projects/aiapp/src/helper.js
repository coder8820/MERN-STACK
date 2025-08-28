
export function checkHeading(str){
    const headingRegex = /^(What|How|Why|Explain|Define|Describe|List|Summarize|Compare|Contrast|Discuss|Evaluate|Analyze|Identify|Outline|Review|Assess|Clarify|Illustrate|Interpret|Justify|Recommend|Suggest)\b/i;
    return headingRegex.test(str);
  }

export function replaceHeadingStars(str){
    const headingStarRegex = /^(#+)\s*/;
    return str.replace(headingStarRegex, '');
}