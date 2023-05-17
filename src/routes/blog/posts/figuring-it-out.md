---
title: Finding things that work in software engineering
date: "2023-05-11"
tags: 
    - programming
    - design-patterns

description: How I think about software engineering and how to get things working smoothly, and why I think about them.
---

## Background.
When I started working professionally with software development, after doing web development freelancing for many years I joined a company that just worked. They had started a cloud journey from their monolithic Java-application running in Oracle WebLogic to Microservices on AWS ECS about a year before I joined.

The company consisted of several development teams displaced across 3 countries each team consisting of between 4-10 people. I joined the team that focused on customer information and the related flows and services. The team was aligned with the business process of customer registration, customer knowledge (KYC) and compliance, for our small part of the platform we were responsible for everything from the frontend to the way things were saved to the databases. 

At this point in time I was green when it comes to both systems design and Java development in general. The closest thing I had done before this was a few web-applications written in PHP to deal with things like GDPR compliance and stock-ordering for small companies. Luckily my team consisted of great mentors.

Our team had at the time of me joining been able to move a small part of the functionality we were responsible for out of the monolith to microservices, the other teams were more or less in the same state. At the end of my employment at the company 2 years later we had only a few modules left running in the monolith and that was mainly because of the payments team not being able to move out of there yet. A few months after I left the team was able to successfully move that code too.

One might think that 3 years for a cloud move is a long time but it really isn't for a system of this scale. The most impressive thing in my mind is however not the fact that we made it, it is the fact that we were able to produce new features requested by the business while simultaneusly working our way out of the monolith. And doing this while other teams were doing major changes to their systems on which we depended and deploying things we worked on to production whenever they were ready for it.

## Standing on the shoulders of unknown.
It wasn't until I stopped working for the company I realised what I had experienced there, and ever since I have been trying to figure out how things were achieved and how to bring this knowledge with me to my new organizations.

Looking back at the things we did I can see that we applied a set of things:

### Rules within the team
- Short lived branches, and never ever deploying a dev-branch to other things than CI.
- Quick PR reviews, no PR was left open more than a few hours without review.
- You are responsible for the things you deploy, and that you know how to rollback if something fails.

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
- Strangler fig pattern when moving functionality out of older systems. Creating the new functionality in a backwards compatible way, usually first just provding an interface on the new micro service that called the old monolith applications. Informing consumers of that API in other teams to use the new API. Look for logs and see that no new calls are made to the monolith and then build up the functionality in the micro service. Move one piece of functionality at a time. No big bang rewrites.
- Always using adapters and ports. When several teams make big changes in all applications in an environment. It must be easy to implement new clients of other services when APIs change, while your applications functional logic still remains the same.


## Evidence vs. Emotions vs. Stubbornness
It would be easy to say that the things we did above is the recipe for success in all organisations, while all of the things mentioned above brought us benefits, from my point of view, every single one of them carries drawbacks and not all of them are applicable in all situations. By the way, how would anyone know that any of the above mentioned things helped us at all?

In the book Accelerate (2018) Nicole Forsgren and coauthors actually go through that there is some evidence behind a lot of the practices we applied. Companies categorized as high performance uses practices like trunk-based development, continous deployment, test automation and lightweight change approvals.

I won't hide the fact that I enjoyed the ways of working in my team, and that might taint my view of the practices.

Developers are stubborn animals, at least I am, and at least three of my previous team mates were. At times we would have heated arguments over small stuff. In a space where there is usually more than one solution to a problem, all solutions are equal until one has won on merit after discussions and/or experimentation.


## Experimentation and empirical improvement

I'll leave this for another day. But I am convinced that the correct term for software development is software engineering and that bears more than syntactical meaning.


## Mountains in all villages ["Det finns berg i alla byar"]
While my time at the organisation I have used as an example above was good, it was no paradise. We had our issues, the team had its issues, the organizations had its issues. The coffee machine was meh. And so on. Still a great experience.


Out.