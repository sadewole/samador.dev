module.exports = {
  data: {
    mobileImage: {
      childImageSharp: {
        fixed: {
          base64: "test",
          height: 200,
          src: "photo.jpg",
          srcSet: "photo.jpg",
          width: 500,
        },
      },
    },
    desktopImage: {
      childImageSharp: {
        fixed: {
          base64: "test",
          height: 200,
          src: "photo1.jpg",
          srcSet: "photo1.jpg",
          width: 500,
        },
      },
    },
  },
}
