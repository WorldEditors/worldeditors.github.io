---
layout: post
title: "Teaching Linear Attention to Remember: Stateful Training in StateLinFormer"
subtitle: "Persistent memory across batch boundaries for embodied navigation"
date: 2026-07-10
author: Fan
lang: en
header_img: img/2026/StateLinFormer_Cover.png
translation_url: /blog/2026/07/10/statelinformer/
permalink: /blog/en/2026/07/10/statelinformer/
catalog: true
tags:
    - Paper

---

[[Paper]](https://arxiv.org/abs/2603.23571)

An embodied agent's memory should not cover only one model call, nor should it suddenly disappear when a training batch ends. Real navigation is continuous: an agent must remember routes it has taken, objects it has seen, and decisions it has made, then use that information to understand its current situation. The longer the interaction, the more important this capability becomes.

StateLinFormer begins with an often-overlooked detail of training: **although linear attention can compress history into a recurrent state, conventional training resets that state at the beginning of every batch.** A model that never learns to maintain memory over long periods during training is unlikely to acquire stable long-term memory merely by running for longer at inference time. We therefore introduce stateful training, which carries memory across consecutive training segments.

## The long-horizon navigation dilemma: explicit maps or finite context

Traditional modular navigation systems usually maintain explicit maps. Their memory is well defined and structurally stable, but their representations and navigation modules often require task-specific design and offer limited flexibility under environmental change. End-to-end Transformers are more adaptable, yet fixed context windows and quadratic complexity constrain them. As a trajectory grows, early information is eventually truncated.

Linear attention offers another possibility. It compresses history into a fixed-size recurrent state, preventing computation and storage from growing quadratically with context length. Yet **being structurally capable of storing state does not mean that a model has learned to use it.** If every training segment begins from a zero state, the model still treats the batch boundary as a memory boundary. Long-term memory then remains an architectural possibility rather than a learned capability.

## Carrying memory across batch boundaries

![The StateLinFormer stateful-training framework](/img/2026/StateLinFormer_framework.png)
*The key difference in StateLinFormer. Conventional stateless training clears memory at the beginning of every batch. Stateful training passes the final memory of one segment to the next while stopping gradients at the boundary.*

The figure compares the two training paradigms. Under stateless training, the `Memory_i` produced at the end of `Batch_i` is discarded, and `Batch_{i+1}` starts from an all-zero memory. Even when the two batches come from one continuous trajectory, they remain unrelated from the model's perspective.

StateLinFormer arranges training segments in temporal order and uses `Memory_i` as the initial state of the next segment. Finite batches are therefore connected into a continuous stream of experience, allowing training to approximate learning over infinitely long sequences. At the same time, stop-gradient is applied at each batch boundary: the state continues forward, but gradients do not propagate backward through the entire history. The model can retain long-term information while keeping memory use and training cost manageable.

This apparently small change aligns training with deployment. An agent interacts continuously with its environment at inference time, so its memory should also remain continuous during training.

## From recalling history to adapting in context

We evaluate StateLinFormer in two indoor domains: a grid-based MAZE environment and the visually realistic ProcTHOR environment. With the same architecture and parameter count, StateLinFormer consistently outperforms its stateless linear-attention counterpart. It also delivers stronger long-horizon navigation than parameter-matched Transformer baselines with fixed context windows.

More importantly, the benefit of stateful training grows as interactions become longer. Persistent memory helps the model retrieve earlier spatial information, but it also allows behavior to change in response to previous observations and feedback. The result is not merely a larger "cache"; it is stronger in-context learning and online adaptation.

## Memory is first a training problem

The central lesson of StateLinFormer is that **long-term memory depends not only on how many tokens a model can hold, but also on whether training requires it to maintain a persistent, useful internal state.** Expanding a context window stores more history. Stateful training instead teaches the model how to consolidate history into state and use that state in the future.

This distinction is especially important for embodied intelligence. The physical world is not divided into batches, and an agent cannot restart after every segment of interaction. By bringing persistent state into training, StateLinFormer moves efficient linear attention from being theoretically capable of processing long sequences to actually acquiring long-term memory, offering a more direct path toward embodied agents that operate and adapt over extended periods.
