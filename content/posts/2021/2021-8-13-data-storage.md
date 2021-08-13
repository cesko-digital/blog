---
title: 'How we simplified our Public Data Storage (data.cesko.digital)'
cover: https://data.cesko.digital/img/3785c15c.png
author: horm
date: 2021-8-13-08-02
slug: data-storage-howto
lang: cs
description: 'I’ve contributed to the civic-tech community called Česko.Digital and we created a new project. We are storing all static assets in our S3 bucket accessible via CloudFront. This article describes ways we simplified uploading these assets.'
---

## The Main Motivation

There are several reasons why Česko.Digital needs storage space for public assets:

* Firstly, we do not store our blog images in the repository, which would have inflated the repository size quite a lot.
* We have some generated data, such as a book translation or a machine-readable list of all cities in the Czech Republic, that we need to store somewhere.

The first solution was quite simple. Tomáš Znamenáček (zoul) and Martin Wenisch together configured a simple S3 bucket with CloudFront leading to the domain “data.cesko.digital”. All scripts for the automated data upload were uploaded to this bucket. Zoul was responsible for the uploads as he usually is the publisher of all new blog posts.

It works well, but there is always some space for improvements:

* Only the people who had an AWS IAM access could upload new files.
* Any uploads were only possible through the AWS CLI or AWS Console.
* The S3 bucket did not have any backup or a versioning system.

## Architecture and Implementation

First, we opened a [GitHub issue](https://github.com/cesko-digital/blog/issues/99) to discuss the specifications. The initial idea was to create a simple application. But then Martin got an amazing idea to use GitHub Actions.

For that, we would need a separate GitHub repository for the assets and to configure a GitHub Action for content synchronization. With this solution we would benefit from the Git versioning and the content back up. I looked for similar approaches for public data storage but I could not find anything. For that reason, I have made my decision to implement the synchronization.

For the AWS set up configuration, I wanted to use Terraform from the very beginning. The reason for that is that AWS is a complex service. Having the infrastructure as code is useful, especially because it works great for prototyping. Terraform helps you to set up, change and remove any AWS infrastructure. Martin has a lot of experience in Terraform, and he has also done the code reviews for me. Please see a link to an existing solution for the S3 upload I found here: [jakejarvis/s3-sync-action](https://github.com/jakejarvis/s3-sync-action).

![](https://data.cesko.digital/img/f8f34cc0.png)

All sources are [available on GitHub](https://github.com/cesko-digital/assets). Now, let me highlight some design decisions we have made:

* Currently we have two S3 buckets. One is used for the manual uploads, and the other is used for automatically generated data. CloudFront has an [origin group with a fail-over bucket configured](https://github.com/cesko-digital/assets/blob/master/main.tf#L107). CloudFront transfers a particular request to the bucket with the generated files, in case the file is not in the primary bucket.
* We have an [error page](https://github.com/cesko-digital/assets/blob/master/content/index.html) for invalid URLs.
* [Sync Action](https://github.com/cesko-digital/assets/blob/master/.github/workflows/sync_content.yml) uploads all files from the content folder and invalidates the CloudFront cache. It was essential to add the “delete flag” to make sure removed files are removed from the cache, too.
* We configured a [GitHub Action for infrastructure changes](https://github.com/cesko-digital/assets/blob/master/.github/workflows/setup_infrastructure.yml). Terraform state is kept in a separate S3 bucket. The repository also contains a [CODEOWNERS file](https://github.com/cesko-digital/assets/blob/master/.github/CODEOWNERS). This file prevents any unwanted infrastructure changes that could bring extra costs.

GitHub GUI is available for any file uploads immediately, and it is accessible to anyone. The file upload process is very transparent and clear. On top of this structure, we are considering adding an extra layer such as NetlifyCMS. This would help us to hide the committing process. At this point however, we treat this as a cosmetic change and it does not have a high priority in our near future improvements.

I enjoyed working on this project. It was a fun journey, and not only because I have learned something new, especially about Terraform and AWS. Thank you so much, Martin and zoul. Thank you for your help, your dedication and for being an inevitable part of this project.
