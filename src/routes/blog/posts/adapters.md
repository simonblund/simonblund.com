---
title: Applying the things that work in software development
date: "2023-05-11"
tags: 
    - programming
    - design-patterns

description: My thoughts on the adapter pattern and how it might be the simplest way to achieve a hexagonal system architecture.
---

## Preface.
When I started working professionally with software development, after doing web development freelancing for many years I joined a company that just worked. They had started a cloud journey from their monolithic Java-application running in Oracle WebLogic to Microservices on AWS ECS about a year before I joined.

The company consisted of several development teams displaced across 3 countries each team consisting of between 4-10 people. I joined the team with a focus on customer information and the related flows and services. The team was aligned with the business process of customer registration, customer knowledge (KYC) and compliance, we were responsible for everything from the frontend to the way things were saved to the databases. 

At this point in time I was green when it comes to systems design and Java development in general. The closest thing I had done before this was a few web-applications written in PHP to deal with things like GDPR compliance and stock-ordering for small companies. Luckily my team consisted of great mentors.

Our team had at the time of me joining been able to move about 1/4 th of the code base functionality we were responsible for out of the monolith to microservices, the other teams were more or less in the same state. At the end of my employment at the company 2 years later we had only a few modules left running in the monolith and that was mainly because of the payments team not being able to move out of there yet. A few months after I left the team was able to successfully move that code too.

One might think that 3 years for a cloud move is a long time but it really isn't for a system of this scale. The most impressive thing in my mind is however not the fact that we made it, it is the fact that we were able to produce new features at a quicker pace than ever before while simultaneusly working our way out of the monolith. And doing this while other teams were doing major changes to their systems as well, deploying things to production at least twice a week.

## Standing on the shoulders of unknown
It wasn't until I stopped working for the company I realised what I had experienced there, and ever since I have been trying to figure out how things were achieved and how to bring this knowledge with me to my new organizations.

Looking back at the things we did I can see that we applied a set of things:
- Short lived branches, and never ever deploying a dev-branch to other things than CI.
- Quick PR reviews, no PR was left open more than a few hours without review.
- CI-pipeline with high coverage unit tests. (can not merge before tests pass)
- Continous deployment. Deployment to production happened daily, it took 15 minutes to do but required approvals by at least two other devs.
- DDD Domain Driven Design. We needed to understand what the business needed and we needed to be able to explain to business people how the system worked.
- Close work with stake holders. Whenever we worked on a new feature for a business function we started off with a meeting where we discussed the features needed and wrote user stories together with them.
- Pull based task assignment. Whenever you as a dev where done with something you asked if someone needed help with something, otherwise you went straight to the backlog and picked the highest up story. No direct assignments unless agreed upon with the team.
- Bi-weekly retrospectives.
- Strangler fig pattern when moving functionality out of older systems. Creating the new functionality in a backwards compatible way, usually first just provding an interface on the new micro service that called the old monolith applications. Informing consumers of that API in other teams to use the new API. Look for logs and see that no new calls are made to the monolith and then build up the functionality in the micro service.
- Always using adapters and ports. When several teams make big changes in all applications in an environment. It must be easy to implement new clients of other services when APIs change, while your applications functional logic still remains the same.
- Blameless post mortems with discussions.


## Realising the effectiveness of these things

## My thoughts on applicability in other organizations

## My thoughts on prioritization of implementation

## My thoughts on things
- the project.
- producing features while doing a major refactoring.
- doing things in a system that has parts that changes daily since everyone else is doing the same thing.
- the demise