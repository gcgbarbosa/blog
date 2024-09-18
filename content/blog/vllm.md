+++
title = "Setting Up vLLM with Hugging Face for Generative AI Projects"
description = "A comprehensive guide to installing vLLM, integrating it with Hugging Face, and deploying a generative AI server. Learn how to test your setup and leverage LiteLLM for enhanced functionality."
date = "2024-08-03"
description = ""
tags = [
    "generative-ai",
]
+++

## Installing

Just run:

```bash
git clone https://github.com/vllm-project/vllm.git
cd vllm
docker build -f Dockerfile.cpu -t vllm-cpu-env --shm-size=4g .
```

Once you get it installed, you can login to Hugging Face:

```bash
huggingface-cli login
```

You will pull the models from Hugging Face, so you need to be logged in.

## Start vLLM server

Run:

```bash
docker run -it \
     -v ~/.cache/huggingface:/root/.cache/huggingface \
     --rm \
     --network=host \
     vllm-cpu-env \
     --model facebook/opt-125m \
     --api-key 1234banana
```

This will install Llama-3-Groq-8B-Tool-Use model and start the server.

## Testing

You can curl the server to test it:

```bash
curl http://localhost:8000/v1/completions \
    -H "Content-Type: application/json" \
    -d '{
        "model": "facebook/opt-125m",
        "prompt": "Dario Meira seria muito",
        "max_tokens": 50,
        "temperature": 0,
        "api_key": "1234banana"
    }'
```

## Bonus: using LiteLLM to consume vLLM

```bash
base_url = "http://localhost:8000/v1"
model_name = "facebook/opt-125m"
api_key = "s3cr3t"

# vLLM uses the OpenAI API, so we need to set the provider to "openai"
PROVIDER = "openai"

completion(
    model=f"{PROVIDER}/{model_name}",
    api_key=api_key,
    base_url=base_url,
    messages=messages,
)
```

Voila! You have vLLM running on your machine.
