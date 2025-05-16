---
title: "Proxy & API Gateway"
date: 2025-04-25
tags: ["AI Studio", "AI Management", "AI Gateway", "AI Proxy"]
description: "How AI Gateway works?"
keywords: ["AI Studio", "AI Management", "AI Gateway", "AI Proxy"]
---

The Tyk AI Studio Proxy is the central gateway for all Large Language Model (LLM) interactions within the platform. It acts as a secure, observable, and policy-driven entry point, managing requests from client applications to the configured backend LLM services.

## Purpose

The Proxy serves several critical functions:

*   **Unified Access Point:** Provides a single, consistent endpoint for applications to interact with various LLMs.
*   **Security Enforcement:** Handles authentication, authorization, and applies security policies.
).
) system.
*   **Vendor Abstraction:** Hides the complexities of different LLM provider APIs, especially through the OpenAI-compatible endpoint.

## Core Functions

) and route the request accordingly.

2.  **Authentication & Authorization:**
    *   Validates the API key provided by the client application.
    *   Identifies the associated Application and User.
).

3.  **Policy Enforcement:** Before forwarding the request to the backend LLM, the Proxy enforces policies defined in the LLM Configuration or globally:
) for the App or LLM.
    *   **Model Access:** Ensures the requested model is allowed for the specific LLM configuration.
) to modify the incoming request payload.

) database.

## Endpoints

Tyk AI Studio typically exposes two primary types of proxy endpoints:

### 1. OpenAI-Compatible Endpoint (`/openai/{routeId}/v1/...`)

*   **Purpose:** This endpoint mimics the official OpenAI API structure. It allows developers to use standard OpenAI SDKs (Python, Node.js, etc.) to interact with *any* LLM configured in Tyk AI Studio, regardless of the actual backend vendor (Anthropic, Google Vertex AI, etc.).
*   **Translation:** Tyk AI Studio includes a translation layer (using libraries like `langchaingo`) that converts standard OpenAI API requests into the format required by the target backend LLM (defined in the `{routeId}` configuration) and translates the backend LLM's response back into the standard OpenAI format.
*   **Benefits:** Simplifies integration significantly, allowing developers to write code once and target multiple LLM backends managed by Tyk AI Studio.

    ```bash
    # Example using OpenAI Python SDK
    import openai

    client = openai.OpenAI(
        base_url="https://your-ai-studio-host/openai/my-anthropic-config/v1",
        api_key="YOUR_AI_STUDIO_APP_API_KEY"
    )

    response = client.chat.completions.create(
        model="claude-3-opus-20240229", # Model allowed in 'my-anthropic-config'
        messages=[{"role": "user", "content": "Hello!"}]
    )
    print(response.choices[0].message.content)
    ```

### 2. Direct Proxy Endpoint (`/proxy/{routeId}/...`)

*   **Purpose:** Provides a more direct pass-through to the backend LLM, potentially with less translation than the OpenAI-compatible endpoint. The exact request/response format expected at this endpoint might depend more heavily on the specific backend LLM vendor configured for the `{routeId}`.
*   **Usage:** Might be used for accessing vendor-specific features not covered by the OpenAI API standard or in scenarios where the OpenAI translation layer is not desired.

## Configuration & Security

), which includes details about the backend vendor, model access, budget limits, and associated filters.

By centralizing LLM access through the Proxy, Tyk AI Studio provides a robust layer for security, control, and observability over AI interactions.
