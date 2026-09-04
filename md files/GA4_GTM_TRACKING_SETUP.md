# GA4 & Google Tag Manager Event Tracking Setup Guide

This document outlines the custom tracking events implemented in the code for **The Reach Smart** and provides step-by-step instructions for configuring them inside **Google Tag Manager (GTM)** and **Google Analytics 4 (GA4)**.

---

## 1. Events Configured in the Code

| Event Name | Trigger Condition | Parameters Sent |
| :--- | :--- | :--- |
| **`generate_lead`** | User successfully submits the contact/diagnostic form | `lead_company`, `lead_process`, `lead_lang` |
| **`services_tab_switch`** | User switches between **"For SaaS"** and **"For E-commerce"** | `tab_name` (`"saas"` or `"ecom"`), `tab_label` |
| **`service_cta_click`** | User clicks **"See how it works"** on any service card | `service_name`, `audience_category`, `cta_text` |
| **`case_study_view`** | User clicks **"View Case Study →"** on any service card | `service_name`, `audience_category`, `case_study_title` |

> [!NOTE]
> To comply with Google's strict privacy policy, no personally identifiable information (PII) like raw email addresses or personal names are pushed into GA4.

---

## 2. Google Tag Manager (GTM) Setup

Follow these steps in your [Google Tag Manager Dashboard](https://tagmanager.google.com/) for container `GTM-KNT2N4BD`:

### Step 2.1: Create Data Layer Variables
Variables let GTM read the parameters sent by our code.
1. Go to **Variables** → Click **New** under *User-Defined Variables*.
2. Choose **Data Layer Variable**.
3. Create each of the following (Name the variable the same as the Data Layer Variable Name):
   * `service_name` (Data Layer Variable Name: `service_name`)
   * `audience_category` (Data Layer Variable Name: `audience_category`)
   * `tab_name` (Data Layer Variable Name: `tab_name`)
   * `case_study_title` (Data Layer Variable Name: `case_study_title`)
   * `lead_company` (Data Layer Variable Name: `lead_company`)
   * `lead_process` (Data Layer Variable Name: `lead_process`)
   * `lead_lang` (Data Layer Variable Name: `lead_lang`)

---

### Step 2.2: Create Triggers
Triggers listen for our specific event names.
1. Go to **Triggers** → Click **New**.
2. Trigger Type: **Custom Event**.
3. Create a trigger for each event:
   * **Trigger 1**:
     * Name: `Event - Generate Lead`
     * Event Name: `generate_lead`
   * **Trigger 2**:
     * Name: `Event - Services Tab Switch`
     * Event Name: `services_tab_switch`
   * **Trigger 3**:
     * Name: `Event - Service CTA Click`
     * Event Name: `service_cta_click`
   * **Trigger 4**:
     * Name: `Event - Case Study View`
     * Event Name: `case_study_view`

---

### Step 2.3: Create GA4 Event Tags
Now connect the triggers to your Google Analytics 4 stream (`G-9RXBGT3LLL`).

1. Go to **Tags** → Click **New**.
2. Choose Tag Type: **Google Analytics: GA4 Event**.
3. In **Measurement ID**, enter: `G-9RXBGT3LLL` (or select your GA4 Configuration tag if you have one).

#### Tag 1: Generate Lead
* **Tag Name**: `GA4 - Event - Generate Lead`
* **Event Name**: `generate_lead`
* **Event Parameters**:
  * `company`: `{{lead_company}}`
  * `process`: `{{lead_process}}`
  * `language`: `{{lead_lang}}`
* **Triggering**: Select `Event - Generate Lead`

#### Tag 2: Services Tab Switch
* **Tag Name**: `GA4 - Event - Services Tab Switch`
* **Event Name**: `services_tab_switch`
* **Event Parameters**:
  * `tab_name`: `{{tab_name}}`
* **Triggering**: Select `Event - Services Tab Switch`

#### Tag 3: Service CTA Click
* **Tag Name**: `GA4 - Event - Service CTA Click`
* **Event Name**: `service_cta_click`
* **Event Parameters**:
  * `service_name`: `{{service_name}}`
  * `audience_category`: `{{audience_category}}`
* **Triggering**: Select `Event - Service CTA Click`

#### Tag 4: Case Study View
* **Tag Name**: `GA4 - Event - Case Study View`
* **Event Name**: `case_study_view`
* **Event Parameters**:
  * `service_name`: `{{service_name}}`
  * `case_study_title`: `{{case_study_title}}`
  * `audience_category`: `{{audience_category}}`
* **Triggering**: Select `Event - Case Study View`

---

### Step 2.4: Submit & Publish GTM
* Click the blue **Submit** button in the top right of GTM.
* Version Name: `Added custom behavioral tracking & lead events`.
* Click **Publish**.

---

## 3. Google Analytics 4 (GA4) Configuration

### Step 3.1: Register Custom Dimensions
To see `service_name`, `audience_category`, and `tab_name` inside standard GA4 reports and exploration charts, register them as Custom Dimensions:
1. In [Google Analytics](https://analytics.google.com/), go to **Admin (Gear icon)** → **Data display** → **Custom definitions**.
2. Click **Create custom dimension**.
3. Create the following:
   * **Dimension name**: `Service Name` | Scope: `Event` | Event parameter: `service_name`
   * **Dimension name**: `Audience Category` | Scope: `Event` | Event parameter: `audience_category`
   * **Dimension name**: `Tab Name` | Scope: `Event` | Event parameter: `tab_name`
   * **Dimension name**: `Case Study Title` | Scope: `Event` | Event parameter: `case_study_title`
   * **Dimension name**: `Lead Process` | Scope: `Event` | Event parameter: `process`
   * **Dimension name**: `Lead Company` | Scope: `Event` | Event parameter: `company`

### Step 3.2: Mark `generate_lead` as a Key Event (Conversion)
1. Go to **Admin** → **Data display** → **Events** (or **Key Events**).
2. If `generate_lead` is already listed, toggle **Mark as key event** to ON.
3. If not yet listed:
   * Click **New key event**
   * Enter event name: `generate_lead`
   * Click **Save**

---

## 4. How to Test & Verify

1. **GTM Tag Assistant**:
   * In GTM, click **Preview** in the top right.
   * Enter `https://thereachsmart.net` (or `http://localhost:3000`).
   * On your site, switch tabs, click a "See how it works" button, or view a case study.
   * In the Tag Assistant window, verify that the corresponding tags show **Tags Fired: 1**.
2. **GA4 DebugView**:
   * In GA4, go to **Admin** → **DebugView**.
   * Perform interactions on your previewed site.
   * You will see the events (`services_tab_switch`, `service_cta_click`, `case_study_view`, `generate_lead`) showing up live with their parameters.
