// @flow strict
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaMedium,
} from "react-icons/fa"

const getIcon = name => {
  let icon

  switch (name) {
    case "twitter":
      icon = FaTwitter
      break
    case "github":
      icon = FaGithub
      break
    case "telegram":
      icon = FaTelegram
      break
    case "email":
      icon = FaEnvelope
      break
    case "linkedin":
      icon = FaLinkedin
      break
    case "instagram":
      icon = FaInstagram
      break
    case "facebook":
      icon = FaFacebook
      break
    case "youtube":
      icon = FaYoutube
      break
    case "medium":
      icon = FaMedium
      break
    default:
      icon = {}
      break
  }

  return icon
}

export default getIcon
