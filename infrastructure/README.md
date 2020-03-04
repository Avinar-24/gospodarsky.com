_Inspired by [Terraform Best Pratices](https://github.com/antonbabenko/terraform-best-practices/tree/master/examples/small-terraform)_

# [Terraform](https://www.terraform.io/)

Terraform is a tool for building, changing, and versioning infrastructure as code.

## Installation

- [Download](https://www.terraform.io/downloads.html) the Terrafom;
- If system is `Unix`, move the executable file to `/usr/local/bin`.

## Argument Referance

- **token** (Required). Should be specified as an environment variable:

    `export DO_TOKEN=(my token)`

## Commands
- `terraform init` - Initialize a Terraform working directory;
- `terraform plan` - Generate and show an execution plan;
- `terraform apply --var-file="main.tfvars" -var="do_token=${DO_TOKEN}"` - Builds or changes infrastructure;
- `terraform destroy --var-file="main.tfvars" -var="do_token=${DO_TOKEN}"` - Destroy Terraform-managed infrastructure;