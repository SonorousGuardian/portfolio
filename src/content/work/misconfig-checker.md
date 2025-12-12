---
title: Misconfiguration Checker
publishDate: 2024-07-01 00:00:00
icon: fa-brands fa-python
description: |
  A Python CLI tool engineered to audit system configurations against CIS Benchmarks, replacing manual checks with automated scripts.
tags:
  - Python
  - YAML
  - CIS Benchmarks
  - Automation
---

<a href="https://github.com/SonorousGuardian/misconfiguration_checker" target="_blank" style="
    display: inline-block;
    background-color: var(--neon-cyan);
    color: black;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: bold;
    text-decoration: none;
    margin-bottom: 20px;
">
  <i class="fa-brands fa-github"></i> View Source Code
</a>

### The Problem
Manual auditing of system configurations is time-consuming and prone to human error. Security teams often struggle to validate systems against rigorous standards like **CIS Benchmarks** consistently.

### The Solution
I engineered a Python-based CLI tool that automates the auditing process.

* **70% Efficiency Boost:** Reduced simulated audit time significantly by automating the validation process.
* **Scalable Policies:** Implemented **YAML-based** rule definitions, allowing security teams to create custom policies easily.
* **Evidence Logging:** Automated evidence collection to streamline the reporting lifecycle.
* **Reporting:** Produces color-coded terminal outputs, JSON, and HTML reports for auditing.

### Tech Stack
* **Language:** Python
* **Configuration:** YAML
* **Standard:** CIS Benchmarks