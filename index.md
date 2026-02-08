# UrsaWorks User Guide

Welcome to **UrsaWorks** — a local automation tool for managing URSA feature/config approval requests. This guide shows you how to get started and use the application effectively.

## What is UrsaWorks?

UrsaWorks is a Docker-based application that runs on your localhost and helps you automate approvals and rejections of **URSA config requests**. You can:

- Build automation rules that match tenant type + config name
- Include or exclude specific requesters
- Execute rules in bulk (preview and run)
- Change feature flags (both toggles and numeric values) and auto-approve the requests
- View run history and results

## Quick Start

1. **Run the Docker container** on your localhost
2. **Connect your URSA session** by providing your session cookie
3. **Create rules** to automate approvals
4. **Run rules** manually or change feature values

## Features

- **Rules**: Automate approval decisions based on config, requester, and tenant
- **Manual Run**: Preview and execute your rules against open approvals
- **Feature Toggle**: Change feature flags (toggles and numeric values) and auto-approve requests
- **User Settings**: Control which configs are visible and manage profiles

## Security

UrsaWorks runs locally on your machine and identifies you through your URSA session cookie. All operations are performed using your URSA credentials, so you can only see and act on what your URSA account has access to.