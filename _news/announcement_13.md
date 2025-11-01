---
layout: post
title: Our paper was accepted at NeurIPS2025!
date: 2025-10-30
inline: false
related_posts: false
---

**Thrilled to share our accepted paper at NeurIPS2025**

---

### Overview

_K. Liu, S. Gao, Y. Fu, and S. Gao, Towards Generalizable Retina Vessel Segmentation with Deformable Graph Priors_

[openreview](https://openreview.net/forum?id=zVkbsGlKn9) [Code](https://github.com/AI4MOL/GraphSeg)

**Abstract.** Retinal vessel segmentation is critical for medical diagnosis, yet existing models often struggle to generalize across domains due to appearance variability, limited annotations, and complex vascular morphology. We propose GraphSeg, a variational Bayesian framework that integrates anatomical graph priors with structure-aware image decomposition to enhance cross-domain segmentation. GraphSeg factorizes retinal images into structure-preserved and structure-degraded components, enabling domain-invariant representation. A deformable graph prior, derived from a statistical retinal atlas, is incorporated via a differentiable alignment and guided by an unsupervised energy function. Experiments on three public benchmarks (CHASE, DRIVE, HRF) show that GraphSeg consistently outperforms existing methods under domain shifts. These results highlight the importance of jointly modeling anatomical topology and image structure for robust generalizable vessel segmentation.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/news/graphseg_pgm_neurips2025.png" title="Probabilistic Graphical Model" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Overview of Probabilistic Modelling
</div>

### Architecture of GraphSeg

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/news/graphseg_arch_neurips2025.png" title="Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Neural Network Architecture of GraphSeg
</div>

### Image decompsition

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/news/graphseg_dec1_neurips2025.png" title="In-Domain Decomposition" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    In-domain Image Decomposition
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/news/graphseg_dec2_neurips2025.png" title="Cross-Domain Decomposition" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Cross-domain Image Decomposition
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/news/graphseg_dec3_neurips2025.png" title="Cross-Domain Decomposition" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Cross-domain Image Decomposition
</div>
