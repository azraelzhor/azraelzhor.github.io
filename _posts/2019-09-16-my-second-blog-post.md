---
layout: "post"
title: "This is My Second Blog Post"
---

Machine learning is all about probability. To train a model, we typically tune its parameters to maximise the probability of the training dataset under the model. To do so, we have to assume some probability distribution as the output of our model. The two distributions most commonly used are Categorical for classification and Gaussian for regression. The latter case can be problematic, as the true probability density function (pdf) of real data is often far from Gaussian. If we use the Gaussian as likelihood for image-generation models, we end up with blurry reconstructions. We can circumvent this issue by adversarial training, which is an example of likelihood-free inference, but this approach has its own issues.

## Some great heading

Gaussians are also used, and often prove too simple, as the pdf for latent variables in Variational Autoencoders (VAEs), which I describe in my previous post. Fortunately, we can often take a simple probability distribution, take a sample from it and then transform the sample. This is equivalent to change of variables in probability distributions and, if the transformation meets some mild conditions, can result in a very complex pdf of the transformed variable. Danilo Rezende formalised this in his paper on Normalizing Flows (NF), which I describe below. NFs are usually used to parametrise the approximate posterior q in VAEs but can also be applied for the likelihood function.
