# Resume: John Coote

## Contact Details

- Phone: 0468585718
- email: mr.john.coote@gmail.com
- LinkedIn: www.linkedin.com/in/mrjohncoote/
- Personal Website: https://johnofsydney.github.io/

### Senior Software Engineer with deep expertise in ruby

I did a career change by attending a coding bootcamp in 2017, since then I have been using Ruby professionally every day. I am particularly well versed in the most typical Ruby Stack; Ruby on Rails, Postgres, Sidekiq, Redis, Github & AWS

## Experience

## Domain (Realhub)

### Senior Software Engineer (Full Stack / Ruby on Rails & React) : December 2024 - present

Realhub is a SaaS product (acquired by Domain in 2022) which provides a suite of tools to Real Estate Agents to conduct their operations such as managing sales campaigns, marketing, connecting digital and print publications.
I am one of the Senior Software Engineers (and brifley Acting Team Lead) for a squad comprising Team Lead, other Ruby on Rails engineers and Product Managers. I provided mentoring to the junior engineers, worked with the product managers to translate business requirements into achievable pieces of work and actively sought out opportunities to bring the technical environment and software development practices more in line with best practices.

Some highlights include:

- Introduced Flipper to decouple deployment from feature activation. Used for both Back End & Front End features
- Introduced parallel testing to reduce local testing from 30+ mins to 5 mins, and the test component of CI from 26 to 13 mins
- Added a separate QA environment to decouple work in test from the main branch, allowing deployments to be smaller in scope, faster and less stressful. (working closely with Devops to realise this project)
- Upgrade main application from Ruby 2.7 to 3.3
- Added AWS EventBridge to Realhub, allowing event driven communication with a new Domain billing system.
- Provide coaching on modern, idiomatic Ruby/Rails practices to team mates, both Junior and Senior.

The heart of the application is a Ruby on Rails Monolith serving a React Front End via API, integrated with customers CRM systems, digital platforms such as Domain and REA Group, Printers, Photographers, Print Media etc.

- PDF Generation (PDFlib), Image Manipulation (ImageMagick)
- Multi-Tenant / Multi Role system based on Pundit with additional custom policies
- API controllers and serialization using standard RoR jbuilder (with Swagger for documentation)
- Async workers handled using Sidekiq (PDFs, Email, Image processing, Reports)
- Integrations with external platforms (Auth0, Domain Group, printing providers)

Stack: Ruby 3.3, Rails 7, React, Postgres, Sidekiq, RSpec, Rubocop, Git, Github, Zsh, New Relic, AWS Infra, Flipper, Pundit.

Software development in a team, is a craft and the overall team velocity is important, thus the skills and aptitude of the entire team is of vital importance. One of the things I’ve been proudest of during my time at Domain has been turning PRs from a yes/no rubber stamp to a place of discussion, learning and the encouragement to write excellent code. _“John has taken a very proactive approach into mentoring and upskilling other team members. He has held multiple brown
bag sessions and is always keen to jump on a call to run through problems."_

## Sherpa

### Senior Software Engineer (Back End / Ruby on Rails) : July 2022 - June 2024

Sherpa provides last mile delivery services utilising a pool of drivers who can select jobs from the app on their own device.
I was the Senior Software Engineer for a squad comprising other Ruby on Rails engineers, mobile developers, QA testers and Product Manager. I provided mentoring to the junior engineers, worked with the product manager to translate business requirements into achievable pieces of work and with the wider technical group to deliver well crafted production ready code.

Some projects include:

- Secure Handover; For high value deliveries, the recipient is required to provide a code in order to take receipt of goods. This feature was developed in order to onboard a specific client who required it.
- Blocks; the ability of drivers to book a specific block of time in advance, rather than wait for ad-hoc jobs to appear in the app. This provides surety in both directions - the drivers know in advance when they will be working, and the customer has confidence that sufficient drivers are available to carry all of their deliveries. This feature was developed to replace a 3rd party booking system, and drove a significant reduction of contact hours to the call centre managing driver operations.
- Courier Delivery By Time; The system had originally been built with a single Deliver By time, which was right for the customer, but not always for the driver. By decoupling to a new attribute for Courier Deliver By Time, we were able to make more jobs attractive to more drivers, and so lift the overall performance of the network.

Sherpa operates a Ruby on Rails Monolith serving iOS and Android driver apps via API, ingesting customer orders by API, both directly and through middleware such as Shippit

- API controllers and serialization using Grape
- internal administration using Active Admin
- Customer facing website, (Slim, Phlex)
- Async workers handled using Sidekiq
- Lifecycle Management / State Machine using AASM
- Service Objects for consistent actions regardless of entry point

