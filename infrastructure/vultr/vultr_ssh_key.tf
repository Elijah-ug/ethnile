resource "vultr_ssh_key" "scanner_infrastructure_server_ssh_key" {
  name = "scanner_infrastructure_server_ssh_key"
  ssh_key = var.SSH_KEY
}

variable "SSH_KEY" {}
