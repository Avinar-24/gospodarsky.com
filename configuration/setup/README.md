_Inspired by the [DO article](https://www.digitalocean.com/community/tutorials/automating-initial-server-setup-with-ubuntu-18-04)_

# Automating Initial Server Setup

This script is an alternative to manually running a bunch of commands for creating a regular user, configuring access and firewall on a remote machine.

## Steps

- [Download](https://github.com/do-community/automated-setups/blob/master/Ubuntu-18.04/initial_server_setup.sh) a script to a local machine;
- Change `USERNAME` on your own;
- Add your public key `~/.ssh/id_rsa.pub` into `OTHER_PUBLIC_KEYS_TO_ADD`;
- Copy the script to your droplet: `scp path_to_script root@dropletIP:`;
- Connet to the droplet: `ssh root@dropletIP`;
- Run the script;

After script execution it will be possible to connect to the droplet without password providing:  

    ssh username@dropletIP