
# Priorities
## First Priority
First priority would be getting the pipelines setup, no pipelines, prod deployment isn't possible. Use of security and code scanning tools isn't possible.

## Second Priority
Second priority would be getting everything in SNOW setup for the deployment (groups, users, approval). If theres no pipeline to deploy to prod, and SNOW isn't setup to approve the deployment to prod, then the choice is already made for the project: production ain't gonna happen. But if those two things are setup, then there can be discussions about the very next thing needed to go to prod.

## Third Priority
Third priority would be passing the pipeline scans. If the scans don't pass, release to prod ain't gonna happen. Meeting Manulifes minimum security requirements is non-negotiable.

## Fourth Priority
Fourth priority would be testing of functional and non-functional requirements. Creating unit tests / other forms of automated tests would be preferred. Once testing is completed discussions with project team about what functionality is absolutely required for the release to determine if that functionality can be implemented and tested before the release is possible. If implementation needs cannot be meet in the current time frame, further discussions about a reduced release size or delaying the release could then take place.

Without the first 3 priorities above completed, there is no negotiation possible, nothing is going to production. After the top 3 priorities are in place (#3 is an perpetually on going item) then there is at least the possiblity to properly scope if all functionality can be completed in time, and if not there is more than one possible option in renegotiating the release.

# Hacks
## Auditability: who changed what and when
Logging was added server side to each api avaiable to log the ip address that used the operation. The ip address could then be tied to a user.

# Items to fix
## Hard coded config
URLs in the UI repo should be pulled in from a config file, and hooked up to a config server.

## Unit tests
Unit tests should be filled out for both the UI and API repos.