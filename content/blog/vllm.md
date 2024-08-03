+++
title = "The bare minimum to get started with vLLM"
date = "2024-08-03"
description = "A brief guide to get started with vLLM"
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
     --rm \
     --network=host \
     vllm-cpu-env \
     --model Groq/Llama-3-Groq-8B-Tool-Use
```

This will install Llama-3-Groq-8B-Tool-Use model and start the server.

## Testing

You can curl the server to test it:

```bash
curl http://localhost:8000/v1/completions \
    -H "Content-Type: application/json" \
    -d '{
        "model": "Groq/Llama-3-Groq-8B-Tool-Use",
        "prompt": "San Francisco is a",
        "max_tokens": 7,
        "temperature": 0
    }'
```

Voila! You have vLLM running on your machine.
