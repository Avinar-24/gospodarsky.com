    Control Node
     ||  ||  ||
     ||  ||  ||
     \/  \/  \/
    Managed Nodes

# Installing Ansible to a control node

## on macOS

Ansible can be installed via `pip`, the Python package manager. To get `pip` run:

    sudo easy_install pip

Then install Ansible:

    sudo pip install ansible

# Configuration Settings

Create a configuration directory:

    sudo mkdir -p /etc/ansible

Copy a default configuration:

    sudo curl https://raw.githubusercontent.com/ansible/ansible/devel/examples/ansible.cfg -o /etc/ansible/ansible.cfg

In `ansible.cfg` create or uncomment the line to define your inventory:

    inventory = /etc/ansible/hosts.yaml

Also here, define a remote user you are trying to connect to your droplet:

    remote_user = arty

Then copy a default inventory file:

    sudo curl https://raw.githubusercontent.com/ansible/ansible/devel/examples/hosts.yaml -o /etc/ansible/hosts.yaml

Add your hosts here:

```
all:
  hosts:
    gospodarsky:
      ansible_host: gospodarsky.com
```

You're done.

# Commands

Ping all hosts:

    ansible all -m ping

Ping a specific host:

    ansible gospodarsky -m ping

Run a playbook:
  
 ansible-playbook path/to/playbook --ask-become-pass -vvv

# NGINX

To stop your web server:

    sudo systemctl stop nginx

To start the web server:

    sudo systemctl start nginx

To stop and then start the service again:

    sudo systemctl restart nginx

To reload without dropping connections:

    sudo systemctl reload nginx

By default, Nginx is configured to start automatically when the server boots. To disable the service:

    sudo systemctl disable nginx

To re-enable the service to start up at boot:

    sudo systemctl enable nginx
