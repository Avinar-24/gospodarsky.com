_Inspired by [Terraform Best Pratices](https://github.com/antonbabenko/terraform-best-practices/tree/master/examples/small-terraform)_

# [Terraform](https://www.terraform.io/)

Terraform is a tool for building, changing, and versioning infrastructure as code.

## Installation

- [Download](https://www.terraform.io/downloads.html) the Terrafom;
- If `Unix` system, move the executable file to `/usr/local/bin`.

## Commands
- `terraform init` - Initialize a Terraform working directory;
- `terraform plan` - Generate and show an execution plan;
- `terraform apply --var-file="main.tfvars"` - Builds or changes infrastructure;
- `terraform destroy --var-file="main.tfvars"` - Destroy Terraform-managed infrastructure;