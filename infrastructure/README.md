_Inspired by [Terraform Best Pratices](https://github.com/antonbabenko/terraform-best-practices/tree/master/examples/small-terraform)_

# [Terraform](https://www.terraform.io/)

Terraform is a tool for building, changing, and versioning infrastructure as code.

## Installation

- [Download](https://www.terraform.io/downloads.html) Terrafom;
- If system is `Unix`, move the executable file to `$PATH`.

## Argument Referance

- **token** (Required). Should be specified as an environment variable:

  `export DO_TOKEN=mytoken`

## Commands

- `terraform init` - Initialize a working directory;
- `terraform plan` - Generate and show an execution plan;
- `terraform validate` - Validate configuration files;
- `terraform apply -var="do_token=${DO_TOKEN}"` - Builds or changes infrastructure;
- `terraform destroy -var="do_token=${DO_TOKEN}"` - Destroy infrastructure;
