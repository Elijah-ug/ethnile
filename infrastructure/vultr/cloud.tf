terraform {
  cloud {
    organization = "Scanner"

    workspaces {
      name = "Scanner"
    }
  }
}
