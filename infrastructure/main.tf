# Configure the DigitalOcean Provider
provider "digitalocean" {
  token   = "${var.do_token}"
  version = "~> 1.12"
}

# Create a droplet
resource "digitalocean_droplet" "droplet" {
  image  = "ubuntu-18-04-x64"
  name   = "gospodarsky.com"
  region = "fra1"
  size   = "s-1vcpu-1gb"
}