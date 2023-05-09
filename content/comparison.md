---
title: Comparison
description: Feature comparion between API Connect editions.

---


<PageDescription>

Feature comparion between API Connect editions

</PageDescription>


| Feature \ Edition                  | Software | Reserved Instance  | AWS SaaS | AWS SaaS - Advanced |
|------------------------------------|-----|-----|-----|-----|
| Tenancy - API Management             |  Single tenant |  Single tenant  |  Multi-tenant  |  Multi-tenant  |
| Tenancy - API Gateway                |  Single tenant |  Single tenant  |  Multi-tenant  |  Single-tenant  |
| DataPower - API Gateway            |  Y  |  Y  |  Y  |  Y  |
| DataPower - v5 compatibility       |  Y  |  Y  |  N  |  N  |
| Remote Gateway Connectivity        |  Y  |  Y  |  N  |  N  |
| Access to DataPower console        |  Y  |  N  |  N  |  N  |
| Access to DataPower logs           |  Y  |  * w/ Platform Logs   |  N  |  N  |
| Manage DataPower TLS Config        |  Y  |  * w/ Secrets Manager |  N  |  N  |
| Multi-datacenter deployment for HA |  Y  | __optional HA addon__ (2) |  Y  |  Y  |
| Access to audit events             |  Y  |  * w/ Activity Tracker  |  N  |  N  |
| Offload of Analytics data          |  Y  |  Y  |  Y  |  Y  |
| Managed by API Connect SRE team    |  N  |  Y  |  Y  |  Y  |
| SLA    |  n/a  |  99.5%<br /> 99.95% (with HA addon)  |  99.9%  |  99.9%  |
| Updates (Fixes and patches)    |  Per-customer  |  Flexible scheduling |  Planned by IBM |  Planned by IBM  |
| **Policies**  |     |     |     |     |
| DataPower User Defined Policies              |  Y  |  N  |  N  |  Y  |
| Custom policies            |  Y  |  Y  |  N  |  Y  |
| Global policies            |  Y  |  Y  |  N  |  Y  |
| [Gateway script](https://www.ibm.com/docs/en/api-connect/10.0.5.x_lts?topic=policies-gatewayscript)             |  Y  |  Y  |  N  |  Y  |
| [XSLT](https://www.ibm.com/docs/en/api-connect/10.0.5.x_lts?topic=policies-xslt)                       |  Y  |  Y  |  N  |  Y  |
| [Lambda](https://www.ibm.com/docs/en/api-connect/saas?topic=policies-lambda) |  N  |  N  |  Y  |  Y  |
| [Message Template](https://www.ibm.com/docs/en/api-connect/saas?topic=policies-message-template) |  N  |  N  |  Y  |  Y  |
| **Connectivity**  |     |     |     |     |
| Connectivity: Cloud Private endpoints  |  Y  |  * w/ Code Engine  |  N  |  In plan  |
| Connectivity: On Premises  |  Y  |  * w/ Satellite  |  N  |  In plan  |



1. `*` these items depend on integrations with other IBM Cloud services which are billed separately.
2. Reserved Instance as standard is deployed in a single zone within an MZR - with the optional HA addon the cluster is deployed across 3 zones.  AWS SaaS is deployed across 3 zones as standard. 
