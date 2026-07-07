---
title: Features
description: SONAR features.
sidebar:
  order: 303
---

# SONAR features

SONAR is a **network flow capture and inventory** application, built with
**Rust + Tauri + Vue.js**, designed to make it easier to understand and
visualize communications on a computer network.
This page describes all the current and planned features of the software.

---

## 🧩 1. Packet capture (core feature)

### Capture control
- **Start** the network capture <img src="/doc/assets/logo_sonar.png" alt="SONAR logo" style="width: 25px; display: inline; vertical-align: middle; margin-left: 10px;" />
- **Stop** the capture 🛑
- **Reset** the capture and the associated visualization 🔄
<img src="/doc/assets/topbar.png"  alt="topbar"  />

### Real-time visualization
- Live display of captured packets
<img src="/doc/assets/realtime.png"  alt="Realtime frames"  />

- Real-time counters:
  - Number of packets read 📥
  - Number of packets added to the matrix 📊
  - Number of dropped packets (by the code ❌ or the network card 🚫)
- **Saturation** indicator (alert on packet loss 🚨)
- Capture stopwatch (capture duration ⏱️)
<img src="/doc/assets/status.png"  alt="status bar"  />


### Filtering
- Filtering **at capture time** (BPF or equivalent)
- Filtering **in the matrix and the graph view** by address, protocol, port, label and traffic direction
<img src="/doc/assets/filters.png"  alt="filter"  />


### Advanced configuration ⚙️
- Selecting the **network interface**
- Adjustable parameters:
  - **Capture buffer** size (libpcap)
  - **Channel buffer** size (capture → processing)
  - Internal buffer flush **timeout**
  - **Snaplen** (maximum size captured per packet)

### Reset behavior
- `reset` clears the capture **and** the corresponding **graph visualization**.

---

## 🌐 2. Flow inventory (flow matrix)

### Generation and display
- Automatic aggregation of packets into a **flow matrix** (source/destination/protocol)
- **Graph visualization** of communications as a dynamic graph
- **CSV export** of the matrix
- **PNG export** of the graph representation

### Editing and labeling
- Ability to **edit graph nodes** to assign them **labels** (e.g. `server 1`)
- These labels are saved in a **dedicated column** of the exported CSV
- **Label import from a CSV file** in the `mac, ip, label` format (extra columns
  are merged into the label)
- **Labeling at every stage of the analysis:**
  - **Pre-labeling**: import your labels before the capture, they are applied to
    flows as soon as they first appear
  - **Post-labeling**: import or complete your labels afterward, the graph nodes
    are updated immediately **without losing the current layout**
- **Label file checking before import**: SONAR reports invalid MAC/IP addresses,
  duplicates and conflicts (same IP mapped to two different MACs or two different
  labels). Each error indicates the **line number** and the **full content of the
  line** involved, to make correction easier.

### Node placement
- Gravity engine (force-directed layout)
- Option to **disable** gravity and **place nodes manually**

### Adaptive zoom
- Smooth zoom that shows more or less detail depending on the zoom level:
  - Overview → main nodes and links
  - Strong zoom → display of **ports** and **protocols**

### Protocols and application analysis

- Decoding of the Ethernet, IPv4, IPv6, ARP, ICMP, TCP and UDP layers
- Application visibility on **HTTP**, **DNS**, **TLS/SSL**
- Support for industrial flows with **Modbus/TCP**
- **OPC UA** detection in recent parser versions

---

## 📂 3. Import and conversion

- **PCAP file import 📄**
- Automatic conversion of the PCAP into a **flow matrix**
- Visualization and editing of the imported matrix (identical to a live capture)
- Loading indicator while importing large captures

### Import and merging of flow matrices (CSV)
- **Replay a previously exported matrix**: reopen an analysis, resume it later or
  share it without re-capturing
- **Import several matrices at once**: the selected files are **listed before
  opening** and can be cleared before confirmation
- **Automatic merging** of the imported matrices into a single analysis:
  - identical flows present in several files are **consolidated**
  - the **packet count** and the **byte volume** are added up
  - the most recent **last seen** date (`last_seen`) is kept
- The **labels carried by the imported matrices** are applied during merging

---

## 💾 4. Saving, export and logs

- Export of **application logs 📒**
- Export of **matrices 💾** in CSV format
- Export of the **graph view 📸** as PNG
- Confirmation message when closing the application:
  > "Are you sure you want to quit without saving?"

---

## ℹ️ 5. Information and help

- **About** menu (two entries):
  - **Version**: application version and canonical build versions
    (**Rust**, **Node.js**, **Deno**, **Tauri CLI**, and **Npcap** on Windows)
  - **Changelog**: notes for the latest version, embedded in the application
- Access to the user **documentation** (usage guide, support)

---

## 🖥️ 6. Execution and advanced usage

- Custom network interface selector
- **CLI / headless** mode for running without a graphical interface
- Windows integration around **Npcap** for capture

---

## ⚙️ 7. Monitoring and performance

- **CPU** usage monitoring
- Technical counters:
  - Packets read
  - Packets added to the matrix
  - Dropped packets (code / network card)
- **Saturation** indicator in case of network overload

---

## 🚧 8. Operating rules

- `reset` clears the capture and the associated graph visualization
- User labels are persisted in the CSV exports for traceability
- Under heavy load, SONAR warns the user about potential packet loss

---

## 🔍 9. Technical points and quality

- Consistency between buffers (libpcap / channel / pool)
- Load tests (validation of the loss counters)
- Validation of the CSV export schemas:
  - `mac_source`, `mac_destination`, `ip_source`, `ip_destination`, `protocol_transport`, `application_protocol`, `label_source`, `label_destination`, `count`, `total_bytes`, `last_seen`, etc.
- PNG exports include metadata: date, SONAR version, active filter
- Import/export round-trip: importing a CSV/PCAP must reproduce the same matrix and the same labels

---

## 🧠 General objective

SONAR aims to **simplify the understanding of network flows** over a given
perimeter.
The application draws **no** automatic conclusions: it faithfully reproduces the
observed exchanges, leaving it to the user (auditor, technician or analyst) to
interpret the flows and draw the necessary conclusions.

---

> **Lead author:** Cyprien Avico
> **Project:** SONAR – Optimized Node Surveillance for Network Analysis
> **Languages:** Rust, Tauri, Vue.js
> **License:** AGPLv3
> **Organization:** ERDT-CYBER / SSF Toulon
