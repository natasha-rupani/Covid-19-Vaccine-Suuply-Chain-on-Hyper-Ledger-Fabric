#                                                     Hyperledger Fabric - COVID-19 Vaccine Supply Chain Solution

   
<p align="center">
  <img width="360" height="200" src="https://github.com/pratikit007/dAppI-Group_Project-COVID-19_Vaccine_Supply_Chain/blob/master/Images/Unperish_logo.PNG">
</p>


This project is submission of  BCDV1012 - dApp I group assignment under the guidance of professors **_Dave Mckay_** & **_Tarun Sharma_** as a part of [Blockchain Development - Fintech](https://www.georgebrown.ca/programs/blockchain-development-program-t175) course at [George Brown College.  
](https://www.georgebrown.ca/)

In brief, it is a Blockchain solution for COVID-19-Vaccine-Supply-Chain, using Hyperledger Fabric, Node.js and ReactJS. For Governance document, please refer to [Documents](https://github.com/pratikit007/dAppI-Group_Project-COVID-19_Vaccine_Supply_Chain/tree/master/Documents) folder.

**Team UnPerish**

   [Pratik Patel](https://github.com/pratikit007) | [Priya Minhas](https://github.com/priyaminhas) | [Natasha Rupani](https://github.com/natasha-rupani) | [Shivam Rattan](https://github.com/shivamrulz) | [Vaibhav Madaan](https://github.com/vaibhav-madaan)

## Project description

Supply Chain use case for Hyperledger Fabric for building a dApp:  UnPerish- COVID-19 Vaccine Supply Chain solution. Project UnPerish helps in tracking and tracing of perishable products like Covid-19 vaccines directly from manufacturing facility to the end consumers as hospitals or pharmacies.

## Requirements

The huge demand for fresh goods has stimulated lots of research on the perishable food supply chain. There is an unprecedented perishable product in the markets today and that's the Covid 19 Vaccine. In the current pandemic time of COVID-19, many pharma companies have made vaccines with lots of research and development, but it has come with some complex logistics challenge. Since these are novel vaccines, tracing of these vaccines is very essential in order to analyse any emerging patterns. For robustness and convenience the vaccines are tracked in batches. This project mainly focuses on below two aspects.


-	Track and trace batch of vaccine from manufacturer to end user
-	Allow respective stakeholder/roles to have needed authorization to track the data

## Architecture in brief

The architecture of UnPerish Hyperledger Fabric supply chain application is as below:

![Alt Text](https://github.com/pratikit007/dAppI-Group_Project-COVID-19_Vaccine_Supply_Chain/blob/master/Images/VC_Tracebility.png)

## State machine diagram

There are several states associated while vaccines go through various hand-offs, hence, changing the states. Below diagram gives brief information how various states are associated with this supply chain.

 ![Alt Text](https://github.com/pratikit007/dAppI-Group_Project-COVID-19_Vaccine_Supply_Chain/blob/master/Images/StateMachineDiagram.jpg)
 
## Transition 

The transitions of the state machine are represented by these functions of the smart contract:

| Scan checkpoints | Asset Status | Traceability information/Comments |
| --- | --- | --- |
| Manufacturing holding area | IN_MANUFACTURING | Type of Vaccine, ingredients used, Supervised by, storage temperature |
| Vaccine Inspection(Sampling) | MANUFACTURER_QCHECK | QC by, Vaccine Sealing and Analysis metrics,Temperature |
| Segmentation | BATCHED | Grouping vaccines in batches for further handling and delivery (track source ID) |
| Packaging | IN_PACKAGE | The transition from batched vaccine to packed batches of vaccine (track weight, type of vaccine, temperature, date of packing) |
| Transport to warehouse | IN_TRANSIT_TO_DC | Weight, temperature, relative humidity, mode of transport, current location |
| Distribution warehousing | IN_STORAGE_DC | Storage location, temperature, humidity, weight, operator ID, date & time |
| Distribution delivery | IN_TRANSIT_TO_HOSPITALS | Weight, temperature, relative humidity, mode of transport, current location |
| Hospital storage | IN_STORAGE_HOSPITALS | Storage location, temperature, humidity, weight, operator ID, date & time  |
| Vaccine administration | VACCINE_ADMINISTERED | Location, customer ID, price, weight, cashier, Dose number |



Below diagram gives generic overview of the transactions with respect to participants and assets in the network. 

 ![Alt Text](https://github.com/pratikit007/dAppI-Group_Project-COVID-19_Vaccine_Supply_Chain/blob/master/Images/Network_Components.png)

   
## State data 

There are various states which complete the overall supply chain process in general as below:


1. **_No Vaccine_**: Start state
2.	**_Vaccine_**: after manufacturing process, _transition_: IN_MANUFACTURING
3.	**_QC Checked Vaccine_**: after manufactured vaccines are sampled and checked for quality control, _transition_: MANUFACTURING_QCCHECK
4.	**_Vaccine Batched_**: after individual vaccines are segmented in batches for ease of transport, tracking and delivery, _transition_: BATCHED
5.	**_Packaged Vaccine_**: Batched vaccines are packed for transport, _transition_: IN_PACKAGE
6.	**_Vaccine arrived at distributor_**: Arrival at distributor, _transition_: IN_TRANSIT_DC
7.	**_Vaccine in storage at distributor_**: Distributor must store the vaccine properly until sent to hospitals, _transition_: IN_STORAGE_DC
8.	**_Vaccine arrived at hospitals_**: Arrival at hospitals, _transition_: IN_TRANSIT_TO_HOSPITALS
9.	**_Vaccine in storage at hospitals_**: Hospitals must store the vaccines properly until administration of dosage, _transition_: IN_STORAGE_HOSPITALS
10. **_Vaccine administered_**: administration of vaccine to customers, _transition_: VACCINE_ADMINISTERED

## Roles 

UnPerish supply chain has number of sub-participants who are participating in the system, however, for brief understanding we have set main roles as below: 

**Manufacturers/Importer** :syringe:: These are the pharmacological partners that are responsible for sourcing the vaccine. Sourcing of the vaccine can be manufacturing if the vaccines are made in-house, and importing if the vaccines are imported from another country. The key value added by the sourcing is the quality check of the vaccine, as well as declaration of suitable parameters that are conducive to the healthy transport of vaccines. IOT powered oracles could be cased in quality checked batches of vaccine, that monitor physical conditions such as temperature, physical orientation, humidity and lighting.

**Logistics** :truck:: Once the vaccines are boxed and cased by sources, they are handed off to the logistical partners, that are responsible for physical transit of the vaccine cases over land, ocean and air. These partners are specially equipped to adhere to the physical conditions specified for the transit, to ensure that vaccines aren’t poisoned.

**Distributors**  🏬: Health Canada stays in touch with local health authorities of it’s major cities and provinces. These local distributors are responsible for keeping an active account of populations living in a metropolis and manage the rollout of vaccines. For example, seniors and front-line workers being the most vulnerable, were vaccinated first as the number of available initial vaccines wasn’t more than the entire population itself. These distributors are also in touch with local hospitals and supply vaccine cases based on allocation.

**HealthCare Providers**  :hospital:: These are the ground zero medical hospitals and individuals medical practitioners and physicians like UHN that have a direct contact with the citizens. HealthCare providers are expected to maintain social distancing and chaos free application of vaccines to the citizens.

**Individuals/Citizens** :family:: The end of the spectrum user of these vaccines are the citizens and individuals. In case of 2 dose vaccine, individuals are supposed to track their second date and get themselves dosed for optimum effectiveness. Health Canada also tracks which people were vaccinated with which dose of the Covid19 vaccine so that any new variant more powerful than the original vaccine can be revisited and revaccinated again.

## Screenshot

**Login:**

 ![Alt Text](https://github.com/pratikit007/dAppI-Group_Project-COVID-19_Vaccine_Supply_Chain/blob/master/Images/login.png)
 
**Vaccine status page:**
 
 ![Alt Text](https://github.com/pratikit007/dAppI-Group_Project-COVID-19_Vaccine_Supply_Chain/blob/master/Images/vaccines.png)



