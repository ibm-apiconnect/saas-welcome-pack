---
title: Comparison
description: Feature comparion between API Connect editions.

---


<PageDescription>

Feature comparion between API Connect editions

</PageDescription>

| Feature \ Edition                  | Software | Reserved Instance  | AWS SaaS | AWS SaaS - Advanced |
|------------------------------------|:-----:|:-----:|:-----:|:-----:|
| Tenancy - API Management             |  Single tenant |  Single tenant  |  Multi-tenant  |  Multi-tenant  |
| Tenancy - API Gateway                |  Single tenant |  Single tenant  |  Multi-tenant  |  Single-tenant  |
| DataPower - API Gateway            |  {{<checkyes>}}   | {{<checkyes>}} | {{<checkyes>}} | {{<checkyes>}} |
| DataPower - v5 compatibility       | {{<checkyes>}} | {{<checkyes>}} | {{<checkno>}}  | {{<checkno>}}  |
| Remote Gateway Connectivity        | {{<checkyes>}} | {{<checkyes>}} | {{<checkno>}}  | {{<checkno>}}  |
| Access to DataPower console        | {{<checkyes>}} |  {{<checkno>}}   | {{<checkno>}}  | {{<checkno>}}  |
| Access to DataPower logs           | {{<checkyes>}} |  * w/ Platform Logs   | {{<checkno>}}  | {{<checkno>}}  |
| Manage DataPower TLS Config        | {{<checkyes>}} |  * w/ Secrets Manager | {{<checkno>}}  | {{<checkno>}}  |
| Multi-datacenter deployment for HA | {{<checkyes>}} | __optional HA addon__ (2) | {{<checkyes>}} | {{<checkyes>}} |
| Access to audit events             | {{<checkyes>}} |  * w/ Activity Tracker  | {{<checkno>}}  | {{<checkno>}}  |
| Offload of Analytics data          | {{<checkyes>}} | {{<checkyes>}} | {{<checkyes>}} | {{<checkyes>}} |
| Managed by API Connect SRE team    | {{<checkno>}}  | {{<checkyes>}} | {{<checkyes>}} | {{<checkyes>}} |
| SLA    |  n/a  |  99.5%<br /> 99.95% (with HA addon)  |  99.9%  |  99.9%  |
| Updates (Fixes and patches)    |  Per-customer  |  Flexible scheduling |  Planned by IBM |  Planned by IBM  |
| **Policies**  |     |     |     |     |
| DataPower User Defined Policies              | {{<checkyes>}} | {{<checkno>}}  | {{<checkno>}}  | {{<checkyes>}} |
| Custom policies            | {{<checkyes>}} | {{<checkyes>}} | {{<checkno>}}  | {{<checkyes>}} |
| Global policies            | {{<checkyes>}} | {{<checkyes>}} | {{<checkno>}}  | {{<checkyes>}} |
| [Gateway script](https://www.ibm.com/docs/en/api-connect/10.0.5.x_lts?topic=policies-gatewayscript)             | {{<checkyes>}} | {{<checkyes>}} | {{<checkno>}}  | {{<checkyes>}} |
| [XSLT](https://www.ibm.com/docs/en/api-connect/10.0.5.x_lts?topic=policies-xslt)                       | {{<checkyes>}} | {{<checkyes>}} | {{<checkno>}}  | {{<checkyes>}} |
| [Lambda](https://www.ibm.com/docs/en/api-connect/saas?topic=policies-lambda) | {{<download>}} (3)  | {{<download>}} (3)  | {{<checkyes>}} | {{<checkyes>}} |
| [Message Template](https://www.ibm.com/docs/en/api-connect/saas?topic=policies-message-template) | {{<download>}} (3)  | {{<download>}} (3)  | {{<checkyes>}} | {{<checkyes>}} |
| Mesh Routing | {{<download>}} (3)  | {{<download>}} (3) | {{<checkno>}} | {{<checkno>}} |
| **Connectivity**  |     |     |     |     |
| Connectivity: Cloud Private endpoints  | {{<checkyes>}} |  * w/ Code Engine  | {{<checkno>}}  |  In plan  |
| Connectivity: On Premises  | {{<checkyes>}} |  * w/ Satellite  | {{<checkno>}}  |  In plan  |
| **Hosted Regions** |  | **Reserved Instance** | **AWS SaaS** | **AWS SaaS - Advanced** |
| Frankfurt  |  | {{<checkyes>}}  | {{<checkyes>}}  | {{<checkyes>}} |
| London  |  | {{<checkyes>}}  | {{<checkyes>}}  | {{<checkyes>}} |
| Jakarta  |  | {{<checkno>}}  | {{<checkyes>}}  | {{<checkyes>}} |
| Mumbai  |  | {{<checkno>}}  | {{<checkyes>}}  | {{<checkyes>}} |
| Sao Paolo  |  | {{<checkyes>}}  | {{<checkno>}}  | {{<checkno>}} |
| Sydney  |  | {{<checkyes>}}  | {{<checkyes>}}  | {{<checkyes>}} |
| Tokyo  |  | {{<checkyes>}}  | {{<checkno>}}  | {{<checkno>}} |
| Toronto  |  | {{<checkyes>}}  | {{<checkno>}}  | {{<checkno>}} |
| US East  |  | {{<checkyes>}} | {{<checkyes>}}  | {{<checkyes>}} |
| US South  |  | {{<checkyes>}} | {{<checkno>}}  | {{<checkno>}} |






1. `*` these items depend on integrations with other IBM Cloud services which are billed separately.
2. Reserved Instance as standard is deployed in a single zone within an MZR - with the optional HA addon the cluster is deployed across 3 zones.  AWS SaaS is deployed across 3 zones as standard. 
3. [Available as user defined policies to download](https://www.ibm.com/support/pages/node/6991789) for software and RI customers 
