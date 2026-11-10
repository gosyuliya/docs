---
title: "How DNS Works with a VPN and Which Server to Choose"
linkTitle: "DNS Settings"
description: "Learn how our VPN app protects your DNS requests from leaks and compare popular third-party DNS servers, including Cloudflare, Google, and Quad9."
date: 2026-11-09
weight: 1
tags: ["dns", "privacy", "configuration", "troubleshooting"]
---

**DNS (Domain Name System)** translates human-readable domain names (such as `example.com`) into IP addresses that devices use to locate each other online. Without DNS, you would have to memorize IP addresses instead of using website names.

By default, your Internet Service Provider (ISP) handles your DNS requests. This means your ISP can see which websites you visit, even when your internet traffic is encrypted. Our VPN app helps prevent this by routing your DNS requests through the encrypted VPN tunnel and allowing you to choose which DNS servers handle them.

## How DNS Works When You Are Connected to a VPN

When you connect to a VPN, the app automatically routes your DNS requests through an encrypted tunnel. This helps protect you from **DNS leaks**—a situation in which your internet traffic travels through the VPN, but your DNS requests are sent directly to your ISP.

**Here is what happens when you open a website:**

1. You enter a website address in your browser.
2. The request is encrypted and sent through the VPN tunnel to the VPN server.
3. The VPN server queries the selected DNS server to translate the domain name into a numerical IP address.
4. You connect to the website, while your ISP can see only that you are connected to a VPN.

## Which DNS Server Should You Choose?

In the app settings, you can keep the built-in DNS server or switch to a custom DNS provider. The best choice depends on your priorities: speed, privacy, or content filtering.

| DNS Provider | IPv4 Addresses (Primary / Secondary) | Key Feature | Best For |
| :--- | :--- | :--- | :--- |
| **Our VPN DNS** (Default) | Configured automatically | Integrated with the VPN tunnel and covered by a strict no-logs policy | Users who want reliable protection without manual configuration |
| **Cloudflare** | `1.1.1.1`<br>`1.0.0.1` | Fast response times and a strong focus on privacy | Users who prioritize fast page loading |
| **Google Public DNS** | `8.8.8.8`<br>`8.8.4.4` | High global availability and built-in protection against DDoS attacks | Users looking for a well-established, reliable option across different networks |
| **Quad9** | `9.9.9.9`<br>`149.112.112.112` | Automatic blocking of malicious and phishing domains | Users who want extra protection against malware and phishing |
| **AdGuard DNS** | `94.140.14.14`<br>`94.140.15.15` | Network-level blocking of ads, trackers, and analytics services | Users who want to block ads in browsers and apps |
| **OpenDNS (Cisco)** | `208.67.222.222`<br>`208.67.220.220` | Phishing protection and customizable parental controls | Families and users who need content filtering |

> **Tip:** If you are not sure which option to choose, keep the default setting. Our built-in DNS server is optimized to provide a good balance between speed and privacy.

## How to Change Your DNS Settings in the App

If you decide to use a custom DNS server, follow these steps:

1. Open the VPN app and go to **Settings** (the gear icon).
2. Select the **Connection** or **Network** tab (the exact name depends on your operating system).
3. Find **Custom DNS** and turn it on.
4. Enter the primary and secondary IPv4 addresses from the table above.
5. Save your changes and reconnect to the VPN for the new settings to take effect.

## Frequently Asked Questions

### Will Using a Third-Party DNS Server Slow Down My Internet Connection?

Usually, no. Major public DNS services, such as Cloudflare and Google Public DNS, can be faster than local ISP DNS servers. However, if the DNS server you choose is far from your VPN server, the latency when translating domain names into IP addresses may increase slightly.

### What Should I Do If Websites Stop Loading After I Change My DNS Settings?

Check the IP addresses you entered for typing errors. If the addresses are correct, the selected DNS server may be temporarily unavailable or blocked by your current network. Switch the DNS setting back to **Default** and reconnect to the VPN.
