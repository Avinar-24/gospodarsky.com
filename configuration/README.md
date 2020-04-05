    Control Node
     ||  ||  ||
     ||  ||  ||
     \/  \/  \/
    Managed Nodes

# Installing Ansible

## on macOS

Ansible can be installed via `pip`, the Python package manager. To get `pip` run:

    sudo easy_install pip

Then install Ansible:

    sudo pip install ansible

# Configuration Settings

Create a configuration directory:

    sudo mkdir -p /etc/ansible

Copy default configuration:

    sudo curl https://raw.githubusercontent.com/ansible/ansible/devel/examples/ansible.cfg -o /etc/ansible/ansible.cfg