Stack: Ruby 3.3, Rails 7, Postgres, Grape, Sidekiq, Active Admin, AASM, RSpec, Rubocop, Git, Github, Zsh, Bugsnag, GCP Infra

Leadership: 2 x direct reports plus informal leadership of squad, comprising 2 x ROR engineers, 1 x PM, 1 x QA and 2 x Mobile Devs (as required)

## Mable
### Software Engineer (Back End / Ruby on Rails) : August 2021 - July 2022

Mable is a Healthcare platform connecting consumers of NDIS and Aged Care services with Service Providers.

At Mable I was one of a team of 30 back end developers working on a Rails monolith. Day to day work is done in a squad consisting of myself plus one each of front end engineer, product manager, designer and a team lead.

My work consisted of adding new features to the application; writing migrations for new database tables and columns, creating and updating service objects and decorators, creating GraphQL queries & mutations etc. I wrote tests for all my code using RSpec.

As well as these days to day coding responsibilities, I also mentored two junior engineers and provide guidance and encouragement on all aspects of software development.

I was an active participant in the development group meetings, offering suggestions for improvement such as new gems or improved process. Where consensus allows introduction of one of my suggestions I have shepherded this through the introductory period. Examples include Rubocop, Strong Migrations, Branch Protection settings  (approval process) and Github Actions (Rubocop and RSPec)

Stack: Ruby 2.7, Rails 6, Postgres, GraphQL, Sidekiq, RSpec, Rubocop, Git, Github, Zsh, Rollbar, AWS Infra

Leadership: mentor to 2 x graduate engineers

## Fat Zebra
### Software Engineer (Ruby on Rails) : December 2018 - July 2021

Fat Zebra is a payment processing facilitator.

At Fat Zebra I was one of a team of 10 developers, using Ruby daily, on a mixture of Rails, Sinatra and AWS microservices. The AWS services I used most frequently were SQS, Lambda, S3,  DynamoDB and State Machines. My work was a mixture of new projects, adding new features to existing applications, as well as maintenance / bug fixing of those existing applications.

I wrote unit tests using Rspec for models, controllers, libraries and lambdas. I am familiar with Factories, Spys, Mocks, Stubs, and enjoy tackling a problem using Test Driven Development where appropriate.

I was an active participant in the peer review process that all code changes go through before being merged into our codebase. I made constructive suggestions as a reviewer, and addressed all changes suggested for my own work. We used Buildkite for CI/CD, and I built one buildkite pipeline.

I was one of the team members on the rolling developer support roster. We used Rollbar for error reporting, aggregating and integration with Slack.
My last major project was one which required liaison with both card schemes and downstream acquirers to certify our gateway to pass new data correctly under a laundry list of conditions.

Stack: Ruby 2.7, Rails 5 & 6, Sinatra, Postgres, Sidekiq, RSpec, Rubocop, AWS (S3, Lambda, Step Functions, SQS, Dynamo DB) Git, Bitbucket, Buildkite, Zsh, Rollbar, AWS Infra

## General Assembly

### Teaching Assistant : February 2018 - September 2018

After completing the Web Development Immersive course at General Assembly I was very pleased to be offered a contract to be Teacher's Assistant for the following two classes.

- Present the daily warm-up exercise
- live code the solution.
- Offer advice to students on all of the course material during labs and projects
- Debugging student's work
- Mark student's homework and projects.
- Merge Pull Requests into main Homework repo.

### Student. October 2017 - January 2018

Full time course covering an introduction to programming, databases and various technologies required for junior full stack developer. During this course I learnt:
How to use terminal, especially Git, as well as Github. How to make a simple web page using HTML, CSS and Javascript. How to make database backed web applications using Postgres, Ruby, Sinatra & Rails, and how to extend these using SCSS, Bootstrap, jQuery and APIs


## Prior to 2018

### Electrical Engineer - Various Companies

Before I did the career change to becoming a Software Engineer I was an Electrical Engineer principally working in the design and manufacture of Electronic Power Conversion equipment for the Telecommunications Industry.
Basically this means lots of large batteries, with charging at one end (mostly AC, but could be renewable; eg PV panels), batteries in the middle to support the electrical load (Exchange, Mobile Base Stations, and of course Data Centres), and power distribution at the other end, (including inverters to distribute AC power if required). Sometimes with diesel generators, particularly for critical remote sites.
This is a business of physical goods, so as well as the design of the circuits and the supporting copper / sheetmetal in the switchboards, there was a good deal of Project Management in order to meet delivery timetables; logistics of upstream manufacturers, component availability, labour availability etc

