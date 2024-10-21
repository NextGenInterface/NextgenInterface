module.exports = {
  output: "export",
  basePath:
    process.env.NODE_ENV === "production" ? "/PixelPerfect" : "/PixelPerfect",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/PixelPerfect" : "/PixelPerfect",
  images: {
    unoptimized: true,
  },
};
