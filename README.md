# Automated Deployment
NodeJS automated deployment using ssh

<img width="695" alt="Screen Shot 2020-12-23 at 10 40 03" src="https://user-images.githubusercontent.com/25410979/102956838-797b1b80-450b-11eb-82af-d97270870dc2.png">

## Setup

- go to settings
- choose the secrets menu
- add a variable
   - PRIVATE_KEY
   - HOST
   - USER

each variable according to the value of your server access

Note:
in .github/workflows/deployment.yml you have to adjust the target file directory on the server
