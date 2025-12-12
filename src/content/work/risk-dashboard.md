---
title: Risk Register Dashboard
publishDate: 2024-09-01 00:00:00
icon: fa-solid fa-chart-pie
description: |
  A comprehensive GRC dashboard in Python using Streamlit to transform Excel risk registers into interactive, data-driven heatmaps.
tags:
  - Streamlit
  - Pandas
  - GRC Visualization
---

<a href="https://github.com/SonorousGuardian/Risk_Register_Dashboard" target="_blank" style="
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
[cite_start]Static spreadsheets (Excel) make it difficult for executives to visualize real-time risk exposure and control maturity[cite: 27, 102].

### The Solution
I architected a real-time risk dashboard that parses Excel data and visualizes it dynamically.
* [cite_start]**Interactive Visuals:** Features dynamic KPI cards, risk heatmaps, treemaps, and donut charts[cite: 103].
* [cite_start]**Automated Scoring:** Uses algorithms to calculate risk scores based on input data[cite: 26].
* [cite_start]**Reporting:** Allows for Excel export and filtering for specific compliance reporting[cite: 103].

### Tech Stack
* **Frontend:** Streamlit
* **Data Processing:** Pandas (Python)
* **Input:** XLSX (Excel)