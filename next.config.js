const path = require('path')
const withTM = require('next-transpile-modules')(['@patternfly/react-core', '@patternfly/react-styles', "@patternfly/react-icons"])

const BG_IMAGES_DIRNAME = 'bgimages'
const removeImports=require("next-remove-imports");

const nextConfig = {
  future: {
    webpack5: true,
  }
}

module.exports = withTM(removeImports(nextConfig));
