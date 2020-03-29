import React from "react"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import Icon from "@material-ui/core/Icon"

export const SIDEBAR = {
  avatar: require("../assets/avatar.jpeg"),
  title: "kuro",
  subtitle: "a little system blog",
  homepages: {
    GitHub: {
      link: "https://github.com/AlfredRodriguez2042",
      icon: <GitHubIcon fontSize="small" />
    },
    LinkedIn: {
      link: "https://linkedin.com/in/AlfredRodriguez2042",
      icon: <LinkedInIcon />
    }
  }
}
