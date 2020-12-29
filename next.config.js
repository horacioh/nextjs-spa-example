const isProd = process.env.NODE_ENV == "production"

const config = {
  // We use a separate dist dir for production. Otherwise they get mixed up
  // when switching between yarn dev and yarn build often.
  distDir: isProd ? ".next.prod" : ".next",

  async rewrites() {
    return [
      {
        source: "/:any*",
        destination: "/",
      },
    ]
  },
}

// For production we want to specify a stable build ID so that build is reproducible and identifiable.
const buildId = process.env.NEXT_BUILD_ID
if (buildId) {
  config.generateBuildId = async () => {
    return buildId
  }
}

module.exports = config
