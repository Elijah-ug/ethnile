resource "vultr_instance" "scanner-infrastructure-server" {
  plan = "vhp-1c-1gb-amd"
  region = "mad"
  os_id = 1743
  label = "scanner"
  hostname = "scanner"
  ssh_key_ids = ["${vultr_ssh_key.scanner_infrastructure_server_ssh_key.id}"]
  user_data = "${file("scanner-config.yml")}"
}
