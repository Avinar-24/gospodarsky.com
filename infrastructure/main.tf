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

# Add a domain to the DigitalOcean panel
# An A-record of the domain will be create automatically.
resource "digitalocean_domain" "gospodarsky" {
  name       = "gospodarsky.com"
  ip_address = "${digitalocean_droplet.droplet.ipv4_address}"
}

# Add another A-record with www-prefix
resource "digitalocean_record" "www" {
  type   = "A"
  name   = "www"
  domain = "${digitalocean_domain.gospodarsky.name}"
  value  = "${digitalocean_droplet.droplet.ipv4_address}"
}
