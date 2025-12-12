---
title: Risk Register Dashboard
publishDate: 2024-09-01 00:00:00
icon: fa-solid fa-chart-line
description: |
  A comprehensive GRC dashboard in Python using Streamlit to transform Excel risk registers into interactive, data-driven heatmaps.
tags:
  - Python
  - Streamlit
  - Pandas
  - GRC Visualization
---

<a href="https://github.com/SonorousGuardian" target="_blank" style="
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
Static spreadsheets (Excel) make it difficult for executives to visualize real-time risk exposure and control maturity.

### The Solution
I architected a real-time risk dashboard that parses Excel data and visualizes it dynamically.

* **Interactive Visuals:** Features dynamic KPI cards, risk heatmaps, treemaps, and donut charts.
* **Automated Scoring:** Uses algorithms to calculate risk scores based on input data.
* **Reporting:** Allows for Excel export and filtering for specific compliance reporting.

### Tech Stack

* <i class="fa-brands fa-python" style="color: #4584b6;"></i> **Frontend:** Streamlit
* <i class="fa-solid fa-table" style="color: #e34f26;"></i> **Data Processing:** Pandas (Python)
* <i class="fa-solid fa-file-excel" style="color: #217346;"></i> **Input:** XLSX (Excel)