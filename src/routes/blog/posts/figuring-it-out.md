---
title: Finding things that work in software engineering
date: "2023-05-11"
tags: 
    - programming
    - design-patterns

description: How I think about software engineering and how to get things working smoothly, and why I think about them.
---

## Background.
When I started working professionally with software development, after doing web development freelancing for many years I joined a company that just worked. The company had initiated the shift from a monolithic Java application running on Oracle WebLogic to a microservices architecture on AWS ECS about a year prior to my arrival.

This organization comprised multiple development teams spread across three countries, with each team consisting of 4 to 10 individuals. I became part of the team dedicated to customer information and its associated processes and services. Our focus revolved around customer registration, customer knowledge (KYC), and compliance. Within our specific domain, we were responsible for everything from the frontend to database operations.

At this point in time I was green when it comes to both systems design and Java development in general. The closest thing I had done before this was a few web-applications written in PHP to deal with things like GDPR compliance and stock-ordering for small companies. Fortunately, I found myself surrounded by exceptional mentors within my team.

By the time I joined, our team had successfully transitioned a small portion of our responsibilities from the monolith to microservices. The other teams were in similar stages of the migration. Over the course of my two-year tenure with the company, we managed to extract most modules from the monolith, with only a few remaining due to the payments team's inability to transition out. However, a few months after my departure, even that code was successfully migrated.

One might think that 3 years for a cloud move is a long time but it really isn't for a system of this scale. The most impressive thing in my mind is however not the fact that we made it, it is the fact that we were able to produce new features requested by the business while simultaneusly working our way out of the monolith. And doing this while other teams were doing major changes to their systems on which we depended and deploying things we worked on to production whenever they were ready for it.

## Standing on the shoulders of unknown.
It wasn't until I stopped working for the company I realised what I had experienced there, and ever since I have been trying to figure out how things were achieved and how to bring this knowledge with me to my new organizations.

Looking back at the things we did I can see that we applied a set of things:

### Rules within the team
- We employed a CI pipeline with comprehensive unit tests, allowing merges only when the tests passed successfully.
- Prompt peer review of pull requests (PRs) ensured that no PR remained open for more than a few hours without review.
- Every developer was accountable for their deployments and responsible for knowing how to roll back in the event of failure.

### Technology
- CI-pipeline with high coverage unit tests. (can not merge before tests pass)
- Continous deployment. Deployment to production happened daily, it took 15 minutes to do and required approvals by at least two other devs.

### Methods we used
- DDD Domain Driven Design. We needed to understand what the business needed and we needed to be able to explain to business people how the system worked.
- Close work with stake holders. Whenever we worked on a new feature for a business function we started off with a meeting where we discussed the features needed and wrote user stories together with them.
- Pull based task assignment. Whenever you as a dev where done with something you asked if someone needed help, otherwise you went straight to the backlog and picked the highest up story. No direct assignments unless agreed upon with the team.
- Bi-weekly retrospectives.
- Blameless post mortems with discussions that were documented.

### Code patterns
- We applied the Strangler Fig pattern when transitioning functionality from older systems. This involved initially creating new functionality in a backwards-compatible manner, establishing an interface on the new microservice that called the legacy monolithic applications. We informed other teams of the new API, monitored logs to ensure no new calls were made to the monolith, and gradually built up the functionality within the microservice. Each piece of functionality was migrated incrementally, avoiding disruptive rewrites.
- Adapters and ports were consistently used to facilitate smooth integration when multiple teams implemented significant changes across the environment. This approach allowed new clients of other services to adapt easily to API changes while preserving the functional logic of their applications.


## Evidence vs. Emotions vs. Stubbornness
It would be easy to say that the things we did above is the recipe for success in all organisations. While each of these practices yielded benefits for us, they also carried drawbacks, and not all of them are universally applicable. Moreover, how can we know if any of these practices truly contributed to our success?

In the book "Accelerate" (2018) by Nicole Forsgren and her coauthors, they delve into the evidence supporting many of the practices we implemented. High-performing companies were found to employ practices such as trunk-based development, continuous deployment, test automation, and lightweight change approvals.

I won't hide the fact that I enjoyed the ways of working in my team, and that might taint my view of the practices.

Developers are stubborn animals, at least I am, and at least three of my previous team mates were. At times we would have heated arguments over small stuff. In a space where there is usually more than one solution to a problem, all solutions are equal until one has won on merit after discussions and/or experimentation.


## Experimentation and empirical improvement

I'll leave this for another day. But I am convinced that the correct term for software development is software engineering and that bears more than syntactical meaning.


## Mountains in all villages ["Det finns berg i alla byar"]
While my time at the organisation I have used as an example above was good, it was no paradise. We had our issues, the team had its issues, the organizations had its issues. The coffee machine was meh. And so on. Still a great experience.


Out.