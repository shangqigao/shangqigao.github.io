---
layout: post
title: Our paper received the Best Paper Award at MICCAI AMAI 2025
date: 2025-09-23
inline: false
related_posts: false
---

**I am delighted to share that our paper received the Best Paper Award**

---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/news/best_paper_award_miccai_amai2025.png" title="Best Paper Award" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Best Paper Award received at MICCAI AMAI 2025
</div>

### Overview

_S. Gao et al., Evaluating Foundation Models with Pathological Concept Learning for Kidney Cancer_

[medRxiv](https://www.medrxiv.org/content/10.1101/2025.09.29.25336908v1) [arXiv](https://arxiv.org/abs/2509.25552) [Code](https://github.com/shangqigao/RadioPath)

**Abstract.** To evaluate the translational capabilities of foundation models, we develop a pathological concept learning approach focused on kidney cancer. By leveraging TNM staging guidelines and pathology reports, we build comprehensive pathological concepts for kidney cancer. Then, we extract deep features from whole slide images using foundation models, construct pathological graphs to capture spatial correlations, and trained graph neural networks to identify these concepts. Finally, we demonstrate the effectiveness of this approach in kidney cancer survival analysis, highlighting its explainability and fairness in identifying low- and high-risk patients. The source code has been released by [link](https://github.com/shangqigao/RadioPath).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/news/overview_miccai_amai2025.png" title="Pathological Concept Learning" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Overview of pathological concept learning. (a) The framework of pathological concept learning; (b) benchmarking foundation models in identifying pathological concepts; (c) Explainable survival analysis based on pathological concepts; and (d) Identification of spatial phenotypes by concept-orientated attention map.
</div>

### Explainability

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/news/explainability_miccai_amai2025.png" title="Explainability" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Kidney cancer survival analysis. The left shows the coefficients of top 10 high risk factors leading to mortality. The middle shows the AUC at different time points. The right shows the survival curves of high- and low-risk groups.
</div>

### Fairness

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/news/fairness_miccai_amai2025.png" title="Fairness" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Evaluation of fairness in terms of gender and race.
</div>
